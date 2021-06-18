import React, {Component} from "react";
import s from "./index.module.scss";
import {Product} from "../Product/Product";


export class Catalog extends Component{

    state = {
        item: null,
        items: null
    }
    State = () =>{
        this.setState({})
    }

    getData = async () => {
        try {
            const res = await fetch('http://localhost:3007/item');
            const data = await res.json()
            this.setState({
                items: data.content
            })
            console.log(data.content)
        }catch (e) {
            console.log("ERROR", e)
        }
    }


    getDataById = async (id) => {
        try {
            const res = await fetch(`http://localhost:3007/item/${id}`);
            const data = await res.json()
            this.setState({
                item: data.content
            })
            console.log(data)
        }catch (e) {
            console.log("ERROR", e)
        }
    }

    componentDidMount(prop, state) {
        console.log(prop, state)
        this.getData()
        console.log('componentDidMount')
    }

    handleExit = () => {
        this.setState({
            item: null
        })
    }

    imgPath = (path) => {
        const baseUrl = 'http://localhost:3007/'
        return (
            baseUrl+path
        )
    }

    render() {
        console.log('RENDER')
        return (
            <div>
                {this.state.item ? (<>
                    <Product item={this.state.item} onExit={this.handleExit} />
                </>) : (
                    !!this.state.items ? (
                        !this.state.items.length ? <div>EMPTY</div> :
                            (
                                <div className={s.catalog}>
                                    {this.state.items.map((elem)=>(

                                        <div className={s.item} key={elem.id} >
                                            <div className={s.il}>
                                                {elem.like ? <button className={s.lba}></button> : <button className={s.ilb}></button>}
                                            </div>
                                            <img src={this.imgPath(elem.picture.path)} alt={elem.picture.alt} />
                                            <div className={s.name} onClick={()=>this.getDataById(elem.id)}>{elem.name} </div>
                                            <span className={s.price}>{elem.price.currency} {elem.price.value}</span>
                                            </div>
                                        ))}
                                </div>
                            )
                    ) : (
                        <div>Loading...</div>
                    )
                )}

            </div>
        )

    }
}