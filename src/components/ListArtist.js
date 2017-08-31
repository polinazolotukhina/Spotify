import React, { Component } from 'react';
import  ReactDOM from 'react-dom';


export default class ListArtist extends Component {

  render() {
      const { searchRes } = this.props;
    return (
      <div className="row">
      {
        searchRes.data.artists && searchRes.data.artists.items.map((item, index) =>
            <div className="col-md-4" key={index}>
                <p> name: {item.name}</p>
                <p>popularity: {item.popularity}</p>
                <a href={item.external_urls.spotify}>listen</a>
                <p>followers:{item.followers.total}</p>

                {(item.images.length>0)?(<img src= {item.images[1].url}/>):(<div></div>)}



                <p></p>
                <p></p>
            </div>
        )
      }
      </div>
    );
  }
}
