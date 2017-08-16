import React, {Component} from 'react';
import api from '../../api';
import BiteCard from '../elements/BiteCard';
//import Search from '../elements/Search';
//import auth from '../../auth';
import MapContainer from '../elements/map';
import { Link } from 'react-router';
import './Bites.css';


export default class Bites extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      bites: [],
      initialLocation: {}
    };
  }


  componentWillMount() {


    api.postAddress(this.props.params.address)
    .then(res => {

      console.log(res.body, "Bites res");

          this.setState({ 
               bites: res.body.results,
               initialLocation: res.body.initialLocation
          })
    })
  }
   
  render() {
    let bites = this.state.bites
    let initialLocation = this.state.initialLocation

    return (
      <div className="bitesPage">
        <Link to={`/`}>Change Location</Link>
        <br></br>
        <div className="test">  
          <div className="map-container">
            {bites !== [] ? <MapContainer bitesInfo={bites} initialLocationInfo={initialLocation}/> : null}  
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="bites-wrapper">
              { bites.map(b =>
                <BiteCard
                  key={b.id}
                  name={b.name}
                  address={b.vicinity}
                  place_id={b.place_id}
                />
              )}
        </div>
      </div>
      
    ); 
  } 

}
