import styles from './Container.module.css'

import PropTypes from 'prop-types'

const Container = ({children}) => {
  return (
		<section className={styles.container}>
      {children}
    </section>
	);
}

Container.prototypes = {
  children: PropTypes.node
}

export default Container