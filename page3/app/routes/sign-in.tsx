import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Sign In" }];
};

const SignIn = () => {
  return (
    <h1>Hello Sign In</h1>
  );
}

export default SignIn;