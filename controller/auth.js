import { Op } from "sequelize";
import User from "../models/User.js";
import generatetoken from "../helper/jwt.js";


const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;

        // check if the user is registered or not
        const isUserRegistered = await User.findOne({
            where: {
                email
            },
            raw:true
        })

        if(!isUserRegistered) {
            return res.staus(400).send("User is not registered")
        }

        const {password: extractedPass, ...payload} = isUserRegistered;
        
        // if registered check if the credentials are correct
        if(isUserRegistered?.password != password) {
            return res.status(401).send("Invalid credentials")
        }

        // if user credentials are correct then provide the jwt token
        const token = await generatetoken(payload)
        console.log(token, "token")

        res.cookie("token", token, {
            httpOnly: true
        })

        res.status(200).send("login success")

    } catch (error) {
        
    }
}

const registerUser = async(req, res) => {
    try {
        const {username, password, name} = req.body;

        if(!username || !name || !password) {
            return res.status(400).send({
                message: "Bad Request"
            })
        }

        // create a user
        await User.create({
            name,
            username,
            password
        })

        return res.status(201).send({
            message: "User created successfuly"
        })

    } catch (error) {
        res.status(500).send(error)
    }   
}

export {
    loginUser,
    registerUser
}