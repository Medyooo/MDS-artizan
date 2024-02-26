import PropTypes from 'prop-types'


export default function Input({label, name, value, onChange, placeholder}) {
  return (
    <label>
        { label }
        <input name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </label>
  )
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}