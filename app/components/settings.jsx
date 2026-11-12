import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

// Site-wide settings, remembered per visitor:
// - theme: "light" (default) or "dark"
// - sound: the key click when hovering links

const SettingsContext = createContext({ soundOn: true, toggleSound() {}, tick() {}, theme: "light", toggleTheme() {} });

const VOLUME = .5; // overall loudness of the key click: 0.5 is half as loud

function readSoundPref() {
  try {
    return localStorage.getItem("sound") !== "off";
  } catch (e) {
    return true;
  }
}

export function SettingsProvider({ children }) {
  const [soundOn, setSoundOn] = useState(true);
  const [theme, setTheme] = useState("light");
  const audioRef = useRef(null);
  const soundRef = useRef(true);

  // Read the saved preference after the page loads (pages are pre-rendered).
  useEffect(() => {
    const on = readSoundPref();
    soundRef.current = on;
    setSoundOn(on);
    // The theme was already applied before the page painted (see root.jsx).
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable */
      }
      return next;
    });
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

  return <SettingsContext.Provider value={{ soundOn, toggleSound, tick, theme, toggleTheme }}>{children}</SettingsContext.Provider>;
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

// Plays public/sounds/click.mp3, loading it once and reusing it.
let clickBuffer = null;

async function loadClick(ac) {
  if (clickBuffer) return clickBuffer;
  const res = await fetch("/sounds/click.mp3");
  clickBuffer = await ac.decodeAudioData(await res.arrayBuffer());
  return clickBuffer;
}

function playClick(ref) {
  const ac = getAudio(ref);
  if (!ac || ac.state !== "running") return;
  loadClick(ac)
    .then((buffer) => {
      const src = ac.createBufferSource();
      src.buffer = buffer;
      src.playbackRate.value = 0.95 + Math.random() * 0.1; // tiny pitch variation
      const gain = ac.createGain();
      gain.gain.value = 0.4 * VOLUME;
      src.connect(gain);
      gain.connect(ac.destination);
      src.start();
    })
    .catch(() => {});
}