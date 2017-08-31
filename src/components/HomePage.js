import React from 'react';
import { Link } from 'react-router';
import { Button  } from 'react-bootstrap';

const HomePage = () => {
  return (

    <div className="info">
        <div className = "container">
          <div className="row">
            <div className="text-center">
            <h2> Welcome:) Please Authorize To Continue</h2>
            <Button bsStyle="info"  bsSize="large" onClick={()=> {window.location='https://accounts.spotify.com/authorize?client_id=5714be2b46d94626b3eb39ec4ad04556&redirect_uri=http:%2F%2Flocalhost:3000%2Fsearch&scope=user-read-private%20user-read-email&response_type=token&state=123'}}>Authorize</Button>
            </div>
          </div>
        </div>
    </div>


  );
};

export default HomePage;
