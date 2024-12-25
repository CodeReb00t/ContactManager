// src/components/ContactList.jsx

import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {
    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">All Contacts</h2>
            {contacts.length === 0 ? (
                <p className="text-gray-500">No contacts available.</p>
            ) : (
                <ul className="space-y-2">
                    {contacts.map((contact) => (
                        <ContactItem key={contact._id} contact={contact} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContactList;
