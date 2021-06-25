import React, {useEffect, useState} from 'react';
import '../App.css';
import DatesForm from '../components/DatesForm';
import Panel from '../components/Panel';
import Graph1 from '../components/Graph1';
import Graph2 from '../components/Graph2';
import Graph3 from '../components/Graph3';
import Graph4 from '../components/Graph4';

const MainContainer = ({data}) => {

    if (data){console.log(data[0])}

    // const [filteredData, setFilteredData] = useState(data);
    // const [graphSelected, setGraphSelected] = useState(1);

    // useEffect(() => {
    //    console.log(`Graph to display: ${graphSelected}`);
    //    }, [graphSelected]);

    // const buttonPress = (n) => {
    //     setGraphSelected(n-1);
    //     }
    // const processFilter = function(newDataSet){
    //     setFilteredData(newDataSet);
    // }
    // const graphs = [<Graph1 filteredData = {filteredData}/>, 
    //                 <Graph2 filteredData = {filteredData}/>,
    //                 <Graph3 filteredData = {filteredData}/>,
    //                 <Graph4 filteredData = {filteredData}/>]

    return (
        <>
            <header>
                <h1>Covid Stats</h1>
            </header>
            {/* <DatesForm className="dates-form" data={data} processFilter={processFilter}/>
            <Panel className="panel" buttonPress={buttonPress}/>
            {graphs[graphSelected]} */}
        </>
    )
}

export default MainContainer;
