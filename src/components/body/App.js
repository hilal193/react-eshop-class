import React from 'react';
import Header from '../header/Header'
// recup mon css
import '../../style/css/style.css'
import Article from '../../components/body/Article'
import CartArticle from './CartArticle'
// IMG
import Coca from '../../img/coca.jpg'
import Fanta from '../../img/fanta.jpg'
import IceTea from '../../img/ice-tea.jpg'

export default class App extends React.Component{
//  ma class avec mes produits
// RETIRE TT LES WARNING
/* eslint-disable */
  constructor(props){
    super(props);
    // state grosse boite de donnée
    this.state = {
      myNumber : 0,
      cart : [],
      produits : [{
          nom : "Coca-Cola",
          prix : 1,
          stock : 5
        },{
          nom : "Fanta",
          prix : 1.5,
          stock : 5
        },{
          nom : "Ice Tea",
          prix : 2,
          stock : 5
        }
      ],
      myMoney : 20
    }
  }

  // fonction pour cheter mes articles
  acheterArticle = (article) => {
    let monObjet = {
      key : this.state.myNumber,
      nom : article,
      id : this.state.myNumber
    }
    let copyCart = [...this.state.cart];
    
    if(article === "Coca-Cola" && this.state.myMoney >= 1){
      copyCart.push(monObjet);
      this.setState(prevState => ({
        cart : copyCart,
        myNumber : this.state.myNumber + 1,
        myMoney : this.state.myMoney - 1,

        produits : prevState.produits.map((el) => {
          if(el.nom === "Coca-Cola"){
            return {...el, stock : el.stock - 1}
          }else{
            return el
          }
        })
      }))
    }else if(article === "Fanta" && this.state.myMoney >= 1.5){
      copyCart.push(monObjet);
      this.setState(prevState => ({
        cart : copyCart,
        myNumber : this.state.myNumber + 1,
        myMoney : this.state.myMoney - 1.5,
        produits : prevState.produits.map((el) => {
          if(el.nom === "Fanta"){
            return {...el, stock : el.stock - 1}
          }else{
            return el
          }
        })
      }))
    }else if(article === "Ice Tea" && this.state.myMoney >= 2){
      copyCart.push(monObjet);
      this.setState(prevState => ({
        cart : copyCart,
        myNumber : this.state.myNumber + 1,
        myMoney : this.state.myMoney - 2,
        produits : prevState.produits.map((el) => {
          if(el.nom === "Ice Tea"){
            return {...el, stock : el.stock - 1 }
          }else{
            return el
          }
        })
      }))
    }
  }
  render(){

    return(
      <div>
        <Header />
        <div>
          { this.state.myMoney < 1 &&
            <h2>Mon Argent : {this.state.myMoney}€</h2>
          }
          { this.state.myMoney >= 1 &&
            <h2>Mon Pognon : {this.state.myMoney}€</h2>
          }
          <div className="article-container">

            <Article
            // mes img
              image={Coca} 
              titre="Coca-Cola" 
              prix = {this.state.produits[0].prix}
              stock = {this.state.produits[0].stock}
              clickMe = {this.acheterArticle}
            />


            <Article 
            // mes img
              image={Fanta} 
              titre="Fanta" 
              prix = {this.state.produits[1].prix}
              stock = {this.state.produits[1].stock}
              clickMe = {this.acheterArticle}
            />


            <Article 
            // mes img
              image={IceTea} 
              titre="Ice Tea" 
              prix = {this.state.produits[2].prix}
              stock = {this.state.produits[2].stock}
              clickMe = {this.acheterArticle}
            />
          </div>

        </div>

        <div>
          <h2>Panier:</h2>
          <ul>
            {
              this.state.cart.map((objet) => {
                return(
                  <CartArticle
                    key = {objet.key}
                    id = {objet.key}
                    nom = {objet.nom}
                    back = {this.rendre}
                  />
                )
              })
            }

          </ul>
        </div>
        
      </div>
    );
  }
}
