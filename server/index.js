import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
import dotenv from 'dotenv/config';
import projectRoutes from './routes/project.js';
import userRoutes from './routes/user.js';
import contactRoutes from './routes/contact.js';
import qualificationRoutes from './routes/qualification.js';

// Connect to MongoDB
mongoose.connect('mongodb+srv://pvyas13_db_user:gq7fkH1wkIxQXQrU@cluster0.iombwxo.mongodb.net/Portfolio?appName=Cluster0');
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error: "));
connection.once('open', () => { console.log('Connected to MongoDB'); });




const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use(morgan('dev'));

//Routes

app.use('/projects', projectRoutes);
app.use('/users', userRoutes);
app.use('/contacts', contactRoutes);
app.use('/qualifications', qualificationRoutes);


app.listen(5000);   

console.log('Server running at http://localhost:5000/');