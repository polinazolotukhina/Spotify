import React, { Component } from 'react';
import  ReactDOM from 'react-dom';


export default class ListArtist extends Component {

  render() {
      const { searchRes } = this.props;
        return (
          <div className="row">

              {
                searchRes.data.playlists && searchRes.data.playlists.items.map((item, index) =>
                    <div className="col-md-4" key={index}>
                        <p> name: {item.name}</p>
                        <p>popularity: {item.popularity}</p>
                        <a href={item.external_urls.spotify}>listen</a>
                        {item.images[0].url&&<img src = {item.images[0].url}/>}
                    </div>
                )
              }
          </div>
        );
  }
}
