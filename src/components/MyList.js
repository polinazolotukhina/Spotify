import React, { Component } from 'react';
import  ReactDOM from 'react-dom';


export default class MyList extends Component {
  render() {
      const { spotify } = this.props;
    return (
      <div className="row">
      {
        spotify.data.items&& spotify.data.items.map((item, index) =>
            <div className="col-md-4  singleItem" key={index}>

                <a href = {item.uri}>
                    <p> {item.name}</p>
                    <img src={item.images[0].url}/>
                </a>
            </div>
        )
      }
      </div>
    );
  }
}
