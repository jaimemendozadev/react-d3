import React, {Component} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import _ from 'lodash';
//import County from './County';



class CountyMap extends Component {
  constructor(props){
    super(props);

  }

  updateD3(){
    console.log("updateD3");
  }

  componentWillReceiveProps(nextProps){
    console.log("old props", this.props);
    console.log("nextProps ", nextProps);
  }

  render(){
    const {usTopoJson} = this.props;

    if (!usTopoJson){
      return(
        null
      )
    }

    return(
      <div>CountyMap</div>
    )
  }
}

export default CountyMap;

