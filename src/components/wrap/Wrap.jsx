import React, {Component} from "react";
import s from "./index.module.scss"
import {Menu} from "../Menu/Menu";
// import {Product} from "../Product/Product";
import {Catalog} from "../Catalog/Catalog";

export class Wrap extends Component{
  state = {
    item: null,
    items: null
  }
  State = () =>{
    this.setState({})
  }
  componentDidMount(prop, state) {
    console.log(prop, state)
    this.getData()
    console.log('componentDidMount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  getData = async () => {
    try {
      const res = await fetch('http://localhost:3007/item');
      const data = await res.json()
      this.setState({
        items: data.content,
        item:null,
        img:"http://localhost:3007/picture/min/:pictureid"
      })
      console.log(data.content)
    }catch (e) {
      console.log("ERRR", e)
    }
  }
  getDataById = async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await res.json()
      this.setState({
        item: data.content
      })
      console.log(data)
    }catch (e) {
      console.log("ERRR", e)
    }
  }

  handleExit = () => {
    this.setState({
      item: null
    })
  }
  render() {
    console.log('RENDER')
    return <div className={s.wrap}>
      <div className={s.head}>
        <Menu

          item={this.state.item}
        />

      </div>
      <div className={s.body}>
        {this.state.item ? <>
           <div>{this.state.item.id} - {this.state.item.title}</div>
            <button onClick={this.handleExit}>Выхох</button>
          </> : (
          !!this.state.items ? (
              !this.state.items.length ? <div>EMPTY</div> :
                  (<Catalog img={this.state.img}
                    items={this.state.items}
                  item={this.state.item}
              />

        )
          ) : (
            <div>Loading...</div>
          )
        )}
      </div>
    </div>
  }
}