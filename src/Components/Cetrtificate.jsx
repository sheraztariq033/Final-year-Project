import React from 'react';
import QRCode from 'qrcode.react';

const CertificateOfParticipation = () => {
  // Participant details
  const participantName = "John Doe";
  const fatherName = "Michael Miller";

  // Dummy event details
  const eventDescription = "This certificate is awarded to recognize participation in our Community Clean-up Campaign.";
  const eventDetails = "Community Clean-up Campaign";
  const participationDate = "April 25, 2024";

  // Dummy link for QR code
  const qrCodeLink = "https://example.com";

  return (
    <div className="container mx-auto px-4 py-8" style={{ minWidth: '11in', minHeight: '8.5in', overflow: 'hidden' }}>
      <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-lg shadow-lg p-8 flex flex-col md:flex-row w-full h-full">
        {/* Harmony Hub logo */}
        <div className="flex-none mb-8 md:mb-0 md:mr-12">
          <img src={"https://crystalpng.com/wp-content/uploads/2022/06/bahria-university-logo.png"} alt="Harmony Hub Logo" className="h-20 w-20 mr-4" />
        </div>
        {/* Content */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold text-white mb-4">Certificate of Participation</h1>
          {/* Collaborating organizations logos */}
          <div className="mb-6 text-white flex flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Alkhidmat_Foundation_Pakistan.png" alt="NGO Logo" className="h-20 w-20 mr-4 mb-4" />
            <img src="https://crystalpng.com/wp-content/uploads/2022/06/bahria-university-logo.png" alt="University Logo" className="h-20 w-20 mr-4 mb-4" />
           
            {/* Add spaces for more logos */}
          </div>
          {/* Participant details */}
          <div className="mb-6 text-white">
            <p>{eventDescription}</p>
            <p>This certifies that</p>
            <h2 className="text-lg font-bold mb-2">{participantName}</h2>
            <p>S/o {fatherName}</p>
            <p>has participated in the following event:</p>
            <p className="text-lg font-bold mb-2">{eventDetails}</p>
            <p>held on</p>
            <p className="text-lg font-bold">{participationDate}</p>
          </div>
          {/* Issuer and partner signatures */}
          <div className="text-white flex justify-between">
            <div>
              <p>Issued by:</p>
              <img src="https://onlinepngtools.com/images/examples-onlinepngtools/george-walker-bush-signature.png" alt="CEO Signature" className="h-36 w-36 mr-4 mb-4" />
              {/* Add CEO's signature image here */}
            </div>
            <div>
              <p>Partnering Platforms:</p>
              <img src="https://onlinepngtools.com/images/examples-onlinepngtools/george-walker-bush-signature.png" alt="Partner Signature" className="h-36 w-36 mr-4 mb-4" />
              {/* Add signatures of partnering platforms here */}
            </div>
          </div>
        </div>
        {/* QR code and Digital Reference Number */}
        <div className="flex-none ml-auto text-right">
          <div className="flex flex-col">
            <p className="text-white">Digital Reference Number:</p>
            <p className="text-lg font-bold text-white">#123456789</p>
          </div>
          {/* Dynamically generate QR code */}
          <QRCode value={qrCodeLink} size={128} />
        </div>
      </div>
    </div>
  );
};

export default CertificateOfParticipation;
