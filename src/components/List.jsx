import React from 'react'
import Logo from './logo.svg'
import arrList from '../Rdata'

function List() {

        return (
                <>
                        <div className='reactList'>
                                {arrList.map((item) => {
                                        return <>
                                                <div className='listName'>
                                                        <div className="imgContainer">
                                                                <img src={Logo} alt="logo" />
                                                        </div>
                                                        <h4>{item.heading}</h4>
                                                        <p>{item.para}</p>
                                                        <a href={item.link}>{item.btn}</a>
                                                </div>
                                        </>
                                })}
                        </div>
                </>
        )
}

export default List;
