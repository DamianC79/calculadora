import React from 'react'
import "../App.css"
import PropTypes from "prop-types"

const Resultado = ({value}) => (
    <div className='result'>
        <span>{value}</span>
    </div>
  )


Resultado.propTypes={
  value: PropTypes.string.isRequired
}
Resultado.defaultProps={
  value: "0"
}

export default Resultado