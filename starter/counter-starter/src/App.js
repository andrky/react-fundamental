import { useState } from 'react';

import shoppingIcon from './assets/shopping-icon.svg';

import './App.css';

function App() {
	const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {title: 'Semangka', count: '1'},
    {title: 'Pisang', count: '1'},
    {title: 'Jambu', count: '1'},
  ]);


	// Cara Kesatu
	// function handleClickPlus() {
	//   setCount(count + 1);
	// }
	// function handleClickMinus() {
	//   setCount(count - 1);
	// }

  // Cara Ketiga
	// function MyButton() {
  //   const [count, setCount] = useState(0);
    
	// 	function handleClickPlus() {
	// 		setCount(count + 1);
	// 	}

	// 	function handleClickMinus() {
	// 		setCount(count - 1);
	// 	}

	// 	return (
	// 		<>
  //       <h1>{count}</h1>
	// 			<button onClick={handleClickPlus}>Tambah</button>
	// 			<button onClick={handleClickMinus}>Kurang</button>
	// 		</>
	// 	);
	// }
  
	return (
		<>
			{/* Cara Kesatu */}
			{/* <button onClick={handleClickPlus}>Tambah</button>
			<button onClick={handleClickMinus}>Minus</button>
      
      // Cara Kedua
			<button onClick={() => {setCount(count + 1)}}>Tambah</button>
      <button onClick={() => {setCount(count - 1)}}>Kurang</button> */}

      {/* Cara Ketiga */}
			{/* <MyButton /> */}

			<nav className="nav">
				<img className="nav-icon" src={shoppingIcon} alt="Shopping Icon" />
				<h1 className="nav-title">Shopping List</h1>
			</nav>
			<section className="container">
				<form className="form">
					<input
						className="input"
						onChange={(e) => {
							setValue(e.target.value);
						}}
						type="text"
						placeholder="List"
					></input>
					<button className="add-button" type="submit">
						Add
					</button>
				</form>

        {todos.length > 0 ? (
          <div className='todos'>
          {todos.map((todo) => {
            return (
              <div> 
                {todo.title},
                {todo.count}
              </div>
            )
          })}
          </div> 
        ) : (
          <div>Kosong</div>
        )}
			</section>
		</>
	);
}

export default App;
