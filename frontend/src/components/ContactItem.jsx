// src/components/ContactItem.jsx


const ContactItem = ({ contact }) => {
    return (
        <li className="flex justify-between items-center p-3 bg-gray-100 rounded shadow-sm">
            <div>
                <p className="font-medium text-gray-800">{contact.name}</p>
                <p className="text-gray-600 text-sm">{contact.email}</p>
                <p className="text-gray-600 text-sm">{contact.phone}</p>
            </div>
        </li>
    );
};

export default ContactItem;
