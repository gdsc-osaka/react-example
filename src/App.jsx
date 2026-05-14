import './App.css'

function App() {
  const participants = [
    'Alice',
    'sohei',
  ]

  return (
    <main>
      <h1>Participants</h1>
      <p>Add your name below to join the list!</p>
      <ul>
        {participants.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
