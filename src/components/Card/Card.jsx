import React from 'react'
import './Card.css'

const Card = ({logo , title , content , info , btn}) => {
  return (
    <div className='card-container'>
        <div className="card-contetn">
            <img src={logo} className='card-logo'/>
            <h2 className='card-title'>{title}</h2>
            <p className='card-content'>{content}</p>
            <p className='card-info'>{info}</p>
            <button className='card-btn'>{btn}</button>
        </div>
    </div>
  )
}

export default Card
