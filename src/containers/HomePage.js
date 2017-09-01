import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/spotifyActions';
import { Link } from 'react-router';
import { Button  } from 'react-bootstrap';


class HomePage extends React.Component{
    constructor(props){
        super(props);
        if (props.spotify.token.length>2) {
            props.actions.searchSpotify("me", this.props.spotify.token);
        }
        this.getProfile= this.getProfile.bind(this);
    }
    getProfile(){
        window.location='https://accounts.spotify.com/authorize?client_id=5714be2b46d94626b3eb39ec4ad04556&redirect_uri=http:%2F%2Flocalhost:3000%2Fsearch&scope=user-read-private%20user-read-email&response_type=token&state=123';
        this.props.actions.searchSpotify("me", this.props.spotify.token);
        this.props.actions.saveImgProfile(this.props.spotify.data.images[0].url);


    }
    render() {
        const { actions, spotify } = this.props;
        // console.log("This is IMG ", this.props.spotify.data.images[0].url)
        return (
                    <div className="info">
                        <div className = "container">
                            <div className="row">
                                <div className="text-center">
                                    {
                                        (spotify.token.length > 2 ) ?
                                        (
                                            <div>
                                                <h2> Hi, {spotify.data.display_name}</h2>
                                                <img src = {spotify.data.images&&spotify.data.images[0].url}/>
                                            </div>
                                        ):(
                                            <div>
                                                <h2> Welcome:) Please Authorize To Continue</h2>
                                                <Button bsStyle="info"  bsSize="large" onClick={this.getProfile}>Authorize</Button>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                );
    }
};

HomePage.propTypes = {
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
)(HomePage);
