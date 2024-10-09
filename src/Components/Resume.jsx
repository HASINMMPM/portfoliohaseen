import React from 'react';

const Resume = () => {
  const resumeUrl = '/50-07.pdf'; 

  return (
    <section id="resume" className=" py-12 flex flex-col items-center justify-center bg-blue-600 text-white">
      <h2 className="text-4xl font-bold mb-8">My Resume</h2>

      <div className="flex gap-4">
        {/* Button to view the resume in a new tab */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          View in New Tab
        </a>

        {/* Button to download the resume */}
        <a
          href={resumeUrl}
          download="Muhammad_Haseen_Resume.pdf"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
