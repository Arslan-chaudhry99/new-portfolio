// import Image from "next/image";
// import Link from "next/link";

// import arslan1 from "../app/assess/imgs/Vidnoz_AI_Headshots.png";
// import arslan2 from "../app/assess/imgs/FB_IMG_1718445386247.jpg";
// import arslan3 from "../app/assess/imgs/FB_IMG_1718445434529.jpg";
// import arslan4 from "../app/assess/imgs/FB_IMG_1718445502672.jpg";
// import arslan22 from "../app/assess/imgs/arslan222.png";
// import arslan5 from "../app/assess/imgs/txLabz.png";
// import arslan6 from "../app/assess/imgs/FB_IMG_1718445535404.jpg";
// import codingPicture from "../app/assess/imgs/thumbnail.webp";
// import project1 from "./assess/imgs/ajman.png";
// import audioApp from "./assess/imgs/audioApp.png";
// import Footer from "../components/Footer";

// export default function Home() {
//   const style = {
//     backgroundColor: "#8b5cf6",
//   };
//   return (
//     <>
//       <div id="___gatsby">
//         <div
//           id="gatsby-focus-wrapper"
//           style={{ outline: "none" }}
//           tabindex="-1"
//         >
//           <div className="relative">
//             <div className="absolute h-48 inset-x-0 top-0 bg-dots fade-b"></div>
//             <div className="fixed inset-0 z-40 transition-colors duration-300 pointer-events-none">
//               <header className="absolute top-8 inset-x-0">
//                 <div className="relative container px-8 2xl:px-32 mx-auto flex items-center">
//                   <div className="flex-shrink- pointer-events-auto">
//                     <div
//                       className="focus-within:!opacity-100"
//                       style={{ opacity: 1 }}
//                     >
//                       <a
//                         href=""
//                         aria-current="page"
//                         className="rounded-full ring-2 ring-gray-800 flex focus:outline-none focus-visible:ring-blue-300 focus-visible:ring-offset-2 ring-offset-gray-950"
//                       >
//                         <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-10 w-10 rounded-full shadow-xl shadow-black/20">
//                           <div style={{ maxWidth: "80px", display: "block" }}>
//                             <Image
//                               alt=""
//                               role="presentation"
//                               aria-hidden="true"
//                               style={{
//                                 maxWidth: "100%",
//                                 display: "block",
//                                 position: "static",
//                               }}
//                               src={arslan1}
//                             />
//                           </div>
//                           <Image
//                             aria-hidden="true"
//                             data-placeholder-image=""
//                             style={{
//                               opacity: 0,
//                               transition: "opacity 500ms linear 0s",
//                             }}
//                             decoding="async"
//                             src={arslan1}
//                             alt=""
//                           />
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="md:hidden ml-auto pointer-events-auto">
//                     <button
//                       className="pointer-events-auto inline-flex gap-2 h-10 px-4 font-medium text-sm justify-center items-center rounded-full text-gray-300  shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 hover:bg-gray-700/70 backdrop-blur transition"
//                       style={{ background: "rgba(39, 39, 42, .9) !important" }}
//                     >
//                       <span style={{ opacity: 1, transform: "none" }}>
//                         Menu
//                       </span>
//                       <div style={{ transform: "none" }}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="w-3.5 h-3.5"
//                         >
//                           <path d="M6 9l6 6 6-6" />
//                         </svg>
//                       </div>
//                     </button>
//                     <div
//                       className="absolute top-14 right-8 font-medium py-3  shadow-xl rounded-xl pointer-events-auto ring-1 ring-inset ring-gray-700/20"
//                       style={{
//                         opacity: 1,
//                         transform: "none",
//                         background: "rgba(39, 39, 42, .9)",
//                       }}
//                     >
//                       <nav className="flex flex-col">
//                         <a
//                           href=""
//                           className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
//                         >
//                           Dashboard
//                         </a>
//                         <a
//                           href="/blogs"
//                           className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
//                         >
//                           Blogs
//                         </a>
//                         <a
//                           href=""
//                           className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
//                         >
//                           Contact
//                         </a>
//                       </nav>
//                       <nav className="flex pr-9 pl-3">
//                         <a
//                           href="https://twitter.com/blenderskool"
//                           className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
//                           aria-label="Twitter profile"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           style={{ "--highlight-color": "rgb(14, 165, 233)" }}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="20"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="tabler-icon tabler-icon-brand-twitter"
//                           >
//                             <path d="M22 4.01c-1 .49-1.98 .689-3 .99-1.121-1.265-2.783-1.335-4.38-.737s-2.643 2.06-2.62 3.737v1c-3.245 .083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
//                           </svg>
//                         </a>
//                         <a
//                           href="https://github.com/blenderskool"
//                           className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
//                           aria-label="GitHub profile"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           style={{ "--highlight-color": "rgb(255, 255, 255)" }}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="20"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="tabler-icon tabler-icon-brand-github"
//                           >
//                             <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"></path>
//                           </svg>
//                         </a>
//                         <a
//                           href="https://linkedin.com/in/akash-hamirwasia"
//                           className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
//                           aria-label="LinkedIn profile"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           style={{ "--highlight-color": "rgb(59, 130, 246)" }}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="20"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="tabler-icon tabler-icon-brand-linkedin"
//                           >
//                             <path d="M4 4m0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z"></path>
//                             <path d="M8 11v5"></path>
//                             <path d="M8 8v.01"></path>
//                             <path d="M12 16v-5"></path>
//                             <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
//                           </svg>
//                         </a>
//                       </nav>
//                     </div>
//                   </div>
//                   <nav
//                     style={{ background: "rgba(39, 39, 42, .9)" }}
//                     className="pointer-events-auto hidden md:inline-flex ml-auto  px-3.5 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md"
//                   >
//                     <a
//                       href=""
//                       className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
//                     >
//                       Dashboard
//                     </a>
//                     <a
//                       href=""
//                       className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
//                     >
//                       Blog
//                     </a>
//                     <a
//                       href=""
//                       className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
//                     >
//                       Talk
//                     </a>
//                     <a
//                       href=""
//                       className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
//                     >
//                       Contacts
//                     </a>
//                   </nav>
//                   <nav
//                     style={{ background: "rgba(39, 39, 42, .9)" }}
//                     className="pointer-events-auto hidden md:inline-flex ml-4  items-center px-3 h-11 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md"
//                   >
//                     <a
//                       href="https://twitter.com/blenderskool"
//                       style={{ "--highlight-color": "rgb(14, 165, 233)" }}
//                       className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
//                       aria-label="Twitter profile"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="tabler-icon tabler-icon-brand-twitter"
//                       >
//                         <path d="M22 4.01c-1 .49-1.98 .689-3 .99-1.121-1.265-2.783-1.335-4.38-.737s-2.643 2.06-2.62 3.737v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
//                       </svg>
//                     </a>
//                     <a
//                       href="https://github.com/blenderskool"
//                       style={{ "--highlight-color": "rgb(255, 255, 255)" }}
//                       className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
//                       aria-label="GitHub profile"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="tabler-icon tabler-icon-brand-github"
//                       >
//                         <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
//                       </svg>
//                     </a>
//                     <a
//                       href="https://linkedin.com/in/akash-hamirwasia"
//                       style={{ "--highlight-color": "rgb(59, 130, 246)" }}
//                       className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
//                       aria-label="LinkedIn profile"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="tabler-icon tabler-icon-brand-linkedin"
//                       >
//                         <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
//                         <path d="M8 11l0 5"></path>
//                         <path d="M8 8l0 .01"></path>
//                         <path d="M12 16l0 -5"></path>
//                         <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
//                       </svg>
//                     </a>
//                   </nav>
//                 </div>
//               </header>
//             </div>
//           </div>

//           <main className="relative min-h-screen">
//             <section className="relative min-h-[75vh] flex flex-col lg:flex-row items-start lg:items-center lg:justify-between pt-16 container mx-auto px-8 xl:px-32 overflow-x-hidden">
//               <div className="max-w-2xl">
//                 <h1 className="mt-2 font-semibold tracking-tight text-gray-100 text-4xl md:text-5xl leading-tight md:leading-tight">
//                   Hey there, I’m <br />
//                   <span className="gradient-text bg-clip-text font-semibold md:text-5xl md:leading-none">
//                     {" "}
//                     Arslan Chaudhry.
//                   </span>
//                 </h1>
//                 <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-xl">
//                   I am enthusiastic about creating innovative web products with
//                   a strong emphasis on good design. I enjoy learning new
//                   technologies and actively contributing to open source
//                   projects.
//                 </p>
//                 <div className="flex flex-col sm:flex-row mt-10 gap-4">
//                   <a
//                     className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center"
//                     href="/blog/"
//                   >
//                     Read my blog
//                   </a>
//                   <a
//                     className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900  shadow-xl shadow-black/20 ring-1 [&amp;:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center"
//                     href="/contact/"
//                     style={{ background: "rgba(39, 39, 42, .9)" }}
//                   >
//                     Let’s connect
//                   </a>
//                 </div>
//               </div>
//               <div className="p-10 lg:p-20 flex-shrink-0 -ml-8 lg:ml-0 lg:-mr-20 relative -order-1 lg:order-1">
//                 <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(black_55%,transparent_75%)] rounded-full"></div>
//                 <div className="absolute inset-0 [mask-image:radial-gradient(black_42%,transparent_57%)] rounded-full">
//                   <div className="absolute inset-6 lg:inset-12 highlight mask-dots rounded-full"></div>
//                 </div>
//                 <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained relative w-72 h-72 rounded-full border-8 border-gray-900 bg-gray-900">
//                   <div
//                     style={{
//                       maxWidth: "284px",
//                       maxHeight: "284px",
//                       display: "block",
//                     }}
//                   >
//                     <Image
//                       src={arslan1}
//                       alt="Cover Image"
//                       style={{
//                         width: "284px",
//                         height: "284px",
//                         display: "block",
//                         position: "static",
//                         objectFit: "cover",
//                         objectPosition: "top",
//                       }}
//                     />
//                   </div>
//                   <Image
//                     aria-hidden="true"
//                     data-placeholder-image=""
//                     style={{
//                       opacity: 0,
//                       transition: "opacity 500ms linear 0s",
//                       width: "284px",
//                       height: "284px",
//                       objectFit: "cover",
//                       objectPosition: "top",
//                     }}
//                     decoding="async"
//                     alt=""
//                     src={arslan1}
//                   />
//                 </div>
//               </div>
//             </section>

//             <section className="relative overflow-hidden">
//               <div className="absolute inset-0 bg-dots fade-y"></div>
//               <div className="py-16 inline-flex min-w-full w-max relative">
//                 <div
//                   className=" min-w-full justify-around flex-shrink-0 animate-large-marquee"
//                   style={{ display: "inline-flex" }}
//                 >
//                   {[arslan4, arslan22, arslan5].map((item) => {
//                     return (
//                       <>
//                         <div className="flex-shrink-0 px-6">
//                           <div className="relative group hover:scale-110 transition duration-300 rounded-xl shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/30 overflow-hidden -rotate-2 hover:-rotate-1">
//                             <div className="scale-110 h-80 aspect-[8/10] group-hover:scale-100 transition-transform duration-300">
//                               <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained w-full h-full object-cover object-top">
//                                 <div
//                                   style={{
//                                     maxWidth: "281px",
//                                     display: "block",
//                                   }}
//                                 >
//                                   <Image
//                                     alt=""
//                                     role="presentation"
//                                     aria-hidden="true"
//                                     style={{
//                                       maxWidth: "100%",
//                                       display: "block",
//                                       position: "static",
//                                     }}
//                                     src={item}
//                                   />
//                                 </div>
//                               </div>
//                               <div
//                                 className="absolute inset-0 bg-noise opacity-20 pointer-events-none"
//                                 aria-hidden="true"
//                               ></div>
//                             </div>
//                             <div
//                               className="absolute inset-0 shadow-[0_1.5px_0_inset_rgba(255,255,255,0.3)] rounded-xl z-10 pointer-events-none"
//                               aria-hidden={true}
//                             ></div>
//                           </div>
//                         </div>
//                       </>
//                     );
//                   })}
//                 </div>
//               </div>
//             </section>

//             <section className="container flex flex-col gap-8 mx-auto px-8 2xl:px-32 mt-32">
//               <div className="flex flex-col lg:flex-row gap-8">
//                 <div
//                   className=" flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
//                   style={{ background: "rgba(39, 39, 42, .9)" }}
//                 >
//                   <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
//                   <div className="relative">
//                     <h2 className="text-2xl font-semibold tracking-tight">
//                       About me
//                     </h2>
//                     <div className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium">
//                       <p>
//                         Hey! I’m Akash, a creative 24-year-old who loves
//                         building products with code.
//                       </p>
//                       <p>
//                         I have always been curious about how things work since
//                         my childhood. This curiosity led me to the world of
//                         programming and computer science. When I was 16, I build
//                         a school management system for my high school to manage
//                         student attendance leaves and exam result data. That’s
//                         when I learned Python - to automate tasks for saving
//                         time, which made me feel like a superhero!
//                       </p>
//                       <p className="md:block hidden">
//                         Since then, I have been working on improving my skills
//                         in Web development. I decided to dip my feet in web
//                         development because I wanted to build products that were
//                         easily accessible to anyone on any device. It always
//                         motivates me when I hear how my project has helped
//                         someone solve their problem.
//                       </p>
//                       <p className="lg:block hidden">
//                         I completed my undergrad in Computer Science and
//                         Engineering from PES University. Most of the things I
//                         build or learn is still driven by curiosity even today.
//                         My most recent obsession has been building compilers,
//                         parsers and I’m always open to talk about frontend
//                         development, user interface design and open source!
//                       </p>
//                     </div>
//                   </div>
//                   <div className="lg:hidden text-center absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-75% to-[#1E1E21] rounded-b-2xl">
//                     <button
//                       style={{ background: "rgba(39, 39, 42, .9) !important" }}
//                       className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900  shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-sm font-medium px-4 py-2 mt-14"
//                     >
//                       Read more
//                     </button>
//                   </div>
//                 </div>
//                 <div
//                   style={{ background: "rgba(39, 39, 42, .9)" }}
//                   className=" xl:w-4/12 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
//                 >
//                   <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
//                   <div className="relative">
//                     <h2 className="text-2xl font-semibold tracking-tight">
//                       Experience
//                     </h2>
//                     <div className="mt-7">
//                       <ol className="space-y-7">
//                         <li className="flex items-center">
//                           <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 bg-white flex items-center justify-center">
//                             <img
//                               src="https://github.com/razorpay.png"
//                               alt="Razorpay"
//                               loading="lazy"
//                               className="bg-white w-6 h-6"
//                               width="40"
//                               height="40"
//                             />
//                           </div>
//                           <div className="relative w-full">
//                             <div className="ml-5">
//                               <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
//                                 <a
//                                   className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors"
//                                   href="https://razorpay.com"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   Zech technologies
//                                 </a>
//                                 <div className="text-xs text-gray-400">
//                                   <time dateTime="2022-07">July 2022</time>
//                                   &nbsp;&nbsp;–&nbsp;&nbsp;<span>Present</span>
//                                 </div>
//                               </div>
//                               <div className="font-medium text-xs mt-0.5 text-gray-400">
//                                 Software Engineer
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="flex items-center">
//                           <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 bg-white flex items-center justify-center">
//                             <img
//                               src="https://github.com/razorpay.png"
//                               alt="Razorpay"
//                               loading="lazy"
//                               className="bg-white w-6 h-6"
//                               width="40"
//                               height="40"
//                             />
//                           </div>
//                           <div className="relative w-full">
//                             <div className="ml-5">
//                               <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
//                                 <a
//                                   className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors"
//                                   href="https://razorpay.com"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   TxLabz
//                                 </a>
//                                 <div className="text-xs text-gray-400">
//                                   <time dateTime="2022-01">January 2022</time>
//                                   &nbsp;&nbsp;–&nbsp;&nbsp;
//                                   <time dateTime="2022-07">July 2022</time>
//                                 </div>
//                               </div>
//                               <div className="font-medium text-xs mt-0.5 text-gray-400">
//                                 Software Engineering Intern
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="flex items-center">
//                           <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 flex items-center justify-center">
//                             <img
//                               src="https://github.com/akamai.png"
//                               alt="Akamai"
//                               loading="lazy"
//                               width="40"
//                               height="40"
//                             />
//                           </div>
//                           <div className="relative w-full">
//                             <div className="ml-5">
//                               <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
//                                 <a
//                                   className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors"
//                                   href="https://akamai.com"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   Akamai
//                                 </a>
//                                 <div className="text-xs text-gray-400">
//                                   <time dateTime="2021-05">May 2021</time>
//                                   &nbsp;&nbsp;–&nbsp;&nbsp;
//                                   <time dateTime="2021-07">July 2021</time>
//                                 </div>
//                               </div>
//                               <div className="font-medium text-xs mt-0.5 text-gray-400">
//                                 Software Engineering Intern
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="flex items-center">
//                           <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 flex items-center justify-center">
//                             <img
//                               src="https://github.com/smallcase.png"
//                               alt="smallcase"
//                               loading="lazy"
//                               width="40"
//                               height="40"
//                             />
//                           </div>
//                           <div className="relative w-full">
//                             <div className="ml-5">
//                               <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
//                                 <a
//                                   className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors"
//                                   href="https://smallcase.com"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   smallcase
//                                 </a>
//                                 <div className="text-xs text-gray-400">
//                                   <time dateTime="2020-05">May 2020</time>
//                                   &nbsp;&nbsp;–&nbsp;&nbsp;
//                                   <time dateTime="2020-08">August 2020</time>
//                                 </div>
//                               </div>
//                               <div className="font-medium text-xs mt-0.5 text-gray-400">
//                                 Frontend Engineering Intern
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="flex items-center">
//                           <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 flex items-center justify-center">
//                             <img
//                               src="https://github.com/turtlewig.png"
//                               alt="Turtlewig"
//                               loading="lazy"
//                               width="40"
//                               height="40"
//                             />
//                           </div>
//                           <div className="relative w-full">
//                             <div className="ml-5">
//                               <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
//                                 <div className="font-medium text-sm px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors">
//                                   Turtlewig
//                                 </div>
//                                 <div className="text-xs text-gray-400">
//                                   <time dateTime="2020-01">January 2020</time>
//                                   &nbsp;&nbsp;–&nbsp;&nbsp;
//                                   <time dateTime="2021-12">December 2021</time>
//                                 </div>
//                               </div>
//                               <div className="font-medium text-xs mt-0.5 text-gray-400">
//                                 Founding Engineer
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="flex items-center">
//                           <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 bg-white flex items-center justify-center">
//                             <img
//                               src="https://github.com/PES-Innovation-Lab.png"
//                               alt="PES Innovation Lab"
//                               loading="lazy"
//                               className="bg-white w-6 h-6"
//                               width="40"
//                               height="40"
//                             />
//                           </div>
//                           <div className="relative w-full">
//                             <div className="ml-5">
//                               <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
//                                 <a
//                                   className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors"
//                                   href="https://pes-innovation-lab.github.io/web/"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   PES Innovation Lab
//                                 </a>
//                                 <div className="text-xs text-gray-400">
//                                   <time dateTime="2019-06">June 2019</time>
//                                   &nbsp;&nbsp;–&nbsp;&nbsp;
//                                   <time dateTime="2019-07">July 2019</time>
//                                 </div>
//                               </div>
//                               <div className="font-medium text-xs mt-0.5 text-gray-400">
//                                 Project Intern
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                       </ol>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{ background: "rgba(39, 39, 42, .9)" }}
//                 className=" flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
//               >
//                 <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
//                 <div className="relative flex flex-col items-start h-full">
//                   <h2 className="text-2xl font-semibold tracking-tight">
//                     My skills
//                   </h2>
//                   <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium">
//                     I constantly learn new and exciting concepts in computer
//                     science and web development. I try applying these concepts
//                     to solve real-world problems. A few technologies I enjoy
//                     working with:
//                   </p>
//                   <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 font-medium">
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       TypeScript
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       JavaScript
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       CSS (Tailwind CSS)
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       React.js
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       Next.js
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       Redux
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       Node.js
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       Express.js
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       Mongoose
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       MongoDB
//                     </li>
//                     <li className="flex items-center gap-3 group">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
//                       >
//                         <path d="M5 12h14"></path>
//                         <path d="M13 18l6-6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                       Socket.io
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </section>
//             <section className="container mx-auto px-8 2xl:px-32 mt-48">
//               <h2 className="text-3xl font-semibold tracking-tight leading-normal">
//                 Projects I Take the Most Pride In
//               </h2>
//               <div className="flex flex-col items-start gap-4 md:flex-row md:items-end justify-between">
//                 <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium max-w-2xl">
//                   I love creating products that solve problems. I take pride in
//                   viewing things from the end users' perspectives and working
//                   backward to design compelling experiences.
//                 </p>
//                 <a
//                   className="flex-shrink-0 font-medium inline-flex items-center gap-2 text-green-300 hover:underline hover:text-sky-400 underline-offset-4 transition"
//                   href="/projects/"
//                 >
//                   View all projects
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-4 h-4"
//                   >
//                     <path d="M5 12h14"></path>
//                     <path d="M13 18l6-6"></path>
//                     <path d="M13 6l6 6"></path>
//                   </svg>
//                 </a>
//               </div>
//               <div className="grid lg:grid-cols-2 max-w-6xl mx-auto mt-12 gap-8">
//                 <div
//                   className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset"
//                   style={{ "--highlight-color": "#10b981" }}
//                 >
//                   <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
//                   <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300"></div>
//                   <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"></div>
//                   <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
//                     <div className="flex flex-col sm:flex-row gap-3 justify-between">
//                       <h3 className="text-4xl font-semibold">Ajman Sewerage</h3>
//                       {/* <div className="flex items-center gap-1.5 text-gray-300 font-medium">
//                         2,178
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2.25"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="w-4 h-4"
//                         >
//                           <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
//                         </svg>
//                         <span className="text-gray-400 text-xs">on GitHub</span>
//                       </div> */}
//                     </div>
//                     <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">
//                       Ajman Sewerage, the first Public-Private Partnership (PPP)
//                       sewerage system in the UAE, revolutionizes wastewater
//                       management. This state-of-the-art plant ensures
//                       sustainable and efficient treatment solutions for Ajman's
//                       growing needs.
//                       <br />
//                       <br />
//                       By leveraging advanced technology and innovative
//                       practices, it enhances water quality and environmental
//                       protection. The partnership demonstrates a successful
//                       collaboration between public and private sectors, setting
//                       a benchmark for future infrastructure projects in the
//                       region.
//                     </p>
//                     <div className="flex justify-between mt-auto">
//                       <a
//                         className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2"
//                         href="https://www.ajmansewerage.ae/home"
//                         target="_blank"
//                       >
//                         Live
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"
//                         >
//                           <path d="M17 7l-10 10"></path>
//                           <path d="M8 7l9 0l0 9"></path>
//                         </svg>
//                       </a>
//                       {/* <a
//                         className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50/10 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2"
//                         href="https://github.com/blenderskool/blaze"
//                         target="_blank"
//                       >
//                         GitHub
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"
//                         >
//                           <path d="M17 7l-10 10"></path>
//                           <path d="M8 7l9 0l0 9"></path>
//                         </svg>
//                       </a> */}
//                     </div>
//                   </div>
//                   <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal min-w-[560px] max-w-[560px] min-h-[329.45px] max-h-[329.45px]">
//                     <Image
//                       alt="Project image"
//                       role="presentation"
//                       aria-hidden="true"
//                       src={project1}
//                       style={{
//                         maxWidth: "100%",
//                         display: "block",
//                         position: "static",
//                         objectFit: "cover",
//                         height: "100%",
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div
//                   className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset"
//                   style={{ "--highlight-color": "#8b5cf6" }}
//                 >
//                   <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
//                   <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300"></div>
//                   <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"></div>
//                   <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
//                     <div className="flex flex-col sm:flex-row gap-3 justify-between">
//                       <h3 className="text-4xl font-semibold">Audio App</h3>
//                       {/* <div className="flex items-center gap-1.5 text-gray-300 font-medium">
//                         2,178
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2.25"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="w-4 h-4"
//                         >
//                           <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
//                         </svg>
//                         <span className="text-gray-400 text-xs">on GitHub</span>
//                       </div> */}
//                     </div>
//                     <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">
//                       I developed a dynamic web music app designed to enhance
//                       the listening experience for users. This app allows users
//                       to explore, create, and share personalized playlists with
//                       ease. Featuring an intuitive interface, it offers seamless
//                       navigation and quick access to a vast library of tracks.
//                       <br />
//                       <br />
//                       The app also includes smart recommendations based on user
//                       preferences, ensuring a tailored music journey. By
//                       focusing on user-centric design, I aimed to create a
//                       compelling and enjoyable musical experience.
//                     </p>
//                     <div className="flex justify-between mt-auto">
//                       <a
//                         className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2"
//                         href="https://arslan-chaudhry99.github.io/killer-responsive-audio-app-with-javascript/"
//                         target="_blank"
//                       >
//                         Live
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"
//                         >
//                           <path d="M17 7l-10 10"></path>
//                           <path d="M8 7l9 0l0 9"></path>
//                         </svg>
//                       </a>
//                       <a
//                         className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50/10 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2"
//                         href="https://github.com/Arslan-chaudhry99/killer-responsive-audio-app-with-javascript"
//                         target="_blank"
//                       >
//                         GitHub
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"
//                         >
//                           <path d="M17 7l-10 10"></path>
//                           <path d="M8 7l9 0l0 9"></path>
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal min-w-[560px] max-w-[560px] min-h-[329.45px] max-h-[329.45px]">
//                     <Image
//                       alt="Project image"
//                       role="presentation"
//                       aria-hidden="true"
//                       src={audioApp}
//                       style={{
//                         maxWidth: "100%",
//                         display: "block",
//                         position: "static",
//                         objectFit: "cover",
//                         height: "100%",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </section>
//             <section className="container mx-auto px-8 2xl:px-32 mt-24">
//               <h2 className="text-3xl font-semibold tracking-tight leading-normal">
//                 Fresh from my blog
//               </h2>
//               <div className="flex flex-col items-start gap-4 md:flex-row md:items-end justify-between">
//                 <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium max-w-3xl">
//                   I document my learnings on my blog with the hope that it will
//                   help fellow curious developers like me. I always come out with
//                   more understanding of the topic than I originally started
//                   with.
//                 </p>
//                 <a
//                   href="/blogs/"
//                   className="flex-shrink-0 font-medium inline-flex items-center gap-2 text-green-300 hover:underline hover:text-sky-400 underline-offset-4 transition"
//                 >
//                   View all posts
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-4 h-4"
//                   >
//                     <path d="M5 12l14 0"></path>
//                     <path d="M13 18l6 -6"></path>
//                     <path d="M13 6l6 6"></path>
//                   </svg>
//                 </a>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//                 <div
//                   className="group bg-gray-800/20 rounded-2xl relative overflow-hidden shadow-md hover:shadow-2xl hover:bg-gray-800/50 transition w-full h-full block @container"
//                   style={{
//                     "--highlight-color": "#3fa4ff",
//                     background: "rgba(39, 39, 42, .9)",
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
//                   <div className="relative flex h-full flex-col">
//                     <div className="flex flex-col h-full p-8 pb-5 @lg:p-12">
//                       <h3 className="font-semibold mb-6 @lg:leading-normal text-xl @lg:text-3xl">
//                         <a href="/blog/full-page-theme-toggle-animation-with-view-transitions-api/">
//                           <span className="z-10 absolute inset-0"></span>
//                           Full-page theme toggle animation with{" "}
//                           <span className="text-highlight">
//                             View Transitions API
//                           </span>
//                         </a>
//                       </h3>
//                       <p className="hidden @lg:block text-gray-400 font-medium tracking-wide mb-4"></p>
//                       <div className="text-gray-400 font-medium mt-auto flex gap-2 @lg:text-gray-500 text-sm @lg:text-base @lg:gap-3">
//                         <time dateTime="2023-11-02T00:00:00.000Z">
//                           November 2, 2023
//                         </time>
//                         <span aria-hidden="true">•</span>
//                         <span>9 min read</span>
//                       </div>
//                     </div>
//                     <div className="relative mt-auto">
//                       <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained group-hover:scale-[1.025] transition-transform origin-top">
//                         <div style={{ maxWidth: "1387px", display: "block" }}>
//                           <Image
//                             alt="Descriptive Alt Text"
//                             src={codingPicture}
//                             style={{
//                               maxWidth: "100%",
//                               display: "block",
//                               position: "static",
//                             }}
//                           />
//                         </div>
//                         <Image
//                           alt="Descriptive Alt Text"
//                           src={codingPicture}
//                           style={{
//                             opacity: 0,
//                             transition: "opacity 500ms linear",
//                             objectFit: "cover",
//                           }}
//                           decoding="async"
//                         />
//                         <Image
//                           width="1387"
//                           src={codingPicture}
//                           height="816"
//                           style={{ objectFit: "cover", opacity: 1 }}
//                           sizes="(min-width: 1387px) 1387px, 100vw"
//                           decoding="async"
//                           loading="lazy"
//                           alt="Full-page theme toggle animation with View Transitions API"
//                         />
//                         {/* Light effect div */}
//                         <div className="light-effect"></div>
//                       </div>
//                       <div className="absolute inset-0 overflow-hidden opacity-10">
//                         <div className="absolute -inset-x-6 inset-y-4 bg-noise [mask-image:linear-gradient(transparent,white,transparent)] -rotate-6 -translate-y-full"></div>
//                       </div>
//                       <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 ring-1 ring-inset ring-gray-700/30 rounded-2xl pointer-events-none"></div>
//                 </div>
//               </div>
//             </section>
//             <section className="container mx-auto px-8 2xl:px-32 py-32">
//               <div
//                 style={{ background: "rgba(39, 39, 42, .9)" }}
//                 className=" ring-1 ring-inset ring-gray-700/30 px-8 lg:px-16 py-16 md:py-24 rounded-2xl relative overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
//                 <div className="relative flex flex-col gap-10 md:flex-row items-center justify-between">
//                   <div className="flex flex-col">
//                     <h2 className="font-semibold tracking-tight text-gray-100 text-4xl leading-tight">
//                       Let’s get
//                       <span className="gradient-text bg-clip-text font-semibold md:text-5xl md:leading-none">
//                         in touch
//                       </span>
//                     </h2>
//                     <p className="mt-7 md:text-lg leading-relaxed font-medium text-gray-400 max-w-xl">
//                       I’m open to hearing about new opportunities. Feel free to
//                       reach out to me if you have a question, or just want to
//                       say hi!
//                     </p>
//                   </div>
//                   <div className="md:mt-0 w-full md:w-auto flex-shrink-0">
//                     <a
//                       href="/contact/"
//                       className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-base font-medium px-5 py-2.5 w-full md:w-auto justify-center"
//                     >
//                       Start a conversation
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="w-3.5 h-3.5 group-hover/button:translate-x-0.5 transition-transform"
//                       >
//                         <path d="M5 12l14 0"></path>
//                         <path d="M13 18l6 -6"></path>
//                         <path d="M13 6l6 6"></path>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }
