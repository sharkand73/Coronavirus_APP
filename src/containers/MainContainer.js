import React, { useState} from 'react';
import '../App.css';
import LatestFigures from '../components/LatestFigures';


//import DatesForm from '../components/DatesForm';
//import Panel from '../components/Panel';
import Graph1 from '../components/Graph1';
import Graph2 from '../components/Graph2';
import Graph3 from '../components/Graph3';
import Graph4 from '../components/Graph4';
import Graph5 from '../components/Graph5';
import Graph6 from '../components/Graph6';

const MainContainer = ({data}) => {

    const [graphSelected, setGraphSelected] = useState(0);

    const allGraphs = [
                        <Graph1 filteredData = {data}/>,
                        <Graph2 filteredData = {data}/>,
                        <Graph3 filteredData = {data}/>,
                        <Graph4 filteredData = {data}/>,
                        <Graph5 filteredData = {data}/>,
                        <Graph6 filteredData = {data}/>
                        ]

    if (data){

        const lastHospitalDataIndex = data.findIndex((item) => ((item.hospitalCases) && (item.ICUCases)));
        let lagInfo;
        switch(lastHospitalDataIndex){
            case 0: lagInfo = "today";
            break;
            case 1: lagInfo = "yesterday";
            break;
            default: lagInfo = `${lastHospitalDataIndex} days ago`;
        }  
           
        const hospitalData = {
            hospitalCases: data[lastHospitalDataIndex].hospitalCases,
            ICUCases: data[lastHospitalDataIndex].ICUCases,
            lag: lagInfo
        }

        return (
            <>
            <header>
                <h1>Covid Information for Scotland</h1>
            </header>
            <div id="main-container">
                <LatestFigures latest={data[0]} lastWeek={data[7]} hospitalData={hospitalData} setGraphSelected={setGraphSelected}/>
            </div>
            <div className="card">
                {allGraphs[graphSelected]}
            </div>
            </>
        )
    }

    return (
        <h1>Loading...</h1>
    )
   
    
}

//  <DatesForm className="dates-form" data={data} processFilter={processFilter}/>
//         <Panel className="panel" buttonPress={buttonPress}/>
//         {graphs[graphSelected]} 

export default MainContainer;
