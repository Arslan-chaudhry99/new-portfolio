import React from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import arslan22 from "../assess/imgs/miocreate_faceswap.jpeg";
import Link from "next/link";

const Resume: React.FC = () => {
  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <div className="min-h-screen w-full  text-white font-sans">
          {/* Header Section */}
          <header className="border-b  flex-col md:flex-row mt-[100px] border-gray-300 px-8 pt-8 pb-4 flex item-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-wide gradient-text bg-clip-text font-semibold md:text-5xl md:leading-none">
                Arslan Chaudhry
              </h1>
              <h2 className="text-lg font-semibold text-white">
                Software Engineer
              </h2>
              <div className="flex flex-wrap gap-4 mt-2 text-sm">
                <p className="flex items-center space-x-1">
                  <span className="font-semibold">Email:</span>
                  <a
                    href="mailto:arslan.jameil@gmail.com"
                    className="hover:underline text-blue-200"
                  >
                    arslan.jameil@gmail.com
                  </a>
                </p>
                <p className="flex items-center space-x-1">
                  <span className="font-semibold">Phone:</span>
                  <a
                    href="tel:+923415403790"
                    className="hover:underline text-blue-200"
                  >
                    +92 3415403790
                  </a>
                </p>
                <p className="flex items-center space-x-1">
                  <span className="font-semibold">Location:</span>
                  <a
                    href="tel:+923415403790"
                    className="hover:underline text-blue-200"
                  >
                    Lahore, Punjab, Pakistan
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 ">
              <div
                className="inline-flex gap-3 cursor-pointer items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900  shadow-xl shadow-black/20 ring-1 [&amp;:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center"
                style={{ background: "rgba(39, 39, 42, .9)" }}
              >
                Download Resume{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-cloud-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
              </div>
            </div>
          </header>

          {/* Main Content: Two-column layout on medium+ screens */}
          <div className="px-8 py-6 md:grid md:grid-cols-3 md:gap-8">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-6">
              {/* Summary */}
              <section>
                <h3 className="text-xl font-bold mb-2 border-b border-gray-300 pb-1">
                  SUMMARY
                </h3>
                <p className="leading-relaxed">
                  I am a passionate Software Engineer with extensive experience
                  in developing innovative web applications utilizing
                  technologies such as React.js, Node.js, and MongoDB. My
                  journey has led me to enhance user experiences through
                  engaging interfaces and robust backend systems. I take pride
                  in my problem-solving skills and my ability to elevate
                  projects that improve efficiency and user retention.
                </p>
              </section>

              {/* Professional Experience */}
              <section>
                <h3 className="text-xl font-bold mb-2 border-b border-gray-300 pb-1">
                  PROFESSIONAL EXPERIENCE
                </h3>

                {/* Job 1 */}
                <div className="mb-4">
                  <h4 className="font-semibold">
                    Software engineer –{" "}
                    <span className="font-normal">ZECH Inc</span>
                  </h4>
                  <p className="text-sm text-white">
                    11/2023 – present | Lahore, Pakistan
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Projects:</strong> Meteor, Manjam Funds (crypto
                    trading platform), Zchat, Ecom (Demo project), Wanya
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Skills:</strong> React.js, Tailwind CSS, MongoDB,
                    Mongoose, Node.js, Express.js, Socket.io, Electron.js, React
                    Native (expo), Redux
                  </p>
                </div>

                {/* Job 2 */}
                <div className="mb-4">
                  <h4 className="font-semibold">
                    React.js Developer –{" "}
                    <span className="font-normal">TxLab</span>
                  </h4>
                  <p className="text-sm text-white">
                    11/2022 – 10/2023 | Lahore, Pakistan
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Projects:</strong> Ajman Sewerage, Mawedii, Rivalog,
                    Mawadifi, Tanfee, ORB, Hiring Hash, SaddleBack, MCF
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Skills:</strong> React.js, Tailwind CSS, MongoDB,
                    Mongoose, Node.js, Express.js, Redux
                  </p>
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-xl font-bold mb-2 border-b border-gray-300 pb-1">
                  EDUCATION
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold">BS Software Engineering</h4>
                  <p className="text-sm text-white">
                    Virtual University of Pakistan
                  </p>
                  <p className="text-sm">
                    01/2020 – 12/2024 | Lahore, Pakistan
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Intermediate</h4>
                  <p className="text-sm text-white">
                    Government Islamia College
                  </p>
                  <p className="text-sm">
                    01/2018 – 12/2020 | Lahore, Pakistan
                  </p>
                </div>
              </section>

              {/* Interests */}
              <section>
                <h3 className="text-xl font-bold mb-2 border-b border-gray-300 pb-1">
                  INTERESTS
                </h3>
                <p className="text-sm">Books Reading | Badminton</p>
              </section>
            </div>

            {/* Right Column */}
            <div className="mt-8 md:mt-0 space-y-6">
              {/* Skills */}
              <section>
                <h3 className="text-xl font-bold mb-2 border-b border-gray-300 pb-1">
                  SKILLS
                </h3>
                <div className="text-sm leading-relaxed gap-4">
                  <strong className="mr-3">React.js</strong>{" "}
                  <strong className="mr-3">• Redux</strong>{" "}
                  <strong className="mr-3">• Node.js</strong>{" "}
                  <strong className="mr-3">• Express.js</strong>{" "}
                  <strong className="mr-3">• Mongoose</strong>{" "}
                  <strong className="mr-3">• React Native</strong>
                  <strong className="mr-3">• MongoDB </strong>{" "}
                  <strong className="mr-3">• HTML5</strong>{" "}
                  <strong className="mr-3">• CSS3</strong>{" "}
                  <strong className="mr-3">• Tailwind CSS</strong>{" "}
                  <strong className="mr-3">• ES6</strong>{" "}
                  <strong className="mr-3">• Ant Design</strong>
                  <strong className="mr-3">• JavaScript</strong>{" "}
                  <strong className="mr-3">• TypeScript</strong>{" "}
                  <strong className="mr-3">• ES5 </strong>{" "}
                  <strong className="mr-3">• Git</strong>{" "}
                  <strong className="mr-3">• GitHub</strong>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-xl font-bold mb-2 border-b border-gray-300 pb-1">
                  PROJECTS
                </h3>

                {/* Z-Chat */}
                <div className="mb-4">
                  <h4 className="font-semibold">Z-chat</h4>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Developed a Web &amp; desktop chat application using the
                      MERN stack and Socket.io, enabling real-time communication
                      with a 30% improvement in message delivery speed.
                    </li>
                    <li>
                      Leveraged TypeScript and class-based architecture to
                      enhance code maintainability and scalability, reducing
                      potential errors by 25%.
                    </li>
                    <li>
                      Achieved a 15% increase in user retention through
                      intuitive UI and seamless, responsive interactions across
                      devices.
                    </li>
                  </ul>
                </div>

                {/* Ajman Sewerage */}
                <div className="mb-4">
                  <h4 className="font-semibold">Ajman Sewerage</h4>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Engineered a sewage system management application in
                      Ajman, UAE, resulting in a 20% reduction in operational
                      costs and a 15% increase in system efficiency.
                    </li>
                    <li>
                      Spearheaded the development of a cutting-edge project
                      using ReactJS, TypeScript, and MOBX, resulting in a 25%
                      increase in user engagement and a 15% improvement in
                      conversion rate.
                    </li>
                    <li>
                      Elevated user satisfaction by 20% through visually
                      engaging SCSS-driven designs and seamless UI enhancements.
                    </li>
                  </ul>
                </div>

                {/* Coder Feast */}
                <div className="mb-4">
                  <h4 className="font-semibold">Coder Feast</h4>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Portfolio site for Coderfeast.</li>
                    <li>
                      Implemented React, Node.js, Express.js, MongoDB, and
                      NextJS, achieving a 30% decrease in response time and a
                      20% enhancement in data accuracy.
                    </li>
                    <li>
                      Integrated email notifications and admin tools for
                      efficient job management.
                    </li>
                  </ul>
                </div>

                {/* School Management System */}
                <div className="mb-4">
                  <h4 className="font-semibold">School Management System</h4>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Engineered a comprehensive system automating student fees,
                      teacher salaries, achieving 30% cost savings, and
                      enhancing ledger accuracy by 20%.
                    </li>
                    <li>
                      Architected a robust system using React, Node.js, Express,
                      MongoDB, Mongoose, SCSS, and HTML, resulting in a 40%
                      increase in operational efficiency.
                    </li>
                    <li>
                      Successfully deployed secure authentication, admin
                      features, and candidate blocking via JWT and bcrypt.js,
                      leading to 80% reduction in unauthorized access attempts.
                    </li>
                  </ul>
                </div>

                {/* Audio App */}
                <div>
                  <h4 className="font-semibold">Audio App</h4>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Users can listen to cool audio songs. Functionality: play,
                      pause, next, previous, loop a song, and download—using
                      HTML, CSS, JavaScript, Bootstrap, and OOP concepts to
                      prevent DRY principle violations.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
