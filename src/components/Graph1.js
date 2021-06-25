import React from 'react'
import { Chart } from "react-google-charts";

const Graph1 = ({filteredData}) => {
    const graphData = filteredData.map((item) => {return [new Date(item.date), item.dailyCases]});
    graphData.unshift(["Date", "Daily Cases"]);
    
    return(
        <div>
            <h3>Graph 1 - Daily Cases over Time</h3>
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

export default Graph1;