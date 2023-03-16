import { LiveReload, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <html lang="en">
      <Header />

      <body>
        <Nav />

        <Outlet />

        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default App;