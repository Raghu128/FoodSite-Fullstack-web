import jwt from "jsonwebtoken";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.SECRET_TOKEN
  );
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, process.env.SECRET_TOKEN, { expiresIn: '1d' });
}


export {getUser, setUser};