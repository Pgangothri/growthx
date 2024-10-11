const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'Surya@2009';

exports.register = async (req, res) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
        return res.status(400).json({ error: 'provide all required fields' });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'Already registered, go to login' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, role });
        await newUser.save();
        res.json({ message: 'User successfully registered' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to register' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: 'User not found' });
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' });

        // Include username in the JWT token
        const token = jwt.sign({ _id: user._id, username: user.username, role: user.role }, JWT_SECRET);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Failed to login' });
    }
};
