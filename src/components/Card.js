import React from 'react';

const Card = ({id,name,description,photo,rank}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5' style={{width:'280px'}}>
            <img alt={name} src={photo} height="150px"/>
            <div>
                <h3>{rank} : {name}({id})</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;