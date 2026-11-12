import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

// Site-wide settings: hover sound on/off (remembered per visitor).
// Dark mode is planned; the theme button is in place but not active yet.

const SettingsContext = createContext({ soundOn: true, toggleSound() {}, tick() {} });

const VOLUME = 1; // overall loudness of the key click: 0.5 is half as loud

function readSoundPref() {
  try {
    return localStorage.getItem("sound") !== "off";
  } catch (e) {
    return true;
  }
}

export function SettingsProvider({ children }) {
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(null);
  const soundRef = useRef(true);

  // Read the saved preference after the page loads (pages are pre-rendered).
  useEffect(() => {
    const on = readSoundPref();
    soundRef.current = on;
    setSoundOn(on);
  }, []);

  // Browsers only allow sound after the visitor clicks or presses a key,
  // so the audio engine starts on the first interaction.
  useEffect(() => {
    function unlock() {
      const ac = getAudio(audioRef);
      if (ac && ac.state !== "running") ac.resume().catch(() => {});
    }
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  const tick = useCallback(() => {
    if (!soundRef.current) return;
    playClick(audioRef);
  }, []);

  const toggleSound = useCallback(() => {
    const next = !soundRef.current;
    soundRef.current = next;
    setSoundOn(next);
    try {
      localStorage.setItem("sound", next ? "on" : "off");
    } catch (e) {
      /* storage unavailable */
    }
    if (next) {
      const ac = getAudio(audioRef);
      if (ac && ac.state !== "running") ac.resume().then(() => playClick(audioRef)).catch(() => {});
      else playClick(audioRef);
    }
  }, []);

  return <SettingsContext.Provider value={{ soundOn, toggleSound, tick }}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  return useContext(SettingsContext);
}

// Shorthand for hover handlers: <a {...useTick()}>
export function useTick() {
  const { tick } = useSettings();
  return { onMouseEnter: tick };
}

function getAudio(ref) {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (!ref.current) ref.current = new AC();
  return ref.current;
}

// A short, soft keyboard "clack": a filtered noise burst plus a low thock.
function playClick(ref) {
  try {
    const ac = getAudio(ref);
    if (!ac || ac.state !== "running") return;
    const t = ac.currentTime;

    const len = Math.floor(ac.sampleRate * 0.025);
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 5);
    const noise = ac.createBufferSource();
    noise.buffer = buf;
    const band = ac.createBiquadFilter();
    band.type = "bandpass";
    band.frequency.value = 2400 + Math.random() * 500;
    band.Q.value = 1.4;
    const noiseGain = ac.createGain();
    noiseGain.gain.value = 0.1 * VOLUME;
    noise.connect(band);
    band.connect(noiseGain);
    noiseGain.connect(ac.destination);

    const osc = ac.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(190, t);
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.05);
    const oscGain = ac.createGain();
    oscGain.gain.setValueAtTime(0.07 * VOLUME, t);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
    osc.connect(oscGain);
    oscGain.connect(ac.destination);

    noise.start(t);
    osc.start(t);
    osc.stop(t + 0.07);
  } catch (e) {
    /* sound is optional */
  }
}
