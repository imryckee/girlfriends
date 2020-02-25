import React from 'react';

const Card = ({id,name,description,photo,rank}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5' style={{width:'400px'}}>
            <img alt={name} src={photo} height="200px"/>
            <div width="400px">
                <h2>{rank} : {name}({id})</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;