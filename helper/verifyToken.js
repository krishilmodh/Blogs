import jwt from "jsonwebtoken"; // Importing jsonwebtoken for token verification

// Middleware function to verify the token
const verifyToken = (req, res, next) => {
    try {
    // Extracting token from cookies
    const { token } = req.cookies;

    // Secret key for JWT token verification
    const secretKey = process.env.SECRET_KEY;

    // If token is not present, return 401 status
    if(!token) {
        return res.status(401).send("Invalid credentials");
    }

    // Verify the JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
        // If error occurs while verifying, return 500 status
        if(err) {
            return res.status(500).send("Error while verifying token");
        }

        // If token is verified, add decoded data to request object
        req.user = decoded;

        // Proceed to next middleware function
        next()
    })

    } catch (error) {
        // If any error occurs, return 500 status
        return res.status(500).send("Internal server error")
    }
}

// Exporting the verifyToken middleware function
export default verifyToken;