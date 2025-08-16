import { Course, Section, Unit } from '../types/course';

export const generateJavaScriptCourse = (): Course => {
  return {
    id: 'javascript_fundamentals_2025',
    title: 'Complete JavaScript Fundamentals',
    description: 'Master JavaScript from basics to advanced concepts. Learn ES6+, DOM manipulation, async programming, and modern JavaScript development practices.',
    instructor: 'JavaScript Academy',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
    sections: [
      {
        id: 'js_section_1',
        title: 'JavaScript Basics and Fundamentals',
        description: 'Learn the core concepts of JavaScript programming',
        order: 0,
        units: [
          {
            id: 'js_unit_1_1',
            title: 'Introduction to JavaScript',
            description: 'What is JavaScript and why learn it?',
            type: 'video',
            duration: 15,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_1_2',
            title: 'JavaScript Syntax and Variables',
            description: 'Understanding JavaScript syntax, variables, and data types',
            type: 'article',
            duration: 20,
            order: 1,
            content: {
              article: {
                markdown: `# JavaScript Syntax and Variables

## Introduction
JavaScript is a dynamic, interpreted programming language that's essential for web development. Let's explore the fundamental syntax and variable concepts.

## Variables in JavaScript

### Variable Declaration
JavaScript provides three ways to declare variables:

\`\`\`javascript
// var - function scoped (avoid in modern JS)
var oldWay = "I'm function scoped";

// let - block scoped (preferred for mutable variables)
let modernWay = "I'm block scoped";

// const - block scoped, immutable reference
const constant = "I can't be reassigned";
\`\`\`

### Data Types
JavaScript has several primitive data types:

\`\`\`javascript
// Numbers
let age = 25;
let price = 99.99;

// Strings
let name = "John Doe";
let message = 'Hello World';
let template = \`My name is \${name}\`;

// Booleans
let isActive = true;
let isComplete = false;

// Undefined and Null
let notDefined;
let empty = null;

// Symbols (ES6+)
let symbol = Symbol('unique');

// BigInt (ES2020+)
let bigNumber = 123456789012345678901234567890n;
\`\`\`

## Best Practices

1. **Use \`const\` by default** - Only use \`let\` when you need to reassign
2. **Avoid \`var\`** - It has confusing scoping rules
3. **Use descriptive names** - \`userName\` instead of \`u\`
4. **Follow camelCase** - JavaScript convention for variable names

## Type Checking

\`\`\`javascript
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (this is a known quirk)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
\`\`\`

Understanding these fundamentals is crucial for writing effective JavaScript code.`
              }
            }
          },
          {
            id: 'js_unit_1_3',
            title: 'JavaScript Variables Quiz',
            description: 'Test your knowledge of JavaScript variables and data types',
            type: 'quiz',
            duration: 10,
            order: 2,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'Which keyword should you use by default for variable declaration in modern JavaScript?',
                    options: ['var', 'let', 'const', 'define'],
                    correctAnswer: 2,
                    explanation: 'Use const by default as it prevents accidental reassignment. Only use let when you need to reassign the variable.'
                  },
                  {
                    id: 'q2',
                    type: 'true-false',
                    question: 'The typeof null returns "null" in JavaScript.',
                    correctAnswer: 'false',
                    explanation: 'This is a well-known quirk in JavaScript. typeof null actually returns "object", not "null".'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'js_section_2',
        title: 'Functions and Scope',
        description: 'Master JavaScript functions, scope, and closures',
        order: 1,
        units: [
          {
            id: 'js_unit_2_1',
            title: 'JavaScript Functions Explained',
            description: 'Learn about function declarations, expressions, and arrow functions',
            type: 'video',
            duration: 25,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=N8ap4k_1QEQ',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_2_2',
            title: 'Understanding JavaScript Scope',
            description: 'Deep dive into global, function, and block scope',
            type: 'article',
            duration: 30,
            order: 1,
            content: {
              article: {
                markdown: `# Understanding JavaScript Scope

## What is Scope?
Scope determines where variables can be accessed in your code. JavaScript has several types of scope that every developer must understand.

## Types of Scope

### 1. Global Scope
Variables declared outside any function or block have global scope:

\`\`\`javascript
// Global scope
let globalVariable = "I'm accessible everywhere";

function myFunction() {
    console.log(globalVariable); // ✅ Accessible
}

console.log(globalVariable); // ✅ Accessible
\`\`\`

### 2. Function Scope
Variables declared inside a function are only accessible within that function:

\`\`\`javascript
function myFunction() {
    let functionScoped = "I'm only accessible inside this function";
    console.log(functionScoped); // ✅ Accessible
}

// console.log(functionScoped); // ❌ ReferenceError
\`\`\`

### 3. Block Scope (ES6+)
Variables declared with \`let\` and \`const\` inside a block are block-scoped:

\`\`\`javascript
if (true) {
    let blockScoped = "I'm only accessible in this block";
    const alsoBlockScoped = "Me too!";
    var functionScoped = "I'm function scoped, not block scoped";
}

// console.log(blockScoped); // ❌ ReferenceError
// console.log(alsoBlockScoped); // ❌ ReferenceError
console.log(functionScoped); // ✅ Accessible (var is function-scoped)
\`\`\`

## Lexical Scope and Closures

JavaScript uses lexical scoping, meaning inner functions have access to outer function variables:

\`\`\`javascript
function outerFunction(x) {
    // Outer function scope
    
    function innerFunction(y) {
        // Inner function has access to outer function's variables
        console.log(x + y); // x is accessible here
    }
    
    return innerFunction;
}

const addFive = outerFunction(5);
addFive(3); // Outputs: 8
\`\`\`

## Best Practices

1. **Minimize global variables** - They can cause naming conflicts
2. **Use \`let\` and \`const\`** - They provide block scope
3. **Understand closure implications** - They can cause memory leaks if not handled properly
4. **Use IIFE when needed** - Immediately Invoked Function Expressions create isolated scope

\`\`\`javascript
// IIFE Example
(function() {
    let privateVariable = "I'm private";
    // This code runs immediately and creates its own scope
})();
\`\`\`

Understanding scope is fundamental to writing clean, bug-free JavaScript code.`
              }
            }
          },
          {
            id: 'js_unit_2_3',
            title: 'Arrow Functions Deep Dive',
            description: 'Master ES6 arrow functions and their differences from regular functions',
            type: 'video',
            duration: 20,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=h33Srr5J9nY',
                provider: 'youtube'
              }
            }
          }
        ]
      },
      {
        id: 'js_section_3',
        title: 'Objects and Arrays',
        description: 'Work with JavaScript objects, arrays, and data structures',
        order: 2,
        units: [
          {
            id: 'js_unit_3_1',
            title: 'JavaScript Objects Explained',
            description: 'Learn about object creation, properties, and methods',
            type: 'video',
            duration: 22,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=X0ipw1k7ygU',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_3_2',
            title: 'JavaScript Arrays Mastery',
            description: 'Master array methods, iteration, and manipulation',
            type: 'video',
            duration: 28,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=R8rmfD9Y5-c',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_3_3',
            title: 'Advanced Object and Array Techniques',
            description: 'Destructuring, spread operator, and advanced patterns',
            type: 'article',
            duration: 25,
            order: 2,
            content: {
              article: {
                markdown: `# Advanced Object and Array Techniques

## Destructuring Assignment

### Object Destructuring
Extract properties from objects into variables:

\`\`\`javascript
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    country: 'USA'
};

// Basic destructuring
const { name, age } = person;
console.log(name); // 'John Doe'
console.log(age);  // 30

// Renaming variables
const { name: fullName, city: location } = person;
console.log(fullName); // 'John Doe'
console.log(location); // 'New York'

// Default values
const { name, profession = 'Unknown' } = person;
console.log(profession); // 'Unknown'
\`\`\`

### Array Destructuring
Extract elements from arrays:

\`\`\`javascript
const colors = ['red', 'green', 'blue', 'yellow'];

// Basic destructuring
const [first, second] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'

// Skipping elements
const [, , third] = colors;
console.log(third); // 'blue'

// Rest operator
const [primary, ...secondary] = colors;
console.log(primary);   // 'red'
console.log(secondary); // ['green', 'blue', 'yellow']
\`\`\`

## Spread Operator (...)

### With Arrays
\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combining arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copying arrays
const copy = [...arr1];
console.log(copy); // [1, 2, 3]

// Converting NodeList to Array
const elements = [...document.querySelectorAll('div')];
\`\`\`

### With Objects
\`\`\`javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combining objects
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }

// Copying objects
const copy = { ...obj1 };
console.log(copy); // { a: 1, b: 2 }

// Overriding properties
const updated = { ...obj1, b: 10, e: 5 };
console.log(updated); // { a: 1, b: 10, e: 5 }
\`\`\`

## Advanced Array Methods

### Map, Filter, Reduce
\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter - select elements that meet criteria
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Reduce - accumulate values
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
\`\`\`

### Find and Some/Every
\`\`\`javascript
const users = [
    { id: 1, name: 'John', active: true },
    { id: 2, name: 'Jane', active: false },
    { id: 3, name: 'Bob', active: true }
];

// Find first matching element
const activeUser = users.find(user => user.active);
console.log(activeUser); // { id: 1, name: 'John', active: true }

// Check if some elements match
const hasActiveUsers = users.some(user => user.active);
console.log(hasActiveUsers); // true

// Check if all elements match
const allActive = users.every(user => user.active);
console.log(allActive); // false
\`\`\`

## Object Methods and Patterns

### Object.keys(), Object.values(), Object.entries()
\`\`\`javascript
const person = { name: 'John', age: 30, city: 'NYC' };

console.log(Object.keys(person));   // ['name', 'age', 'city']
console.log(Object.values(person)); // ['John', 30, 'NYC']
console.log(Object.entries(person)); // [['name', 'John'], ['age', 30], ['city', 'NYC']]
\`\`\`

These advanced techniques make JavaScript code more concise and expressive.`
              }
            }
          }
        ]
      },
      {
        id: 'js_section_4',
        title: 'DOM Manipulation',
        description: 'Learn to interact with the Document Object Model',
        order: 3,
        units: [
          {
            id: 'js_unit_4_1',
            title: 'DOM Manipulation Fundamentals',
            description: 'Learn to select and modify HTML elements with JavaScript',
            type: 'video',
            duration: 30,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=5fb2aPlgoys',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_4_2',
            title: 'Event Handling in JavaScript',
            description: 'Master event listeners and event handling patterns',
            type: 'video',
            duration: 25,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=XF1_MlZ5l6M',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_4_3',
            title: 'DOM Manipulation Quiz',
            description: 'Test your DOM manipulation knowledge',
            type: 'quiz',
            duration: 15,
            order: 2,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'Which method is used to select an element by its ID?',
                    options: ['querySelector()', 'getElementById()', 'getElementsByClassName()', 'getElementsByTagName()'],
                    correctAnswer: 1,
                    explanation: 'getElementById() is specifically designed to select elements by their ID attribute.'
                  },
                  {
                    id: 'q2',
                    type: 'fill-in-blank',
                    question: 'To add an event listener to an element, you use the _______ method.',
                    correctAnswer: 'addEventListener',
                    explanation: 'addEventListener() is the modern way to attach event handlers to DOM elements.'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'js_section_5',
        title: 'Asynchronous JavaScript',
        description: 'Master promises, async/await, and asynchronous programming',
        order: 4,
        units: [
          {
            id: 'js_unit_5_1',
            title: 'JavaScript Promises Explained',
            description: 'Understanding promises and asynchronous JavaScript',
            type: 'video',
            duration: 35,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=DHvZLI7Db8E',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_5_2',
            title: 'Async/Await Tutorial',
            description: 'Modern asynchronous JavaScript with async/await',
            type: 'video',
            duration: 28,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=V_Kr9OSfDeU',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_5_3',
            title: 'Fetch API and HTTP Requests',
            description: 'Making HTTP requests with the Fetch API',
            type: 'article',
            duration: 20,
            order: 2,
            content: {
              article: {
                markdown: `# Fetch API and HTTP Requests

## Introduction to Fetch API
The Fetch API provides a modern way to make HTTP requests in JavaScript, replacing the older XMLHttpRequest.

## Basic Fetch Usage

### GET Requests
\`\`\`javascript
// Basic GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// With async/await
async function fetchPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

### POST Requests
\`\`\`javascript
// POST request with JSON data
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'New Post',
        body: 'This is the post content',
        userId: 1
      })
    });
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

## Error Handling

### Checking Response Status
\`\`\`javascript
async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
\`\`\`

## Advanced Fetch Patterns

### Request with Timeout
\`\`\`javascript
function fetchWithTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
}
\`\`\`

### Multiple Requests
\`\`\`javascript
// Parallel requests
async function fetchMultiple() {
  try {
    const [posts, users, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(r => r.json())
    ]);
    
    return { posts, users, comments };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
\`\`\`

## Best Practices

1. **Always handle errors** - Network requests can fail
2. **Check response status** - 404 and 500 errors don't reject promises
3. **Use appropriate HTTP methods** - GET, POST, PUT, DELETE
4. **Set proper headers** - Content-Type, Authorization, etc.
5. **Consider request timeouts** - Prevent hanging requests

The Fetch API is essential for modern web development and API integration.`
              }
            }
          }
        ]
      },
      {
        id: 'js_section_6',
        title: 'ES6+ Modern JavaScript',
        description: 'Learn modern JavaScript features and syntax',
        order: 5,
        units: [
          {
            id: 'js_unit_6_1',
            title: 'ES6 Features Overview',
            description: 'Complete guide to ES6+ features and modern JavaScript',
            type: 'video',
            duration: 40,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=nZ1DMMsyVyI',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_6_2',
            title: 'JavaScript Modules',
            description: 'Import/Export and module system in JavaScript',
            type: 'video',
            duration: 25,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'js_unit_6_3',
            title: 'JavaScript Reference Guide',
            description: 'Comprehensive reference for JavaScript developers',
            type: 'file',
            duration: 5,
            order: 2,
            content: {
              file: {
                filename: 'javascript-reference-guide.pdf',
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
                size: '2.5 MB'
              }
            }
          }
        ]
      },
      {
        id: 'js_section_7',
        title: 'Final Assessment',
        description: 'Test your complete JavaScript knowledge',
        order: 6,
        units: [
          {
            id: 'js_unit_7_1',
            title: 'JavaScript Fundamentals Final Quiz',
            description: 'Comprehensive test covering all JavaScript concepts',
            type: 'quiz',
            duration: 30,
            order: 0,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'What is the difference between let and const?',
                    options: [
                      'let is block-scoped, const is function-scoped',
                      'let can be reassigned, const cannot be reassigned',
                      'let is hoisted, const is not hoisted',
                      'There is no difference'
                    ],
                    correctAnswer: 1,
                    explanation: 'Both let and const are block-scoped, but const creates an immutable binding (cannot be reassigned).'
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice',
                    question: 'Which method is used to add an event listener to a DOM element?',
                    options: ['onClick()', 'addEventListener()', 'attachEvent()', 'bindEvent()'],
                    correctAnswer: 1,
                    explanation: 'addEventListener() is the standard method for attaching event handlers to DOM elements.'
                  },
                  {
                    id: 'q3',
                    type: 'true-false',
                    question: 'Arrow functions have their own "this" context.',
                    correctAnswer: 'false',
                    explanation: 'Arrow functions do not have their own "this" context; they inherit it from the enclosing scope.'
                  },
                  {
                    id: 'q4',
                    type: 'fill-in-blank',
                    question: 'The _______ operator is used to spread array elements or object properties.',
                    correctAnswer: 'spread',
                    explanation: 'The spread operator (...) is used to expand arrays and objects.'
                  },
                  {
                    id: 'q5',
                    type: 'multiple-choice',
                    question: 'What does the fetch() function return?',
                    options: ['JSON data', 'A Promise', 'An XMLHttpRequest object', 'A string'],
                    correctAnswer: 1,
                    explanation: 'fetch() returns a Promise that resolves to the Response object representing the response to the request.'
                  }
                ],
                passingScore: 80
              }
            }
          }
        ]
      }
    ]
  };
};

export const generateNextjsCourse = (): Course => {
  return {
    id: 'nextjs_course_2024',
    title: 'Complete Next.js Development Course',
    description: 'Master Next.js from fundamentals to advanced concepts including App Router, Server Components, and full-stack development.',
    instructor: 'Alex Rodriguez',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: [
      {
        id: 'nextjs_section_1',
        title: 'Next.js Fundamentals',
        description: 'Learn the fundamentals of Next.js and set up your development environment',
        order: 0,
        units: [
          {
            id: 'nextjs_unit_1_1',
            title: 'What is Next.js?',
            description: 'Introduction to Next.js and its core features',
            type: 'video',
            duration: 15,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=Sklc_fQBmcs',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_1_2',
            title: 'Setting Up Next.js Development Environment',
            description: 'Install Node.js, create Next.js app, and essential tools',
            type: 'video',
            duration: 20,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_1_3',
            title: 'Next.js Project Structure',
            description: 'Understanding Next.js project structure and file conventions',
            type: 'article',
            duration: 25,
            order: 2,
            content: {
              article: {
                markdown: `# Next.js Project Structure

Next.js follows a specific project structure that enables its powerful features like file-based routing, API routes, and automatic optimization.

## Key Directories and Files

### \`pages/\` Directory (Pages Router)
The \`pages\` directory contains your application's routes. Each file becomes a route based on its filename:

\`\`\`jsx
// pages/index.js -> /
// pages/about.js -> /about
// pages/blog/[slug].js -> /blog/:slug
\`\`\`

### \`app/\` Directory (App Router - Next.js 13+)
The new App Router uses the \`app\` directory for routing:

\`\`\`
app/
  layout.js          # Root layout
  page.js           # Home page
  about/
    page.js         # About page
  blog/
    [slug]/
      page.js       # Dynamic blog post
\`\`\`

### \`public/\` Directory
Static assets like images, icons, and other files:

\`\`\`
public/
  favicon.ico
  images/
  robots.txt
\`\`\`

### \`styles/\` Directory
CSS files and styling:

\`\`\`
styles/
  globals.css
  Home.module.css
\`\`\`

### Configuration Files

- \`next.config.js\` - Next.js configuration
- \`package.json\` - Dependencies and scripts
- \`tsconfig.json\` - TypeScript configuration (if using TypeScript)

## File-based Routing

Next.js uses the file system for routing. This means:

1. **Automatic routing**: Files in \`pages/\` or \`app/\` become routes
2. **Dynamic routes**: Use brackets for dynamic segments
3. **Nested routes**: Folder structure creates nested routes
4. **API routes**: \`pages/api/\` or \`app/api/\` for backend endpoints

## Best Practices

1. **Organize by feature**: Group related files together
2. **Use meaningful names**: File names become URLs
3. **Leverage conventions**: Follow Next.js naming conventions
4. **Separate concerns**: Keep components, styles, and logic organized

Understanding this structure is crucial for effective Next.js development.`
              }
            }
          },
          {
            id: 'nextjs_unit_1_4',
            title: 'Next.js Fundamentals Quiz',
            description: 'Test your understanding of Next.js basics',
            type: 'quiz',
            duration: 10,
            order: 3,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q1_1',
                    type: 'multiple-choice',
                    question: 'What is the main advantage of Next.js over plain React?',
                    options: [
                      'Server-side rendering and static site generation',
                      'Better component syntax',
                      'Faster JavaScript execution',
                      'Built-in state management'
                    ],
                    correctAnswer: 0,
                    explanation: 'Next.js provides server-side rendering, static site generation, and many other optimizations out of the box.'
                  },
                  {
                    id: 'q1_2',
                    type: 'multiple-choice',
                    question: 'Which directory is used for file-based routing in Next.js?',
                    options: ['src/', 'components/', 'pages/', 'routes/'],
                    correctAnswer: 2,
                    explanation: 'The pages/ directory (or app/ in Next.js 13+) is used for file-based routing.'
                  },
                  {
                    id: 'q1_3',
                    type: 'true-false',
                    question: 'Next.js requires manual configuration for routing.',
                    correctAnswer: 'false',
                    explanation: 'Next.js uses file-based routing, which means routes are automatically created based on the file structure.'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'nextjs_section_2',
        title: 'Pages and Routing',
        description: 'Master Next.js routing system and page creation',
        order: 1,
        units: [
          {
            id: 'nextjs_unit_2_1',
            title: 'File-based Routing in Next.js',
            description: 'Understanding how Next.js routing works',
            type: 'video',
            duration: 18,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=1WmNXEVia8I',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_2_2',
            title: 'Dynamic Routes and Parameters',
            description: 'Creating dynamic routes with parameters',
            type: 'video',
            duration: 22,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=MFuwkrseXVE',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_2_3',
            title: 'Navigation and Link Component',
            description: 'Client-side navigation in Next.js applications',
            type: 'article',
            duration: 20,
            order: 2,
            content: {
              article: {
                markdown: `# Navigation and Link Component

Next.js provides powerful navigation capabilities through the Link component and useRouter hook for client-side navigation.

## The Link Component

The Link component enables client-side navigation between pages:

\`\`\`jsx
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}
\`\`\`

## Dynamic Links

For dynamic routes, you can pass parameters:

\`\`\`jsx
import Link from 'next/link'

export default function BlogList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <Link key={post.id} href={\`/blog/\${post.slug}\`}>
          {post.title}
        </Link>
      ))}
    </div>
  )
}
\`\`\`

## useRouter Hook

For programmatic navigation:

\`\`\`jsx
import { useRouter } from 'next/router'

export default function LoginForm() {
  const router = useRouter()

  const handleSubmit = async (formData) => {
    // Handle login logic
    if (loginSuccessful) {
      router.push('/dashboard')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  )
}
\`\`\`

## Router Methods

- \`router.push(url)\` - Navigate to a new page
- \`router.replace(url)\` - Replace current page in history
- \`router.back()\` - Go back in history
- \`router.reload()\` - Reload current page

## Prefetching

Next.js automatically prefetches linked pages for better performance:

\`\`\`jsx
// Prefetching is enabled by default
<Link href="/about">About</Link>

// Disable prefetching
<Link href="/about" prefetch={false}>About</Link>
\`\`\`

## Shallow Routing

Update the URL without running data fetching methods:

\`\`\`jsx
router.push('/about?tab=profile', undefined, { shallow: true })
\`\`\`

Navigation in Next.js is optimized for performance and provides a great user experience.`
              }
            }
          },
          {
            id: 'nextjs_unit_2_4',
            title: 'Routing Quiz',
            description: 'Test your knowledge of Next.js routing',
            type: 'quiz',
            duration: 8,
            order: 3,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q2_1',
                    type: 'multiple-choice',
                    question: 'How do you create a dynamic route in Next.js?',
                    options: [
                      'Use square brackets in the filename',
                      'Add a route configuration file',
                      'Use the Router.add() method',
                      'Create a routes.js file'
                    ],
                    correctAnswer: 0,
                    explanation: 'Dynamic routes are created using square brackets in the filename, like [id].js or [slug].js.'
                  },
                  {
                    id: 'q2_2',
                    type: 'fill-in-blank',
                    question: 'The _____ component is used for client-side navigation in Next.js.',
                    correctAnswer: 'Link',
                    explanation: 'The Link component from next/link is used for client-side navigation between pages.'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'nextjs_section_3',
        title: 'Data Fetching',
        description: 'Learn different data fetching methods in Next.js',
        order: 2,
        units: [
          {
            id: 'nextjs_unit_3_1',
            title: 'getStaticProps and Static Generation',
            description: 'Fetch data at build time for static pages',
            type: 'video',
            duration: 25,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=9OfL9H6AmhQ',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_3_2',
            title: 'getServerSideProps and Server-side Rendering',
            description: 'Fetch data on each request for dynamic content',
            type: 'video',
            duration: 20,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=BGI_TQ58nag',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_3_3',
            title: 'Client-side Data Fetching',
            description: 'Fetch data on the client side with SWR and React Query',
            type: 'article',
            duration: 18,
            order: 2,
            content: {
              article: {
                markdown: `# Client-side Data Fetching in Next.js

While Next.js excels at server-side data fetching, there are times when you need to fetch data on the client side for dynamic, user-specific content.

## When to Use Client-side Fetching

- User-specific data (dashboards, profiles)
- Real-time data that changes frequently
- Data that depends on user interactions
- Private data that shouldn't be pre-rendered

## Using SWR

SWR is a popular data fetching library created by Vercel:

\`\`\`jsx
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return <div>Hello {data.name}!</div>
}
\`\`\`

## SWR Features

- **Caching**: Automatic caching and deduplication
- **Revalidation**: Background updates and focus revalidation
- **Error handling**: Built-in error retry and handling
- **TypeScript**: Full TypeScript support

## Using React Query (TanStack Query)

React Query is another powerful data fetching solution:

\`\`\`jsx
import { useQuery } from '@tanstack/react-query'

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(res => res.json())
  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error occurred'

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
\`\`\`

## Native Fetch with useEffect

For simple cases, you can use native fetch:

\`\`\`jsx
import { useState, useEffect } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
\`\`\`

## Best Practices

1. **Use SWR or React Query** for complex data fetching needs
2. **Handle loading and error states** properly
3. **Implement proper caching** strategies
4. **Consider data freshness** requirements
5. **Optimize for user experience** with loading indicators

Choose the right data fetching strategy based on your specific needs and requirements.`
              }
            }
          },
          {
            id: 'nextjs_unit_3_4',
            title: 'Data Fetching Methods',
            description: 'Reference guide for Next.js data fetching',
            type: 'file',
            duration: 5,
            order: 3,
            content: {
              file: {
                filename: 'nextjs-data-fetching-guide.pdf',
                url: 'https://nextjs.org/docs/basic-features/data-fetching',
                size: '2.1 MB'
              }
            }
          }
        ]
      },
      {
        id: 'nextjs_section_4',
        title: 'API Routes and Backend',
        description: 'Build full-stack applications with Next.js API routes',
        order: 3,
        units: [
          {
            id: 'nextjs_unit_4_1',
            title: 'Creating API Routes',
            description: 'Build backend endpoints with Next.js API routes',
            type: 'video',
            duration: 22,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=_peUbJ9leCc',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_4_2',
            title: 'Database Integration',
            description: 'Connect your Next.js app to databases',
            type: 'video',
            duration: 28,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=Wr-qtAb0wQw',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_4_3',
            title: 'Authentication in Next.js',
            description: 'Implement authentication with NextAuth.js',
            type: 'video',
            duration: 35,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=1MTyCvS05V4',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_4_4',
            title: 'API Routes Quiz',
            description: 'Test your knowledge of Next.js backend development',
            type: 'quiz',
            duration: 12,
            order: 3,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q4_1',
                    type: 'multiple-choice',
                    question: 'Where do you create API routes in Next.js?',
                    options: ['pages/api/', 'api/', 'routes/', 'backend/'],
                    correctAnswer: 0,
                    explanation: 'API routes are created in the pages/api/ directory (or app/api/ in App Router).'
                  },
                  {
                    id: 'q4_2',
                    type: 'true-false',
                    question: 'API routes in Next.js can handle multiple HTTP methods.',
                    correctAnswer: 'true',
                    explanation: 'API routes can handle different HTTP methods (GET, POST, PUT, DELETE) by checking the request method.'
                  },
                  {
                    id: 'q4_3',
                    type: 'fill-in-blank',
                    question: 'The _____ object contains information about the incoming request in API routes.',
                    correctAnswer: 'req',
                    explanation: 'The req (request) object contains information about the HTTP request including method, headers, and body.'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'nextjs_section_5',
        title: 'Styling and CSS',
        description: 'Learn different styling approaches in Next.js',
        order: 4,
        units: [
          {
            id: 'nextjs_unit_5_1',
            title: 'CSS Modules in Next.js',
            description: 'Scoped CSS with CSS Modules',
            type: 'video',
            duration: 18,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=C7MRkqP5NRI',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_5_2',
            title: 'Styled-jsx and CSS-in-JS',
            description: 'Built-in CSS-in-JS solution in Next.js',
            type: 'video',
            duration: 16,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=DN7VuIrOT1Y',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_5_3',
            title: 'Tailwind CSS with Next.js',
            description: 'Setting up and using Tailwind CSS',
            type: 'video',
            duration: 24,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=YkS1U9_wTlo',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_5_4',
            title: 'Styling Quiz',
            description: 'Test your knowledge of styling in Next.js',
            type: 'quiz',
            duration: 10,
            order: 3,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q5_1',
                    type: 'multiple-choice',
                    question: 'What is the main advantage of CSS Modules in Next.js?',
                    options: ['Faster loading', 'Scoped CSS classes', 'Better performance', 'Smaller bundle size'],
                    correctAnswer: 1,
                    explanation: 'CSS Modules provide scoped CSS classes, preventing style conflicts between components.'
                  },
                  {
                    id: 'q5_2',
                    type: 'true-false',
                    question: 'Next.js has built-in support for styled-jsx.',
                    correctAnswer: 'true',
                    explanation: 'Next.js includes styled-jsx as a built-in CSS-in-JS solution.'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'nextjs_section_6',
        title: 'Performance and Optimization',
        description: 'Optimize your Next.js applications for production',
        order: 5,
        units: [
          {
            id: 'nextjs_unit_6_1',
            title: 'Image Optimization',
            description: 'Optimize images with Next.js Image component',
            type: 'video',
            duration: 20,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=IU_qq_c_lKA',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_6_2',
            title: 'Code Splitting and Lazy Loading',
            description: 'Improve performance with code splitting',
            type: 'video',
            duration: 22,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=JU6sl_yyZqs',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_6_3',
            title: 'Bundle Analysis and Optimization',
            description: 'Analyze and optimize your Next.js bundle',
            type: 'video',
            duration: 18,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=VBlSe8tvg4U',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_6_4',
            title: 'Performance Quiz',
            description: 'Test your knowledge of Next.js performance optimization',
            type: 'quiz',
            duration: 8,
            order: 3,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q6_1',
                    type: 'multiple-choice',
                    question: 'What is the main benefit of the Next.js Image component?',
                    options: ['Smaller file sizes', 'Automatic optimization and lazy loading', 'Better browser support', 'Faster uploads'],
                    correctAnswer: 1,
                    explanation: 'The Next.js Image component provides automatic optimization, lazy loading, and responsive images.'
                  },
                  {
                    id: 'q6_2',
                    type: 'true-false',
                    question: 'Next.js automatically splits code at the page level.',
                    correctAnswer: 'true',
                    explanation: 'Next.js automatically splits code at the page level, loading only the JavaScript needed for each page.'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'nextjs_section_7',
        title: 'Deployment and Production',
        description: 'Deploy your Next.js applications to production',
        order: 6,
        units: [
          {
            id: 'nextjs_unit_7_1',
            title: 'Deploying to Vercel',
            description: 'Deploy your Next.js app to Vercel platform',
            type: 'video',
            duration: 15,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=2HBIzEx6IZA',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_7_2',
            title: 'Environment Variables and Configuration',
            description: 'Manage environment variables in Next.js',
            type: 'video',
            duration: 12,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=17UVejOw3zA',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_7_3',
            title: 'Production Optimization',
            description: 'Optimize your Next.js app for production',
            type: 'video',
            duration: 20,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=3-4KMRmkdvs',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'nextjs_unit_7_4',
            title: 'Final Assessment',
            description: 'Comprehensive quiz covering all Next.js concepts',
            type: 'quiz',
            duration: 20,
            order: 3,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'final_1',
                    type: 'multiple-choice',
                    question: 'Which data fetching method runs at build time?',
                    options: ['getServerSideProps', 'getStaticProps', 'useEffect', 'SWR'],
                    correctAnswer: 1,
                    explanation: 'getStaticProps runs at build time and is used for static site generation.'
                  },
                  {
                    id: 'final_2',
                    type: 'multiple-choice',
                    question: 'What is the purpose of the _app.js file?',
                    options: ['Define API routes', 'Configure the app layout', 'Handle routing', 'Manage database connections'],
                    correctAnswer: 1,
                    explanation: '_app.js is used to initialize pages and can be used to add global CSS, layouts, and providers.'
                  },
                  {
                    id: 'final_3',
                    type: 'true-false',
                    question: 'Next.js can be used to build both static sites and server-rendered applications.',
                    correctAnswer: 'true',
                    explanation: 'Next.js supports multiple rendering methods including static generation, server-side rendering, and client-side rendering.'
                  },
                  {
                    id: 'final_4',
                    type: 'fill-in-blank',
                    question: 'The _____ directory is used for static assets in Next.js.',
                    correctAnswer: 'public',
                    explanation: 'The public directory is used for static assets like images, icons, and other files that should be served directly.'
                  },
                  {
                    id: 'final_5',
                    type: 'multiple-choice',
                    question: 'Which hook is used for client-side data fetching in Next.js?',
                    options: ['getStaticProps', 'getServerSideProps', 'useEffect', 'getInitialProps'],
                    correctAnswer: 2,
                    explanation: 'useEffect is used for client-side data fetching, along with libraries like SWR or React Query.'
                  }
                ],
                passingScore: 80
              }
            }
          }
        ]
      }
    ]
  };
};

export const generateSampleCourse = (): Course => {
  return {
    id: 'complete_react_course_2025',
    title: 'Complete React Development Masterclass 2025',
    description: 'Master React from beginner to advanced level. Learn hooks, context, routing, state management, testing, and build real-world projects. This comprehensive course covers everything you need to become a professional React developer.',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: [
      {
        id: 'section_1',
        title: 'Getting Started with React',
        description: 'Introduction to React fundamentals, setup, and your first components',
        order: 0,
        units: [
          {
            id: 'unit_1_1',
            title: 'Welcome to React Development',
            description: 'Course overview, what you\'ll learn, and prerequisites',
            type: 'video',
            duration: 12,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
                provider: 'youtube',
                thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            }
          },
          {
            id: 'unit_1_2',
            title: 'What is React?',
            description: 'Understanding React, its history, and why it\'s popular',
            type: 'video',
            duration: 15,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=N3AkSS5hXMA',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_1_3',
            title: 'Setting up Your Development Environment',
            description: 'Complete guide to setting up Node.js, npm, and creating your first React app',
            type: 'article',
            duration: 20,
            order: 2,
            content: {
              article: {
                markdown: `# Setting up Your Development Environment

Welcome to React development! Let's get your development environment ready for building amazing React applications.

## Prerequisites

Before we start, make sure you have:
- A computer with Windows, macOS, or Linux
- Basic knowledge of HTML, CSS, and JavaScript
- A code editor (we recommend VS Code)
- Internet connection for downloading packages

## Installing Node.js and npm

React requires Node.js to run the development tools. Here's how to install it:

### Step 1: Download Node.js
1. Visit [nodejs.org](https://nodejs.org)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the instructions

### Step 2: Verify Installation
Open your terminal or command prompt and run:
\`\`\`bash
node --version
npm --version
\`\`\`

You should see version numbers for both commands.

## Installing a Code Editor

We recommend **Visual Studio Code** for React development:

1. Download from [code.visualstudio.com](https://code.visualstudio.com)
2. Install the following extensions:
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter
   - Auto Rename Tag
   - Bracket Pair Colorizer

## Creating Your First React App

Now let's create your first React application using Create React App:

\`\`\`bash
npx create-react-app my-first-react-app
cd my-first-react-app
npm start
\`\`\`

### What just happened?

- \`npx create-react-app\` creates a new React project with all necessary dependencies
- \`cd my-first-react-app\` navigates into your project folder
- \`npm start\` starts the development server

Your app should now be running at [http://localhost:3000](http://localhost:3000)!

## Project Structure

Let's explore the files that were created:

\`\`\`
my-first-react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
\`\`\`

### Key Files:
- **src/index.js**: Entry point of your React app
- **src/App.js**: Main component of your application
- **public/index.html**: HTML template
- **package.json**: Project dependencies and scripts

## Development Workflow

Here are the essential commands you'll use:

- \`npm start\`: Start development server
- \`npm test\`: Run tests
- \`npm run build\`: Build for production
- \`npm run eject\`: Eject from Create React App (advanced)

## Browser Developer Tools

Install the React Developer Tools extension for your browser:
- [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Next Steps

Congratulations! You now have a complete React development environment. In the next lesson, we'll dive into JSX and create your first custom component.

## Troubleshooting

### Common Issues:

**Node.js not found:**
- Make sure Node.js is properly installed
- Restart your terminal after installation

**Permission errors on macOS/Linux:**
- Use \`sudo\` before npm commands if needed
- Consider using a Node version manager like nvm

**Port 3000 already in use:**
- The development server will automatically suggest another port
- Or stop other applications using port 3000

Ready to start building with React? Let's move on to the next lesson!`
              }
            }
          },
          {
            id: 'unit_1_4',
            title: 'Understanding JSX',
            description: 'Learn JSX syntax and how it works with React',
            type: 'video',
            duration: 18,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=7fPXI_MnBOY',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_1_5',
            title: 'Knowledge Check: React Basics',
            description: 'Test your understanding of React fundamentals',
            type: 'quiz',
            duration: 10,
            order: 4,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'What is React?',
                    options: [
                      'A database management system',
                      'A JavaScript library for building user interfaces',
                      'A CSS framework for styling',
                      'A backend server framework'
                    ],
                    correctAnswer: 1,
                    explanation: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly for web applications. It allows developers to create reusable UI components.'
                  },
                  {
                    id: 'q2',
                    type: 'true-false',
                    question: 'React components must start with a capital letter.',
                    correctAnswer: 'true',
                    explanation: 'React component names must start with a capital letter to distinguish them from regular HTML elements. This is a JSX requirement.'
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice',
                    question: 'Which command creates a new React application?',
                    options: [
                      'npm install react',
                      'npx create-react-app my-app',
                      'react new my-app',
                      'npm start react'
                    ],
                    correctAnswer: 1,
                    explanation: 'npx create-react-app is the official tool for creating new React applications with a modern build setup and no configuration required.'
                  },
                  {
                    id: 'q4',
                    type: 'fill-in-blank',
                    question: 'JSX stands for JavaScript ____.',
                    correctAnswer: 'XML',
                    explanation: 'JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly in your JavaScript code.'
                  }
                ],
                passingScore: 75
              }
            }
          }
        ]
      },
      {
        id: 'section_2',
        title: 'React Components and Props',
        description: 'Deep dive into React components, props, and component composition',
        order: 1,
        units: [
          {
            id: 'unit_2_1',
            title: 'Creating Your First Component',
            description: 'Learn how to create and use React components',
            type: 'video',
            duration: 22,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=Y2hgEGPzTZY',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_2_2',
            title: 'Understanding Props',
            description: 'How to pass data between components using props',
            type: 'video',
            duration: 25,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=PHaECbrKgs0',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_2_3',
            title: 'Component Composition Patterns',
            description: 'Advanced patterns for composing React components',
            type: 'article',
            duration: 30,
            order: 2,
            content: {
              article: {
                markdown: `# Component Composition Patterns

Component composition is one of React's most powerful features. It allows you to build complex UIs by combining simple components together.

## What is Component Composition?

Component composition is the practice of combining multiple components to create more complex functionality. Instead of inheritance, React uses composition to share code between components.

## Basic Composition

### Children Props

The most basic form of composition uses the \`children\` prop:

\`\`\`jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Welcome</h2>
      <p>This is card content</p>
    </Card>
  );
}
\`\`\`

### Multiple Slots

You can create components with multiple "slots" for content:

\`\`\`jsx
function Modal({ header, footer, children }) {
  return (
    <div className="modal">
      <div className="modal-header">{header}</div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">{footer}</div>
    </div>
  );
}

function App() {
  return (
    <Modal
      header={<h2>Confirm Action</h2>}
      footer={
        <div>
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      }
    >
      <p>Are you sure you want to delete this item?</p>
    </Modal>
  );
}
\`\`\`

## Advanced Composition Patterns

### Render Props Pattern

The render props pattern allows you to share code between components using a prop whose value is a function:

\`\`\`jsx
function DataFetcher({ render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return render({ data, loading });
}

function App() {
  return (
    <DataFetcher
      render={({ data, loading }) => (
        <div>
          {loading ? <p>Loading...</p> : <p>Data: {data}</p>}
        </div>
      )}
    />
  );
}
\`\`\`

### Higher-Order Components (HOCs)

HOCs are functions that take a component and return a new component:

\`\`\`jsx
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

const UserProfile = ({ user }) => (
  <div>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

const UserProfileWithLoading = withLoading(UserProfile);
\`\`\`

### Compound Components

Compound components work together to form a complete UI:

\`\`\`jsx
function Tabs({ children, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { activeTab, onTabChange, index })
      )}
    </div>
  );
}

function TabList({ children, activeTab, onTabChange }) {
  return (
    <div className="tab-list">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { 
          isActive: activeTab === index,
          onClick: () => onTabChange(index)
        })
      )}
    </div>
  );
}

function Tab({ children, isActive, onClick }) {
  return (
    <button 
      className={\`tab \${isActive ? 'active' : ''}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function TabPanels({ children, activeTab }) {
  return (
    <div className="tab-panels">
      {React.Children.toArray(children)[activeTab]}
    </div>
  );
}

function TabPanel({ children }) {
  return <div className="tab-panel">{children}</div>;
}

// Usage
function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
\`\`\`

## Best Practices

### 1. Favor Composition over Inheritance
React doesn't use class inheritance for sharing code. Use composition instead.

### 2. Keep Components Small and Focused
Each component should have a single responsibility.

### 3. Use Props for Configuration
Make components flexible by accepting configuration through props.

### 4. Provide Sensible Defaults
Use default props to make components easier to use.

\`\`\`jsx
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  ...props 
}) {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
\`\`\`

### 5. Use TypeScript for Better Composition

\`\`\`tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

function Card({ children, className = '', variant = 'default' }: CardProps) {
  return (
    <div className={\`card card-\${variant} \${className}\`}>
      {children}
    </div>
  );
}
\`\`\`

## Common Composition Patterns

### Container and Presentational Components

Separate logic from presentation:

\`\`\`jsx
// Container Component (Logic)
function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return <UserList users={users} loading={loading} />;
}

// Presentational Component (UI)
function UserList({ users, loading }) {
  if (loading) return <div>Loading users...</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Layout Components

Create reusable layout structures:

\`\`\`jsx
function PageLayout({ sidebar, children }) {
  return (
    <div className="page-layout">
      <aside className="sidebar">{sidebar}</aside>
      <main className="content">{children}</main>
    </div>
  );
}

function App() {
  return (
    <PageLayout sidebar={<Navigation />}>
      <h1>Page Content</h1>
      <p>This is the main content area.</p>
    </PageLayout>
  );
}
\`\`\`

## Conclusion

Component composition is a powerful pattern that makes your React applications more flexible, reusable, and maintainable. By mastering these patterns, you'll be able to build complex UIs from simple, focused components.

Remember: composition over inheritance, keep components small and focused, and always think about reusability when designing your component APIs.`
              }
            }
          },
          {
            id: 'unit_2_4',
            title: 'Props Validation with PropTypes',
            description: 'Learn how to validate props for better debugging',
            type: 'video',
            duration: 15,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=cx0S8JyiVxc',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_2_5',
            title: 'Component Quiz',
            description: 'Test your knowledge of React components and props',
            type: 'quiz',
            duration: 8,
            order: 4,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'How do you pass data from a parent component to a child component?',
                    options: [
                      'Using state',
                      'Using props',
                      'Using context',
                      'Using refs'
                    ],
                    correctAnswer: 1,
                    explanation: 'Props are used to pass data from parent components to child components in React.'
                  },
                  {
                    id: 'q2',
                    type: 'true-false',
                    question: 'Props are mutable and can be changed by the child component.',
                    correctAnswer: 'false',
                    explanation: 'Props are immutable and read-only. Child components cannot modify props passed from parent components.'
                  },
                  {
                    id: 'q3',
                    type: 'fill-in-blank',
                    question: 'The special prop that contains nested elements is called ____.',
                    correctAnswer: 'children',
                    explanation: 'The children prop is a special prop that contains any nested elements or components passed between the opening and closing tags of a component.'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'section_3',
        title: 'State and Event Handling',
        description: 'Learn how to manage component state and handle user interactions',
        order: 2,
        units: [
          {
            id: 'unit_3_1',
            title: 'Introduction to State',
            description: 'Understanding component state and the useState hook',
            type: 'video',
            duration: 28,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=O6P86uwfdR0',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_3_2',
            title: 'Event Handling in React',
            description: 'How to handle user interactions and events',
            type: 'video',
            duration: 20,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=Znqv84xi8Vs',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_3_3',
            title: 'Forms and Controlled Components',
            description: 'Building forms with controlled components',
            type: 'video',
            duration: 32,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=7Vo_VCcWupQ',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_3_4',
            title: 'State Management Best Practices',
            description: 'Guidelines for effective state management',
            type: 'article',
            duration: 25,
            order: 3,
            content: {
              article: {
                markdown: `# State Management Best Practices

Effective state management is crucial for building maintainable React applications. Here are the best practices you should follow.

## 1. Keep State as Simple as Possible

### Avoid Nested State Objects
\`\`\`jsx
// ❌ Avoid deeply nested state
const [user, setUser] = useState({
  profile: {
    personal: {
      name: '',
      email: ''
    },
    preferences: {
      theme: 'light'
    }
  }
});

// ✅ Flatten your state structure
const [userName, setUserName] = useState('');
const [userEmail, setUserEmail] = useState('');
const [theme, setTheme] = useState('light');
\`\`\`

## 2. Use Multiple State Variables

Instead of one large state object, use multiple state variables for unrelated data:

\`\`\`jsx
// ❌ Single large state object
const [state, setState] = useState({
  loading: false,
  error: null,
  data: [],
  selectedItem: null
});

// ✅ Multiple focused state variables
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [data, setData] = useState([]);
const [selectedItem, setSelectedItem] = useState(null);
\`\`\`

## 3. State Colocation

Keep state as close to where it's used as possible:

\`\`\`jsx
// ❌ State too high in the component tree
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div>
      <Header />
      <MainContent />
      <Footer modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

// ✅ State colocated with usage
function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <footer>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </footer>
  );
}
\`\`\`

## 4. Lift State Up When Needed

When multiple components need to share state, lift it to their common ancestor:

\`\`\`jsx
function ShoppingCart() {
  const [items, setItems] = useState([]);
  
  return (
    <div>
      <ProductList onAddItem={(item) => setItems([...items, item])} />
      <CartSummary items={items} />
    </div>
  );
}
\`\`\`

## 5. Use Functional Updates

When new state depends on previous state, use functional updates:

\`\`\`jsx
// ❌ Direct state update
const handleIncrement = () => {
  setCount(count + 1);
};

// ✅ Functional update
const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
};
\`\`\`

## 6. Batch State Updates

React automatically batches state updates in event handlers:

\`\`\`jsx
function handleClick() {
  setCount(count + 1);
  setFlag(!flag);
  // These will be batched into a single re-render
}
\`\`\`

## 7. Use useReducer for Complex State Logic

When state logic becomes complex, consider useReducer:

\`\`\`jsx
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.step };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
\`\`\`

## 8. Avoid Storing Derived State

Don't store values that can be calculated from existing state or props:

\`\`\`jsx
// ❌ Storing derived state
function UserProfile({ user }) {
  const [fullName, setFullName] = useState('');
  
  useEffect(() => {
    setFullName(\`\${user.firstName} \${user.lastName}\`);
  }, [user.firstName, user.lastName]);
  
  return <h1>{fullName}</h1>;
}

// ✅ Calculate during render
function UserProfile({ user }) {
  const fullName = \`\${user.firstName} \${user.lastName}\`;
  return <h1>{fullName}</h1>;
}
\`\`\`

## 9. Use Custom Hooks for Reusable State Logic

Extract reusable state logic into custom hooks:

\`\`\`jsx
// Custom hook for form handling
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  
  const reset = () => setValues(initialValues);
  
  return { values, handleChange, reset };
}

// Usage
function ContactForm() {
  const { values, handleChange, reset } = useForm({
    name: '',
    email: '',
    message: ''
  });
  
  return (
    <form>
      <input name="name" value={values.name} onChange={handleChange} />
      <input name="email" value={values.email} onChange={handleChange} />
      <textarea name="message" value={values.message} onChange={handleChange} />
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}
\`\`\`

## 10. State Normalization

For complex data structures, normalize your state:

\`\`\`jsx
// ❌ Nested array structure
const [posts, setPosts] = useState([
  {
    id: 1,
    title: 'Post 1',
    comments: [
      { id: 1, text: 'Comment 1' },
      { id: 2, text: 'Comment 2' }
    ]
  }
]);

// ✅ Normalized structure
const [posts, setPosts] = useState({
  1: { id: 1, title: 'Post 1', commentIds: [1, 2] }
});
const [comments, setComments] = useState({
  1: { id: 1, text: 'Comment 1' },
  2: { id: 2, text: 'Comment 2' }
});
\`\`\`

## Common Anti-Patterns to Avoid

### 1. Mutating State Directly
\`\`\`jsx
// ❌ Never mutate state directly
const handleAddItem = (item) => {
  items.push(item); // This won't trigger a re-render
  setItems(items);
};

// ✅ Always create new state
const handleAddItem = (item) => {
  setItems([...items, item]);
};
\`\`\`

### 2. Using State for Everything
\`\`\`jsx
// ❌ Unnecessary state
function Component({ items }) {
  const [itemCount, setItemCount] = useState(0);
  
  useEffect(() => {
    setItemCount(items.length);
  }, [items]);
  
  return <p>Count: {itemCount}</p>;
}

// ✅ Calculate during render
function Component({ items }) {
  return <p>Count: {items.length}</p>;
}
\`\`\`

### 3. Stale Closures
\`\`\`jsx
// ❌ Stale closure problem
function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1); // This will always use the initial count value
    }, 1000);
    
    return () => clearInterval(interval);
  }, []); // Empty dependency array causes stale closure
  
  return <p>{count}</p>;
}

// ✅ Use functional update
function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return <p>{count}</p>;
}
\`\`\`

## Conclusion

Following these state management best practices will help you build more maintainable and performant React applications. Remember:

- Keep state simple and flat
- Colocate state with its usage
- Use functional updates for state that depends on previous state
- Consider useReducer for complex state logic
- Avoid storing derived state
- Extract reusable logic into custom hooks

Good state management is the foundation of scalable React applications!`
              }
            }
          }
        ]
      },
      {
        id: 'section_4',
        title: 'React Hooks Deep Dive',
        description: 'Master React hooks including useEffect, useContext, and custom hooks',
        order: 3,
        units: [
          {
            id: 'unit_4_1',
            title: 'useEffect Hook Explained',
            description: 'Understanding side effects and the useEffect hook',
            type: 'video',
            duration: 35,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=0ZJgIjIuY7U',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_4_2',
            title: 'useContext for State Management',
            description: 'Using React Context API for global state',
            type: 'video',
            duration: 30,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=5LrDIWkK_Bc',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_4_3',
            title: 'Custom Hooks',
            description: 'Creating reusable logic with custom hooks',
            type: 'video',
            duration: 25,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=6ThXsUwLWvc',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_4_4',
            title: 'Advanced Hooks: useReducer, useMemo, useCallback',
            description: 'Performance optimization and complex state management',
            type: 'video',
            duration: 40,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=f687hBjwFcM',
                provider: 'youtube'
              }
            }
          }
        ]
      },
      {
        id: 'section_5',
        title: 'Routing with React Router',
        description: 'Build single-page applications with React Router',
        order: 4,
        units: [
          {
            id: 'unit_5_1',
            title: 'Introduction to React Router',
            description: 'Setting up routing in React applications',
            type: 'video',
            duration: 20,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=Law7wfdg_ls',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_5_2',
            title: 'Dynamic Routes and Parameters',
            description: 'Working with dynamic routes and URL parameters',
            type: 'video',
            duration: 25,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=Ul3y1LXxzdU',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_5_3',
            title: 'Protected Routes and Authentication',
            description: 'Implementing authentication and route protection',
            type: 'video',
            duration: 30,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=X3qyxo_UTR4',
                provider: 'youtube'
              }
            }
          }
        ]
      },
      {
        id: 'section_6',
        title: 'State Management with Redux',
        description: 'Learn Redux for complex state management',
        order: 5,
        units: [
          {
            id: 'unit_6_1',
            title: 'Introduction to Redux',
            description: 'Understanding Redux principles and architecture',
            type: 'video',
            duration: 28,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=CVpUuw9XSjY',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_6_2',
            title: 'Redux Toolkit (Modern Redux)',
            description: 'Using Redux Toolkit for efficient Redux development',
            type: 'video',
            duration: 35,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=9zySeP5vH9c',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_6_3',
            title: 'Async Actions with Redux Thunk',
            description: 'Handling asynchronous operations in Redux',
            type: 'video',
            duration: 22,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=93p3LxR9xfM',
                provider: 'youtube'
              }
            }
          }
        ]
      },
      {
        id: 'section_7',
        title: 'Testing React Applications',
        description: 'Learn how to test React components and applications',
        order: 6,
        units: [
          {
            id: 'unit_7_1',
            title: 'Testing Basics with Jest and React Testing Library',
            description: 'Introduction to testing React components',
            type: 'video',
            duration: 32,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=7dTTFW7yACQ',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_7_2',
            title: 'Testing Hooks and Custom Hooks',
            description: 'How to test React hooks effectively',
            type: 'video',
            duration: 25,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=tJ-W91wBWop',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_7_3',
            title: 'Integration and End-to-End Testing',
            description: 'Testing complete user workflows',
            type: 'video',
            duration: 28,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=6wbnwsKrnYU',
                provider: 'youtube'
              }
            }
          }
        ]
      },
      {
        id: 'section_8',
        title: 'Performance Optimization',
        description: 'Optimize React applications for better performance',
        order: 7,
        units: [
          {
            id: 'unit_8_1',
            title: 'React Performance Best Practices',
            description: 'Essential techniques for optimizing React apps',
            type: 'video',
            duration: 30,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=00lxm_doFYw',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_8_2',
            title: 'Code Splitting and Lazy Loading',
            description: 'Reduce bundle size with code splitting',
            type: 'video',
            duration: 25,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=JU6sl_yyZqs',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_8_3',
            title: 'Profiling and Debugging Performance',
            description: 'Tools and techniques for performance analysis',
            type: 'video',
            duration: 20,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=00lxm_doFYw',
                provider: 'youtube'
              }
            }
          }
        ]
      },
      {
        id: 'section_9',
        title: 'Final Project: Building a Complete React App',
        description: 'Apply everything you\'ve learned in a comprehensive project',
        order: 8,
        units: [
          {
            id: 'unit_9_1',
            title: 'Project Planning and Setup',
            description: 'Planning and setting up our final project',
            type: 'video',
            duration: 20,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=hQAHSlTtcmY',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_9_2',
            title: 'Building the User Interface',
            description: 'Creating components and layouts',
            type: 'video',
            duration: 45,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_9_3',
            title: 'Implementing State Management',
            description: 'Adding state management to our application',
            type: 'video',
            duration: 35,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=35lXWvCuM8o',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_9_4',
            title: 'Adding Routing and Navigation',
            description: 'Implementing navigation between pages',
            type: 'video',
            duration: 25,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=Law7wfdg_ls',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_9_5',
            title: 'Testing and Deployment',
            description: 'Testing our application and deploying to production',
            type: 'video',
            duration: 30,
            order: 4,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=7dTTFW7yACQ',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_9_6',
            title: 'Course Resources and Next Steps',
            description: 'Additional resources and recommended learning path',
            type: 'file',
            duration: 5,
            order: 5,
            content: {
              file: {
                filename: 'react-course-resources.pdf',
                url: '#',
                size: '2.8 MB'
              }
            }
          },
          {
            id: 'unit_9_7',
            title: 'Final Assessment',
            description: 'Comprehensive quiz covering all course topics',
            type: 'quiz',
            duration: 20,
            order: 6,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'final_q1',
                    type: 'multiple-choice',
                    question: 'Which hook is used for managing component state in functional components?',
                    options: [
                      'useEffect',
                      'useState',
                      'useContext',
                      'useReducer'
                    ],
                    correctAnswer: 1,
                    explanation: 'useState is the primary hook for managing local component state in functional components.'
                  },
                  {
                    id: 'final_q2',
                    type: 'multiple-choice',
                    question: 'What is the purpose of the useEffect hook?',
                    options: [
                      'To manage component state',
                      'To handle side effects',
                      'To create context',
                      'To optimize performance'
                    ],
                    correctAnswer: 1,
                    explanation: 'useEffect is used to handle side effects like API calls, subscriptions, and DOM manipulation.'
                  },
                  {
                    id: 'final_q3',
                    type: 'true-false',
                    question: 'React components should always be pure functions.',
                    correctAnswer: 'false',
                    explanation: 'While React components should generally be pure, they can have side effects when using hooks like useEffect.'
                  },
                  {
                    id: 'final_q4',
                    type: 'multiple-choice',
                    question: 'Which pattern is recommended for sharing logic between components?',
                    options: [
                      'Inheritance',
                      'Mixins',
                      'Custom Hooks',
                      'Global variables'
                    ],
                    correctAnswer: 2,
                    explanation: 'Custom hooks are the recommended way to share stateful logic between React components.'
                  },
                  {
                    id: 'final_q5',
                    type: 'fill-in-blank',
                    question: 'The _____ hook is used to optimize expensive calculations.',
                    correctAnswer: 'useMemo',
                    explanation: 'useMemo is used to memoize expensive calculations and only recalculate when dependencies change.'
                  },
                  {
                    id: 'final_q6',
                    type: 'multiple-choice',
                    question: 'What is the virtual DOM?',
                    options: [
                      'A copy of the real DOM stored in memory',
                      'A JavaScript representation of the DOM',
                      'A faster version of the DOM',
                      'All of the above'
                    ],
                    correctAnswer: 3,
                    explanation: 'The virtual DOM is a JavaScript representation of the real DOM kept in memory, which allows React to efficiently update the UI.'
                  },
                  {
                    id: 'final_q7',
                    type: 'true-false',
                    question: 'Redux is required for all React applications.',
                    correctAnswer: 'false',
                    explanation: 'Redux is not required for all React applications. It\'s useful for complex state management but many apps can work fine with local state and Context API.'
                  },
                  {
                    id: 'final_q8',
                    type: 'multiple-choice',
                    question: 'Which testing library is commonly used with React?',
                    options: [
                      'Mocha',
                      'Jasmine',
                      'React Testing Library',
                      'Karma'
                    ],
                    correctAnswer: 2,
                    explanation: 'React Testing Library is the most commonly used testing library for React applications, focusing on testing behavior rather than implementation.'
                  }
                ],
                passingScore: 80
              }
            }
          }
        ]
      },
      {
        id: 'section_10',
        title: 'Advanced React Patterns and Architecture',
        description: 'Learn advanced React patterns, architecture decisions, and scalable application design',
        order: 9,
        units: [
          {
            id: 'unit_10_1',
            title: 'Higher-Order Components (HOCs) Deep Dive',
            description: 'Master HOCs for code reuse and component enhancement',
            type: 'video',
            duration: 35,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=BcVAq3YFiuc',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_10_2',
            title: 'Render Props Pattern Implementation',
            description: 'Implement and use render props for flexible component composition',
            type: 'video',
            duration: 28,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=3IdCQ_0fiF8',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_10_3',
            title: 'Compound Components Pattern',
            description: 'Build flexible and reusable compound components',
            type: 'article',
            duration: 25,
            order: 2,
            content: {
              article: {
                markdown: `# Compound Components Pattern in React

The Compound Components pattern is a powerful React pattern that allows you to create components that work together to form a complete UI while maintaining flexibility and reusability.

## What are Compound Components?

Compound components are a set of components that work together to form a complete UI. Think of HTML elements like \`<select>\` and \`<option>\` - they work together but can be composed flexibly.

## Basic Implementation

\`\`\`jsx
// Toggle compound component
const Toggle = ({ children, onToggle }) => {
  const [on, setOn] = useState(false);
  
  const toggle = () => {
    setOn(!on);
    onToggle?.(!on);
  };
  
  return React.Children.map(children, child =>
    React.cloneElement(child, { on, toggle })
  );
};

const ToggleOn = ({ on, children }) => on ? children : null;
const ToggleOff = ({ on, children }) => on ? null : children;
const ToggleButton = ({ on, toggle, ...props }) => (
  <button onClick={toggle} {...props}>
    {on ? 'ON' : 'OFF'}
  </button>
);

// Usage
function App() {
  return (
    <Toggle onToggle={console.log}>
      <ToggleOn>The toggle is on</ToggleOn>
      <ToggleOff>The toggle is off</ToggleOff>
      <ToggleButton />
    </Toggle>
  );
}
\`\`\`

## Advanced Implementation with Context

\`\`\`jsx
const ToggleContext = createContext();

const Toggle = ({ children, onToggle }) => {
  const [on, setOn] = useState(false);
  
  const toggle = useCallback(() => {
    setOn(prevOn => {
      const newOn = !prevOn;
      onToggle?.(newOn);
      return newOn;
    });
  }, [onToggle]);
  
  const value = useMemo(() => ({ on, toggle }), [on, toggle]);
  
  return (
    <ToggleContext.Provider value={value}>
      {children}
    </ToggleContext.Provider>
  );
};

const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggle must be used within Toggle');
  }
  return context;
};

const ToggleOn = ({ children }) => {
  const { on } = useToggle();
  return on ? children : null;
};

const ToggleOff = ({ children }) => {
  const { on } = useToggle();
  return on ? null : children;
};

const ToggleButton = (props) => {
  const { on, toggle } = useToggle();
  return (
    <button onClick={toggle} {...props}>
      {on ? 'ON' : 'OFF'}
    </button>
  );
};
\`\`\`

## Real-World Example: Modal Component

\`\`\`jsx
const ModalContext = createContext();

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  
  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalTrigger = ({ children }) => {
  const { open } = useContext(ModalContext);
  return React.cloneElement(children, { onClick: open });
};

const ModalContent = ({ children }) => {
  const { isOpen, close } = useContext(ModalContext);
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const ModalCloseButton = ({ children }) => {
  const { close } = useContext(ModalContext);
  return React.cloneElement(children, { onClick: close });
};

// Usage
function App() {
  return (
    <Modal>
      <ModalTrigger>
        <button>Open Modal</button>
      </ModalTrigger>
      <ModalContent>
        <h2>Modal Title</h2>
        <p>Modal content goes here</p>
        <ModalCloseButton>
          <button>Close</button>
        </ModalCloseButton>
      </ModalContent>
    </Modal>
  );
}
\`\`\`

## Benefits of Compound Components

1. **Flexibility**: Users can compose components in different ways
2. **Separation of Concerns**: Each component has a single responsibility
3. **Implicit State Sharing**: Components share state without prop drilling
4. **API Clarity**: Clear and intuitive API for consumers
5. **Extensibility**: Easy to add new compound components

## Best Practices

1. **Use Context for State Sharing**: Avoid prop drilling between compound components
2. **Provide Clear Error Messages**: Help developers use the API correctly
3. **Support Flexible Composition**: Don't enforce strict component order
4. **Document the API**: Clearly explain how components work together
5. **Consider Performance**: Use useMemo and useCallback appropriately

## Common Use Cases

- Form components (Form, Field, Label, Error)
- Navigation components (Nav, NavItem, NavLink)
- Card components (Card, CardHeader, CardBody, CardFooter)
- Accordion components (Accordion, AccordionItem, AccordionHeader, AccordionPanel)
- Tab components (Tabs, TabList, Tab, TabPanels, TabPanel)

The Compound Components pattern is powerful for creating flexible, reusable component APIs that feel natural to use and maintain.`
              }
            }
          },
          {
            id: 'unit_10_4',
            title: 'React Architecture and Folder Structure',
            description: 'Learn how to structure large React applications',
            type: 'video',
            duration: 32,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=UUga4-z7b6s',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_10_5',
            title: 'Advanced Patterns Quiz',
            description: 'Test your knowledge of advanced React patterns',
            type: 'quiz',
            duration: 15,
            order: 4,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'adv_q1',
                    type: 'multiple-choice',
                    question: 'What is the main benefit of the Compound Components pattern?',
                    options: [
                      'Better performance',
                      'Flexible composition and implicit state sharing',
                      'Smaller bundle size',
                      'Easier testing'
                    ],
                    correctAnswer: 1,
                    explanation: 'Compound Components provide flexible composition while allowing implicit state sharing between related components without prop drilling.'
                  },
                  {
                    id: 'adv_q2',
                    type: 'true-false',
                    question: 'Higher-Order Components (HOCs) are the recommended pattern for code reuse in modern React.',
                    correctAnswer: 'false',
                    explanation: 'While HOCs are still valid, React Hooks and custom hooks are now the recommended approach for sharing stateful logic between components.'
                  },
                  {
                    id: 'adv_q3',
                    type: 'multiple-choice',
                    question: 'Which pattern allows components to share rendering logic through a function prop?',
                    options: [
                      'Higher-Order Components',
                      'Compound Components',
                      'Render Props',
                      'Context API'
                    ],
                    correctAnswer: 2,
                    explanation: 'Render Props pattern uses a function prop to share rendering logic between components, allowing for flexible composition.'
                  }
                ],
                passingScore: 75
              }
            }
          }
        ]
      },
      {
        id: 'section_11',
        title: 'React with TypeScript',
        description: 'Master TypeScript integration with React for type-safe applications',
        order: 10,
        units: [
          {
            id: 'unit_11_1',
            title: 'Setting up React with TypeScript',
            description: 'Configure TypeScript in React projects and understand the benefits',
            type: 'video',
            duration: 25,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=ydkQlJhodio',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_11_2',
            title: 'Typing React Components and Props',
            description: 'Learn how to properly type React components, props, and state',
            type: 'video',
            duration: 30,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=TiSGujM22OI',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_11_3',
            title: 'Advanced TypeScript Patterns in React',
            description: 'Explore advanced TypeScript patterns for React development',
            type: 'article',
            duration: 35,
            order: 2,
            content: {
              article: {
                markdown: `# Advanced TypeScript Patterns in React

TypeScript provides powerful type safety for React applications. Let's explore advanced patterns that make your React code more robust and maintainable.

## Generic Components

Create reusable components that work with different data types:

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}

// Usage
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
];

function UserList() {
  return (
    <List
      items={users}
      keyExtractor={(user) => user.id}
      renderItem={(user) => (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    />
  );
}
\`\`\`

## Discriminated Unions for Component Variants

Use discriminated unions to create type-safe component variants:

\`\`\`tsx
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
} & (
  | { variant: 'primary'; color?: never }
  | { variant: 'secondary'; color?: never }
  | { variant: 'custom'; color: string }
);

function Button({ children, onClick, variant, ...props }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded font-medium';
  
  let variantClasses = '';
  if (variant === 'primary') {
    variantClasses = 'bg-blue-600 text-white hover:bg-blue-700';
  } else if (variant === 'secondary') {
    variantClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  } else if (variant === 'custom') {
    variantClasses = \`bg-[\${props.color}] text-white\`;
  }
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Usage - TypeScript will enforce correct prop combinations
<Button variant="primary" onClick={() => {}}>Primary</Button>
<Button variant="custom" color="#ff6b6b" onClick={() => {}}>Custom</Button>
// <Button variant="custom" onClick={() => {}}>Error - color is required</Button>
\`\`\`

## Conditional Props with Generic Constraints

Create components with conditional props based on generic constraints:

\`\`\`tsx
interface BaseFormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
}

type FormFieldProps<T extends string | number | boolean> = BaseFormFieldProps & {
  value: T;
  onChange: (value: T) => void;
} & (
  T extends string
    ? { type: 'text' | 'email' | 'password'; placeholder?: string }
    : T extends number
    ? { type: 'number'; min?: number; max?: number }
    : T extends boolean
    ? { type: 'checkbox'; description?: string }
    : never
);

function FormField<T extends string | number | boolean>(props: FormFieldProps<T>) {
  const { label, error, required, value, onChange, type, ...rest } = props;
  
  return (
    <div className="form-field">
      <label>
        {label} {required && '*'}
      </label>
      
      {type === 'checkbox' ? (
        <input
          type="checkbox"
          checked={value as boolean}
          onChange={(e) => onChange(e.target.checked as T)}
          {...rest}
        />
      ) : (
        <input
          type={type}
          value={value as string | number}
          onChange={(e) => {
            const newValue = type === 'number' 
              ? Number(e.target.value) 
              : e.target.value;
            onChange(newValue as T);
          }}
          {...rest}
        />
      )}
      
      {error && <span className="error">{error}</span>}
    </div>
  );
}
\`\`\`

## Advanced Hook Typing

Create type-safe custom hooks with proper inference:

\`\`\`tsx
// Generic API hook with proper error handling
interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface ApiActions<T> {
  refetch: () => Promise<void>;
  mutate: (newData: T) => void;
  reset: () => void;
}

function useApi<T>(
  fetcher: () => Promise<T>,
  dependencies: React.DependencyList = []
): ApiState<T> & ApiActions<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });
  
  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await fetcher();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ 
        data: null, 
        loading: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  }, dependencies);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  const mutate = useCallback((newData: T) => {
    setState(prev => ({ ...prev, data: newData }));
  }, []);
  
  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);
  
  return {
    ...state,
    refetch: fetchData,
    mutate,
    reset
  };
}

// Usage with automatic type inference
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: number }) {
  const { data: user, loading, error, refetch } = useApi<User>(
    () => fetch(\`/api/users/\${userId}\`).then(res => res.json()),
    [userId]
  );
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
\`\`\`

## Context with TypeScript

Create type-safe context providers:

\`\`\`tsx
interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const userData = await response.json();
      setUser(userData);
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
  };
  
  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
\`\`\`

## Best Practices

1. **Use strict TypeScript configuration** for better type safety
2. **Prefer interfaces over types** for object shapes
3. **Use generic constraints** to limit type parameters appropriately
4. **Leverage discriminated unions** for component variants
5. **Create utility types** for common patterns in your application
6. **Use proper return types** for hooks and functions
7. **Avoid \`any\` type** - use \`unknown\` or proper typing instead

These advanced patterns help create more maintainable, type-safe React applications that catch errors at compile time rather than runtime.`
              }
            }
          },
          {
            id: 'unit_11_4',
            title: 'React Hooks with TypeScript',
            description: 'Type React hooks properly for maximum type safety',
            type: 'video',
            duration: 28,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=TNhaISOUy6Q',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_11_5',
            title: 'TypeScript React Quiz',
            description: 'Test your TypeScript and React knowledge',
            type: 'quiz',
            duration: 12,
            order: 4,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'ts_q1',
                    type: 'multiple-choice',
                    question: 'What is the correct way to type a React component props interface?',
                    options: [
                      'type Props = { name: string }',
                      'interface Props { name: string }',
                      'Both are correct',
                      'Neither is correct'
                    ],
                    correctAnswer: 2,
                    explanation: 'Both type aliases and interfaces can be used for React props, though interfaces are generally preferred for object shapes.'
                  },
                  {
                    id: 'ts_q2',
                    type: 'true-false',
                    question: 'Generic components in React TypeScript allow for better code reuse.',
                    correctAnswer: 'true',
                    explanation: 'Generic components allow you to create reusable components that work with different data types while maintaining type safety.'
                  }
                ],
                passingScore: 70
              }
            }
          }
        ]
      },
      {
        id: 'section_12',
        title: 'React Native Fundamentals',
        description: 'Learn mobile app development with React Native',
        order: 11,
        units: [
          {
            id: 'unit_12_1',
            title: 'Introduction to React Native',
            description: 'Understanding React Native and setting up development environment',
            type: 'video',
            duration: 30,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_12_2',
            title: 'React Native Components and Styling',
            description: 'Learn core React Native components and styling approaches',
            type: 'video',
            duration: 35,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=ur6I5m2nTvk',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_12_3',
            title: 'Navigation in React Native',
            description: 'Implement navigation between screens in React Native apps',
            type: 'video',
            duration: 32,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=nQVCkqvU1uE',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_12_4',
            title: 'Building Your First React Native App',
            description: 'Create a complete mobile app from scratch',
            type: 'video',
            duration: 45,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=VozPNrt-LfE',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_12_5',
            title: 'React Native Development Resources',
            description: 'Essential resources and tools for React Native development',
            type: 'file',
            duration: 5,
            order: 4,
            content: {
              file: {
                filename: 'react-native-resources.pdf',
                url: 'https://reactnative.dev/docs/getting-started',
                size: '1.2 MB'
              }
            }
          }
        ]
      },
      {
        id: 'section_13',
        title: 'Next.js and Full-Stack React',
        description: 'Build full-stack applications with Next.js framework',
        order: 12,
        units: [
          {
            id: 'unit_13_1',
            title: 'Introduction to Next.js',
            description: 'Learn Next.js fundamentals and server-side rendering',
            type: 'video',
            duration: 28,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=Sklc_fQBmcs',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_13_2',
            title: 'Next.js Routing and Pages',
            description: 'Master Next.js file-based routing system',
            type: 'video',
            duration: 25,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=ZVnjOPwW4ZA',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_13_3',
            title: 'API Routes and Server-Side Features',
            description: 'Build APIs and use server-side features in Next.js',
            type: 'video',
            duration: 35,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=BMOvqxKHLJ8',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_13_4',
            title: 'Next.js Deployment and Production',
            description: 'Deploy Next.js applications to production',
            type: 'video',
            duration: 22,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=2HBIzEx6IZA',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_13_5',
            title: 'Full-Stack Development Quiz',
            description: 'Test your Next.js and full-stack knowledge',
            type: 'quiz',
            duration: 15,
            order: 4,
            content: {
              quiz: {
                questions: [
                  {
                    id: 'next_q1',
                    type: 'multiple-choice',
                    question: 'What is the main benefit of Next.js over Create React App?',
                    options: [
                      'Better performance',
                      'Server-side rendering and static generation',
                      'Smaller bundle size',
                      'Easier deployment'
                    ],
                    correctAnswer: 1,
                    explanation: 'Next.js provides server-side rendering (SSR) and static site generation (SSG) capabilities, which improve SEO and initial page load performance.'
                  },
                  {
                    id: 'next_q2',
                    type: 'true-false',
                    question: 'Next.js uses file-based routing system.',
                    correctAnswer: 'true',
                    explanation: 'Next.js automatically creates routes based on the file structure in the pages directory, eliminating the need for manual route configuration.'
                  },
                  {
                    id: 'next_q3',
                    type: 'fill-in-blank',
                    question: 'The _____ function in Next.js is used for server-side rendering.',
                    correctAnswer: 'getServerSideProps',
                    explanation: 'getServerSideProps runs on the server side and allows you to fetch data before rendering the page.'
                  }
                ],
                passingScore: 75
              }
            }
          }
        ]
      },
      {
        id: 'section_14',
        title: 'React Ecosystem and Modern Tools',
        description: 'Explore the React ecosystem and modern development tools',
        order: 13,
        units: [
          {
            id: 'unit_14_1',
            title: 'React Developer Tools and Debugging',
            description: 'Master React DevTools and debugging techniques',
            type: 'video',
            duration: 25,
            order: 0,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=rb1GWqCJid4',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_14_2',
            title: 'Vite and Modern Build Tools',
            description: 'Learn modern build tools like Vite for React development',
            type: 'video',
            duration: 30,
            order: 1,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=89NJdbYTgJ8',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_14_3',
            title: 'React Query for Data Fetching',
            description: 'Master server state management with React Query',
            type: 'video',
            duration: 35,
            order: 2,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=novnyCaa7To',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_14_4',
            title: 'Styling Solutions: Styled Components vs CSS Modules',
            description: 'Compare different styling approaches in React',
            type: 'video',
            duration: 28,
            order: 3,
            content: {
              video: {
                url: 'https://www.youtube.com/watch?v=mt4cVZeqbB8',
                provider: 'youtube'
              }
            }
          },
          {
            id: 'unit_14_5',
            title: 'React Ecosystem Overview',
            description: 'Comprehensive guide to the React ecosystem and tools',
            type: 'article',
            duration: 20,
            order: 4,
            content: {
              article: {
                markdown: `# React Ecosystem and Modern Tools

The React ecosystem has evolved tremendously, offering developers a rich set of tools and libraries to build modern applications efficiently.

## Build Tools and Development Environment

### Vite
- **Lightning Fast**: Instant server start and hot module replacement
- **Modern**: Built on ES modules and esbuild
- **Framework Agnostic**: Works with React, Vue, Svelte, and more

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

### Create React App (CRA)
- **Zero Configuration**: Works out of the box
- **Opinionated**: Includes sensible defaults
- **Ejectable**: Can customize configuration when needed

### Webpack
- **Highly Configurable**: Complete control over build process
- **Mature Ecosystem**: Extensive plugin system
- **Complex**: Requires more setup and maintenance

## State Management Solutions

### Redux Toolkit (RTK)
- **Modern Redux**: Simplified Redux with less boilerplate
- **Built-in Best Practices**: Includes Immer, Redux Thunk, and more
- **DevTools Integration**: Excellent debugging experience

\`\`\`javascript
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  }
})

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})
\`\`\`

### Zustand
- **Lightweight**: Small bundle size
- **Simple API**: Easy to learn and use
- **TypeScript First**: Excellent TypeScript support

### Jotai
- **Atomic Approach**: Bottom-up state management
- **Flexible**: Compose state atoms as needed
- **Performance**: Automatic optimization

## Data Fetching Libraries

### React Query (TanStack Query)
- **Server State Management**: Handles caching, synchronization, and updates
- **Background Updates**: Keeps data fresh automatically
- **Optimistic Updates**: Immediate UI feedback

\`\`\`javascript
import { useQuery } from '@tanstack/react-query'

function Profile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetch('/api/profile').then(res => res.json())
  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error occurred'

  return <div>Hello {data.name}!</div>
}
\`\`\`

### SWR
- **Stale-While-Revalidate**: Smart caching strategy
- **Lightweight**: Smaller than React Query
- **Built-in Features**: Error retry, focus revalidation, etc.

### Apollo Client
- **GraphQL First**: Designed specifically for GraphQL
- **Comprehensive**: Includes caching, error handling, and more
- **Ecosystem**: Rich ecosystem of tools and extensions

## Styling Solutions

### Tailwind CSS
- **Utility-First**: Compose styles from utility classes
- **Customizable**: Highly configurable design system
- **Performance**: Purges unused styles in production

### Styled Components
- **CSS-in-JS**: Write CSS in JavaScript
- **Dynamic Styling**: Props-based styling
- **Theme Support**: Built-in theming capabilities

### Emotion
- **Performance**: Optimized CSS-in-JS library
- **Flexible**: Multiple styling approaches
- **Framework Agnostic**: Works with any framework

### CSS Modules
- **Scoped Styles**: Automatic class name scoping
- **Standard CSS**: Use regular CSS syntax
- **Build Tool Integration**: Works with most bundlers

## Testing Tools

### React Testing Library
- **User-Centric**: Test how users interact with your app
- **Simple API**: Easy to learn and use
- **Best Practices**: Encourages accessible testing

### Jest
- **Test Runner**: Executes and manages tests
- **Mocking**: Built-in mocking capabilities
- **Snapshot Testing**: Capture component output

### Cypress
- **End-to-End Testing**: Test complete user workflows
- **Real Browser**: Tests in actual browser environment
- **Time Travel**: Debug tests with time travel

## Development Tools

### React DevTools
- **Component Inspector**: Inspect React component tree
- **Props and State**: View and edit component data
- **Profiler**: Identify performance bottlenecks

### ESLint
- **Code Quality**: Catch errors and enforce standards
- **Configurable**: Customize rules for your project
- **IDE Integration**: Real-time feedback in your editor

### Prettier
- **Code Formatting**: Consistent code style
- **Automatic**: Formats code on save
- **Configurable**: Customize formatting rules

## UI Component Libraries

### Material-UI (MUI)
- **Google's Material Design**: Consistent design language
- **Comprehensive**: Large set of components
- **Customizable**: Theme system for customization

### Ant Design
- **Enterprise Focus**: Designed for business applications
- **Rich Components**: Extensive component library
- **Design Language**: Consistent design principles

### Chakra UI
- **Simple and Modular**: Easy to use and customize
- **Accessibility**: Built-in accessibility features
- **Developer Experience**: Great TypeScript support

### Headless UI
- **Unstyled Components**: Bring your own styles
- **Accessibility**: Fully accessible by default
- **Framework Support**: React and Vue versions

## Animation Libraries

### Framer Motion
- **Declarative Animations**: Easy to use animation API
- **Gesture Support**: Built-in gesture recognition
- **Layout Animations**: Automatic layout transitions

### React Spring
- **Physics-Based**: Natural feeling animations
- **Flexible**: Multiple animation approaches
- **Performance**: Optimized for smooth animations

### React Transition Group
- **Transition Components**: Manage component transitions
- **Lightweight**: Small bundle size
- **Flexible**: Works with any CSS transition

## Form Libraries

### React Hook Form
- **Performance**: Minimal re-renders
- **Simple API**: Easy to use and integrate
- **Validation**: Built-in validation support

### Formik
- **Mature**: Well-established form library
- **Comprehensive**: Handles complex form scenarios
- **Validation**: Integrates with validation libraries

## Choosing the Right Tools

Consider these factors when selecting tools:

1. **Project Requirements**: What does your project need?
2. **Team Experience**: What is your team familiar with?
3. **Bundle Size**: How important is performance?
4. **Maintenance**: How actively maintained is the tool?
5. **Community**: How large is the community?
6. **Documentation**: How good is the documentation?

## Recommended Stack for 2024

For new React projects, consider this modern stack:

- **Build Tool**: Vite
- **Framework**: Next.js (for full-stack) or Vite (for SPA)
- **State Management**: Zustand or Redux Toolkit
- **Data Fetching**: React Query
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI or Radix UI
- **Forms**: React Hook Form
- **Testing**: React Testing Library + Jest
- **Animation**: Framer Motion
- **TypeScript**: Always recommended

The React ecosystem continues to evolve rapidly, so stay updated with the latest developments and choose tools that best fit your project's needs.`
              }
            }
          }
        ]
      }
    ]
  };
};