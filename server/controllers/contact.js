import ContactModel from '../models/contact.js';

// Create CRUD operations for Contact
// Get All Contacts = Same as db.contacts.find()
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find(); 
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }   
}

// Read a contact by ID = Same as db.contacts.findOne({_id: ObjectId("id")})
export const getContactById = async (req, res) => {
    try {
        const contact = await ContactModel.findById(req.params.id); 
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' }); // 404 HTTP status code for not found
        }   
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }  
}

// Create a new contact = Same as db.contacts.insertOne()
export const createContact = async (req, res) => {
    try {
        const newContact = new ContactModel(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact); // 201 HTTP status code for created
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }  
}

// Update a contact by ID = Same as db.contacts.updateOne({_id: ObjectId("id")}, {$set: {...}})
export const updateContact = async (req, res) => {
    try {
        const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id,req.body, {
            new: true
        }); 
        if (!updatedContact){
            return res.status(404).json({ message: 'Contact not found' }); // 404 HTTP status code for not found
        }   
        res.status(200).json(updatedContact);
    } catch (error) {
       res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }   
}

// Delete a contact by ID = Same as db.contacts.deleteOne({_id: ObjectId("id")})
export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' }); // 404 HTTP status code for not found
        }   
        res.status(200).json({ message: 'Contact deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}

// Delete all contacts = Same as db.contacts.deleteMany({})
export const deleteAllContacts = async (req, res) => {
    try {
        await ContactModel.deleteMany({});
        res.status(200).json({ message: 'All contacts deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}