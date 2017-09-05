import React, { Component } from 'react';
import  ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Button  } from 'react-bootstrap';

export default class Authorize extends Component {

  render() {
        return (
          <div className="row">
              <Button><Link to="/">Oops! You need to be authorize first!</Link></Button>
          </div>
        );
    }
}
