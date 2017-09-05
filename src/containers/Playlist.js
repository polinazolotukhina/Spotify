import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Button, FormGroup, InputGroup, FormControl, ButtonGroup  } from 'react-bootstrap';
import * as actions from '../actions/spotifyActions';
import ListArtist from '../components/ListArtist';
import ListTrack from '../components/ListTracks';
import ListAlbum from '../components/ListAlbum';
import ListPlaylist from '../components/ListPlaylist';
const queryString = require('query-string');
import Authorize from '../components/Authorize';


class Playlist extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { actions, spotify } = this.props;
        return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
                {
                    (spotify.token.length>2) ? (
                    <p>playlist!</p>
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

};


function mapStateToProps(state) {
    const { isLoading, error, spotify } = state;
    return {
        isLoading,
        error,
        spotify
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
