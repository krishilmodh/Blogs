import jwt from "jsonwebtoken";

const generateToken = (payload) => {
    try {
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign(payload, secretKey);
        return token;
    } catch (error) {
        throw new Error("Could not generate token");
    }
};

export default generateToken;
