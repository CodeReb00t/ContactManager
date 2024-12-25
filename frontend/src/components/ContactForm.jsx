// src/components/ContactForm.jsx

import React, { useState } from "react";
import { addContact } from "../services/contactService";

const ContactForm = ({ fetchContacts }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addContact({ name, email });
            setName("");
            setEmail("");
            fetchContacts(); // Refresh the list
        } catch (error) {
            console.error("Error submitting contact:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;
