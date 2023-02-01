import React from 'react'
import PropTypes from "prop-types"
import Botones from './Botones'

const Operaciones = ({onClickOperation, onClickEqual}) => (
    <section className='math-operations'>
        <Botones text="+" clickHandler={onClickOperation}/>
        <Botones text="-" clickHandler={onClickOperation}/>
        <Botones text="*" clickHandler={onClickOperation}/>
        <Botones text="/" clickHandler={onClickOperation}/>
        <Botones text="=" clickHandler={onClickEqual}/>
    </section>)


Operaciones.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default Operaciones