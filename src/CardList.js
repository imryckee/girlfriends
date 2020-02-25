import React from "react";
import Card from './Card.js';

const CardList = ({girls}) => {
    const cardsArray = girls.map(user => {
        return <Card key={user.id} id={user.id} name={user.name} description={user.description} photo={user.photo} rank={user.rank} />
        }
    )
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;