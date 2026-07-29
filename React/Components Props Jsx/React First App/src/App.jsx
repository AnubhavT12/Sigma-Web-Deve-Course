import navbar from "./components/Navbar"
import footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="card 1" desc="card 1 desc" />
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </>
  )
}

export default App
