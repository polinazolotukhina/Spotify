import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/spotifyActions';
import Authorize from '../components/Authorize';
const queryString = require('query-string');



class Login extends React.Component{
    constructor(props){
        super(props);
            this.profileGet= this.profileGet.bind(this);
    }
    profileGet(){
        this.props.actions.getProfile(this.props.spotify.token)
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
                                        (spotify.token.length>2)?
                                        (
                                            <div>
                                                {
                                                    (profile.data.display_name)?(<h2> Hi,{profile.data.display_name }</h2>):(<button onClick={this.profileGet}> Login</button>)
                                                }

                                            </div>
                                        ):(<Authorize/>)
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
