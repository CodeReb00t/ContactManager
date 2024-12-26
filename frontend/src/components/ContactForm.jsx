import { useState, useEffect } from "react";
import { addContact, updateContact } from "../services/contactService";

const ContactForm = ({ fetchContacts, editContact, setEditContact }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (editContact) {
            setName(editContact.name);
            setEmail(editContact.email);
            setPhone(editContact.phone);
        }
    }, [editContact]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editContact) {
                await updateContact(editContact._id, { name, email, phone });
                setEditContact(null);
            } else {
                await addContact({ name, email, phone });
            }
            setName("");
            setEmail("");
            setPhone("");
            setError("");
            fetchContacts(); // Refresh contacts
        } catch (error) {
            setError("Failed to save contact. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
            {error && <p className="text-red-500">{error}</p>}
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
            <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                {editContact ? "Update Contact" : "Add Contact"}
            </button>
        </form>
    );
};

export default ContactForm;
