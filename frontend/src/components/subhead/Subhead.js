import React from 'react'
import './Subhead.css'
const Subhead = (props) => {
  return (
    <>
        <section className='subhead'>
            <h2>{props.title}</h2>
            <p>{props.para}</p>
        </section>
    </>
  )
}

export default Subhead