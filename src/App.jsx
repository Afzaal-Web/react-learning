import React, { useState} from "react";
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

// New Component: counter using  State
function Counter() {
  const [count, setcount] = useState(1);
  return(
<div style={{margin: '20px 0'}}>
  <h3>Counter Example</h3>
  <p>Count: {count}</p>
  {/* Step 2: Update state using setCount */}
  <button onClick={() => setcount(count - 1)}>➖ Decrease</button>
  <button onClick={() => setcount(1)}>🔁 Reset</button>
  <button onClick={() => setcount(count + 1)}>➕ Increase</button>
  
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
      {/* ✅ Add the new Counter component */}
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
