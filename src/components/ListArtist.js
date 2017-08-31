import React, { Component } from 'react';
import  ReactDOM from 'react-dom';


export default class ListArtist extends Component {

  render() {
      const { searchRes } = this.props;
    return (
      <div className="row">
      {
        searchRes.data.artists && searchRes.data.artists.items.map((item, index) =>
            <div className="col-md-4 text-center" key={index}>
                <p> name: {item.name}</p>
                <p>popularity: {item.popularity}</p>
                <p>followers:{item.followers.total}</p>

                {(item.images.length>0)?(<a href={item.external_urls.spotify}><img src= {item.images[1].url}/></a>):(<a href={item.external_urls.spotify}>listen</a>)}



                <p></p>
                <p></p>
            </div>
        )
      }
      </div>
    );
  }
}
