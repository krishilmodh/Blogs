import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";


// Fields: Title, Description, Blog Category(You can make this as static array),
// Created at(Date), Status(Pending, Approved, Rejected), Slug(Auto Generate
// based on Title and Category
// b. Required Fields(Validation on these fields): Title and Blog Category

const Blog = sequelize.define("Blogs", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   description: {
     type: DataTypes.STRING,
     allowNull: false
   },
   category: {
     type: DataTypes.STRING,
   },
   status: {
     type: DataTypes.INTEGER,
   },
});

// Synchronize the model with the database
// This will create the table if it doesn't exist
(async () => {
    try {
        await Blog.sync();
        console.log("Blog table synchronized with the database");
    } catch (error) {
        console.error("Error synchronizing Blog table:", error);
    }
})();

export default Blog;