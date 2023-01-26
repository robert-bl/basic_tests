import './App.css';

function App() {

  const [num, setNum]  = useState(Math.floor(Math.random()*10))

  return (
    <div className="App">
      <div>Your random number is:</div>
      <div>{num}</div>
    </div>
  );
}

export default App;
