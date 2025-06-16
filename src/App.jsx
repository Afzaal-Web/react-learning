import React, { useState } from "react";
import './App.css';


// Your first custom component
function Welcome() {
  return <h1>Welcome from Home</h1>;
}

// Header Component
const Header = () => {
  return <h2>🌟 My First React App 🌟</h2>;
}

// Footer Component
function Footer() {
  return <small>© 2025 home. All rights reserved.</small>;
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

// function Comment(props) {
//   return (
//     <div>
//       <p>{props.text}</p>
//       <div>
//         {props.children}
//       </div>
//     </div>
//   );
// }

// New Component: counter using  State
function Counter() {
  const [count, setcount] = useState(1);
  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Counter Example</h3>
      <p>Count: {count}</p>
      {/* Step 2: Update state using setCount */}
      <button onClick={() => setcount(count - 1)}>➖ Decrease</button>
      <button onClick={() => setcount(1)}>🔁 Reset</button>
      <button onClick={() => setcount(count + 1)}>➕ Increase</button>

    </div>
  );
}

// toggle visiblty through State
function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isVisible ? 'Hide' : 'show'} Message
      </button>
      {isVisible && <p>This is a secret message! 👀</p>}
    </div>
  );
}

function BackgroundChanger() {
  const [rootColor, setRootColor] = useState('white');
  const [afterRootColor, setAfterRootColor] = useState('lightgray');
  const [divColor, setDivColor] = useState('lavender');

  function changeColor() {
    // 👉 Cycle rootColor
    const newRootColor = rootColor === 'white' ? 'orange' : rootColor === 'orange' ? 'green' : 'white';
    console.log('RootColor BEFORE:', rootColor);
    setRootColor(newRootColor);
    console.log('RootColor AFTER setState:', rootColor); // still old
    document.getElementById('root').style.background = newRootColor;

    // 👉 Cycle afterRootColor
    const newAfterRootColor = afterRootColor === 'lightgray' ? 'skyblue' : afterRootColor === 'skyblue' ? 'pink' : 'lightgray';
    console.log('afterRootColor BEFORE:', afterRootColor);
    setAfterRootColor(newAfterRootColor);
    console.log('afterRootColor AFTER setState:', afterRootColor);
    document.getElementById('afterRoot').style.background = newAfterRootColor;

    // 👉 Cycle divColor (the component's own background)
    const newDivColor = divColor === 'lavender' ? 'gold' : divColor === 'gold' ? 'salmon' : 'lavender';
    console.log('divColor BEFORE:', divColor);
    setDivColor(newDivColor);
    console.log('divColor AFTER setState:', divColor);
  }

  return (
    <div style={{ background: divColor, padding: '20px' }}>
      <h2>Root color: {rootColor}</h2>
      <h2>After Root color: {afterRootColor}</h2>
      <h2>Component div color: {divColor}</h2>
      <button onClick={changeColor}>Change All Colors</button>
    </div>
  );
}


// Main App component
function App() {
  return (
    <div id="afterRoot">
      <Header />
      <BackgroundChanger />
      <Welcome />
      <Message text="Hello just learnt Props"><span>afzaal</span></Message>
      {/* <Comment text ="Hello just learnt Props"><span>afaal</span></Comment> */}
      {/* ✅ Add the new Counter component */}
      <Counter />
      <ToggleText />
      <Footer />
    </div>
  );
}

export default App;