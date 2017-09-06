import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/spotifyActions';
import { Link, IndexLink } from 'react-router';
const queryString = require('query-string');


class Navigation extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        const parsed = queryString.parse(location.hash);
        if ( parsed.access_token) {
            this.props.actions.passToken(parsed.access_token);
        }
    }
    authorize(){
        window.location='https://accounts.spotify.com/authorize?client_id=5714be2b46d94626b3eb39ec4ad04556&redirect_uri=http:%2F%2Flocalhost:3000&scope=user-read-private%20user-read-email&response_type=token&state=123';
    }
    render() {
        const { actions, spotify, profile } = this.props;
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>

                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                            <li>
                                <Link to="/new-release">New Releases</Link>
                            </li>
                            <li>
                                <Link to="/playlist">My Playlist</Link>
                            </li>

                        </ul>
                        <ul className="nav navbar-right">
                            <li>
                                <div>
                                    {
                                        (profile.data.images)?(<img src={profile.data.images&&profile.data.images[0].url }/>)
                                        :
                                        <button onClick={this.authorize}><img src='../styles/user.png' /><p>Click Here to Authorize</p></button>
                                    }
                                </div>
                            </li>
                        </ul>
                   </div>
                </div>
            </nav>
        );
    }
};

Navigation.propTypes = {
   actions: PropTypes.object.isRequired,
   spotify: PropTypes.object.isRequired,
   profile:PropTypes.object.isRequired,
};


function mapStateToProps(state) {
   const {  spotify, profile  } = state;
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
)(Navigation);
