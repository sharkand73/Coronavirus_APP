import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faMinus } from '@fortawesome/free-solid-svg-icons';

import {convertDate2, nwc} from './functions';

const LatestFigures = ({latest, lastWeek, hospitalData}) => {

    const getDelta = function(a, b){
        if (a===b){
            return <FontAwesomeIcon icon={faMinus} className="unchanged"/>
        }
        if (a<b){
            return (<>
            <FontAwesomeIcon icon={faArrowUp} className="up"/>{nwc(b-a)}
            </>)
        }
        if (a>b){ return (<>
            <FontAwesomeIcon icon={faArrowDown} className="down"/>{nwc(a-b)}
            </>)
        
        }
    }


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
                    <td className='today-data'>{getDelta(lastWeek.dailyCases, latest.dailyCases)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Daily Deaths:</td> 
                    <td className='today-data'>{nwc(latest.dailyDeaths)}</td>
                    <td className='today-data'>{getDelta(lastWeek.dailyDeaths, latest.dailyDeaths)}</td>
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
                    <td className='today-data'>{hospitalData.hospitalCases}</td>
                </tr>
                <tr>
                    <td className='today-heading'>In Intensive Care*:</td> 
                    <td className='today-data'>{hospitalData.ICUCases}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
};

export default LatestFigures;