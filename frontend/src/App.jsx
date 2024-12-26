import { useState, useEffect } from "react";
import { fetchContacts } from "./services/contactService";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [editContact, setEditContact] = useState(null);

    const getContacts = async () => {
        try {
            const data = await fetchContacts();
            setContacts(data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Manager</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ContactForm
                    fetchContacts={getContacts}
                    editContact={editContact}
                    setEditContact={setEditContact}
                />
                <ContactList
                    contacts={contacts}
                    fetchContacts={getContacts}
                    setEditContact={setEditContact}
                />
            </div>
        </div>
    );
};

export default App;
