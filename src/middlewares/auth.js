import jwt from "jsonwebtoken";
import "dotenv/config"

export const auth = (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  const token = tokenHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied, token missing." });
  }

  try {
    const decoded = jwt.verify(token.process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide." });
  }
};

export const generateAuthToken = (user) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });
  return token;
};
