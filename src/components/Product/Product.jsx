import React, {Component} from "react";
import s from "./index.module.scss";

export class Product extends Component{
    render() {
        return (
            <div className={s.item}>
                {this.props.children}
            </div>
        )
    }
}