import Blog from "../models/blog.js"; // Importing Blog model

// Function to get all blogs
const getAllBlogs = async(req, res) => {
    try {
        const blogs = await Blog.findAll(); // Fetch all blogs

        res.status(200).send(blogs) // Send blogs as response

    } catch (error) {
        res.status(500).send(error) // Send error as response
    }
}

// Function to get a single blog by id
const getSingleBlog = async(req, res) => {
    try {
        const { id } = req.params // Extract blog id from request parameters
        
        const blog = await Blog.findAll({
            where: {
                id
            }
        }); // Fetch blog by id

        return res.status(200).send(blog) // Send blog as response
    } catch (error) {
        return res.status(500).send(error) // Send error as response
    }
}

// Function to create a new blog
const createBlog = async(req, res) => {
    try {
        const {title, description, category, status} = req.body; // Extract blog details from request body

        if(!title) {
            return res.status(400).send("Title is required") // If title is not provided, send error
        }

        await Blog.create({
            title,
            description,
            category,
            status
        }) // Create new blog

        return res.status(201).send("Blog created successfully") // Send success message as response

    } catch (error) {
        return res.status(500).send(error) // Send error as response
    }
}

// Function to update a blog
const updateBlog = async(req, res) => {
    try {
        const { id } = req.params; // Extract blog id from request parameters
        const requestBody = req.body // Extract updated blog details from request body

        await Blog.update(requestBody, {
            where: {
                id
            }
        }) // Update blog
        
        return res.status(200).send("Blog updated succesfully") // Send success message as response
    } catch (error) {
        return res.status(500).send(error) // Send error as response
    }
}

// Function to delete a blog
const deleteBlog = async(req, res) => {
    try {
        const {id} = req.params; // Extract blog id from request parameters

        await Blog.destroy({
            where: {
                id
            }
        }); // Delete blog

        return res.status(204).send(); // Send success status code
    } catch (error) {
        return res.status(500).send(error); // Send error as response
    }
};

// Exporting all the functions
export {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog
}