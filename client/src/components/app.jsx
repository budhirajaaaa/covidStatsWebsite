import React ,{ useState,useEffect } from "react";
import Card from "./cards";
import axios from "axios";
import Row from "./tablerow";
import Clock from "./date";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//
function App(){
  const [covidData,setCovidData] = useState([]);
  const [dailycovidData,setdailyCovidData] = useState([]);
//  const [datedata,setdatedata] = useState([])
  const [a,seta] =useState();
  const [b,setb] = useState();
//  const [c,setc] = useState();
  const [stateData,setstateData]=useState([]);
  // var today = new Date();
  // var date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
  // const [selectedDate, setSelectedDate] = React.useState(date);
  //
  // useEffect(()=>{
  //
  //
  // const data = qs.stringify({
  //             title: selectedDate
  //
  //           });
  //           console.log(data);
  // axios.post("http://localhost:5000/datestate/",data)
  //   .then (res => {
  //   //  console.log("hello");;
  //       setdatedata(res.data)
  //   //  console.log(res.data);
  //     setc(datedata.length);
  //
  //   //console.log("hello");
  //
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   })
  // });


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
    <Clock />
    <div className = "skill-row">
    <img className="giph" src ="https://media1.giphy.com/media/j5DUZI5WeOmzEie0UO/giphy.gif?cid=ecf05e47hvnrcleyp0jgwyc7q47xnnha382pe1gqef2wysv9&rid=giphy.gif&ct=s" alt= "" />
    <h3>Wash Hands</h3>
    <p>Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.</p>
    </div><br/>


    <div className = "skill-row">
    <img className="giph1" src ="https://media2.giphy.com/media/0GqrqeBcJ7d75xYHfY/giphy.gif?cid=ecf05e479p8bdg0l1uecdfsf6c8fi58upp4asz2axs2bto43&rid=giphy.gif&ct=s" alt= "" />
    <h3>Wear a Mask</h3>
    <p>Masks are required on planes, buses, trains, and other forms of public transportation traveling into, within, or out of the United States and in U.S. transportation hubs such as airports and stations. Travelers are not required to wear a mask in outdoor areas of a conveyance (like on a ferry or the top deck of a bus).</p>
    </div><br/>
    <div className = "skill-row">
    <img className="giph2" src ="https://media1.giphy.com/media/LblIvQmbxiogmBpekH/giphy.gif?cid=ecf05e477n73xw4wltt41z7wsvtgz1jeups6tr2jcv6pym81&rid=giphy.gif&ct=s" alt= "" />
    <h3>Social Distancing</h3>
    <p>Inside your home: Avoid close contact with people who are sick.
If possible, maintain 6 feet between the person who is sick and other household members.
Outside your home: Put 6 feet of distance between yourself and people who don’t live in your household.</p>
    </div><br/><br/><br/><br/>
    <footer>
    <br/>
  Copyright 2021 Daksh Budhiraja
  <br />
  <a href="" ><InstagramIcon/>  </a>
  <a href=""><FacebookIcon/>  </a>
  <a href=""><LinkedInIcon/>  </a>
</footer>


      </div>)

  //confirmedCase={covidData[0].confirmed} confirmedRecovered={covidData[0].recovered} confirmedDeath={covidData[0].death}
}

export default App;
