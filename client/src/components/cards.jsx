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


                  {props.dailydeathh==null?<div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>:<h5 className="card-title">{props.dailyconfirmedd}</h5>}



    </div>
    </div>
    </div>

    <div className="col-sm-4">
    <div className="card maincard">
    <div className="card-body">
        <p className="ct">Recovered</p>
          <h5 className="card-title">{props.confirmedRecovered}</h5>
          {props.dailydeathh==null?<div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>:<h5 className="card-title">{props.dailyrecoveredd}</h5>}



    </div>
    </div>
    </div>

    <div className="col-sm-4">
      <div className="card maincard">
        <div className="card-body">
        <p className="ct">Deaths</p>
          <h5 className="card-title">{props.confirmedDeath}</h5>

         {props.dailydeathh==null?<div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>:<h5 className="card-title">{props.dailydeathh}</h5>}




        </div>
      </div>
    </div>
</div>
</div>
}
export default Card;
