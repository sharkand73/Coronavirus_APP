import React, {useState, useEffect} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {

  const [data, setData] = useState();

const
  areaType = "nation",
  areaName = "scotland";

const
  filters = [
      `areaType=${ areaType }`,
      `areaName=${ areaName }`
  ],
  structure = {
      date: "date",
      name: "areaName",
      code: "areaCode",
      "dailyCases": "newCasesByPublishDate",
      "cumulativeCases": "cumCasesByPublishDate",
      "dailyDeaths": "newDeaths28DaysByPublishDate",
      "cumulativeDeaths": "cumDeaths28DaysByPublishDate",
      "hospitalCases": "hospitalCases",
      "ICUCases": "covidOccupiedMVBeds"
  };

const
  apiParams = `filters=${ filters.join(";") }&structure=${ JSON.stringify(structure) }`,
  encodedParams = encodeURI(apiParams);
  //console.log(`/v1/data?${ encodedParams }`);

const fullRequest = `https://api.coronavirus.data.gov.uk/v1/data?${ encodedParams }`;

// let baseRequest = "https://api.coronavirus.data.gov.uk/v1/data";
  // let area = "?filters=areaType=nation;areaName=scotland";
  // let structure = '&structure={"date":"date","newCases":"newCasesByPublishDate"}';

  // const fullRequest = baseRequest + area + structure; 

 
useEffect(() => {fetch(fullRequest)
  .then(results => results.json() )
  .then(data => {setData(data.data)})}, [fullRequest]);

  return (
    <MainContainer data={data} />
  );
}

export default App;
