import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [emojisData, SetEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true)
      try {
        const res = await axios.get('https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631')
        
        SetEmojisData(res.data);
        setLoading(false)
      } catch (error) {
        console.log(error)

        setError(true)
        setLoading(false)
      }
    }
    fetchEmojis()
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Not Found...</p>}
      {emojisData.length > 0 && <p>Success get Emoji's!</p>}
    </div>
  );
}

export default App;
