import React, {useEffect, useState} from 'react';
import '../App.css';
import LatestFigures from '../components/LatestFigures';


import DatesForm from '../components/DatesForm';
import Panel from '../components/Panel';
import Graph1 from '../components/Graph1';
import Graph2 from '../components/Graph2';
import Graph3 from '../components/Graph3';
import Graph4 from '../components/Graph4';

const MainContainer = ({data}) => {

    if (data){

        return (
            <>
            <header>
                <h1>Covid Information for Scotland</h1>
            </header>
            <div id="main-container">
                <LatestFigures latest={data[0]} yesterday={data[1]} lastWeek={data[7]}/>
            </div>
            {/* <div className="card">
                <Graph1 filteredData = {data}/>
            </div> */}
            </>
        )
    }

    return (
        <h1>Loading...</h1>
    )
        


        {/* <DatesForm className="dates-form" data={data} processFilter={processFilter}/>
        <Panel className="panel" buttonPress={buttonPress}/>
        {graphs[graphSelected]} */}
   
    
}

export default MainContainer;
