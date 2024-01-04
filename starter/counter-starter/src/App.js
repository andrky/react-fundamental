// Import library
import { useState } from 'react';
import classname from 'classnames';

// Import Component
import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';
import Info from './components/Info';
import Todos from './components/Todos';

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

	// Menghitung Total
	const getTotalCounts = () => {
		const totalCounts = todos.reduce((total, num) => {
			return total + num.count;
		}, 0);

		return totalCounts;
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

			<Navbar />

			<Container>
				<SearchInput
					onSubmit={handleAddTodos}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					value={value}
				/>

				<Info todosLength={todos.length} totalCounts={getTotalCounts()} onDelete={() => setTodos([])} />

				{todos.length > 0 ? (
					<Todos 
            todos={todos}
            onSubstractionCount={(index) => handleSubstractionCount(index)}
            onAdditionCount={(index) => handleAdditionCount(index)}
          />
				) : (
					<div className="kosong">Empty</div>
				)}
			</Container>
		</>
	);
}

export default App;
