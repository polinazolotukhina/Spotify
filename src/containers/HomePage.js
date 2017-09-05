import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/spotifyActions';
import { Link } from 'react-router';
import { Button  } from 'react-bootstrap';


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.authorize= this.authorize.bind(this);
    }

    authorize(){
        window.location='https://accounts.spotify.com/authorize?client_id=5714be2b46d94626b3eb39ec4ad04556&redirect_uri=http:%2F%2Flocalhost:3000%2Flogin&scope=user-read-private%20user-read-email&response_type=token&state=123';
    }

    render() {
        const { actions, spotify } = this.props;
        console.log("spotify", spotify )
        return (
                    <div className="info">
                        <div className = "container">
                            <div className="row">
                                <div className="text-center">
                                    {
                                        (spotify.token.length > 2 ) ?
                                        (
                                            <div>
                                                <h2> Hi, </h2>
                                                id:
                                                <img src = ""/>
                                            </div>
                                        ):(
                                            <div>
                                                <h2> Welcome:) Please Authorize To Continue</h2>
                                                <Button bsStyle="info" bsSize="large" onClick={this.authorize}>Authorize</Button>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                );
    }
};

HomePage.propTypes = {
   actions: PropTypes.object.isRequired,
   spotify: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
   const { spotify } = state;
   return {
       spotify,
   };
}

function mapDispatchToProps(dispatch) {
   return {
       actions: bindActionCreators(actions, dispatch)
   };
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(HomePage);
