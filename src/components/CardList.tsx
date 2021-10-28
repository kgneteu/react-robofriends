import React from 'react';
import Card from './Card';
import {IRobot} from "../store/reducers";


type ComponentProps = {
    robots: Array<IRobot>
}
const CardList = (props: ComponentProps) => {
    const robots = props.robots;
    return (
        <div>
            {
                robots.map((robot) => {
                    return (
                        <Card
                            key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
