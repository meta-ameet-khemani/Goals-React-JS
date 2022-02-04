import { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
// import DialogContentText from '@mui/material/DialogContentText';

import CustomTextfield from "./CustomTextfield";
import CustomButton from "./CustomButton";

const AddModal = (props) => {
  const dateRef = useRef();
  const titleRef = useRef();
  const amountRef = useRef();

  const addHandler = () => {
    props.addHandler(
      dateRef.current.getValue(),
      titleRef.current.getValue(),
      amountRef.current.getValue()
    );
    props.closeHandler();
  };

  const todaysDate = new Date().toISOString().slice(0, 10);
  return (
    <div>
      <Dialog open={props.open} onClose={props.closeHandler}>
        <DialogTitle>Add New Expense</DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
          <CustomTextfield
            id="date"
            type="date"
            variant="standard"
            defaultValue={todaysDate}
            ref={dateRef}
          />
          <CustomTextfield
            autoFocus
            id="title"
            label="Title"
            variant="standard"
            ref={titleRef}
          />
          <CustomTextfield
            id="amount"
            label="Amount"
            type="number"
            variant="standard"
            ref={amountRef}
          />
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="space-around">
            <Grid item>
              <CustomButton label="Cancel" noborder="true" onClick={props.closeHandler} />
            </Grid>
            <Grid item>
              <CustomButton label="Add" noborder="true" onClick={addHandler} />
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddModal;
