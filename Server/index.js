require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const validator = require('validator');
const DigiExpressModel = require("./models/DigiExpress");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

db.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log("Server is running on port 3001");
    });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    DigiExpressModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        res.json("success");
                    } else {
                        res.json("password is incorrect");
                    }
                });
            } else {
                res.json("email not registered");
            }
        })
        .catch(err => res.json(err));
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!/^[a-zA-Z\s'-]+$/.test(name)) {
            return res.status(400).json({ error: 'Invalid name format' });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }
        if (!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })) {
            return res.status(400).json({ error: 'Invalid password format' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new DigiExpressModel({ name, email, password: hashedPassword });
        await newUser.validate();
        const registeredUser = await newUser.save();
        res.json(registeredUser);
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            const validationErrors = {};
            for (const field in err.errors) {
                validationErrors[field] = err.errors[field].message;
            }
            res.status(400).json({ validationErrors });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});