import React, { Component } from 'react';
import  ReactDOM from 'react-dom';


export default class ListArtist extends Component {

  render() {
      const { searchRes } = this.props;
        return (
          <div className="row">

              {
                searchRes.data.playlists && searchRes.data.playlists.items.map((item, index) =>
                    <div className="col-md-4 singleItem" key={index}>
                        <p>{item.name}</p>
                        {item.images[0].url&&<a href={item.external_urls.spotify}><img src = {item.images[0].url}/></a>}
                    </div>
                )
              }
          </div>
        );
  }
}
