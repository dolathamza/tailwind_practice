import React from 'react';

const Card = (props) => {
    return (
        <div
            className={"container mx-auto  hover:scale-110 transition ease-in delay-600 duration-600 bg-white rounded-lg shadow-lg mb-52  mt-36 p-32 "}>{props.children}</div>
    )
}


export default Card;
