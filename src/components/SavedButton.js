import React from 'react';
import {Button } from 'react-bootstrap';
import Notifications, {notify} from 'react-notify-toast';

class SavedButton extends React.Component {
  constructor(props){
      super(props);
       this.saveWeather= this.saveWeather.bind(this);

  }


  saveWeather(){
    let myColor = { background: '#ff8c18', text: "#FFFFFF" };
    this.props.passedActions.saveUnsave(this.props.city);
    notify.show('It was saved to your list "My Saved Weather"!',"custom", 5000, myColor)
  }




  render() {
    const listgroupInstance = (
        <Button onClick={this.saveWeather}>
          Save this forecast
        </Button>

    );
    const { passedActions, city, saved } = this.props;
    const label = (saved.filter(e => e.city.id == city.city.id).length > 0) ? 'The Forecast Was Saved ' : 'Save The Forecast';
        return (
          <div  className="text-center"  >
           <Notifications />

          {
            (saved.filter(e => e.city.id == city.city.id).length == 0) ? (
              <div>

                {listgroupInstance}
              </div>
            ) : (<div></div>)

}



         </div>
        )
    }
}

export default SavedButton;
