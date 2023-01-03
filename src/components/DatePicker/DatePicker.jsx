import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./DatePicker.scss";
//Slice

export default function ResponsiveDatePickers({ disabled, resetDate }) {
  const [messageError, setMessageError] = React.useState("");
  const [value, setValue] = React.useState(dayjs(""));
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"es"}>
      <Stack spacing={3} className="datepicker">
        <DatePicker
          disabled={disabled}
          disablePast
          label="Introduce la fecha"
          openTo="year"
          views={["year", "month", "day"]}
          value={value}
          onChange={(newValue) => {
            // dispatch(reservation({ date: value.$d }));
            setValue(newValue);
            resetDate(newValue)
           
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
      <h6>{messageError}</h6>
    </LocalizationProvider>
  );
}
