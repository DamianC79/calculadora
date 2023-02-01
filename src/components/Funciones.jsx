import React from 'react'
import PropTypes from "prop-types"
import Botones from './Botones'

const Funciones = ({onContentClear, onDelete}) => 
   (
    <section className='functions'>
      <Botones type="button-long-text" text="Clear" clickHandler={onContentClear}/>
      <Botones text="&larr;" clickHandler={onDelete}/>
    </section>
  )


Funciones.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Funciones