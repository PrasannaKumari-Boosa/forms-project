const express = require("express");
const mongoose = require('mongoose')
const User = require("./models/users");
const cors = require('cors');
const app = express();

const router = express.Router();
const JWT_SECRET = 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByYXNhbm5hQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiJwcmFzYW5uYSJ9.pXPe207tItqwtnbPqXEO9B7GgcCylIN88FMhYD1jYLg'; // Use a more secure secret in production


mongoose.connect("mongodb+srv://prasannakumaridev:tRRp6V9BhNw3abY2@cluster1.9lcqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
.then( () => {
    console.log("Connected to database!");
})
.catch( () => {
    console.log("Connection failed");
})

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

//route
app.get('/', (req, res) => {
    res.send('get API is working');
});

app.post("/", (req, res) => {
    res.send('post API is working');
});

app.put("/", (req, res) => {
    res.send('put API is working');
});

app.delete("/", (req, res) => {
    res.send('delete API is working');
});

app.post('/register', async (req, res) => {
    res.send("router has registered")
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ name, email, password });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Generate JWT token
        const token = jwt.sign({ user: { id: user.id } }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login user
app.post('/login', async (req, res) => {
    res.send("Login APi is Working")
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ user: { id: user.id } }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = app;


