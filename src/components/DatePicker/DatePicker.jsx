import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";



export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  let day = `${value.$D}`;
  day.split("");
  let month = `${value.$M + 1}`;
  month.split("");

  if (month.length === 1) {
    month = `0${month}`;
  }
  if (day.length === 1) {
    day = `0${day}`;
  }
  let date = `${value.$y}-${month}-${day}`;

  console.log(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"es"}>
      <Stack spacing={3}>
        <DatePicker
          disablePast
          label="Introduce la fecha"
          openTo="year"
          views={["year", "month", "day"]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
