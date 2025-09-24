
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const name = "Jaya"

  function funFact() {
    return "Fun Fact: I can debug in dreams🛌";
  }
  return (
    <div>
      <div id='card'>
        <h1>Hello, I am {name} 👋</h1>
        <h2>Aspiring React Developer</h2>
        <p>I'm currentlu learning how to build awesome UIs with React!</p>
        <p>{funFact()}</p>
      </div>
    </div>
  )
}

export default App
