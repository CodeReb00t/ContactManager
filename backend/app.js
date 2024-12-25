const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('../backend/models/contacts');

const app=express()
const port=5000
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://localhost/contact-manager')
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/contacts',(req,res)=>{
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error '+err));
});

app.post('/add-contact',(req,res)=>{
    const {name, email, phone} = req.body;
    const newContact=new Contact({name,email,phone});
    newContact.save()
        .then(()=>res.json('Contact added'))
        .catch(err => res.status(400).json('Error '+err));
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})
