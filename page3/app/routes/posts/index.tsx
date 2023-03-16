import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Posts" }];
};

const Index = () => {
  return (
    <h1>Hello Posts</h1>
  );
}
  
export default Index;