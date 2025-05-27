import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const contacts = {
    phone: '+39 3478195020',
    email: 'aunpassodallagoauronzo@gmail.com',
    whatsapp: '+39 3478195020', // WhatsApp number
    address: 'Via Riva da Corte 5, Auronzo (BL), Italy',
    Google: 'TODO'

  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contacts.address)}`;

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Contacts & Booking</h2>
            <div className="flex items-center mb-2">
              <span className="mr-2">{contacts.phone}</span>
              <a href={`tel:${contacts.phone}`} className="text-blue-400 hover:text-blue-500">
                <FaPhone className="text-2xl mr-2" />
              </a>
              <a href={`https://wa.me/${contacts.whatsapp}`} className="text-blue-400 hover:text-blue-500">
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
            <div className="flex items-center mb-2">
              <a href={`mailto:${contacts.email}`} className="text-blue-400 hover:text-blue-500 flex items-center">
                <FaEnvelope className="text-2xl mr-2" />
                {contacts.email}
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <div className="flex items-center">
              <span className="mr-2">{contacts.address}</span>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                <FaMapMarkerAlt className="text-2xl" />
              </a>
            </div>
          </div>
          {/*<div className="flex items-center">*/}
          {/*<p className="mb-0">&copy; 2024 Le Renne Apartment. All Rights Reserved.</p>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
