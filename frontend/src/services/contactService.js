// src/services/contactService.js

const API_URL = "http://localhost:5000/contacts";
export const API_ROUTES = {
    GET_CONTACTS: "/contacts",
    ADD_CONTACT: "/add-contact",
    UPDATE_CONTACT: "/edit-contact/:id",
    DELETE_CONTACT: "/delete-contact/:id",
};


export const fetchContacts = async () => {
    try {
        const response = await fetch(API_ROUTES.GET_CONTACTS);
        if (!response.ok) {
            throw new Error("Failed to fetch contacts");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching contacts:", error);
        throw error;
    }
}

export const addContact = async (contact) => {
    try {
        const response = await fetch('http://localhost:5000/add-contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
        });
        if (!response.ok) {
            throw new Error("Failed to add contact");
        }
        return await response.json();
    } catch (error) {
        console.error("Error adding contact:", error);
        throw error;
    }
};
export const updateContact = async (id, contact) => {
    try {
        const response = await fetch(`http://localhost:5000/edit-contact/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
        });
        if (!response.ok) {
            throw new Error("Failed to update contact");
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating contact:", error);
        throw error;
    }
};

