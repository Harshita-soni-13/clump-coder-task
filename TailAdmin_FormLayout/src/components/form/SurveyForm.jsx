import { useState } from 'react';

const SurveyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [subject, setSubject] = useState('');
  const [recommend, setRecommend] = useState('');
  const [languages, setLanguages] = useState([]);

  const handleSurveySubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, age, subject, recommend, languages });
    setName('');
    setEmail('');
    setAge('');
    setSubject('');
    setRecommend('');
    setLanguages([]);
  };

  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;
    setLanguages((prev) =>
      checked ? [...prev, value] : prev.filter((lang) => lang !== value)
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
    <form onSubmit={handleSurveySubmit} className="bg-white rounded-md shadow-md p-6 w-full">
      <h2 className="text-2xl font-semibold mb-4">Survey Form</h2>
      <hr className="mb-6" />
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-gray-700  font-semibold mb-2">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Which option best describes you?</label>
          <select
            id="subject"
            className="border border-gray-300 rounded-md w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Select your subject</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Would you recommend our site to a friend?</label>
          <div className="space-y-2">
            <label className="flex items-center font-semibold">
              <input
                type="radio"
                name="recommend"
                value="yes"
                className="mr-2"
                checked={recommend === 'yes'}
                onChange={(e) => setRecommend(e.target.value)}
              />
              Yes
            </label>
            <label className="flex items-center font-semibold">
              <input
                type="radio"
                name="recommend"
                value="no"
                className="mr-2"
                checked={recommend === 'no'}
                onChange={(e) => setRecommend(e.target.value)}
              />
              No
            </label>
            <label className="flex items-center font-semibold">
              <input
                type="radio"
                name="recommend"
                value="maybe"
                className="mr-2"
                checked={recommend === 'maybe'}
                onChange={(e) => setRecommend(e.target.value)}
              />
              Maybe
            </label>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Which languages & frameworks do you know?</label>
          <div className="space-y-2  font-semibold">
            {['C', 'Python', 'JavaScript', 'React', 'Angular'].map((lang) => (
              <label key={lang} className="flex items-center">
                <input
                  type="checkbox"
                  value={lang}
                  className="mr-2"
                  checked={languages.includes(lang)}
                  onChange={handleLanguageChange}
                />
                {lang}
              </label>
            ))}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default SurveyForm;
