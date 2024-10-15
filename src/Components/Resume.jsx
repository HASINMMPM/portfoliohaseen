import React from 'react';
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  const resumeUrl = '/resume.pdf'; 

  return (
    <section id="resume" className=" section">
      <h2 className="text-4xl font-bold mb-8">My Resume</h2>

      <div className="flex gap-4">
        {/* Button to view the resume in a new tab */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn px-6 py-2 hover:px-8 hover:translate-y-2"
        >
          View
        </a>

        {/* Button to download the resume */}
        <a
          href={resumeUrl}
          download="Muhammad_Haseen_Resume.pdf"
          className="btn px-6 py-2 hover:px-8 hover:translate-y-[-0.5rem] flex items-center gap-2"
        >
          Download <FaFileDownload/>
        </a>
      </div>
    </section>
  );
};

export default Resume;
