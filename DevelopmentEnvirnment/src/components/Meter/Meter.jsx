import React, { useState } from "react";
import Form from "./Form";
import WarningMessage from "../WarningMessage";
import CONSTANTS from "../../constants";


// simplest method: uses precompiled complete bundle from `plotly.js`
import PlotlyChart from 'react-plotlyjs-ts';

// customizable method: use your own `Plotly` object
// import createPlotlyComponent from 'react-plotly.js/factory';
// const Plot = createPlotlyComponent(Plotly);

const Meter = () => {
  const [items, setItems] = useState([]);

  const [warningMessage, setWarningMessage] = useState({ warningMessageOpen: false, warningMessageText: "" });
  const plotChart = (textField) => {
    // Warning Pop Up if the user submits an empty message
    if (!textField) {
      setWarningMessage({
        warningMessageOpen: true,
        warningMessageText: CONSTANTS.ERROR_MESSAGE.LIST_EMPTY_MESSAGE
      });
      return;
    }
    fetch(`${CONSTANTS.ENDPOINT.METERDETAILS}/${textField}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(itemAdded => {
        setItems("");
        setItems(itemAdded);
      })
      .catch(error =>
        setWarningMessage({
          warningMessageOpen: true,
          warningMessageText: `${CONSTANTS.ERROR_MESSAGE.LIST_ADD} ${error}`
        })
      );
  };

  const closeWarningMessage = () => {
    setWarningMessage({
      warningMessageOpen: false,
      warningMessageText: ""
    });
  };

  return (
    <main id="mainContent" className="container">
      <div className="row justify-content-center py-5">
        <h3>Dashboard</h3>
      </div>
      <div className="row">
        <div className="col-12 p-0">
          <Form plotChart={plotChart} />
        </div>
      </div>
      {items.serialnumber ?
        <div className="row">
          <div className="col-12 p-0">
            <label>
              Meter Serial Number : <b> {items.serialnumber}</b>
            </label>
          </div>
        </div> : null
      }
      {items.averageWH ?
        <div className="row">
          <div className="col-12 p-0">
            <label>
              The average half hourly WH values is : <b>{parseFloat(items.averageWH).toFixed(2)}</b>
            </label>
          </div>
        </div> : null
      }
      {items.averageVARH ?
        <div className="row">
          <div className="col-12 p-0">
            <label>
              The average  half hourly VARH values is : <b> {parseFloat(items.averageVARH).toFixed(2)}</b>
            </label>
          </div>
        </div> : null
      }
       {items.averageVARH ?
        <div className="row">
          <div className="col-12 p-0">
            <label>
              The below chart displays the trend of every half hourly values of WH and VARH.
            </label>
          </div>
        </div> : null
      }
      {items.xaxis ?

        <PlotlyChart
          data={[
            {
              x: items.xaxis
              ,
              y: items.yaxisWHresult
              ,
              type: 'scatter',
              width: 'auto',
              name: 'WH',
              marker: { color: 'blue' },
            },
            {
              x: items.xaxis
              ,
              y: items.yaxisVARHresult
              ,
              type: 'scatter',
              width: 'auto',
              name: 'VARH',
              marker: { color: 'red' },
            }
          ]}
          layout={{
            margin: { b: 150 },
            width: 1028, height: 400,
            yaxis: { title: 'Unit', tickangle: 270, titlefont: { size: 18 } },
            xaxis: { title: 'Date', titlefont: { size: 18 } },

            autosize: true,
            title: 'Meter Graph with WH and VARH'
          }}
          config={{ responsive: true, displaylogo: false }}
        /> : null}
      <WarningMessage
        open={warningMessage.warningMessageOpen}
        text={warningMessage.warningMessageText}
        onWarningClose={closeWarningMessage}
      />

    </main>
  );
}

export default Meter;