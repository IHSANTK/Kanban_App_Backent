require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5002;

console.log('MongoDB URI:', process.env.MONGO_CONNECT); 
mongoose.connect(process.env.MONGO_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const corsOptions = {
  origin: 'https://kanban-app-frontent.onrender.com',
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
