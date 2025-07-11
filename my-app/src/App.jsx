import { useState, useEffect } from 'react'
import { History } from './components/History'
import { Food } from './components/Food'
import { Ban } from './components/Ban'
import axios from 'axios'
import './App.css'

const API_KEY = '92edfdb3f6b842238f7133ef36998139'

function App() {
  const [food, setFood] = useState(null)
  const [banList, setBanList] = useState([])
  const [history, setHistory] = useState([])

  const generateFood = async () => {
    try {
      const blocked = banList.length == 0 ? '' : '&exlude-tags=' + banList.join()
      const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1${blocked}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
      setFood(res.data.recipes[0])
    } catch (e) {
      alert(e)
    }
  }

  const saveFood = (e) => {
    setHistory(prev => [...prev, food])
    generateFood()
  }

  useEffect(() => {
    generateFood()
  }, [])

  return (
    food && <div className='app'>
      <History history={history}/>
      <main>
        <Food food={food} banList={banList} setBanList={setBanList}/>
        <button onClick={saveFood} className='generator'>New Food!</button>
      </main>
      <Ban banList={banList} setBanList={setBanList}/>
    </div>
  )
}

export default App
