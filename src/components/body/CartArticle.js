import React from 'react';


export default class CartArticle extends React.Component{

    render(){
        return(
            // ce que j'affiche
            <li>
                <p>Produit : {this.props.nom} dans panier: +1</p>
            </li>       
        );
    }
}