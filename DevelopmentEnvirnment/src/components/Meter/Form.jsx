import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CONSTANTS from "../../constants";
import WarningMessage from "../WarningMessage";
const getSerialNumbers = () => {
  let promiseList = fetch(CONSTANTS.ENDPOINT.METERSERIALNUMBERS)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
  return promiseList;
}


const Form = (params) => {

  // const [textField, setTextField] = useState("");
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = React.useState('');
  const [items, setItems] = useState([]);
  const [warningMessage, setWarningMessage] = useState({ warningMessageOpen: false, warningMessageText: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    params.plotChart(inputValue);
    setInputValue("");

  }
  const closeWarningMessage = () => {
    setWarningMessage({
      warningMessageOpen: false,
      warningMessageText: ""
    });
  };

  React.useEffect(() => {
    getSerialNumbers()
      .then(serialnumbers => { setItems(serialnumbers) })
      .catch(error =>
        setWarningMessage({
          warningMessageOpen: true,
          warningMessageText: `${CONSTANTS.ERROR_MESSAGE.LIST_GET} ${error}`
        })
      );
  }, []);
  return (
    <form onSubmit={handleSubmit} className="input-group my-3">


      <br />
      <Autocomplete
        freeSolo
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="free-solo-2-demo"
        disableClearable
        options={items.map((item) => item)}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Serial Number"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <WarningMessage
        open={warningMessage.warningMessageOpen}
        text={warningMessage.warningMessageText}
        onWarningClose={closeWarningMessage}
      />
    </form>
  );
}

export default Form;