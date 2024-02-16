import React, { Component } from "react";
import Phone from "./assets/phone.jpg";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {
  state = {
    text: '-',
    text1: '+',
    isActive: 499,
    p: 1

  }
  // delete = () => {
  //   document.body.innerHTML = '';
  // }

  artma = (e) => {
    const { isActive, p } = this.state;

    this.setState({ isActive: isActive + 499, p: p + 1 })
    console.log(this.state);
  }
  azalma = (e) => {
    const { isActive, p } = this.state;
    if (isActive - 499 < 0) {

      return
    }
    if (p - 1 < 1) {
      return
    }
    this.setState({ isActive: isActive - 499, p: p - 1 })

    console.log(this.state);
  }

  delete = ()=> {
    const contElement = document.querySelector('.cont');
  if(contElement){
    contElement.remove();
  }
  }

  deleteBox = () => {
    const boxElement = document.querySelector('.box');
    if (boxElement) {
      boxElement.remove();
    }
  }
  render() {
    const { text } = this.state;
    const { text1 } = this.state;
    const { isActive } = this.state;
    const { p } = this.state;
    return (
      <div className="cont">
        <div className="ic">
          <h2>Bir-başa almaq istəyirsiniz?</h2>
          <button type="button" onClick={this.delete}>X</button>
        </div>
        <div className="box">
          <img src={Phone} alt="" className="image" />
          <div className="text">
            <p>Honor X8b 8 GB / 128 GB Titanium Silver</p>
            <span>Faizsiz təklif</span>
          </div>
          <div className="active">
            <p>{isActive} AZN</p>
          </div>
          <div className="btn">
            <button type="button" onClick={this.azalma}>{text}</button>
            <p>{p}</p>
            <button type="button" onClick={this.artma}>{text1}</button>
          </div>
          <div className="icon"><button type="button" onClick={this.deleteBox}><FontAwesomeIcon icon={faTrashCan} /></button> 
          </div>
        </div>
        <div className="btn1">
          <button>Alışverişə davam et
          </button>
          <button>Səbətə keç</button>
        </div>
      </div>
    );
  }
}
