import QualificationModel from '../models/qualification.js';

// Create CRUD operations for Qualification 
// Get All Qualifications = Same as db.qualifications.find()
export const getAllQualifications = async (req, res) => {
    try {   
        const qualifications = await QualificationModel.find(); 
        res.status(200).json(qualifications);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }   
}

// Read a qualification by ID = Same as db.qualifications.findOne({_id: ObjectId("id")})
export const getQualificationById = async (req, res) => {
    try {
        const qualification = await QualificationModel.findById(req.params.id); 
        if (!qualification) {
            return res.status(404).json({ message: 'Qualification not found' }); // 404 HTTP status code for not found
        }
        res.status(200).json(qualification);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}  

// Create a new qualification = Same as db.qualifications.insertOne()
export const createQualification = async (req, res) => {
    try {
        const newQualification = new QualificationModel(req.body);
        const savedQualification = await newQualification.save();
        res.status(201).json(savedQualification); // 201 HTTP status code for created
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Update a qualification by ID = Same as db.qualifications.updateOne({_id: ObjectId("id")}, {$set: {...}})
export const updateQualification = async (req, res) => {
    try {
        const updatedQualification = await QualificationModel.findByIdAndUpdate(req.params.id,req.body, {
            new: true
        });
        if (!updatedQualification){
            return res.status(404).json({ message: 'Qualification not found' }); // 404 HTTP status code for not found
        }   
        res.status(200).json(updatedQualification);
    } catch (error) {
       res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Delete a qualification by ID = Same as db.qualifications.deleteOne({_id: ObjectId("id")})
export const deleteQualification = async (req, res) => {
    try {
        const deletedQualification = await QualificationModel.findByIdAndDelete(req.params.id); 
        if (!deletedQualification) {
            return res.status(404).json({ message: 'Qualification not found' }); // 404 HTTP status code for not found
        }
        res.status(200).json({ message: 'Qualification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Delete all qualifications = Same as db.qualifications.deleteMany({})
export const deleteAllQualifications = async (req, res) => {
    try {
        await QualificationModel.deleteMany({});
        res.status(200).json({ message: 'All qualifications deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}