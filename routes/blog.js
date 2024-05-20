// const router = require("express").Router();
import { Router } from "express";
import { createBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from "../controller/blog.js";
import verifyToken from "../helper/verifyToken.js"

const router = Router()

// get all blogs
router.get("/",verifyToken, getAllBlogs);

// get single blog
router.get("/:id",verifyToken, getSingleBlog);

// create blog
router.post("/",verifyToken, createBlog);

// update blog
router.put("/:id",verifyToken, updateBlog);

// delete blog
router.delete("/:id", deleteBlog);

export default router;