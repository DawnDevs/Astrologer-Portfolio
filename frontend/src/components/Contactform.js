import React from 'react';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const mode = queryParams.get('mode');

  // Ensure mode is URL encoded
  const encodedMode = encodeURIComponent(mode);

  const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfJIfZkcaFmsV4PXoAnDvLE6v1oWdr2QJJldAeTnUAZKXcwAQ/viewform?usp=sf_link&entry.117367192=${date}&entry.377680888=${time}&entry.1251509875=${encodedMode}`;
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className=' text-center my-10 font-semibold text-3xl'>Contact Us</h2>
      <iframe
        src={googleFormUrl}
        width="1000"
        height="500"
        frameBorder="0"
        marginHeight="0"
        title='form'
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactForm;
