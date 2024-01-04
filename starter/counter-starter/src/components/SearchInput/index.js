import styles from './SearchInput.module.css'

import PropTypes from 'prop-types';

const SearchInput = ({ onSubmit, onChange, value }) => {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<input className={styles.input} onChange={onChange} value={value} type="text" placeholder="List"></input>
			<button className={styles.addButton} type="submit">
				Add
			</button>
		</form>
	);
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default SearchInput;