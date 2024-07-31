import { useState } from "react"

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //index of anecdotes
  const [selected, setSelected] = useState(0)

  function getNextAnecdote() {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const points = Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(points)

  function countVotes() {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
    getMostVotes()
  }

  const [mostVotes, setMostVotes] = useState()

  function getMostVotes() {
    const maxVotesIndex = votes.indexOf(Math.max(...votes))
    setMostVotes(anecdotes[maxVotesIndex])
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h3>{anecdotes[selected]}</h3>
      <p>has {votes[selected]} votes</p>
      <button onClick={countVotes}>vote</button>
      <button onClick={getNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{mostVotes}</p>
    </div>
  )
}

export default App