import React, { Component } from 'react';
import  ReactDOM from 'react-dom';


export default class ListArtist extends Component {

  render() {
      const { searchRes } = this.props;
        return (
          <div className="row">
              {
                searchRes.data.albums && searchRes.data.albums.items.map((item, index) =>
                    <div className="col-md-4 text-center" key={index}>
                        <p> name: {item.name}</p>
                        {(item.images.length>0)?(<a href={item.external_urls.spotify}><img src= {item.images[1].url}/></a>):(<a href={item.external_urls.spotify}>listen</a>)}
                    </div>
                )
              }

          </div>
        );
    }
}
