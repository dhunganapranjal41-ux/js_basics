import express from "express";

const app = express();
const PORT = 4140;

app.use(express.json());

// Home
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

// About
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

// Contact
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

// Login
app.get("/login", (req, res) => {
    res.send("<h1>Login Page</h1>");
});

// Register
app.get("/register", (req, res) => {
    res.send("<h1>Register Page</h1>");
});

// Users
app.get("/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Pranjal",
            email: "pranjal@gmail.com"
        },
        {
            id: 2,
            name: "Ram",
            email: "ram@gmail.com"
        }
    ]);
});

// User By ID
app.get("/users/:id", (req, res) => {
    res.json({
        id: req.params.id,
        message: "User Found"
    });
});

// Products
app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },
        {
            id: 2,
            name: "Mobile",
            price: 25000
        }
    ]);
});

// Product By ID
app.get("/products/:id", (req, res) => {
    res.json({
        id: req.params.id,
        message: "Product Found"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


