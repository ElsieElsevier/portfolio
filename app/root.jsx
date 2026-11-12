import { isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { SettingsProvider } from "./components/settings.jsx";

// Fonts are bundled with the site, so no requests go to Google Fonts.
import inter400 from "@fontsource/inter/400.css?url";
import inter500 from "@fontsource/inter/500.css?url";
import inter600 from "@fontsource/inter/600.css?url";
import grotesk500 from "@fontsource/space-grotesk/500.css?url";
import grotesk600 from "@fontsource/space-grotesk/600.css?url";
import grotesk700 from "@fontsource/space-grotesk/700.css?url";
import jersey from "@fontsource/jersey-10/400.css?url";
import tokens from "./styles/tokens.css?url";
import styles from "./styles/app.css?url";

export const links = () => [
  ...[inter400, inter500, inter600, grotesk500, grotesk600, grotesk700, jersey, tokens, styles].map((href) => ({
    rel: "stylesheet",
    href,
  })),
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ece8de" />
        <Meta />
        <Links />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <Outlet />
    </SettingsProvider>
  );
}

export function ErrorBoundary({ error }) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main id="main" className="page">
      <section className="not-found key-card key-card--lg">
        <span className="label">{notFound ? "404" : "Error"}</span>
        <h1>{notFound ? "That page doesn't exist" : "Something went wrong"}</h1>
        <p>Head back to the hub to find your way around.</p>
        <Link className="btn btn--blue" to="/">
          Back to the hub
        </Link>
      </section>
    </main>
  );
}
