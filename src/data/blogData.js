import Odyssey from "../assets/images/OdysseyTravel (1).png";
import tailwindcssScss from "../assets/images/tailwincssScss.png";
import Mern from "../assets/images/Mern.png";
import myImage from "../assets/images/myphoto2.jpg";
import JS from "../assets/images/JS.png";
import Vercel from "../assets/images/Vercel.png";
import Hook from "../assets/images/hooks.png";
import VSCode from "../assets/images/VSCode.png";
import Chemist from '../assets/images/Chemist.png';
import Ecommerce from '../assets/images/Ecommerce.png';
import Skyline from '../assets/images/Skyline.png';
// import TaskManager from '../assets/images/TaskManager.png';
import Portfolio from '../assets/images/Portfolio.png';
import EastAfricaHorizons from '../assets/images/EastAfricaHorizons.png';

const blogPosts = [
  {
    id: 1,
    title: "Complete Walkthrough of My Odyssey Travel Blog",
    summary: "A detailed guide on how I built my travel blog using React, Tailwind CSS, and Framer Motion.",
    date: "Feb 15, 2025",
    readTime: "8 min read",
    image: Odyssey,
    content: `
      <article class="prose lg:prose-xl mx-auto p-6">
        <header>
          <h1 class="text-4xl font-bold text-center mb-4">Building My Travel Blog</h1>
        </header>
        
        <section>
          <h2 class="text-2xl font-semibold mt-6">Tech Stack</h2>
          <p>My travel blog was built using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong> for animations, ensuring a modern and smooth user experience.</p>
        </section>
        
        <section>
          <h2 class="text-2xl font-semibold mt-6">Core Features</h2>
          <ul class="list-disc ml-6 space-y-2">
            <li>User authentication with JWT for secure access.</li>
            <li>Dynamic routing for SEO-friendly blog posts.</li>
            <li>Real-time messaging system for user interactions.</li>
            <li>Notification system to keep users updated on interactions.</li>
            <li>Like and comment functionality for engagement.</li>
            <li>Follow system to connect users with similar interests.</li>
          </ul>
        </section>
        
        <section>
          <h2 class="text-2xl font-semibold mt-6">Challenges & Solutions</h2>
          <div class="space-y-4">
            <h3 class="text-xl font-medium">1. Responsive Design with Tailwind CSS</h3>
            <p>Using Tailwind CSS, I created a responsive layout that adapts to different screen sizes, enhancing usability across devices.</p>
            
            <h3 class="text-xl font-medium">2. Page Transitions</h3>
            <p>Framer Motion was integrated to provide seamless animations and transitions, giving the blog a dynamic feel.</p>
            
            <h3 class="text-xl font-medium">3. User Authentication with JWT</h3>
            <p>Implemented <strong>JWT authentication</strong> to secure user data and create a personalized experience for logged-in users.</p>
            
            <h3 class="text-xl font-medium">4. Dynamic Routing</h3>
            <p>Leveraging React Router, I structured the blog with dynamic routes, making it SEO-friendly and improving navigation.</p>
            
            <h3 class="text-xl font-medium">5. Messaging System</h3>
            <p>Implemented a real-time messaging feature using WebSockets, allowing users to chat instantly.</p>
            
            <h3 class="text-xl font-medium">6. Notifications</h3>
            <p>Added a notification system that alerts users about new messages, likes, follows, and comments in real-time.</p>
            
            <h3 class="text-xl font-medium">7. Like & Comment System</h3>
            <p>Users can like and comment on posts to increase engagement and discussion.</p>
            
            <h3 class="text-xl font-medium">8. Follow System</h3>
            <p>Implemented a follow feature, allowing users to stay updated with their favorite bloggers.</p>
          </div>
        </section>
        
        <section>
          <h2 class="text-2xl font-semibold mt-6">Lessons Learned</h2>
          <p>Building this blog reinforced the importance of <strong>performance optimization</strong> and <strong>user experience design</strong>, ensuring fast load times and smooth interactions.</p>
        </section>
        
        <section>
          <h2 class="text-2xl font-semibold mt-6">Future Plans</h2>
          <ul class="list-disc ml-6 space-y-2">
            <li>Enhancing user authentication with OAuth integration.</li>
            <li>Improving the messaging system with media sharing.</li>
            <li>Adding a recommendation engine for personalized content.</li>
          </ul>
        </section>
      </article>
    `,
  },
  {
    id: 2,
    title: "SCSS vs Tailwind CSS",
    summary: "A step-by-step guide on how to build a full-stack travel blog using the MERN stack.",
    date: "Jan 29, 5 min read",
    image: tailwindcssScss,
    content: `
      <p>CSS pre-processors like <strong>SCSS</strong> and utility-first frameworks like <strong>Tailwind CSS</strong> both have advantages. But which one is best for your project?</p>
      
      <h2>SCSS – Pros & Cons</h2>
      <h3>✅ Pros:</h3>
      <ul>
        <li>Supports <strong>nesting & variables</strong></li>
        <li>Allows <strong>mixins and functions</strong></li>
        <li>Ideal for large-scale projects</li>
      </ul>
      
      <h3>❌ Cons:</h3>
      <ul>
        <li>Requires compilation</li>
        <li>Can become <strong>bloated</strong> with unused styles</li>
      </ul>

      <h2>Tailwind CSS – Pros & Cons</h2>
      <h3>✅ Pros:</h3>
      <ul>
        <li>No need to write custom CSS</li>
        <li>Reduces file size with <strong>purgeCSS</strong></li>
        <li>Faster styling with utility classes</li>
      </ul>

      <h3>❌ Cons:</h3>
      <ul>
        <li>Learning curve for utility classes</li>
        <li>Can lead to <strong>messy HTML</strong></li>
      </ul>

      <h2>Conclusion</h2>
      <p>If you prefer <strong>maintainability and structure</strong>, go with SCSS. If you want <strong>speed and efficiency</strong>, Tailwind CSS is a great choice.</p>
    `,
  },
  {
    id: 3,
    title: "React vs Vue",
    summary: "A detailed comparison of React and Vue to help you choose the right framework for your next project.",
    date: "Jan 28, 2025",
    readTime: "4 min read",
    image: Mern,
    content: `
      <p>React and Vue are both powerful frontend frameworks, but they serve different purposes.</p>

      <h2>React – Pros & Cons</h2>
      <h3>✅ Pros:</h3>
      <ul>
        <li>Strong ecosystem with many libraries</li>
        <li>Great for large-scale applications</li>
      </ul>

      <h3>❌ Cons:</h3>
      <ul>
        <li>Steeper learning curve</li>
      </ul>

      <h2>Vue – Pros & Cons</h2>
      <h3>✅ Pros:</h3>
      <ul>
        <li>Easy to learn</li>
        <li>Lightweight and fast</li>
      </ul>

      <h3>❌ Cons:</h3>
      <ul>
        <li>Smaller community than React</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "My Personal Journey into Web Development",
    summary: "A reflection on my journey from HTML & CSS to full-stack development and beyond.",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    image: myImage,
    content: `
      <h2>My Web Development Journey</h2>
      <p>I started coding with basic <strong>HTML & CSS</strong>, creating simple web pages. Over time, I explored:</p>
      <ul>
        <li><strong>JavaScript</strong> for interactivity</li>
        <li><strong>React.js</strong> for building dynamic UI</li>
        <li><strong>Node.js & MongoDB</strong> for backend development</li>
      </ul>
      <p>One of my first projects was a <strong>travel blog</strong> where I documented my experiences. Learning <strong>full-stack development</strong> opened doors to exciting opportunities. Today, I'm focused on improving <strong>UI/UX</strong> and exploring <strong>serverless deployment</strong>.</p>
      
      <h2>Advice for New Developers</h2>
      <ol>
        <li><strong>Start small</strong> – Build mini-projects.</li>
        <li><strong>Learn JavaScript deeply</strong> – It's the backbone of modern web development.</li>
        <li><strong>Stay consistent</strong> – The more you code, the better you become.</li>
      </ol>
    `,
  },
  {
    id: 5,
    title: "How to Create a Custom React Hook for Dark Mode",
    summary: "A step-by-step tutorial on creating a custom React Hook for managing dark mode in your app.",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    image: Hook,
    content: `
      <h2>Why Use a Custom Hook?</h2>
      <p>A <strong>custom React Hook</strong> allows you to manage state <strong>cleanly</strong> and <strong>reusably</strong>.</p>
      
      <h2>Step 1: Create the Hook</h2>
      <pre><code>import { useState, useEffect } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
}</code></pre>
      
      <h2>Step 2: Implement in a Component</h2>
      <pre><code>const [theme, setTheme] = useDarkMode();</code></pre>
      <p>Now, clicking a <strong>toggle button</strong> will switch themes!</p>
    `,
  },
  {
    id: 6,
    title: "Deploying a React App with Vercel – The Complete Guide",
    summary: "A comprehensive guide to deploying your React applications with Vercel for free.",
    date: "Nov 30, 2024",
    readTime: "6 min read",
    image: Vercel,
    content: `
      <h2>Why Vercel?</h2>
      <p><strong>Vercel</strong> is a powerful platform for deploying static sites and serverless functions with ease.</p>
      
      <h2>Step 1: Install Vercel CLI</h2>
      <pre><code>npm install -g vercel</code></pre>
      
      <h2>Step 2: Deploy Your App</h2>
      <pre><code>vercel --prod</code></pre>
      <p>Your app is now live with a <strong>custom domain</strong>!</p>
    
      <h2>Additional Features</h2>
      <p>Vercel offers <strong>preview deployments</strong>, <strong>environment variables</strong>, and <strong>custom domains</strong> to enhance your deployment experience.</p>
      
      <h2>Conclusion</h2>
      <p>With Vercel, you can deploy your React apps <strong>quickly</strong> and <strong>securely</strong> without any hassle.</p>
      
      <p>Happy coding!</p>
    `,
  },
  {
    id: 7,
    title: "10 Must-Have VS Code Extensions for Web Developers",
    summary: "Discover the top VS Code extensions that can boost your productivity and help you write better code.",
    date: "Nov 15, 2024",
    readTime: "3 min read",
    image: VSCode,
    content: `
      <h2>1. Prettier</h2>
      <p>Automatically format your code for consistency and readability.</p>
      
      <h2>2. Live Server</h2>
      <p>Launch a local development server with live reload capability.</p>
      
      <h2>3. ES7 React/Redux/GraphQL/React-Native snippets</h2>
      <p>Quickly scaffold React components and snippets with ES7 syntax.</p>
      
      <h2>4. Bracket Pair Colorizer</h2>
      <p>Colorize matching brackets for easy identification.</p>
      
      <h2>5. GitLens</h2>
      <p>Supercharge your Git workflow with advanced features and insights.</p>
      
      <h2>6. Code Spell Checker</h2>
      <p>Check your code for spelling errors and typos.</p>
      
      <h2>7. Path Intellisense</h2>
      <p>Autocomplete filenames and paths in your code.</p>
      
      <h2>8. Auto Rename Tag</h2>
      <p>Automatically rename paired HTML/XML tags.</p>
      
      <h2>9. CSS Peek</h2>
      <p>Peek and navigate to CSS definitions with ease.</p>
      
      <h2>10. Better Comments</h2>
      <p>Improve code readability with styled comments and annotations.</p>
    `,
  },
  {
    id: 8,
    title: "JavaScript ES6 Features You Should Know",
    summary: "A concise guide to the most useful ES6 features that can help you write cleaner and more efficient JavaScript code.",
    date: "Oct 25, 2024",
    readTime: "4 min read",
    image: JS,
    content: `
      <h2>1. Arrow Functions</h2>
      <p>Shorter syntax for writing function expressions.</p>
      
      <h2>2. Template Literals</h2>
      <p>Multi-line strings with embedded expressions.</p>
      
      <h2>3. Destructuring Assignment</h2>
      <p>Extract values from arrays and objects into variables.</p>
      
      <h2>4. Spread Operator</h2>
      <p>Split array elements or object properties.</p>
      
      <h2>5. Rest Parameter</h2>
      <p>Collect multiple arguments into a single array.</p>
      
      <h2>6. Default Parameters</h2>
      <p>Set default values for function parameters.</p>
      
      <h2>7. Object Shorthand</h2>
      <p>Shorter syntax for object properties.</p>
      
      <h2>8. Promises</h2>
      <p>Handle asynchronous operations with ease.</p>
      
      <h2>9. Modules</h2>
      <p>Organize code into reusable modules.</p>
      
      <h2>10. Classes</h2>
      <p>Define object-oriented classes in JavaScript.</p>
    `,
  },
  {
    id: 9,
    title: "The Ultimate Guide to Responsive Web Design",
    summary: "Learn how to create responsive websites that look great on all devices with this comprehensive guide.",
    date: "Oct 10, 2024",
    readTime: "7 min read",
    image: Odyssey,
    content: `
      <h2>What is Responsive Web Design?</h2>
      <p><strong>Responsive web design</strong> is an approach that makes web pages render well on a variety of devices and window or screen sizes.</p>
      
      <h2>Key Concepts</h2>
      <h3>1. Fluid Grids</h3>
      <p>Use <strong>percentage-based</strong> widths to create a flexible grid layout.</p>
      
      <h3>2. Flexible Images</h3>
      <p>Set <strong>max-width: 100%</strong> on images to prevent them from overflowing their containers.</p>
      
      <h3>3. Media Queries</h3>
      <p>Apply <strong>conditional styles</strong> based on device characteristics like width, height, and orientation.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li><strong>Mobile-first approach</strong> – Design for small screens first, then scale up.</li>
        <li><strong>Use relative units</strong> – Em, rem, and % are your friends.</li>
        <li><strong>Test on real devices</strong> – Emulators can't replicate the experience of using a physical device.</li>
      </ul>
    `,
  },
  {
    id: 10,
    title: "How to Build a Full-Stack Travel Blog with the MERN Stack",
    summary: "A step-by-step guide on how to build a full-stack travel blog using the MERN stack.",
    date: "Sep 20, 2024",
    readTime: "10 min read",
    image: Mern,
    content: `
      <h2>What is the MERN Stack?</h2>
      <p>The <strong>MERN stack</strong> is a popular JavaScript stack used for building full-stack web applications.</p>
      
      <h3>MERN stands for:</h3>
      <ul>
        <li><strong>MongoDB</strong> – A NoSQL database for storing application data.</li>
        <li><strong>Express</strong> – A Node.js web application framework for building APIs.</li>
        <li><strong>React</strong> – A JavaScript library for building user interfaces.</li>
            <li><strong>Node.js</strong> – A JavaScript runtime environment for server-side code.</li>
          </ul>
          
          <h2>Step 1: Set Up Your MongoDB Database</h2>
          <p>Start by creating a new database and collection in MongoDB Atlas.</p>
          
          <h2>Step 2: Create a Node.js API with Express</h2>
          <p>Build a RESTful API to handle CRUD operations for your blog posts.</p>
          
          <h2>Step 3: Develop the Frontend with React</h2>
          <p>Create React components to display blog posts and forms for adding new posts.</p>
          
          <h2>Step 4: Connect the Frontend to the Backend</h2>
          <p>Use Axios to fetch data from your Express API and display it in your React app.</p>
          
          <h2>Step 5: Deploy Your App</h2>
          <p>Deploy your MERN stack app to Heroku or Vercel for the world to see!</p>
        `,
    }
];
export default blogPosts;

const projects = [
  {
    id: 1,
    image: Odyssey,
    title: "🌍 Odyssey Travel (Full-Stack Web Application)",
    tech: "React, Node.js, Express.js, MongoDB, Multer, JWT Authentication",
    type: "Full-Stack Web Application",
    description:
      "A travel platform with secure user authentication, media uploads, and real-time interactive features.",
  },    
  {
    id: 2,
    image: Chemist,
    title: "🧪 Chemist Website",
    tech: "HTML, CSS",
    type: "Beginner Project",
    description:
      "A static website designed for a pharmacy, helping me understand HTML structuring and CSS styling.",
  },
  {
    id: 3,
    image: Ecommerce,
    title: "🛒 E-Commerce Application",
    tech: "React, Node.js, Express.js, MongoDB",
    type: "Full-Stack Web Application",
    description:
      "An online shopping platform with a shopping cart, product search, and total price calculation.",
  },
  {
    id: 4,
    image: Skyline,
    title: "🏡 Skyline Estates (Real Estate Website)",
    tech: "HTML, CSS",
    type: "Static Website",
    description:
      "A simple real estate website showcasing property listings and a contact form for inquiries.",
  },
  {
    id: 5,
    image: Portfolio,
    title: "💼 Portfolio Website",
    tech: "React, Tailwind CSS, Framer Motion",
    type: "Personal Website",
    description:
    "My personal portfolio website featuring smooth animations, responsive design, and interactive elements.",
  },
  {
    id: 6,
    image: EastAfricaHorizons,
    title: "🌍 East Africa Horizons (Travel Blog)",
    tech: "React, Tailwind CSS, Framer Motion",
    type: "Front-End Project",
    description:
    "A travel blog showcasing the beauty of East Africa with smooth page transitions and a clean UI.",
  },
  {
    id: 7,
    image: Mern,
    title: "📋 Task Manager App",
    tech: "React, Firebase, Tailwind CSS",
    type: "Web Application",
    description:
      "A productivity tool allowing users to add, edit, and delete tasks with drag-and-drop functionality.",
  },
];

export { projects };
