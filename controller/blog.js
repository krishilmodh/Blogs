import Blog from "../models/blog.js";

const getAllBlogs = async(req, res) => {
    try {
        console.log("Get all blogs")
        const blogs = await Blog.findAll();

        res.status(200).send(blogs)

    } catch (error) {
        res.status(500).send(error)
    }
}
const getSingleBlog = async(req, res) => {
    try {

        const { id } = req.params
        
        const blog = await Blog.findAll({
            where: {
                id
            }
        });

        return res.status(200).send(blog)
    } catch (error) {
        return res.status(500).send(error)
    }
}
const createBlog = async(req, res) => {
    try {
        const {title, description, category, status} = req.body;

        if(!title) {
            return res.status(400).send("Title is required")
        }

        await Blog.create({
            title,
            description,
            category,
            status
        })

        return res.status(201).send("Blog created successfully")

    } catch (error) {
        return res.status(500).send(error)
    }
}
const updateBlog = async(req, res) => {
    try {
        const { id } = req.params;
        const requestBody = req.body

        await Blog.update(requestBody, {
            where: {
                id
            }
        }) 
        
        return res.status(200).send("Blog updated succesfully")
    } catch (error) {
        return res.status(500).send(error)
    }
}
const deleteBlog = async(req, res) => {
    try {
        const {id} = req.params;

        await Blog.destroy({
            where: {
                id
            }
        });

        return res.status(204).send(); // Send a 204 status code
    } catch (error) {
        return res.status(500).send(error);
    }
};
export {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog
}