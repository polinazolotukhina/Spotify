import React, { Component } from 'react';
import  ReactDOM from 'react-dom';


export default class ListTrack extends Component {

  render() {
      const { searchTrack } = this.props;
 // console.log("let me see...",searchTrack.data.tracks.items )


    return (
      <div className="row">
      {
        searchTrack.data.tracks && searchTrack.data.tracks.items.map((item, index) =>
            <div key={index} className = "col-md-2 text-center">

            {item.disc_number}
            {
                item.artists.map((art, index)=>
                <div key={index}>
                    <p>{art.name}</p>
                    <a href={art.external_urls.spotify}> listen</a>
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
