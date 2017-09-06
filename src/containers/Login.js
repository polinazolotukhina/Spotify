import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/spotifyActions';
import Authorize from '../components/Authorize';
const queryString = require('query-string');
import { Button  } from 'react-bootstrap';



class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const { actions, spotify, profile } = this.props;
        console.log('profile', profile)
        return (
                    <div className="info">
                        <div className = "container">
                            <div className="row">
                                <div className="text-center">
                                    {
                                        (spotify.token.length>2)?(<h2> Hi, {profile.data.display_name }</h2>):(<Authorize/>)
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
   profile: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
   const { spotify, profile } = state;
   return {
       spotify,
       profile
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
