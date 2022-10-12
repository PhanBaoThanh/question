import './App.scss';
import {useState} from 'react'

function App() {
  const [id,setId] = useState(-1)
  const data = [
    {
      id: 0,
      question: 'Do You Accept All Major Credit Cards?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
    },
    {
      id: 1,
      question: 'Do You Suppport Local Farmers?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
    },
    {
      id: 2,
      question: 'Do You Use Organic Ingredients?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
    },
  ]

  return (
    <div className="App">
      <div className='box'>
        <div className='header'>General Questions</div>
        <div className='questions'>
        {
          data.map(item => (
            <div className='question'>
              <div className='question__header'>
                <div className='question__header__name'>{item.question}</div>
                <div className='question__header__icon' onClick={() => item.id === id ? setId(-1) : setId(item.id)}>
                  <p>{item.id === id ? '-' : '+'}</p>
                </div>
              </div>

              {
                item.id === id ? (
                  <div className='answer'>
                    <p>{item.question}</p>
                  </div>
                ) : (
                  <></>
                )
              }
              
            </div>
          ))
        }
          
        </div>
      </div>
    </div>
  );
}

export default App;
