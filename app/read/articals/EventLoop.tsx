"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import eventLoopImg from "../../assess/imgs/1635521683200-removebg-preview.png";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Link from "next/link";
import redux from "../../assess/imgs/redux.png";
import { horizontalPost } from "@/app/jsonData";

const Artical1 = () => {
  const customStyle = {
    ...dracula,
    keyword: { color: "#ff79c6", fontWeight: "bold" },
    string: { color: "#f1fa8c" },
    function: { color: "#50fa7b" },
    variable: { color: "#8be9fd" },
    number: { color: "#bd93f9" },
    comment: { color: "#6272a4", fontStyle: "italic" },
    // Add more custom styles as needed
  };
  const params = useParams();
  const id = params.id;

  return (
    <>
      <div id="___gatsby">
        <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
          <Menu />
          <main className="relative min-h-screen">
            <div className="h-44"></div>
            <div
              style={{
                "--highlight-color": "#22c55e" as string,
              } as React.CSSProperties}
            >
              <div
                className="fixed top-0 inset-x-0 h-1 bg-highlight z-10 rounded-r-full opacity-80"
                style={{
                  opacity: 1,
                  transform: "translateX(-100%) translateZ(0px)",
                }}
              >
              </div>
              <article className="px-8 max-w-3xl mx-auto xl:max-w-none xl:px-0 block xl:grid xl:grid-cols-[1fr_minmax(auto,_750px)_1fr] gap-32 relative items-start">
                <div>
                  <h1 className="text-3xl leading-normal font-semibold sm:text-5xl sm:leading-tight tracking-tight text-gray-100">
                    What is the Event Loop?
                    {
                      /* <span className="text-highlight">
                  3D text with custom fonts
                </span>{" "} */
                    }
                    {/* in Three.js */}
                  </h1>
                  <p className="text-gray-400 font-medium text-xl leading-7 gap-3 items-center flex mt-6 mb-24">
                    <time dateTime="2023-02-24T00:00:00.000Z">
                      February 24, 2023
                    </time>
                    &bull;
                    <span>8 min read</span>
                  </p>
                  <div className="lg:-mx-6 relative shadow-md rounded-lg">
                    <div className="relative">
                      <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained rounded-lg">
                        <div style={{ maxWidth: "1387px", display: "block" }}>
                          <Image
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src={eventLoopImg}
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              position: "static",
                            }}
                          />
                        </div>
                        <Image
                          aria-hidden="true"
                          data-placeholder-image=""
                          style={{
                            opacity: 0,
                            transition: "opacity 500ms linear",
                          }}
                          decoding="async"
                          src={eventLoopImg}
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-lg pointer-events-none">
                      </div>
                    </div>
                  </div>
                  <div className="prose sm:prose-sm mt-12">
                    <p className="text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8">
                      The event loop is a fundamental concept in JavaScript,
                      particularly when dealing with asynchronous operations. It
                      allows JavaScript to perform non-blocking operations,
                      despite being single-threaded.
                    </p>

                    <h6 className="text-2xl leading-normal mt-7 font-semibold sm:text-2xl sm:leading-tight tracking-tight text-gray-100">
                      What is the Event Loop?
                    </h6>
                    <p className="text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8">
                      JavaScript is single-threaded, meaning it can only execute
                      one task at a time in a single call stack. However, it can
                      handle asynchronous operations, like fetching data from an
                      API or reading a file, without blocking the main thread.
                      This is possible because of the event loop.
                    </p>
                    <p className="text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8">
                      Here’s a simplified breakdown of how the event loop works:
                    </p>

                    <ul>
                      <div>
                        <li className="text-white text-xl font-bold tracking-tight mt-6 leading-8 flex items-center gap-2">
                          <p>1.</p> <h1>Call Stack:</h1>
                        </li>
                        <div>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            The place where your code is executed.
                          </li>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-3 leading-8"
                            style={{ listStyle: "outside" }}
                          >
                            JavaScript runtime keeps track of the function calls
                            using the call stack. When a function is invoked,
                            it’s added to the stack. Once the function execution
                            is completed, it’s popped off the stack.
                          </li>
                        </div>
                      </div>
                      <div>
                        <li className="text-white text-xl font-bold tracking-tight mt-6 leading-8 flex items-center gap-2">
                          <p>2.</p> <h1>Web APIs:</h1>
                        </li>
                        <div>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            These are browser-provided features like setTimeout,
                            DOM events, HTTP requests, etc.
                          </li>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-3 leading-8"
                            style={{ listStyle: "outside" }}
                          >
                            When a function involving a Web API is called, it is
                            passed off to the browser to handle. The function
                            doesn't block the call stack; instead, it is sent to
                            the Web API.
                          </li>
                        </div>
                      </div>
                      <div>
                        <li className="text-white text-xl font-bold tracking-tight mt-6 leading-8 flex items-center gap-2">
                          <p>3.</p> <h1>Callback Queue:</h1>
                        </li>
                        <div>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            Once the Web API has completed its task (e.g., a
                            timer finishes or data is fetched), it adds the
                            callback function to the callback queue.
                          </li>
                        </div>
                      </div>
                      <div>
                        <li className="text-white text-xl font-bold tracking-tight mt-6 leading-8 flex items-center gap-2">
                          <p>4.</p> <h1>Event Loop:</h1>
                        </li>
                        <div>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            The event loop constantly checks the call stack to
                            see if it's empty.{" "}
                          </li>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            If the call stack is empty and there are tasks in
                            the callback queue, the event loop pushes the first
                            callback in the queue to the call stack, allowing it
                            to be executed.
                          </li>
                        </div>
                      </div>
                    </ul>

                    <div className="lg:-mx-6 relative my-10 group">
                      <div className="-mb-px -mt-5 flex justify-between px-6 relative z-10">
                        <div></div>
                        <div className="inline-flex items-end">
                          <div className="bg-[#1d1d20] w-3 relative h-3 -mr-px">
                            <div className="absolute inset-0 bg-gray-900 rounded-br-full border-r border-b border-[#27272b]">
                            </div>
                          </div>
                          <div className="bg-[#1d1d20] border border-b-0 border-gray-700/30 py-2 px-4 rounded-t-lg text-sm font-semibold sm:font-medium tracking-wide">
                            <div className="text-xs text-gray-400 uppercase -mx-1">
                              js
                            </div>
                          </div>
                          <div className="bg-[#1d1d20] w-3 relative h-3 -ml-px">
                            <div className="absolute inset-0 bg-gray-900 rounded-bl-full border-l border-b border-[#27272b]">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" shadow-md rounded-2xl relative border-0  ">
                        <div className="absolute inset-0 bg-dots fade-y opacity-50">
                        </div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={dracula}
                          showLineNumbers={true}
                          lineNumberStyle={{
                            minWidth: "2em",
                            paddingRight: "2em",
                            paddingLeft: "1em",
                            userSelect: "none",
                            opacity: 0.5,
                            paddingTop: "0.5rem",
                          }}
                          customStyle={{
                            backgroundColor: "#1d1d20",
                          }}
                          className={"shadow-md rounded-2xl relative border border-[#27272b] p-4"}
                        >
                          {`console.log('Start');
// Simulate an asynchronous operation using setTimeout
setTimeout(() => {
  console.log('Timeout Callback');
}, 2000);
// Simulate another synchronous operation
console.log('End');`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                    <div className="lg:-mx-6 relative my-10 group">
                      <div className="-mb-px -mt-5 flex justify-between px-6 relative z-10">
                        <div></div>
                        <div className="inline-flex items-end">
                          <div className="bg-[#1d1d20] w-3 relative h-3 -mr-px">
                            <div className="absolute inset-0 bg-gray-900 rounded-br-full border-r border-b border-[#27272b]">
                            </div>
                          </div>
                          <div className="bg-[#1d1d20] border border-b-0 border-gray-700/30 py-2 px-4 rounded-t-lg text-sm font-semibold sm:font-medium tracking-wide">
                            <div className="text-xs text-gray-400 uppercase -mx-1">
                              Output
                            </div>
                          </div>
                          <div className="bg-[#1d1d20] w-3 relative h-3 -ml-px">
                            <div className="absolute inset-0 bg-gray-900 rounded-bl-full border-l border-b border-[#27272b]">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" shadow-md rounded-2xl relative border-0  ">
                        <div className="absolute inset-0 bg-dots fade-y opacity-50">
                        </div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={dracula}
                          showLineNumbers={true}
                          lineNumberStyle={{
                            minWidth: "2em",
                            paddingRight: "2em",
                            paddingLeft: "1em",
                            userSelect: "none",
                            opacity: 0.5,
                            paddingTop: "0.5rem",
                          }}
                          customStyle={{
                            backgroundColor: "#1d1d20",
                          }}
                          className={"shadow-md rounded-2xl relative border border-[#27272b] p-4"}
                        >
                          {`Start
End
Timeout Callback`}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                    <ul>
                      <div>
                        <li className="text-white text-xl font-bold tracking-tight mt-6 leading-8 flex items-center gap-2">
                          <p>1.</p> <h1>Call Stack:</h1>
                        </li>
                        <div>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            The console.log('Start') is executed first and logs
                            "Start" to the console.
                          </li>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-3 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            Then, setTimeout is called. Instead of blocking the
                            call stack, this function is handed over to the Web
                            API with a timer of 2000ms.
                          </li>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-3 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            The console.log('End') is executed next, logging
                            "End" to the console.{" "}
                          </li>
                        </div>
                      </div>
                      <div>
                        <li className="text-white text-xl font-bold tracking-tight mt-6 leading-8 flex items-center gap-2">
                          <p>2.</p> <h1>Web API:</h1>
                        </li>
                        <div>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            The Web API waits for the 2000ms to elapse. Once the
                            timer expires, it places the () =>
                            console.log('Timeout Callback') function in the
                            callback queue.
                          </li>
                        </div>
                      </div>
                      <div>
                        <li className="text-white text-xl font-bold tracking-tight mt-6 leading-8 flex items-center gap-2">
                          <p>3.</p> <h1>Event Loop:</h1>
                        </li>
                        <div>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-6 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            The event loop checks if the call stack is empty.
                            After console.log('End'), the stack is indeed empty,
                            so it takes the function from the callback queue and
                            pushes it onto the call stack.
                          </li>
                        </div>
                        <div>
                          <li
                            className="ml-10 text-gray-400 text-lg font-medium tracking-tight mt-3 leading-8 "
                            style={{ listStyle: "outside" }}
                          >
                            Finally, console.log('Timeout Callback') is
                            executed, logging "Timeout Callback" to the console.
                          </li>
                        </div>
                      </div>
                    </ul>
                    <div className="mt-6">
                      <span
                        className=" text-gray-400 text-lg font-medium tracking-tight leading-8 "
                        style={{ listStyle: "outside" }}
                      >
                       This illustrates how asynchronous operations do not block the main thread, allowing JavaScript to remain non-blocking and responsive.
                      </span>
                    </div>
                  </div>
                </div>
                <aside
                  className="sticky -order-1 pl-6 pt-48 top-0 mt-[90vh] min-h-[80vh] hidden xl:block focus-within:!opacity-100 focus-within:!pointer-events-auto"
                  style={{ opacity: 0, pointerEvents: "none" }}
                >
                  <div className="opacity-60 hover:opacity-100 transition duration-300">
                    <div className="font-medium text-xs"></div>
                  </div>
                </aside>
              </article>
              <section className="container mx-auto px-8 2xl:px-32 mt-24">
              <h2 className="text-3xl font-semibold tracking-tight leading-normal">
              Relevant Blogs
              </h2>
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-end justify-between">
                <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium max-w-3xl">
                Check out these related posts where I explore similar topics in-depth. Each one builds on my journey of learning and sharing insights that might spark your curiosity too.
                </p>
                <Link
                  href="/blogs/"
                  className="flex-shrink-0 font-medium inline-flex items-center gap-2 text-green-300 hover:underline hover:text-sky-400 underline-offset-4 transition"
                >
                  View all posts
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M5 12l14 0"></path>
                    <path d="M13 18l6 -6"></path>
                    <path d="M13 6l6 6"></path>
                  </svg>
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
               
               {
                horizontalPost.map((item)=>{
                  return <>
                   <div
                  className="group bg-gray-800/20 rounded-2xl relative overflow-hidden shadow-md hover:shadow-2xl hover:bg-gray-800/50 transition w-full h-full block @container"
                  style={
                    {
                      "--highlight-color": "#3fa4ff" as string,
                      background: "rgba(39, 39, 42, .9)",
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-col h-full p-8 pb-5 @lg:p-12">
                      <h3 className="font-semibold mb-6 @lg:leading-normal text-xl @lg:text-3xl">
                        <Link href="/blog/full-page-theme-toggle-animation-with-view-transitions-api/">
                          <span className="z-10 absolute inset-0"></span>
                          {item.name}
                          {/* <span className="text-highlight">
                            View Transitions API
                          </span> */}
                        </Link>
                      </h3>
                      <p className="hidden @lg:block text-gray-400 font-medium tracking-wide mb-4"></p>
                      <div className="text-gray-400 font-medium mt-auto flex gap-2 @lg:text-gray-500 text-sm @lg:text-base @lg:gap-3">
                        <time dateTime="2023-11-02T00:00:00.000Z">
                         {item.date}
                        </time>
                        <span aria-hidden="true">•</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <div className="relative mt-auto">
                      <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained group-hover:scale-[1.025] transition-transform origin-top">
                        <div style={{ maxWidth: "1387px", display: "block" }}>
                          <Image
                            alt="Descriptive Alt Text"
                            src={item.image}
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              position: "static",
                            }}
                             layout="responsive"
                             width={100}
                             height={100}
                          />
                        </div>
                        <Image
                          alt="Descriptive Alt Text"
                          src={item.image}
                          style={{
                            opacity: 0,
                            transition: "opacity 500ms linear",
                            objectFit: "cover",
                          }}
                          decoding="async"
                           layout="responsive"
                           width={100}
                             height={100}
                        />
                        <Image
                          width="1387"
                          src={item.image}
                          height="816"
                          style={{ objectFit: "cover", opacity: 1 }}
                          sizes="(min-width: 1387px) 1387px, 100vw"
                          decoding="async"
                          loading="lazy"
                           layout="responsive"
                           width={100}
                           height={100}
                          alt="Full-page theme toggle animation with View Transitions API"
                        />

                        <div className="light-effect"></div>
                      </div>
                      <div className="absolute inset-0 overflow-hidden opacity-10">
                        <div className="absolute -inset-x-6 inset-y-4 bg-noise [mask-image:linear-gradient(transparent,white,transparent)] -rotate-6 -translate-y-full"></div>
                      </div>
                      <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-gray-700/30 rounded-2xl pointer-events-none"></div>
                </div>
                  
                  </>
                })
               }
              </div>
              
            </section>
            </div>
            <div className="lg:-mx-6 relative my-10 group"></div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};
export default Artical1;
