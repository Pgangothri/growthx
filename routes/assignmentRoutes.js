const express = require('express');
const { uploadAssignment, getAdmins, getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/assignmentController');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

router.post('/upload', authenticateJWT, uploadAssignment);
router.get('/admins', authenticateJWT, getAdmins);
router.get('/', authenticateJWT, getAssignments);
router.post('/:id/accept', authenticateJWT, acceptAssignment);
router.post('/:id/reject', authenticateJWT, rejectAssignment);

module.exports = router;
