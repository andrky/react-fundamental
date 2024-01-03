import styles from './Info.module.css';

import PropTypes from 'prop-types';

const Info = (props) => {
	return (
		<div className={styles.info}>
			<div className={styles.infoTotal}>
				<p>{`Total list : ${props.todosLength}`}</p>
			</div>

			<div className={styles.infoTotal}>
				<p>{`Total Count ${props.totalCounts}`}</p>
			</div>

			<button className={styles.deleteAllButton} onClick={props.onDelete}>
				Delete All List
			</button>
		</div>
	);
};

Info.propTypes = {
	todosLength: PropTypes.number,
	totalCounts: PropTypes.func,
	onDelete: PropTypes.func,
};

export default Info;
