import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (

    <div className="info">
        <div className = "container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">

            <button onClick={()=> {window.location='https://accounts.spotify.com/authorize?client_id=5714be2b46d94626b3eb39ec4ad04556&redirect_uri=http:%2F%2Flocalhost:3000%2Fsearch&scope=user-read-private%20user-read-email&response_type=token&state=123'}}>Authorize</button>




            </div>
          </div>
        </div>
    </div>


  );
};

export default HomePage;
