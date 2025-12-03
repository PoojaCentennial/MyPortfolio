import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import projectRoutes from './routes/project.js';
import userRoutes from './routes/user.js';
import contactRoutes from './routes/contact.js';
import qualificationRoutes from './routes/qualification.js';
import cors from 'cors';

// Get the directory of the current file (for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file - with explicit path
const envPath = path.resolve(__dirname, '.env');
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error loading .env file:', result.error);
}

// Only log in development
if (process.env.NODE_ENV !== 'production') {
  console.log('Environment variables:');
  console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'LOADED' : 'NOT LOADED');
  console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'LOADED' : 'NOT LOADED');
  console.log('PORT:', process.env.PORT || 'NOT SET');
}

// Connect to MongoDB
const mongoConnectionString = process.env.MONGODB_URI || 'mongodb+srv://pvyas13_db_user:gq7fkH1wkIxQXQrU@cluster0.iombwxo.mongodb.net/Portfolio?appName=Cluster0';
mongoose.connect(mongoConnectionString);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error: "));
connection.once('open', () => { console.log('Connected to MongoDB'); });




const app = express();

// CORS configuration for production
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors(corsOptions)); // Enable CORS with options

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