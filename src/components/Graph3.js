import React from 'react'
import { Chart } from "react-google-charts";

const Graph3 = ({filteredData}) => {
    const graphData = filteredData.map((item) => {return [new Date(item.date), item.cumulativeCases]});
    graphData.unshift(["Date", "Cumulative Cases"]);
    
    return(
        <div>
            <h3>Graph 3 - Cumulative Cases over Time</h3>
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

export default Graph3;