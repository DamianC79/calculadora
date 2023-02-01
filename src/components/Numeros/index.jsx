import React from 'react'
import PropTypes from "prop-types"
import Botones from '../Botones'
import "../../App.css"

const numbers = [1,2,3,4,5,6,7,8,9,0]

const renderBotones = onClickNumber => {
    return numbers.map(number=><Botones key={number} text={number.toString()} clickHandler={onClickNumber} />)
}

const Numeros = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderBotones(onClickNumber)
        }
    </section>
)

Numeros.propTypes={
    onClickNumber: PropTypes.func.isRequired
}

export default Numeros