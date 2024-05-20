import jwt from "jsonwebtoken"; // Importing jsonwebtoken for token generation

// Function to generate JWT token
const generateToken = (payload) => {
    try {
        // Secret key for JWT token generation
        const secretKey = process.env.SECRET_KEY;

        // Generate JWT token using payload and secret key
        const token = jwt.sign(payload, secretKey);

        // Return the generated token
        return token;
    } catch (error) {
        // If any error occurs, throw an error
        throw new Error("Could not generate token");
    }
};

// Exporting the generateToken function
export default generateToken;