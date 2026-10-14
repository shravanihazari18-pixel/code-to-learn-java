const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session
app.use(
    session({
        secret: "code-to-learn-java-secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
);

// Frontend
app.use(express.static(path.join(__dirname, "public")));

// Authentication
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
    console.log("=================================");
    console.log("CODE TO LEARN JAVA SERVER STARTED");
    console.log("Server running at http://localhost:3000");
    console.log("=================================");
});