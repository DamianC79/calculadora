import React from 'react'
import PropTypes from "prop-types"
import "./index.css"

const Botones = ({type,text,clickHandler}) => (
    <button className={type} onClick={()=>{
      clickHandler(text)
    }}>
        <span>{text}</span>
    </button>
  )


Botones.propTypes={
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}
export default Botones