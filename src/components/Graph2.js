import React from 'react';
import { Chart } from "react-google-charts";

const Graph2 = ({filteredData}) => {
    const graphData = filteredData.map((item) => {return [new Date(item.date), item.hospitalCases]});
    graphData.unshift(["Date", "Hospital Cases"]);
    
    return(
        <div>
            <h3>Graph 2 - Hospital Cases over Time</h3>
            <Chart
            chartType="LineChart"
            data={graphData}
            width="100%"
            height="400px"
            legendToggle
            />
        </div>
    )
    }
export default Graph2;