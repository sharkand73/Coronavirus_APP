import React, { useState} from 'react';
import '../App.css';
import LatestFigures from '../components/LatestFigures';
import {convertDate2} from '../components/functions';


//import DatesForm from '../components/DatesForm';
//import Panel from '../components/Panel';

import CurrentGraph from '../components/CurrentGraph';

const MainContainer = ({data}) => {

    const [graphSelected, setGraphSelected] = useState(0);

    if (data){

        const lastHospitalDataIndex = data.findIndex((item) => ((item.hospitalCases) && (item.ICUCases)));
        let lagInfo = convertDate2(data[lastHospitalDataIndex].date);
        // switch(lastHospitalDataIndex){
        //     case 0: lagInfo = "today";
        //     break;
        //     case 1: lagInfo = "yesterday";
        //     break;
        //     default: lagInfo = `${lastHospitalDataIndex} days ago`;
        // }  
           
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
                    {graphSelected ? 
                    <CurrentGraph graphSelected={graphSelected} 
                                setGraphSelected={setGraphSelected}
                                data={data}/> :
                    <LatestFigures latest={data[0]} 
                                    lastWeek={data[7]} 
                                    hospitalData={hospitalData} 
                                    setGraphSelected={setGraphSelected}
                                    />                
                    }
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
