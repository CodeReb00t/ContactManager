const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('../backend/models/contacts');

const app=express()
const port=5000
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/contact-manager')
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Get all contacts
app.get("/contacts", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch contacts" });
    }
});

app.post("/add-contact", async (req, res) => {
    try {
        // console.log('Request Body:', req.body);
        const { name, email, phone } = req.body;
        const newContact = new Contact({ name, email, phone });
        await newContact.save();
        res.status(201).json({ message: "Contact added successfully" });
    } catch (err) {
        res.status(400).json({ error: "Failed to add contact" });
    }
});
app.put('/edit-contact/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    Contact.findByIdAndUpdate(id, { name, email, phone }, { new: true })
        .then(updatedContact => res.json(updatedContact))
        .catch(err => res.status(400).json('Error ' + err));
});
app.delete('/delete-contact/:id', (req, res) => {
    const { id } = req.params;
    Contact.findByIdAndDelete(id)
        .then(() => res.json('Contact deleted'))
        .catch(err => res.status(400).json('Error ' + err));
});


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/contacts`);
})
