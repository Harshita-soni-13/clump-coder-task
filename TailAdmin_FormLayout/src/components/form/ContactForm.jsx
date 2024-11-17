import { useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, email, phone, selectedOption, message });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setSelectedOption('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact Form </h2>
      <hr className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">First name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Last name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700  font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourmail@gmail.com"
            className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="(321) 5555-0115"
            className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-2">Select option</label>
        <div className="flex space-x-4">
          <label className="flex items-center font-semibold space-x-2">
            <input
              type="radio"
              name="option"
              value="Graphics Design"
              className="form-radio text-blue-500"
              checked={selectedOption === 'Graphics Design'}
              onChange={() => setSelectedOption('Graphics Design')}
            />
            <span>Graphics Design</span>
          </label>
          <label className="flex items-center font-semibold space-x-2">
            <input
              type="radio"
              name="option"
              value="Web Development"
              className="form-radio text-blue-500"
              checked={selectedOption === 'Web Development'}
              onChange={() => setSelectedOption('Web Development')}
            />
            <span>Web Development</span>
          </label>
          <label className="flex items-center font-semibold space-x-2">
            <input
              type="radio"
              name="option"
              value="Logo Design"
              className="form-radio text-blue-500"
              checked={selectedOption === 'Logo Design'}
              onChange={() => setSelectedOption('Logo Design')}
            />
            <span>Logo Design</span>
          </label>
          <label className="flex items-center  font-semibold space-x-2">
            <input
              type="radio"
              name="option"
              value="Others"
              className="form-radio text-blue-500"
              checked={selectedOption === 'Others'}
              onChange={() => setSelectedOption('Others')}
            />
            <span>Others</span>
          </label>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          id="message"
          placeholder="Type your message"
          className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
