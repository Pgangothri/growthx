const Assignment = require('../models/Assignment');
const User=require('../models/User')

exports.uploadAssignment = async (req, res) => {
    if (req.user.role !== 'user') return res.status(403).json({ error: 'Access denied' });
    const { task, admin } = req.body;
    const newAssignment = new Assignment({ userId: req.user._id, task, admin });
    await newAssignment.save();
    res.json({ message: 'Assignment uploaded successfully' });
};

exports.getAdmins = async (req, res) => {
    const admins = await User.find({ role: 'admin' }).select('username');
    res.json(admins);
};

exports.getAssignments = async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Access denied' });
    }

    try {
        const assignments = await Assignment.find({ admin: req.user.username });
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch assignments' });
    }
};

exports.acceptAssignment = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
    try {
        await Assignment.findByIdAndUpdate(req.params.id, { status: 'accepted' });
        res.json({ message: 'Assignment accepted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to accept assignment' });
    }
};

exports.rejectAssignment = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
    try {
        await Assignment.findByIdAndUpdate(req.params.id, { status: 'rejected' });
        res.json({ message: 'Assignment rejected' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to reject assignment' });
    }
};
