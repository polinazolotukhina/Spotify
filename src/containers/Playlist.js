import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Button, FormGroup, InputGroup, FormControl, ButtonGroup  } from 'react-bootstrap';
import * as actions from '../actions/spotifyActions';
import ListPlaylist from '../components/ListPlaylist';
const queryString = require('query-string');
import Authorize from '../components/Authorize';
import MyList from '../components/MyList';


class Playlist extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.actions.searchSpotify("users/" + this.props.profile.data.id + "/playlists", this.props.spotify.token)
    }
    render() {
        const { actions, spotify, profile } = this.props;
        return (
        <div className="row">
            <div className="text-center">
                {
                    (spotify.token.length>2) ? (
                    (spotify.data.items&&spotify.data.items.length>0)?(<MyList spotify ={spotify}/>):(<h2>Your playlist is empty.</h2>)
                    ):(<Authorize/>)
                }
            </div>
        </div>



        );
    }
}


Playlist.propTypes = {
    actions: PropTypes.object.isRequired,
    spotify: PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,

};


function mapStateToProps(state) {
    const { isLoading, error, spotify, profile } = state;
    return {
        isLoading,
        error,
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
)(Playlist );
