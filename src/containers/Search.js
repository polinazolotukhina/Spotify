import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { ButtonGroup,Button } from 'react-bootstrap';
import * as actions from '../actions/spotifyActions';
import ListArtist from '../components/ListArtist'
import ListTrack from '../components/ListTracks'
import ListAlbum from '../components/ListAlbum'
import ListPlaylist from '../components/ListPlaylist'


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {userInput:'', keyWord:'artist'}
        this.handleType= this.handleType.bind(this);
        this.handleKeyWord= this.handleKeyWord.bind(this);
    }
    handleType(e){
        this.setState({userInput: e.target.value})
    }
    handleKeyWord(e){
        this.setState({keyWord: e.target.attributes.getNamedItem('data-filter').value})
        this.props.actions.searchSpotify(this.state.userInput, this.state.keyWord)
    }


    render() {
        const { actions, spotify } = this.props;
        return (
          <div>
          <ButtonGroup>
            <Button data-filter =  "artist" onClick={this.handleKeyWord}>Artist</Button>
            <Button data-filter ="album" onClick={this.handleKeyWord}>album</Button>
            <Button data-filter ="track" onClick={this.handleKeyWord}>Track</Button>
            <Button data-filter ="playlist" onClick={this.handleKeyWord}>Playlist</Button>
          </ButtonGroup>

            <h4> Search by {this.state.keyWord}</h4>
            <button onClick={()=> actions.searchSpotify(this.state.userInput, this.state.keyWord)}>Search</button>
            <input onChange={this.handleType}/>

            <ListArtist searchRes = {spotify}/>
            <ListTrack searchTrack = {spotify}/>
            <ListAlbum searchRes = {spotify}/>
            <ListPlaylist searchRes = {spotify}/>

          </div>


        );
    }
}


 Search.propTypes = {
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
)(Search);
