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
  return <small>© 2025 Afzaal. All rights reserved.</small>;
}

// Props are like function arguments — they let you send data into a component.
// Think of components as reusable blocks, and props let you customize what each block displays.

function Message(props) {
  return (
    <>
      <p>{props.text}</p>
      <div>
        {props.children}
      </div>
    </>
  );
}

function Comment(props) {
  return (
    <div>
      <p>{props.text}</p>
      <div>
        {props.children}
      </div>
    </div>
  );
}


// Main App component
function App(){
  return(
    <div>
      <Header />
      <Welcome />
      <Message text ="Hello just learnt Props"><span>afaal</span></Message>
      <Comment text ="Hello just learnt Props"><span>afaal</span></Comment>
      <Footer />
    </div>
  );
}

export default App;