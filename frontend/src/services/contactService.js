// src/services/contactService.js

const API_URL = "http://localhost:5000/contacts";

export const fetchContacts = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error("Error fetching contacts:", error);
        throw error;
    }
};

export const addContact = async (contact) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
        });
        return await response.json();
    } catch (error) {
        console.error("Error adding contact:", error);
        throw error;
    }
};
