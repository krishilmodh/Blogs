import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    try {
    console.log("Verify token")

    const { token } = req.cookies;
    const secretKey = process.env.SECRET_KEY;

    console.log("Verify token",token)
    if(!token) {
        return res.status(401).send("Invalid credentials");
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if(err) {
            return res.status(500).send("Error while verifying token");
        }

        req.user = decoded;
        next()
    })

    } catch (error) {
        return res.status(500).send("Internal server error")
    }
}

export default verifyToken;