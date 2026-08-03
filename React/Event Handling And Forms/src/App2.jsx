function App() {
  const [count, setCount] = useState(0)

  const HandleClick = () => {
    alert("button was clicked")
  }

  const HandleMouseOver = () => {
    alert("Mouse Was over")
  }

  return (
    <>
    <div className="button">hellow</div>
    </>
  )
}
