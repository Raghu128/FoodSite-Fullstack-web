import jwt from "jsonwebtoken";

function setUser(user) {
  try {
    return jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.SECRET_TOKEN
    );
  } catch (error) {
    return null;
  }
  
}

function getUser(token) {
  if (!token) return null;
  try {
    const user = jwt.verify(token, process.env.SECRET_TOKEN, { expiresIn: '1d' });
    return user;
  } catch (error) {
    return null;
  }
}


export {getUser, setUser};