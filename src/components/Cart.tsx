import './Cart.scss';
import { Item } from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export function Cart() {
    const dispatch = useDispatch();
    
    const itemList = useSelector((state: any) => state.itemListReducer.items)
    const totalAmount = useSelector((state: any) => state.itemListReducer.totalAmount)
    const totalSum = useSelector((state: any) => state.itemListReducer.totalSum)

    const [modal, setModal] = useState('invis');
    const [removed, setRemoved] = useState(false);
    
    const decrease = (id: number) => {
        dispatch({type: "MINUS_ITEM", payload: id})
    }
    const increase = (id: number) => {
        dispatch({type: "PLUS_ITEM", payload: id})
    }

    //let idee: number;

    const remove = (id: number) => {
        //setModal('');
        //idee = id;
        dispatch({type: "REMOVE_ITEM", payload: /*idee*/id});
        //console.log(idee)
    }

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
                {itemList.map((item: any, i: any) => (
                    <Item 
                        data={item} 
                        key={i} 
                        rowNum={i} 
                        onIncrease={increase} 
                        onDecrease={decrease}
                        onRemove={remove}
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