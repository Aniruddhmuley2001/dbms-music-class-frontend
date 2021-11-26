import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export function AddDataDialog() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const [admin_id, set_admin_id] = React.useState(-1);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState(0);
  const [isSubmitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API}/admin`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!res.ok) throw Error({ text: "Not ok" });
        alert("successful");
      } catch (e) {
        alert(e);
      }
    };

    if (
      isSubmitted &&
      data.admin_id != -1 &&
      data.name != "" &&
      data.phone != 0
    )
      fetchData();
  }, [data]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = isCancelled => {
    if (!isCancelled) {
      setSubmitted(true);
      setData({ admin_id, name, phone_number: phone });
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Entry
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Data</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Admin data</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="admin_id"
            label="admin_id"
            type="number"
            variant="standard"
            onChange={e => set_admin_id(parseInt(e.target.value))}
          />
          <TextField
            margin="dense"
            id="admin_name"
            label="name"
            type="text"
            variant="standard"
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="admin_phone_number"
            label="phone_number"
            type="number"
            variant="standard"
            onChange={e => setPhone(parseInt(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)}>Cancel</Button>
          <Button onClick={() => handleClose(false)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function UpdateDataDialog() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const [admin_id, set_admin_id] = React.useState(-1);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState(0);
  const [isSubmitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API}/admin/${data.admin_id}`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        if (!res.ok) throw Error({ text: "Not ok" });
        alert("successful");
      } catch (e) {
        alert(e);
      }
    };

    if (
      isSubmitted &&
      data.admin_id != -1 &&
      data.name != "" &&
      data.phone != 0
    )
      fetchData();
  }, [data]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = isCancelled => {
    if (!isCancelled) {
      setSubmitted(true);
      setData({ admin_id, name, phone_number: phone });
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update Entry
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Entry</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter admin_id of the entry you want to modify
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="admin_id"
            label="admin_id"
            type="number"
            variant="standard"
            onChange={e => set_admin_id(parseInt(e.target.value))}
          />
          <TextField
            margin="dense"
            id="admin_name"
            label="name"
            type="text"
            variant="standard"
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="admin_phone_number"
            label="phone_number"
            type="number"
            variant="standard"
            onChange={e => setPhone(parseInt(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)}>Cancel</Button>
          <Button onClick={() => handleClose(false)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function DeleteDataDialog() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const [admin_id, set_admin_id] = React.useState(-1);
  const [isSubmitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API}/admin/${data.admin_id}`,
          {
            method: "DELETE"
          }
        );
        if (!res.ok) throw Error({ text: "Not ok" });
        alert("successful");
      } catch (e) {
        alert(e);
      }
    };

    if (isSubmitted && admin_id != -1) fetchData();
  }, [data]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = isCancelled => {
    if (!isCancelled) {
      setSubmitted(true);
      setData({ admin_id });
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Delete Entry
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Entry</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter admin_id of the entry you want to delete
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="admin_id"
            label="admin_id"
            type="number"
            variant="standard"
            onChange={e => set_admin_id(parseInt(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)}>Cancel</Button>
          <Button onClick={() => handleClose(false)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}