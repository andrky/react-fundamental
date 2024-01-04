import minusIcon from '../../assets/minus-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import classNames from 'classnames';

import styles from './Todos.module.css';

import PropTypes from 'prop-types';

const Todos = ({ todos, onSubstractionCount, onAdditionCount }) => {
	return (
		<div className={styles.todos}>
			{todos.map((todo, index, arr) => {
				return (
					<div
						key={index}
						// className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}
						className={classNames(styles.todo, {
							[styles.todoDivider]: !(arr.length === index + 1),
						})}
					>
						{todo.title}
						<div className={styles.todoIconWrapper}>
							<div className={styles.todoCount}>{todo.count}</div>
							<button
								onClick={() => {
									onSubstractionCount(index);
								}}
								className={styles.todoActionButton}
							>
								<img src={minusIcon} alt="Minus Icon" />
							</button>
							<button
								onClick={() => {
									onAdditionCount(index);
								}}
								className={styles.todoActionButton}
							>
								<img src={plusIcon} alt="Plus Icon" />
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

Todos.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    count: PropTypes.number
  })),
  onSubstractionCount: PropTypes.func,
  onAdditionCount: PropTypes.func
};

export default Todos;
