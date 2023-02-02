import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)} className={classes.btn}>inc</button>
        </div>
    );
};
