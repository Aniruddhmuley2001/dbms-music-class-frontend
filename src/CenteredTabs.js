import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";

import Table from "./Table";
import { AddDataDialog, UpdateDataDialog, DeleteDataDialog } from "./AddForm";

const CenteredTabs = () => {
  const [value, setValue] = React.useState(0);

  const [url, setURL] = React.useState(
    `${process.env.REACT_APP_API}/student_individual/raw`
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          variant="contained"
          onClick={() => {
            setURL(`${process.env.REACT_APP_API}/student_individual/raw`);
          }}
          label="Student Table"
        />
        <Tab
          variant="contained"
          onClick={() => {
            setURL(`${process.env.REACT_APP_API}/teacher_individual/raw`);
          }}
          label="Teacher table"
        />
        <Tab
          variant="contained"
          onClick={() => {
            setURL(`${process.env.REACT_APP_API}/admin/raw`);
          }}
          label="Admin Table"
        />
      </Tabs>

      <Table url={url} />

      <br />

      {value == 2 && (
        <Stack spacing={2} direction="row" centered>
          <AddDataDialog />
          <UpdateDataDialog />
          <DeleteDataDialog />
        </Stack>
      )}
    </Box>
  );
};

export default CenteredTabs;
