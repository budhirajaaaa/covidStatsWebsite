import 'date-fns';
import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Card from "./cards"
import axios from "axios";
import qs from "qs";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function MaterialUIPickers(props) {
  var today = new Date();
  var date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
  const [selectedDate, setSelectedDate] = React.useState(date);
  const [datedata,setdatedata] = useState([]);
  const [c,setc] = useState(0);
  const data = qs.stringify({
              title: selectedDate

            });

  axios.post("/datestate/",data)
    .then (res => {

        setdatedata(res.data[0].data)

      setc(datedata.length);

    })
    .catch(err => {
        console.log(err);
    })

  const handleDateChange = (date) => {
    let newdate = JSON.stringify(date)
    newdate = newdate.slice(1,11);
    setSelectedDate(newdate);
  };

  let index = 0;

  datedata.forEach((item, i) => {
   if (item.day == selectedDate) {
      index = i;
    }
  });
  return (
    <div className="container">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy-MM-dd"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />


    </MuiPickersUtilsProvider>
    <Card confirmedCase={c!=0?datedata[index].summary.confirmedCasesIndian:null}
    confirmedRecovered={c!=0?datedata[index].summary.discharged:null}
    confirmedDeath={c!=0?datedata[index].summary.deaths:null}/>
    </div>
  );
}
