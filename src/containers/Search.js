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


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {userInput:'', keyWord:'artist'}
        this.handleType= this.handleType.bind(this);
        this.handleKeyWord= this.handleKeyWord.bind(this);


    }
    componentWillMount(){
        this.props.actions.clearSearch();
    }

    handleType(e){
        this.setState({userInput: e.target.value})
    }

    handleKeyWord(e){
        this.setState({keyWord: e.target.attributes.getNamedItem('data-filter').value})
        this.props.actions.searchSpotify('search?q=', this.props.spotify.token, this.state.userInput, "&type="+ e.target.attributes.getNamedItem('data-filter').value)
    }
    render() {
        const { actions, spotify } = this.props;
        return (
        <div className="row">
                {
                    (spotify.token.length>2) ? (
                    <div>
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <ButtonGroup>
                                  <Button data-filter ="artist" onClick={this.handleKeyWord}>Artist</Button>
                                  <Button data-filter ="album" onClick={this.handleKeyWord}>album</Button>
                                  <Button data-filter ="track" onClick={this.handleKeyWord}>Track</Button>
                                  <Button data-filter ="playlist" onClick={this.handleKeyWord}>Playlist</Button>
                            </ButtonGroup>
                            <h2> Search by <b>{this.state.keyWord}</b></h2>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Button>
                                        <Button onClick={()=> actions.searchSpotify( 'search?q=', spotify.token, this.state.userInput, "&type="+this.state.keyWord)}>Search</Button>
                                    </InputGroup.Button>
                                    <FormControl onChange={this.handleType} type="text" />
                                </InputGroup>
                            </FormGroup>
                        </div>
                        <ListArtist searchRes = {spotify}/>
                        <ListTrack searchTrack = {spotify}/>
                        <ListAlbum searchRes = {spotify}/>
                        <ListPlaylist searchRes = {spotify}/>
                    </div>

                ):(<div className="col-md-6 col-md-offset-3 text-center"><Authorize/></div>)
                }

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
