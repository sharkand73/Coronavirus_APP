import React from 'react'
import { Chart } from "react-google-charts";

const Graph4 = ({filteredData}) => {
    const graphData = filteredData.map((item) => {return [new Date(item.date), item.cumulativeDeaths]});
    graphData.unshift(["Date", "Cumulative Deaths"]);
    
    return(
        <div>
            <h3>Graph 4 - Cumulative Deaths over Time</h3>
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

export default Graph4;