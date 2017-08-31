import React, { Component } from 'react';
import  ReactDOM from 'react-dom';


export default class ListTrack extends Component {

  render() {
      const { searchTrack } = this.props;



    return (
      <div className="row">
      {
        searchTrack.data.tracks && searchTrack.data.tracks.items.map((item, index) =>
            <div key={index} className = "col-md-2">

            {item.disc_number}
            {
                item.artists.map((art, index)=>
                <div key={index}>
                    <p>{art.name}</p>
                    <a href={art.external_urls.spotify}> listen</a>
                    <p> here: {art.preview_url}</p>
                    {(art.preview_url!=null)?(<a href={art.preview_url}>Preview</a>):(<div></div>)}
                </div>
                )
            }

            </div>
        )
      }


      </div>
    );
  }
}
