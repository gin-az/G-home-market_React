import React, {Component} from "react";
import s from "./menu.module.scss";
// import {MenuItem} from "./MenuItem/Menu";


export class Menu extends Component{
  render() {
      return (
          <>
      <div className={s.block}>
          <div className={s.search}>
              <input type="search" id="input" placeholder="Search product"/>
          </div>
          <div className={s.icons}>
           <label className={s.pic1} alt={"pic1"}/>
           <label className={s.pic2} alt={"pic2"}/>
          </div>
            </div>
              </>
  )

  }
            }