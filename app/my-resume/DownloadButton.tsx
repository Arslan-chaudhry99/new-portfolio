'use client';

import React from 'react';

const DownloadButton = () => {
  return (
    <button
      onClick={() => {
        const link = document.createElement('a');
        link.href = '/assess/Arslan-Jameel-MERN-Dev.pdf'; // Correct path relative to public folder
        link.download = 'Arslan-Chaudhry.pdf'; // Set the download name
        link.click(); // Trigger the download
      }}
      className="z-50 inline-flex gap-3 !cursor-pointer items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 shadow-xl shadow-black/20 ring-1 [&amp;:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center"
      style={{ background: 'rgba(39, 39, 42, .9)' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        className="bi bi-cloud-arrow-down"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"
        />
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
      </svg>
    </button>
  );
};

export default DownloadButton;
