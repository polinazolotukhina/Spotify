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
        if ( parsed.access_token>2) {
            this.props.actions.passToken(parsed.access_token);
        }
    }
    render() {
        const { actions, spotify, user } = this.props;
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
                        <IndexLink to="/" className="navbar-brand"><img src = {user.user&&user.user.images&&user.user.images[0].url}/></IndexLink>
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
                                <Link to="/login">Login</Link>
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
   user: PropTypes.object.isRequired
};


function mapStateToProps(state) {
   const { user, spotify } = state;
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
)(Navigation);
