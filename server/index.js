import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
import dotenv from 'dotenv/config';
import projectRoutes from './routes/project.js';
import userRoutes from './routes/user.js';
import contactRoutes from './routes/contact.js';
import qualificationRoutes from './routes/qualification.js';
import cors from 'cors';

// Connect to MongoDB
const mongoConnectionString = process.env.MONGODB_URI || 'mongodb+srv://pvyas13_db_user:gq7fkH1wkIxQXQrU@cluster0.iombwxo.mongodb.net/Portfolio?appName=Cluster0';
mongoose.connect(mongoConnectionString);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error: "));
connection.once('open', () => { console.log('Connected to MongoDB'); });




const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS

app.use(morgan('dev'));

//Routes

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/qualifications', qualificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

//app.listen(5000);   
//console.log('Server running at http://localhost:5000/');