import React from 'react';

const Blogs = () => {
  return (
    <div className="blogs-page">
      <h1 className="blogs-title">📝 My Tech Journey & Learning Notes</h1>

      <div className="blog-card">
        <h2>🚀 How My Tech Journey Started</h2>
        <p>
          I started my programming journey with pure curiosity — learning the
          basics of <strong>C programming</strong> and understanding how simple
          logic works. Writing my first “Hello World” program sparked a deep
          interest in the tech field.
        </p>
      </div>

      <div className="blog-card">
        <h2> Growing With Python</h2>
        <p>
          Python became the language that shaped my problem-solving and
          logic-building skills. From loops and functions to file handling and
          class-based applications, each topic improved my confidence. I even
          built multiple interactive projects using Python, which strengthened
          my fundamentals.
        </p>
      </div>

      <div className="blog-card">
        <h2>📘 Learning OOP & Java</h2>
        <p>
          Java introduced me to real Object-Oriented concepts like inheritance,
          interfaces, and polymorphism. It helped me understand how real-world
          applications are built.
        </p>
      </div>

      <div className="blog-card">
        <h2>🗄 Database Journey (DBMS + SQL)</h2>
        <p>
          I learned how databases work — designing tables, creating ER diagrams,
          and writing SQL queries. These skills helped me build structured and
          organized projects.
        </p>
      </div>

      <div className="blog-card">
        <h2>💻 Web Development (React + JavaScript)</h2>
        <p>
          I moved into web development and started building UI-based
          applications using React. I created projects like traffic manager,
          movie app, and portfolio website, exploring components, hooks, and
          event-driven architecture.
        </p>

        <pre className="glow-code">
          {`// My favourite React snippet
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Click Me</button>`}
        </pre>
      </div>

      <div className="blog-card">
        <h2>🔥 Firebase & Real-Time Apps</h2>
        <p>
          I learned to integrate Firebase for authentication, database
          operations, and real-time updates. This helped me create practical
          apps like internship tracker and grocery list manager.
        </p>
      </div>

      <div className="blog-card">
        <h2>📚 Data Structures & Algorithms</h2>
        <p>
          Understanding arrays, linked lists, stacks, queues, and recursion
          helped me improve my logical thinking and problem-solving abilities.
        </p>
      </div>

      <div className="blog-card">
        <h2>🛠 Tools, Skills & Practical Experience</h2>
        <p>
          Along the way, I learned to use tools like VS Code, GitHub, Firebase
          Console, and Netlify. I also became good at preparing technical
          documentation, reports, and project explanations.
        </p>
      </div>

      <div className="blog-card">
        <h2>🌟 Where I Am Today</h2>
        <p>
          Today, I am confidently building real-world projects, exploring new
          technologies, and improving every day. My goal is to grow into a
          strong software developer, mastering both front-end and back-end
          technologies.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
