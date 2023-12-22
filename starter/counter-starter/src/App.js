// Import library
import { useState } from 'react';
import classname from 'classnames';

// Import Asset
import shoppingIcon from './assets/shopping-icon.svg';
import minusIcon from './assets/minus-icon.svg';
import plusIcon from './assets/plus-icon.svg';

import './App.css';

function App() {
	// State Input Value
	const [value, setValue] = useState('');
	// State Data Todos
	const [todos, setTodos] = useState([
		{ title: 'Semangka', count: 1 },
		{ title: 'Pisang', count: 1 },
		{ title: 'Jambu', count: 1 },
	]);

	// Function Menambahkan Count Todos Berdasarkan Parameter Index Yang Didapatkan Hasil Dari Array Map
	const handleAdditionCount = (index) => {
		const newTodos = [...todos];

		newTodos[index].count = newTodos[index].count + 1;

		setTodos(newTodos);
	};

	// Function Mengurangi Count Todos Berdasarkan Parameter Index Yang Didapatkan Hasil Dari Array Map
	const handleSubstractionCount = (index) => {
		const newTodos = [...todos];

    // Jika Count Data Todos > 1, Maka Bisa dilakukan Pengurangan Count
		if (newTodos[index].count > 1) {
			newTodos[index].count = newTodos[index].count - 1;
		} else {
      // Jika Data Count 1, Dan Mencoba Melakukan Pengurangan Maka Data Todos Akan Dihapus
			newTodos.splice(index, 1);
		}

		setTodos(newTodos);
	};

  // Menambahkan Submit Todos
	const handleAddTodos = (e) => {
		e.preventDefault();

    // Jika Data Yang Diinput Kosong Maka Tidak Akan Bisa
		if (!value) {
			alert('No blank data!');
			return;
		}

    // Melakukan Merge Array
		const addTodos = [
			...todos,
			{
				title: value,
				count: 1,
			},
		];

		setTodos(addTodos);
		setValue('');
	};
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
				<form className="form" onSubmit={handleAddTodos}>
					<input
						className="input"
						onChange={(e) => {
							setValue(e.target.value);
						}}
						value={value}
						type="text"
						placeholder="List"
					></input>
					<button className="add-button" type="submit">
						Add
					</button>
				</form>

				{todos.length > 0 ? (
					<div className="todos">
						{todos.map((todo, index, arr) => {
							return (
								<div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}>
									{todo.title}
									<div className="todo-icon-wrapper">
										<div className="todo-count">{todo.count}</div>
										<button
											onClick={() => {
												handleSubstractionCount(index);
											}}
											className="todo-action-button"
										>
											<img src={minusIcon} alt="Minus Icon" />
										</button>
										<button
											onClick={() => {
												handleAdditionCount(index);
											}}
											className="todo-action-button"
										>
											<img src={plusIcon} alt="Plus Icon" />
										</button>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className="kosong">Empty</div>
				)}
			</section>
		</>
	);
}

export default App;
