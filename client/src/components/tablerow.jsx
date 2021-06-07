import React from "react";

function Row(props){

  return <tr>
    <td>{props.statename}</td>
    <td>{props.stateConfirmedCase}</td>
    <td>{props.stateDeaths}</td>
    <td>{props.stateRecovered}</td>
  </tr>

}

export default Row;
