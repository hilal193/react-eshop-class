import React from 'react';


export default class Article extends React.Component {

    clickMe = () => {
        this.props.clickMe(this.props.titre);
        console.log(this.props.stock);
    }
    render(){
        return(
            <div className="article">
                <img src={this.props.image} alt="coca" width="200"/>
                {  this.props.stock > 1 &&
                    <div>
                        <p>{this.props.titre}</p>
                        <p>Prix: {this.props.prix}</p>
                        <div>
                            <p>Stock: {this.props.stock}</p>
                            <button onClick={this.clickMe}>Acheter</button>
                        </div> 
                    </div>
                }
            </div>
        )
    }
}