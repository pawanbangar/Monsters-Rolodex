import React from 'react';
import './card-list.style.css';
import {Card} from './card/card.component';

export const CardList =(props) =>{
    console.log(props);
    return(
    <div className='card-list'>
        {props.users.map(s=>(
            <Card key={s.username} uniq={s.id} email={s.email} name={s.fname} />
            ))}
        </div>
    )
}