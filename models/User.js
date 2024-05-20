import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const User = sequelize.define("Users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {timestamps:true});

// Synchronize the model with the database
// This will create the table if it doesn't exist
(async () => {
    try {
        await User.sync();
        console.log("User table synchronized with the database");
    } catch (error) {
        console.error("Error synchronizing User table:", error);
    }
})();

export default User;
