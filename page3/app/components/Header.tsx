import type { MetaFunction } from "@remix-run/node";
import { Links, Meta } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

const Header = () => {
  return (
    <head>
      <Meta />
      <Links />
    </head>
  );
}
  
export default Header;