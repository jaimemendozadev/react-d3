import React, {Component} from 'react';
import Preloader from './Preloader.jsx';
import * as d3 from 'd3';
import _ from 'lodash';
import { loadAllData } from '../utils/DataHandling';
import CountyMap from './CountyMap.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      techSalaries: [],
      countyNames: [], 
      medianIncomes: []
    }
  }

  countyValue(county, techSalariesMap){
    //get the medianIncome for the county
    const medianHousehold = this.state.medianIncomes[county.id];

    //get the salaries on techSalariesMap by county
    const salaries = techSalariesMap[county.name];

    //https://github.com/d3/d3-array#median
    const median = d3.median(salaries, d => d.base_salary);

    //returns difference between tech salries & county medianIncome
    return {
      countyID: county.id,
      value: median - medianHousehold.medianIncome
    }

  }

  render() {
    const {techSalaries, countyNames} = this.state;

    //console.log("data is ", loadAllData(data => data))

    const filteredSalaries = techSalaries;

    //return object with countyID keys and salary values
    //https://lodash.com/docs#groupBy
    const filteredSalariesMap = _.groupBy(filteredSalaries, 'countyID');

    

    //for each county, return array of objects 
    //with countyIDs and diff bet. tech & median income
    const countyValues = countyNames.map(county => {
      return this.countyValue(county, filteredSalariesMap);
    }).filter(d => !_.isNull(d));

    

    let zoom = null;

    if(techSalaries.length) {
      return(
        <div className='App container'>
          <svg width='1100' height='500'>
            <CountyMap />  
          </svg>
        </div>
      ) 
    }
    
    return (
      <Preloader />
    )
  }
}

export default App;