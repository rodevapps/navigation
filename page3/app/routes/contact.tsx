import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Contact" }];
};

const Contact = () => {
  return (
    <h1>Hello Contact</h1>
  );
}

export default Contact;