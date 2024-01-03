import styles from './SearchInput.module.css'

import PropTypes from 'prop-types';

const SearchInput = (props) => {
  return (
		<form className={styles.form} onSubmit={props.onSubmit}>
			<input
				className={styles.input}
				onChange={props.onChange}
				value={props.value}
				type="text"
				placeholder="List"
			></input>
			<button className={styles.addButton} type="submit">
				Add
			</button>
		</form>
	);
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default SearchInput;