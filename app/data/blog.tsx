import { title } from "process";

const blog = [
  {
    title: "What is event loop in Javascript",
    desc: `
The event loop in JavaScript is a fundamental concept that enables asynchronous programming by managing the execution of code, collecting and processing events, and executing queued tasks. JavaScript is single-threaded, meaning it can execute one task at a time, but it can handle asynchronous operations like network requests, file I/O, or timers through the event loop.`,
    lists: {
      heading: "How the Event Loop Works:",
      1: {
        title: "Call Stack:",
        description:
          "The call stack is a data structure that tracks the execution of functions. When a function is called, it's added to the call stack, and when the function finishes executing, it's removed from the stack.",
      },
      2: {
        title: "Web APIs/Node APIs:",
        description:
          " These are provided by the browser or Node.js to handle tasks like DOM manipulation, HTTP requests, timers, etc. When an asynchronous task is performed (e.g., setTimeout, fetch), it is handled by these APIs.",
      },
      3: {
        title: "Callback Queue/Task Queue:",
        description:
          "When an asynchronous task completes, its callback is added to the callback queue.",
      },
      4: {
        title: "Event Loop:",
        description:
          "The event loop continuously checks the call stack to see if it's empty. If the call stack is empty, it checks the callback queue. If there are tasks in the callback queue, the event loop moves them to the call stack for execution.",
      },
    },
    cd: {
      code: `console.log('Start');

setTimeout(() => {
  console.log('Inside setTimeout');
}, 1000);

console.log('End');
`,
    },
    dotsExplanation:{
      heading:"Explanation:",
      p1:`"Start" is logged first.`,
      p2:`setTimeout is called, and its callback is passed to the Web API. The main thread continues executing the next line.`,
      p3:`"End" is logged.`,
      p4:`After 1000ms, the callback in setTimeout is added to the callback queue.`,
      p5:`The event loop moves the callback to the call stack, and "Inside setTimeout" is logged.`
    },
    cd2:{
      code:`console.log('Start');

const promise = new Promise((resolve, reject) => {
  console.log('Inside promise');
  resolve('Promise resolved');
});

promise.then((res) => {
  console.log(res);
});

console.log('End');
`
    },
    dotsExplanation1: {
      heading: "Explanation:",
      p1: `"Start" is logged first.`,
      p2: `The promise is created, and "Inside promise" is logged.`,
      p3: `The then callback is added to the microtask queue (a special queue with higher priority than the callback queue).`,
      p4: `"End" is logged.`,
      p5: `The event loop checks the microtask queue after the call stack is empty and executes the then callback, logging "Promise resolved".`
    }
    
  },

];
