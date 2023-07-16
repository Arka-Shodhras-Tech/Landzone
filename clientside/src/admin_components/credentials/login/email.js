import emailjs from '@emailjs/browser';
import React, { useRef,useState } from 'react';
export const ContactUs = () => {
  const form = useRef();
  const [arrays, setArrays] = useState([]);
  const [currentArray, setCurrentArray] = useState('');

  const handleAddArray = () => {
    if (currentArray.trim() !== '') {
      setArrays([...arrays, currentArray]);
      setCurrentArray('');
    }
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yth8b2s', 'template_9bpmz3j', form.current, '10_WMH5qM1GoLv6-g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    <div>
    <input
      type="text"
      value={currentArray}
      onChange={(e) => setCurrentArray(e.target.value)}
    />
    <button onClick={handleAddArray}>Add Array</button>
  </div>
  <div>
      {arrays.map((array, index) => (
        <div key={index}>{array}</div>
      ))}
    </div>
    </>
  );
};