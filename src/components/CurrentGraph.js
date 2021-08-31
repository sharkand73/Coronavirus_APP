import React from 'react';
import '../App.css';

import Graph1 from '../components/Graph1';
import Graph2 from '../components/Graph2';
import Graph3 from '../components/Graph3';
import Graph4 from '../components/Graph4';
import Graph5 from '../components/Graph5';
import Graph6 from '../components/Graph6';

const CurrentGraph = ({graphSelected, setGraphSelected, data}) => {

    const graphs = [ null, 
        <Graph1 filteredData = {data}/>,
        <Graph2 filteredData = {data}/>,
        <Graph3 filteredData = {data}/>,
        <Graph4 filteredData = {data}/>,
        <Graph5 filteredData = {data}/>,
        <Graph6 filteredData = {data}/>
        ];
    

return (

        <div className="card">
            <div className='x-container'>
                <span onClick = {() => setGraphSelected(0)}>X</span>
            
            </div>
            <div className='graph-container'>
            {graphs[graphSelected]}
            </div>
        </div>

)
}

export default CurrentGraph;