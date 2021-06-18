import React, {Component} from "react";
import s from "./index.module.scss";


export class Product extends Component{

    imgPath = (path) => {
        const baseUrl = 'http://localhost:3007'
        return (
            baseUrl+path
        )
    }

    render() {
        return (
            <>
                <div>
                    <img src={this.imgPath(this.props.item.picture.path)} alt="{this.props.item.picture.alt}" />
                </div>
                <div>
                    <h3>{this.props.item.name}</h3>
                    <p>
                        {this.props.item.description}
                    </p>
                    <h4>Details</h4>
                    <p>{this.props.item.details}</p>
                    <div>
                        <div>
                            <span>{this.props.item.price.currency}{this.props.item.price.value}</span>
                        </div>
                    </div>
                </div>


                <button onClick={this.props.onExit}>Back</button>

            </>
        )
    }
}