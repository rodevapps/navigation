import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home" }];
};

const Index = () => {
  return (
    <h1>Hello Home</h1>
  );
}

export default Index;