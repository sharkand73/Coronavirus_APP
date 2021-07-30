import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faMinus } from '@fortawesome/free-solid-svg-icons';

import {convertDate2, nwc} from './functions';

const LatestFigures = ({latest, lastWeek, hospitalData, setGraphSelected}) => {

    const getDelta = function(a, b){
        if (a===b){
            return <FontAwesomeIcon icon={faMinus} className="unchanged"/>
        }
        if (a<b){
            return (<>
            <FontAwesomeIcon icon={faArrowUp} className="up"/><span className="small-print up">{nwc(b-a)}</span>
            </>)
        }
        if (a>b){ return (<>
            <FontAwesomeIcon icon={faArrowDown} className="down"/><span className="small-print down">{nwc(a-b)}</span>
            </>)
        
        }
    }


return (
    <div id="today" className="card">
        <h2>{convertDate2(latest.date)}</h2>
        <table>
            <tbody>
                <tr>
                    <td className='today-heading'></td> 
                    <td className='today-header small-print'>FIGURES</td>
                    <td className='today-header small-print'>(c/w LAST WEEK)</td>
                </tr>
                <tr className="clickable-row" onClick={() => setGraphSelected(0)}>
                    <td className='today-heading'>Daily Cases:</td> 
                    <td className='today-data'>{nwc(latest.dailyCases)}</td>
                    <td className='today-data'>{getDelta(lastWeek.dailyCases, latest.dailyCases)}</td>
                </tr>
                <tr className="clickable-row" onClick={() => setGraphSelected(1)}>
                    <td className='today-heading'>Hospitalised*:</td> 
                    <td className='today-data'>{hospitalData.hospitalCases}</td>
                    <td className='today-data'>{getDelta(lastWeek.hospitalCases, hospitalData.hospitalCases)}</td>
                </tr>
                <tr className="clickable-row" onClick={() => setGraphSelected(2)}>
                    <td className='today-heading'>In Intensive Care*:</td> 
                    <td className='today-data'>{hospitalData.ICUCases}</td>
                    <td className='today-data'>{getDelta(lastWeek.ICUCases, hospitalData.ICUCases)}</td>
                </tr>
                <tr className="clickable-row" onClick={() => setGraphSelected(3)}>
                    <td className='today-heading'>Daily Deaths:</td> 
                    <td className='today-data'>{latest.dailyDeaths}</td>
                    <td className='today-data'>{getDelta(lastWeek.dailyDeaths, latest.dailyDeaths)}</td>
                </tr>
                <tr className="clickable-row" onClick={() => setGraphSelected(4)}>
                    <td className='today-heading'>Cumulative Cases:</td> 
                    <td className='today-data'>{nwc(latest.cumulativeCases)}</td>
                    <td></td>
                </tr>
                <tr className="clickable-row" onClick={() => setGraphSelected(5)}>
                    <td className='today-heading'>Cumulative Deaths:</td> 
                    <td className='today-data'>{nwc(latest.cumulativeDeaths)}</td>
                    <td></td>
                </tr>
                <tr><td><br></br></td></tr>

            </tbody>
        </table>
        <p className="small-print">
            * Latest hospital figures are from {hospitalData.lag}.
        </p>
    </div>
    )
};

export default LatestFigures;