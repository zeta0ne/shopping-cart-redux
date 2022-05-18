import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Item.scss';

export type ItemProps = {
    data: ItemPropsData;
    rowNum: number;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
}

export type ItemPropsData = {
    id: number;
    name: string;
    amount: number;
    price: number
}

export function Item(props: ItemProps) {
    
    return(
        <span className="line-wrapper">
            <div>{props.rowNum + 1}</div>
            <div className="item">
                <div className="item-name">
                    {props.data.name}
                </div>
                <div className="item-amount">
                    {props.data.amount}
                </div>
                <div className="item-price">
                    {props.data.price}
                </div>
                <div className="btns">
                    <button onClick={()=>props.onDecrease(props.data.id)}>-</button> <button onClick={()=>props.onIncrease(props.data.id)}>+</button>
                </div>
                <div className="del-btn">
                    <button onClick={()=>props.onRemove(props.data.id)}>x</button>
                </div>
            </div>
        </span> 
    )
}