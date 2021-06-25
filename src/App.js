import React, {useState, useEffect} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {

  const [data, setData] = useState();

  let baseRequest = "https://api.coronavirus.data.gov.uk/v1/data";
  let area = "?filters=areaType=nation;areaName=scotland";
  let structure = '&structure={"date":"date","newCases":"newCasesByPublishDate"}';

  const fullRequest = baseRequest + area + structure; 

  const getData = function(){
    fetch(fullRequest)
     .then(results => results.json() )
     .then(data => {setData(data.data)})
 };

  useEffect(() => {getData()}, []);

  return (
    <MainContainer data={data} />
  );
}

export default App;
