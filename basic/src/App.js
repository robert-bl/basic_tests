import './App.css';

function App() {

  let num = Math.floor(Math.random()*10)

  return (
    <div className="App">
      <div>Your random number is:</div>
      <div>{num}</div>
    </div>
  );
}

export default App;
