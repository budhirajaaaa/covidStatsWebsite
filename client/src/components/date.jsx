import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI


  const handleDateChange = (date) => {
    let newdate = JSON.stringify(date)
    newdate = newdate.slice(1,11);
    props.datef(newdate);
  };

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
          value={props.date}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />


    </MuiPickersUtilsProvider>
    </div>
  );
}
