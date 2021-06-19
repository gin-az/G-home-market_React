import React, {Component, useEffect, useState} from "react";
import s from "./index.module.scss";
import {Product} from "../Product/Product";

const Catalog = () => {
    const [item, setItem] = useState(null);
    const [items, setItems] = useState(null);

    const getData = async () => {
        try {
            const res = await fetch('http://localhost:3007/item');
            const data = await res.json()
            setItems(data.content)
        }catch (e) {
            console.log("ERROR", e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const getDataById = async (id) => {
        try {
            const res = await fetch(`http://localhost:3007/item/${id}`);
            const data = await res.json()
            setItem(data.content)
            console.log(setItem)
        }catch (e) {
            console.log("ERROR", e)
        }
    }

    const handleExit = () => {
        setItem(null)
    }

    const imgPath = (path) => {
        const baseUrl = 'http://localhost:3007/'
        return (
            baseUrl+path
        )
    }

    return(
        <div>
            {item ? (<>
                <Product item={item} onExit={handleExit} />
            </>) : (
                !!items ? (
                    !items.length ? <div>EMPTY</div> :
                        (
                            <>
                                <div className={s.catalog}>
                                    {items.map((elem)=>(
                                        <div className={s.item} key={elem.id} >
                                            <div className={s.il}>
                                                {elem.like ? <button className={s.lba}></button> : <button className={s.ilb}></button>}
                                            </div>
                                            <img src={imgPath(elem.picture.path)} alt={elem.picture.alt} />
                                            <div className={s.name} onClick={()=>getDataById(elem.id)}>{elem.name} </div>
                                            <span className={s.price}>{elem.price.currency} {elem.price.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                ) : (
                    <div>Loading...</div>
                )
            )}
        </div>
    )

}

export default Catalog