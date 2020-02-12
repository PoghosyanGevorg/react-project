import React,{ useState } from 'react';
import { Button } from '../../../components'

const Counter = () => {
    let [num,setNum] = useState(0);
const increment = () => {
    setNum(num + 1)
}
const decrement = () => {
    setNum(num - 1)
}

    return(
        <>
        <Button onClick = {decrement} bgColor='red'>-</Button>
        <span>{num}</span>
        <Button onClick = {increment} bgColor='green'>+</Button>
        </>
    )
};

export default Counter;