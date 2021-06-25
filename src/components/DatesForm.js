import React, {useState} from 'react';

const DatesForm = ({data, processFilter}) => {
    const [startDate, setStartDate] = useState(new Date("2020-01-31"));
    const [endDate, setEndDate] = useState(new Date());

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }
    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (data){
        const newDataSet = data.filter(
            (dataItem) => 
            (new Date(dataItem.date) >= new Date(startDate)) 
            && (new Date(dataItem.date) <= new Date(endDate))
        ); 
        processFilter(newDataSet); 
        }
        else {
            console.log('There is no API data!');} 
    }

    return (
        <form className="dates-form" onSubmit={handleForm}>
            <input type="date" className="date-input" value={startDate} onChange={handleStartDate}/>
            <input type="date" className="date-input" value={endDate} onChange={handleEndDate}/>
            <input type="submit"/>
        </form>
    )
};

export default DatesForm;