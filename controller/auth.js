import { Op } from "sequelize"; // Importing sequelize operator
import User from "../models/User.js"; // Importing User model
import generatetoken from "../helper/jwt.js"; // Importing JWT token generator helper

// loginUser function to handle user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; // Extracting email and password from request body

    // Checking if the user is registered or not
    const isUserRegistered = await User.findOne({
      where: {
        email,
      },
      raw: true,
    });

    // If user is not registered, return 400 status
    if (!isUserRegistered) {
      return res.staus(400).send("User is not registered");
    }

    // Extracting password and other details from user data
    const { password: extractedPass, ...payload } = isUserRegistered;

    // If registered, check if the credentials are correct
    if (isUserRegistered?.password != password) {
      return res.status(401).send("Invalid credentials");
    }

    // If user credentials are correct then provide the JWT token
    const token = await generatetoken(payload);
    console.log(token, "token");
    res.cookie("token", token, {
      httpOnly: true,
    });

    // Send success status and message
    res.status(200).send("login success");
  } catch (error) {}

};

// registerUser function to handle user registration
const registerUser = async (req, res) => {
  try {
    const { username, password, name } = req.body; // Extracting username, password and name from request body

    // If any of the required fields are missing, return 400 status
    if (!username || !name || !password) {
      return res.status(400).send({
        message: "Bad Request",
      });
    }

    // Create a new user
    await User.create({
      name,
      username,
      password,
    });

    // Send success status and message
    return res.status(201).send({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).send(error); // Send error status and message in case of any error
  }
};

// Exporting loginUser and registerUser functions
export { loginUser, registerUser };