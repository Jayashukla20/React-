
import './App.css'

function App() {
  let movie = "Moana"
  let yearsOfRelease = 2016;
  function yearsSinceRelease() {
    return "It’s been 9 years since its release.";
  }
  return (
    <div id='animated'>
      <h1>{movie} ({yearsOfRelease})</h1>
      <h3><strong>The ocean chose her for an epic adventure.</strong></h3>
      <p>It’s a beautifully animated adventure filled with courage, self-discovery,
        and the deep connection between humans and nature.</p>
      <p>{yearsSinceRelease()}</p>
    </div>

  )
}

export default App
