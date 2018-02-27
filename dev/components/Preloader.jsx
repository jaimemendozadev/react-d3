import React from 'react';
import PreloaderImg from '../../public/img/preloading.png';

const style = {width: '100%'};


const Preloader = () => (
    <div className="App container">
    <h1>The average H1B in tech pays $86,164/year</h1> 
    <p className="lead"> Since 2012 the US tech industry has sponsored 176,075 H1B work visas. Most of them paid <strong>$60,660 to $111,668</strong> per year (1 standard deviation). The best city for an H1B is <strong>Kirkland, WA</strong> with an average salary <strong>$39,465 above local household median</strong>. Median household salary is a good proxy for cost of living in an individual area</p>
    <img src={PreloaderImg} style={style} role="presentation" />
    <h2 className="text-center">Loading data...</h2>
  </div>
)


export default Preloader;
