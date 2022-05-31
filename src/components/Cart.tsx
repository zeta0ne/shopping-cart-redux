import './Cart.scss';
import { Item, ItemProps } from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppState } from '../store/store';
import { ItemData } from '../models/ItemList';


export function Cart() {
    const dispatch = useDispatch();
    
    const itemList = useSelector((state: AppState) => state.cartPageState.items)
    const totalAmount = useSelector((state: AppState) => state.cartPageState.totalAmount)
    const totalSum = useSelector((state: AppState) => state.cartPageState.totalSum)

    const [modal, setModal] = useState('invis');
    const [removed, setRemoved] = useState(false);

    //let idee: number;

    /*useEffect(() => {
        console.log(removed)
        if (removed === true){
            console.log(idee + ' useeffect')
            dispatch({type: "REMOVE_ITEM", payload: idee});
            setModal('invis');
            setRemoved(!removed);
        }
    }, [removed])*/

    //без модалки всё работает как надо

    return(
        <>
            <div className="cart">
                <div className="cart-header">
                    <div>#</div>
                    <div className="item-name">Название</div>
                    <div className="item-amount">Количество</div>
                    <div className="item-price">Стоимость</div>
                    <div className="btns"></div>
                    <div className="del-btn">Удалить</div>
                </div>
                {itemList.map((item: ItemData, i: number) => (
                    <Item 
                        data={item} 
                        key={i} 
                        rowNum={i} 
                    />))
                }
                <div className="total"> Итого: {totalAmount} товаров на сумму {totalSum} деняк</div>
            </div>
            <div className={`modal ${modal}`}>
                Вы точно хотите удалить этот товар?
                <div><button onClick={()=>{setRemoved(!removed)}}>yes</button><button>no</button></div>
            </div>
        </>
        
    )
}