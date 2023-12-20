// import { useState } from 'react';

import shoppingIcon from './assets/shopping-icon.svg';

import './App.css';

function App() {
	// function handleClickPlus() {
	//   setCount(count + 1);
	// }

	// function handleClickMinus() {
	//   setCount(count - 1);
	// }
	return (
		<>
			{/* <button onClick={handleClickPlus}>Tambah</button>
			<button onClick={handleClickMinus}>Minus</button>
			<button onClick={() => {setCount(count + 1)}}>Tambah</button>
      <button onClick={() => {setCount(count - 1)}}>Kurang</button> */}
			<nav className="nav">
				<img className="nav-icon" src={shoppingIcon} alt="Shopping Icon" />
				<h1 className="nav-title">Shopping List</h1>
			</nav>
      <section className='container'></section>
		</>
	);
}

export default App;
