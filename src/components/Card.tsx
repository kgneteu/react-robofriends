import React from 'react';
import {IRobot} from "../store/reducers";

const Card = ({ name, email, id }: IRobot) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' style={{width: '20rem'}}>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
