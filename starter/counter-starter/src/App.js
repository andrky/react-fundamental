import { useState } from 'react';

function App() {
	const [count, setCount] = useState (0);

  // function handleClickPlus() {
  //   setCount(count + 1);
  // }

  // function handleClickMinus() {
  //   setCount(count - 1);
  // }
	return (
		<div>
			<h1>{count}</h1>
      {/* <button onClick={handleClickPlus}>Tambah</button> */}
      {/* <button onClick={handleClickMinus}>Minus</button> */}
      <button onClick={() => {setCount(count + 1)}}>Tambah</button>
      <button onClick={() => {setCount(count - 1)}}>Kurang</button>
		</div>
	);
}

export default App;
