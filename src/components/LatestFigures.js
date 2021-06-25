import React from 'react';
import {convertDate2, nwc} from './functions';

const LatestFigures = ({latest}) => {

return (
    <div id="today">
        <table>
            <tbody>
                <tr>
                    <td className='today-heading'>Date:</td> 
                    <td className='today-data'>{convertDate2(latest.date)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Daily Cases:</td> 
                    <td className='today-data'>{nwc(latest.casesDaily)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Daily Deaths:</td> 
                    <td className='today-data'>{nwc(latest.deathsDaily)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Cumulative Cases:</td> 
                    <td className='today-data'>{nwc(latest.casesCumulative)}</td>
                </tr>
                <tr>
                    <td className='today-heading'>Cumulative Deaths:</td> 
                    <td className='today-data'>{nwc(latest.deathsCumulative)}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
};

export default LatestFigures;