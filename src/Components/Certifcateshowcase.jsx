import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// Sample certificate images
import Certificate1Image from './istockphoto-1386446426-612x612.jpg';
import Certificate2Image from './istockphoto-1386446426-612x612.jpg';
import Certificate3Image from './istockphoto-1386446426-612x612.jpg';

Modal.setAppElement('#root'); // Set the root element for accessibility

function App() {
  const [certificates, setCertificates] = useState([
    { id: 1, name: 'Certificate 1', date: '2022-01-01', event: 'Event A', blockchainLink: 'https://example.com/blockchain/1', image: Certificate1Image },
    { id: 2, name: 'Certificate 2', date: '2022-02-01', event: 'Event B', blockchainLink: 'https://example.com/blockchain/2', image: Certificate2Image },
    { id: 3, name: 'Certificate 3', date: '2022-03-01', event: 'Event C', blockchainLink: 'https://example.com/blockchain/3', image: Certificate3Image },
    { id: 1, name: 'Certificate 1', date: '2022-01-01', event: 'Event A', blockchainLink: 'https://example.com/blockchain/1', image: Certificate1Image },
    { id: 2, name: 'Certificate 2', date: '2022-02-01', event: 'Event B', blockchainLink: 'https://example.com/blockchain/2', image: Certificate2Image },
    { id: 3, name: 'Certificate 3', date: '2022-03-01', event: 'Event C', blockchainLink: 'https://example.com/blockchain/3', image: Certificate3Image },
    { id: 1, name: 'Certificate 1', date: '2022-01-01', event: 'Event A', blockchainLink: 'https://example.com/blockchain/1', image: Certificate1Image },
    { id: 2, name: 'Certificate 2', date: '2022-02-01', event: 'Event B', blockchainLink: 'https://example.com/blockchain/2', image: Certificate2Image },
    { id: 3, name: 'Certificate 3', date: '2022-03-01', event: 'Event C', blockchainLink: 'https://example.com/blockchain/3', image: Certificate3Image },
  ]);

  const [previewCertificate, setPreviewCertificate] = useState(null);

  const openPreview = (certificate) => {
    setPreviewCertificate(certificate);
  };

  const closePreview = () => {
    setPreviewCertificate(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Digital Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} onPreview={openPreview} />
        ))}
      </div>
      <Modal
        isOpen={previewCertificate !== null}
        onRequestClose={closePreview}
        className="modal fixed inset-0 mx-auto flex items-center justify-center" // Keep the popup style unchanged
        overlayClassName="overlay"
      >
        {previewCertificate && (
          <div className="bg-white p-8 rounded-lg max-w-screen-md w-full">
            <h2 className="text-2xl font-bold mb-4">{previewCertificate.name}</h2>
            <img src={previewCertificate.image} alt={previewCertificate.name} className="mb-4 rounded-lg w-full" />
            <p className="text-gray-700 mb-4">
              <strong>Date:</strong> {previewCertificate.date}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Event:</strong> {previewCertificate.event}
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={closePreview}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
              <a
                href={previewCertificate.image} // Replace with actual download link
                download={`${previewCertificate.name}.jpg`}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function CertificateCard({ certificate, onPreview }) {
  const shareCertificate = () => {
    console.log('Sharing certificate:', certificate);
  };

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{certificate.name}</div>
        <p className="text-gray-700 text-base">
          <strong>Date:</strong> {certificate.date}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Event:</strong> {certificate.event}
        </p>
        <img
          src={certificate.image}
          alt={certificate.name}
          className="mt-4 rounded-lg w-full cursor-pointer"
          onClick={() => onPreview(certificate)}
        />
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => onPreview(certificate)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
          Preview
        </button>
        <button
          onClick={shareCertificate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <FontAwesomeIcon icon={faShare} className="mr-2" />
          Share
        </button>
        <a
          href={certificate.blockchainLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          View Blockchain Certificate
        </a>
      </div>
    </div>
  );
}

export default App;
