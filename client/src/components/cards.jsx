import React from "react";

import Zoom from "@material-ui/core/Zoom";


function Card(props){
  return <div className="mmaincard">

  <div className="row">

    <div className="col-sm-4 ">
      <div className="card maincard">

        <div className="card-body">
          <p className="ct">Confirmed</p>
          <h5 className="card-title">{props.confirmedCase}</h5>

          <Zoom in={props.dailydeathh!=null} timeout={1000}>

                    <h5 className="card-title">{props.dailyconfirmedd}</h5>

                  </Zoom>


        </div>
        </div>
    </div>

    <div className="col-sm-4">
      <div className="card maincard">
        <div className="card-body">
        <p className="ct">Recovered</p>
          <h5 className="card-title">{props.confirmedRecovered}</h5>

          <Zoom in={props.dailydeathh!=null} timeout={1000}>
<h5 className="card-title">{props.dailyrecoveredd}</h5>


                  </Zoom>


        </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="card maincard">
        <div className="card-body">
        <p className="ct">Deaths</p>
          <h5 className="card-title">{props.confirmedDeath}</h5>

          <Zoom in={props.dailydeathh!=null} timeout={1000}>


           <h5 className="card-title">{props.dailydeathh}</h5>
                  </Zoom>

        </div>
      </div>
    </div>

  </div>


</div>

}

export default Card;
