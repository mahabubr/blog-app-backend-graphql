import jwt, { Secret } from "jsonwebtoken";

export const jwtHelper = async (
  payload: { userId: number },
  secret: Secret
) => {
  const token = jwt.sign(payload, secret as string, {
    expiresIn: "1d",
  });

  return token;
};
