const express = require('express');
const bodyParser = require('body-parser');
const {connectDB} = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
connectDB();

app.use('/api', userRoutes);
app.use('/assignments', assignmentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
