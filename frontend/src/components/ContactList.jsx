import { FaEdit, FaTrash } from "react-icons/fa";

const ContactList = ({ contacts, fetchContacts, setEditContact }) => {
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/delete-contact/${id}`, {
                method: "DELETE",
            });
            fetchContacts(); // Refresh contacts
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">All Contacts</h2>
            {contacts.length === 0 ? (
                <p className="text-gray-500">No contacts available.</p>
            ) : (
                <ul className="list-none">
                    {contacts.map((contact) => (
                        <li
                            key={contact._id}
                            className="flex items-center justify-between p-2 border-b"
                        >
                            <div>
                                <p className="font-bold">{contact.name}</p>
                                <p>{contact.email}</p>
                                <p>{contact.phone}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setEditContact(contact)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(contact._id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContactList;
