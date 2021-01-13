import React, {useState} from "react";

const App = () => {
  const date = new Date().toLocaleTimeString('en-US', { hour12: false });
  const [time, setTime] = useState(date);
  
  const showTime = () => {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });;
    return setTime(currentTime);
  }
  
  setInterval(showTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}


export default App;
