import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., sending data to a server)
    console.log('Form submitted:', { name, email, message });
    emailjs.sendForm('service_6a5z6yi', 'template_dirchn7', form.current, 'rD-yy0T6OOeGPOjkk')
      .then((result) => {
          console.log(result.text);
          Swal.fire(
            'Good job!',
            'You message already send!',
            'success'
          )
      }, (error) => {
          console.log(error.text);
      });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className=" mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="text-white block mb-2 font-bold">Name</label>
        <input
          name='from_name'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#10E956] shadow-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="text-white block mb-2 font-bold">Email</label>
        <input
          name='from_email'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#10E956] shadow-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="text-white block mb-2 font-bold">Message</label>
        <textarea
          id="message"
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#10E956] shadow-md"
          rows={4}
          required
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 font-semibold btn btn-outline text-[#10E956]  hover:text-white shadow-xl shadow-[] w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
