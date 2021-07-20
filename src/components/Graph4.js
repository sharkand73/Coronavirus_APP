import React from 'react'
import { Chart } from "react-google-charts";

const Graph4 = ({filteredData}) => {
    
    const tempData = filteredData.map((item) => {return [new Date(item.date), item.dailyDeaths]});
    const graphData = [...tempData];
    tempData.forEach((item,index) => {
        let tally = 0;
        for(let i = (index + 6); i >= index; i--){
            if (i < tempData.length ){
                tally += tempData[i][1];
            }
        }
        let sevenDayAverage = Math.round(tally / 7 );
        graphData[index][1] = sevenDayAverage;
    })
    console.log(graphData[7]);
    graphData.unshift(["Date", "Daily Deaths"]);
    
    return(
        <div>
            <h3>Graph 4 - Daily Deaths over Time (7-day average)</h3>
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