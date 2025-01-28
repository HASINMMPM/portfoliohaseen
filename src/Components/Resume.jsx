import React from 'react';
import { FaFileDownload } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const Resume = () => {
  const resumeUrl = '/resume.pdf'; 

  return (
    <section id="resume" className=" section">
      <h2 className="heading">My Resume</h2>

      <div className="flex gap-4">
        {/* Button to view the resume in a new tab */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="show-view btn px-6 py-2 hover:px-8 hover:translate-y-2 flex items-center gap-2 text-white"
        >
          View <span className='show-file'><IoIosDocument/></span>
        </a>

        {/* Button to download the resume */}
        <a
          href={resumeUrl}
          download="Muhammad_Haseen_Resume.pdf"
          className="show-down btn px-6 py-2 hover:px-8 hover:translate-y-[-0.5rem] flex items-center gap-2 text-white"
        >
          Download <div className="show"> <FaFileDownload/></div>
        </a>
      </div>
    </section>
  );
};

export default Resume;
