import React, { useState } from 'react';
import MainNum from './MainNum';

const Main = () => {
    const [count, setCount] = useState(0);

    const handleCounter = (num) => {
        setCount(count + num);
    };

    return (
        <div>
            <button onClick={() => handleCounter(1)}>+</button>
            <button onClick={() => handleCounter(-1)}>-</button>
            <MainNum count={count} />
        </div>
    );
};

export default Main;