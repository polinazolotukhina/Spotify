import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/spotifyActions';
import { Link } from 'react-router';
import { Button  } from 'react-bootstrap';
const queryString = require('query-string');


class Login extends React.Component{
    constructor(props){
        super(props);
        this.login= this.login.bind(this);
    }
    componentWillMount(){
        const parsed = queryString.parse(location.hash);
        if ( parsed.access_token) {
            this.props.actions.passToken(parsed.access_token);
            // this.props.actions.searchSpotify("me", parsed.access_token);


        }
    }
    login(){
        this.props.actions.searchSpotify("me", this.props.spotify.token);
        this.props.actions.fetchProfile(this.props.spotify.data);

    }

    render() {
        const { actions, spotify, user } = this.props;
        console.log("spotify", spotify,)
        console.log("user", user)

        return (
                    <div className="info">
                        <div className = "container">
                            <div className="row">
                                <div className="text-center">
                                    {
                                        (spotify.token.length > 2 ) ?
                                        (
                                            <div>
                                            <Button bsStyle="info" bsSize="large" onClick={this.login}>Login</Button>

                                                <h2> Hi,{user.user&&user.user.display_name} </h2>




                                            </div>
                                        ):(
                                            <div>
                                                <h2> LOGIN!!!</h2>


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

Login.propTypes = {
   actions: PropTypes.object.isRequired,
   spotify: PropTypes.object.isRequired,
   user: PropTypes.object
};


function mapStateToProps(state) {
   const { spotify, user } = state;
   return {
       spotify,
       user
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
)(Login);
