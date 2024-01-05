import styles from './Empty.module.css'

import PropTypes from 'prop-types';


const Empty = ({text}) => {
  return (
    <div className={styles.kosong}>
      {text}
    </div>
  )
}

Empty.protType = {
  text: PropTypes.string.isRequired
}

export default Empty