import React, {Component} from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import _ from 'lodash';
import County from './County';

const pathStyle = {fill: 'none', stroke: '#fff', strokeLinejoin: 'round'};


class CountyMap extends Component {
  constructor(props){
    super(props);

    this.projection = d3.geoAlberUsa().scale(1280);
    
    this.geoPath = d3.geoPath().projection(this.projection);

    //https://github.com/d3/d3-scale#scaleQuantize
    this.quantize = d3.scaleQuantize(d3.range(9));

  }

  updateD3(props){
    this.projection
      .translate([props.width / 2, props.height / 2])
      .scale(props.width * 1.3);

    if (props.zoom && props.usTopoJson) {
      const us = props.usTopoJson;
      const statePaths = topojson.feature(us, us.objects.states).features;
      const id = _.find(props.USstateNames, {code: props.zoom}).id;  

      this.projection.translate([
        translate[0] - centroid[0] + props.width / 2,
        translate[1] - centroid[1] + props.height /2
      ]);
    }

    if (props.value) {
      this.quantize.domain([
        d3.quantile(props.value, 0.15, d => d.value),
        d3.quantile(props.value, 0.85, d => d.value)
      ]);
    }
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

    const us = this.props.usTopoJson;
    
    const statesMesh = topojson.mesh(us, us.objects.states, (a,b) => a !== b);
    
    const counties = topojson.feature(us, us.objects.counties).features;

    const countyValueMap = _.fromPairs(
      this.props.values.map(d => [d.countyID, d.value])
    )


    return(
      <g transfor={`translate(${this.props.x}, ${this.props.y})`}>
        {
          counties.map((feature) =>(

            <County 
              geoPath={this.geoPath}
              feature={feature}
              zoom={this.props.zoom}
              key={feature.id}
              quantize={this.quantize}
              value={countyValueMap[feature.id]}
            />

          ))
        }
        <path 
          d={this.geoPath(statesMesh)}
          style={pathStyle}
        />
      </g>
    )
  }
}

export default CountyMap;

