import React, {Component} from "react";
import s from "./index.module.scss";
import {Product} from "../Product/Product";

export class Catalog extends Component{
    render() {
        return (
            <div className={s.catalog}>
                {this.props.items.map((elem)=>(
                    <Product key={elem.id}>
                        <div className={s.il}>
                            {elem.like? <button className={s.lba}></button> : <button className={s.ilb}></button>}
                        </div>
                        <img src={this.props.img} alt={"img"}/>
                        <div className={s.name}>{elem.name}</div>
                        <div className={s.price}>{elem.price.value}</div>
                        {/*<div>{elem.like? "isLike: true" : "isLike: false"}</div>*/}
                    </Product>
                    ))}
            </div>
        )
    }
}