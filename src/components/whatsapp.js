import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    const phoneNumber = '+389 71222810'; // Replace with your company's WhatsApp number
    const message = 'Hello, I have a question about your services.'; // Replace with your desired message

    if (isMobile) {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <button onClick={handleWhatsAppClick}>
        <i className='fa fa-whatsapp' alt="WhatsApp Icon" aria-hidden='true'/>
    </button>
            
  );
};

export default WhatsAppButton;





