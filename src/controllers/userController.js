import { generateAuthToken } from "../middlewares/auth";
import User from "../models/userModel";

export const inscription = async (req, res) => {
  try {
    const newUser = await new User();
    newUser.email = req.body.email;
    newUser.password = await newUser.crypto(req.body.password);
    newUser.save();
    console.log("coucou");
    const token = generateAuthToken(newUser);
    res.json({ newUser, token });
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    const verify = await user.verify(password, user.password);
    if (!verify) {
      const error = new Error("Invalid password");
      throw error;
    }
    const token = generateAuthToken(user);
    res.json({ message: "Vous êtes connecté", token });
  } catch (error) {
    console.error(error);
  }
};
