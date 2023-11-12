import React from 'react';

function Car({brand, color, price}) {
    return <div className="car">
        The name of my brand Car is {brand} with a {color} color and cost about ${price}.
    </div>
}

function CarLogo(props) {
    return <div> The name of CarLogo is {props.logo}</div>
}

// export default Car;
export { Car, CarLogo };