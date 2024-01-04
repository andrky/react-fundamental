import styles from './Info.module.css';

import PropTypes from 'prop-types';

const Info = ({ todosLength, totalCounts, onDelete }) => {
	return (
		<div className={styles.info}>
			<div className={styles.infoTotal}>
				<p>{`Total list : ${todosLength}`}</p>
			</div>

			<div className={styles.infoTotal}>
				<p>{`Total Count ${totalCounts}`}</p>
			</div>

			<button className={styles.deleteAllButton} onClick={onDelete}>
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
