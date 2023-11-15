import { authRevolvers } from "./auth";
import { postResolvers } from "./post";

export const Mutation = {
  ...authRevolvers,
  ...postResolvers,
};
