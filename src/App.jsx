import { useState } from 'react'

const startSmallQuestions = [
  "What hobby do you wish you had more time to pursue?",
  "When was the last time you changed your mind about something?",
  "If you could research one topic for your full-time job, what would you choose?",
  "What would you title this chapter of your life story?"
]

const goDeeperQuestions = [
  "What is one pattern from your family of origin you hope to carry forward, and what is one you hope to leave behind?",
  "Who is one of your 'heroes' (close or at a distance), and what about them do you admire most?",
  "Finish the sentence: I am working on accepting...",
  "What is something you are trying to unlearn as of late?"
]

export default function App() {
  const [question, setQuestion] = useState('')

  const getRandomQuestion = (list) => {
    const index = Math.floor(Math.random() * list.length)
    setQuestion(list[index])
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Table Conversations</h1>
      <button onClick={() => getRandomQuestion(startSmallQuestions)}>Start Small</button>
      <button onClick={() => getRandomQuestion(goDeeperQuestions)}>Go Deeper</button>
      {question && <p style={{ marginTop: '2rem', fontSize: '1.25rem' }}>{question}</p>}
    </div>
  )
}