import React from 'react';
import {convertDate2, nwc} from './functions';

const LatestFigures = ({latest, yesterday, lastWeek}) => {

return (
    <div id="today" className="card">
        <table>
            <tbody>
                <tr>
                    <td className='today-heading'>Date:</td> 
                    <td className='today-data'>{convertDate2(latest.date)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Daily Cases:</td> 
                    <td className='today-data'>{nwc(latest.dailyCases)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Daily Deaths:</td> 
                    <td className='today-data'>{nwc(latest.dailyDeaths)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Cumulative Cases:</td> 
                    <td className='today-data'>{nwc(latest.cumulativeCases)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Cumulative Deaths:</td> 
                    <td className='today-data'>{nwc(latest.cumulativeDeaths)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Hospitalised*:</td> 
                    <td className='today-data'>{yesterday.hospitalCases}</td>
                </tr>
                <tr>
                    <td className='today-heading'>In Intensive Care*:</td> 
                    <td className='today-data'>{yesterday.ICUCases}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
};

export default LatestFigures;