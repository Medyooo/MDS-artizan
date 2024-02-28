import PropTypes from 'prop-types'

export default function Button ({ children, type = 'button', onClick }) {
  return (
    <div>
      <button type={type} onClick={onClick}>{children}</button>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  onClick: PropTypes.func
}
