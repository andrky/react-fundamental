import styles from './Emojis.module.css'

import PropTypes from 'prop-types';


const Emojis = ({emojisData}) => {
  return (
    <div className={styles.emojisGrid}>
      {emojisData.map((data, index) => (
        <div>
          <p dangerouslySetInnerHTML={{__html: `&#${data.symbol.codePointAt(0)}`}}
          />
        </div>
      ))}
    </div>
  )
}

Emojis.propType = {
  emojisData: PropTypes.array
}

export default Emojis