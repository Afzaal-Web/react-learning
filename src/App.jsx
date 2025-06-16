import React from "react";
import './App.css';

function Header() {
  return <header><h1>🚀 React App (Office Version)</h1></header>;
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

function Footer() {
  return <footer><small>Updated at Office 🏢</small></footer>;
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
