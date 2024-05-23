import React from 'react';
import { FOOTER } from '../constants';
import { CONTACT } from '../constants';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='border-b border-neutral-800 pb-8'>
      <div className="pb-8">
        <h2 className='my-20 text-center text-4xl mt-8 w-full lg:w-1/2 lg:p-8 mx-auto pb-0 mb-0'>Let's Get in Touch !</h2>
      </div>
      <div className="tracking-tighter">
        <div className="flex flex-col items-center">
          <p className='text-white text-lg mb-4 text-center max-w-lg'>{FOOTER}</p>
          <div className="text-white text-lg mb-2 flex items-center">
            <MdEmail className="mr-2 text-red-500" />
            <span className="font-bold">Email:</span>&nbsp; {CONTACT.email}
          </div>
          <div className="text-white text-lg mb-2 flex items-center">
            <FaPhoneAlt className="mr-2 text-green-500" />
            <span className="font-bold">Phone:</span>&nbsp; {CONTACT.phoneNo}
          </div>
          <div className="text-white text-lg mb-2 flex items-center">
            <FaLocationDot className="mr-2 text-blue-500" />
            <span className="font-bold">Location:</span>&nbsp; {CONTACT.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
