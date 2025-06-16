import React from "react";
import './App.css';


// Your first custom component
function Welcome(){
   return <h1>Welcome from Office!</h1>;
}

// Header Component
const Header = () => {
  return <h2>🌟 My First React App 🌟</h2>;
}

// Footer Component
function Footer(){
  return <small>© 2025 React & Vite. All rights reserved.</small>;
}

function MainContent() {
  return (
    <main>
      <p>This is the updated version from the <strong>office-work</strong> branch.</p>
      <ul>
        <li>✔ Changed header</li>
        <li>✔ Added list</li>
        <li>✔ New layout</li>
      </ul>
    </main>
  );
}



function App() {
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
