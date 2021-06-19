import React, {Component} from "react";
import s from "./index.module.scss";

export const Product = ({item, ...props}) => {

    const imgPath = (path) => {
        const baseUrl = 'http://localhost:3007'
        return (
            baseUrl + path
        )
    }

    return (
        <>
            <div>
                <img src={imgPath(item.picture.path)} alt="{this.props.item.picture.alt}"/>
            </div>
            <div>
                <h3>{item.name}</h3>
                <p>
                    {item.description}
                </p>
                <h4>Details</h4>
                <p>{item.details}</p>
                <div>
                    <div>
                        <span>{item.price.currency}{item.price.value}</span>
                    </div>
                </div>
            </div>
            <button onClick={props.onExit}>Back</button>
        </>
    )
}

