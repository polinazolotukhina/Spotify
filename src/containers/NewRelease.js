import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import Authorize from '../components/Authorize';
import * as actions from '../actions/spotifyActions';
import ListRelease from '../components/ListRelease';




class NewRelease extends React.Component {
    constructor(props){
        super(props);

    }

componentWillMount(){
    this.props.actions.searchSpotify("browse/new-releases", this.props.spotify.token);
}


    render() {
        const { actions, spotify } = this.props;

        return (
            <div className="text-center">
                {
                    (spotify.token.length>2) ?
                        (
                            <div className="row">
                                <h2 >New Releases</h2>
                                <ListRelease showRelease = {spotify}/>
                            </div>
                        ):(
                            <Authorize/>
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
