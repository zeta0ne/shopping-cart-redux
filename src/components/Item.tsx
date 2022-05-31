import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartAction } from '../actions/cart.actions';
import './Item.scss';

export type ItemProps = {
    data: ItemPropsData;
    rowNum: number;
}

export type ItemPropsData = {
    id: number;
    name: string;
    amount: number;
    price: number
}

export function Item(props: ItemProps) {
    const dispatch = useDispatch();

    const decrease = (id: number, dispatch: Dispatch<CartAction>) => {
        dispatch(decrease(id));
    }
    const increase = (id: number) => {
        dispatch({type: "PLUS_ITEM", payload: id})
    }

    const remove = (id: number) => {
        dispatch({type: "REMOVE_ITEM", payload: id});
    }
    
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
                    <button onClick={()=>decrease(props.data.id)}>-</button> <button onClick={()=>increase(props.data.id)}>+</button>
                </div>
                <div className="del-btn">
                    <button onClick={()=>remove(props.data.id)}>x</button>
                </div>
            </div>
        </span> 
    )
}