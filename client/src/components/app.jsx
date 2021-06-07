import React ,{ useState,useEffect } from "react";
import Card from "./cards";
import axios from "axios";
import Row from "./tablerow"



function App(){
  const [covidData,setCovidData] = useState([]);
  const [dailycovidData,setdailyCovidData] = useState([]);
  const [a,seta] =useState();
  const [b,setb] = useState();
  const [stateData,setstateData]=useState([]);
  useEffect(() => {
         axios.get("")
         .then (res => {
             setCovidData(res.data);
             seta(covidData.length)
            // console.log(covidData)
         })
         .catch(err => {
             console.log(err);
         })
       });

useEffect(()=>{
  axios.get("/daily/")
  .then (res => {
      setdailyCovidData(res.data);
      setb(dailycovidData.length);


  })
  .catch(err => {
      console.log(err);
  })
});

useEffect(()=>{
  axios.get("/state/")
  .then (res => {
      setstateData(res.data);



  })
  .catch(err => {
      console.log(err);
  })
});



  return (<div>
    <Card
      confirmedCase={a==1?covidData[0].confirmed:null}
      confirmedRecovered={a==1?covidData[0].recovered:null}
      confirmedDeath={a==1?covidData[0].death:null}
      dailyconfirmedd={b==1?"+" +dailycovidData[0].dateconfirmed:null}
      dailyrecoveredd={b==1?"+" +dailycovidData[0].daterecovered:null}
      dailydeathh={b==1?"+" +dailycovidData[0].datedeath:null}
      />
      <div className="tablediv">
    <table className="table">
    <tr className="info">
    <th>State/UT</th>
    <th>Confirmed</th>
    <th>Deaths</th>
    <th>Recovered</th>
  </tr>
  {stateData.map((item,index)=>{
    return <Row statename={item.loc}
    stateConfirmedCase={item.confirmedCasesIndian}
    stateDeaths = {item.deaths}
    stateRecovered = {item.discharged}
    />
  })
}

    </table>
    </div>
      </div>)

  //confirmedCase={covidData[0].confirmed} confirmedRecovered={covidData[0].recovered} confirmedDeath={covidData[0].death}
}

export default App;
