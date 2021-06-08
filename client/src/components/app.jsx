import React ,{ useState,useEffect } from "react";
import Card from "./cards";
import axios from "axios";
import Row from "./tablerow";
import Clock from "./date";
import qs from 'qs';

function App(){
  const [covidData,setCovidData] = useState([]);
  const [dailycovidData,setdailyCovidData] = useState([]);
  const [datedata,setdatedata] = useState([])
  const [a,seta] =useState();
  const [b,setb] = useState();
  const [c,setc] = useState();
  const [stateData,setstateData]=useState([]);
  var today = new Date();
  var date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
  const [selectedDate, setSelectedDate] = React.useState(date);

  useEffect(()=>{


  const data = qs.stringify({
              title: selectedDate

            });
  axios.post("/datestate/",data)
    .then (res => {
    //  console.log("hello");;
        setdatedata(res.data)
      //console.log(res.data);
      setc(datedata.length);

    //console.log("hello");

    })
    .catch(err => {
        console.log(err);
    })
  });


  useEffect(() => {
         axios.get("/total/")
         .then (res => {
             setCovidData(res.data);
             seta(covidData.length);
          //   console.log(covidData);
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
       //console.log(dailycovidData);

  })
  .catch(err => {
      console.log(err);
  })
});

useEffect(()=>{
  axios.get("/state/")
  .then (res => {
      setstateData(res.data);

  //console.log("hello");

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
    <table className="t">
   <thead>
    <tr >
    <th >State</th>
    <th >Confirmed</th>
    <th >Deaths</th>
    <th >Recovered</th>
  </tr>
  </thead>
  <tbody>
  {stateData.map((item,index)=>{
    return <Row statename={item.loc}
    stateConfirmedCase={item.confirmedCasesIndian}
    stateDeaths = {item.deaths}
    stateRecovered = {item.discharged}
    />
  })
}
</tbody>

    </table>
    </div>
    <Clock datef={setSelectedDate}  date={selectedDate}/>
    <Card confirmedCase={c==1?datedata[0].confirmedCasesIndian:null}
    confirmedRecovered={c==1?datedata[0].discharged:null}
    confirmedDeath={c==1?datedata[0].deaths:null}/>
      </div>)

  //confirmedCase={covidData[0].confirmed} confirmedRecovered={covidData[0].recovered} confirmedDeath={covidData[0].death}
}

export default App;
