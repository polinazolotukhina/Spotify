import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router';
import { Button, FormGroup, InputGroup, FormControl, ButtonGroup  } from 'react-bootstrap';
import * as actions from '../actions/spotifyActions';
import ListRelease from '../components/ListRelease'




class NewRelease extends React.Component {
    constructor(props){
        super(props);
        props.actions.searchSpotify("browse/new-releases", this.props.spotify.token);
    }



    render() {
        const { actions, spotify } = this.props;

        return (
            <div className="text-center">
                {
                    (spotify.data.albums) ?
                        (
                            <div className="row">
                                <h2 >New Releases</h2>
                                <ListRelease showRelease = {spotify}/>
                            </div>
                        ):(
                            <Button><Link to="/">Oops! You need to be authorize first!</Link></Button>
                        )
                }
            </div>

        );
    }

}


 NewRelease.propTypes = {
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
)(NewRelease);
