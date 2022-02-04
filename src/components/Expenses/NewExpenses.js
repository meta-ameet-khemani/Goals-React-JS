import { Box, Typography } from "@mui/material";
import { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import classes from "./NewExpenses.module.css";
import AddModal from "../UI/AddModal";

const DUMMY_EXPENSES = [
  {
    id: "m1",
    name: "Hoody",
    description: "Apparel",
    price: 220,
    date: "1 Jan",
    year: "2022",
  },
  {
    id: "m2",
    name: "Shoes",
    description: "Apparel",
    price: 160,
    date: "1 Jan",
    year: "2022",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    date: "1 Jan",
    year: "2022",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    date: "1 Jan",
    year: "2022",
  },
  {
    id: "m5",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    date: "1 Jan",
    year: "2022",
  },
  {
    id: "m6",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    date: "1 Jan",
    year: "2022",
  },
  {
    id: "m7",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    date: "1 Jan",
    year: "2022",
  },
  {
    id: "m8",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    date: "1 Jan",
    year: "2022",
  },
];

const NewExpenses = () => {
  // return (
  //   <section className={classes.expenses}>
  //     <div className={classes.card}>
  //       <ul>{expensesList}</ul>
  //     </div>
  //   </section>
  // );

  // return (
  //   <Box>
  //     <section className={classes.expenses}>
  //       <div className={classes.card}>
  //         {DUMMY_EXPENSES.map((expense) => {
  //           return (
  //             <Box key={expense.id}>
  //               <Grid container spacing={3}>
  //                 <Grid item xs={4} style={{ textAlign: "left" }}>
  //                   <div>
  //                     <h3> {expense.name} </h3>
  //                     <div className={classes.description}>
  //                       {" "}
  //                       {expense.description}{" "}
  //                     </div>
  //                   </div>
  //                 </Grid>
  //                 <Grid item xs={4} style={{ textAlign: "center" }}>
  //                   <div>
  //                     <div className={classes.price}> {expense.date} </div>
  //                     <div className={classes.price}> {expense.year} </div>
  //                   </div>
  //                 </Grid>
  //                 <Grid item xs={4} style={{ textAlign: "right" }}>
  //                   <div className={classes.price}> {expense.price} </div>
  //                 </Grid>
  //               </Grid>
  //               <Divider />
  //             </Box>
  //           );
  //         })}
  //       </div>
  //     </section>
  //   </Box>
  // );

  const [openAddModal, setOpenAddModal] = useState(false);

  const handleClick = () => setOpenAddModal(true);
  const closeHandler = () => setOpenAddModal(false);
  const addHandler = (date, title, amount) => console.log(date, title, amount);
  
  return (
    <Box>
      <section className={classes.expenses}>
      <Stack direction="row" spacing={1} justifyContent="space-between" sx={{ mb: 2 }}>
        {/* <Chip label="Clickable" variant="outlined" onClick={handleClick} /> */}
        <Chip label="Search" icon={<SearchIcon style={{ color: "white", fontSize: 20 }} />} sx={{ fontSize: 16, color: 'white' }} variant="outlined" onClick={handleClick} />
        <Chip label="Add" icon={<AddIcon style={{ color: "white", fontSize: 21 }} />} sx={{ fontSize: 16, color: 'white' }} variant="outlined" onClick={handleClick} />
      </Stack>
        <div className={classes.card}>
          {DUMMY_EXPENSES.map((expense) => {
            return (
              <div key={expense.id}>
                <ListItem
                  secondaryAction={
                    <Typography>{expense.price}</Typography>
                    // <ListItemText primary={expense.price} />
                    // <Avatar>
                    //   <ImageIcon />
                    // </Avatar>
                  }
                >
                  <ListItemAvatar>
                    {/* <Avatar> */}
                    <FastfoodIcon sx={{ fontSize: 30 }} />
                    {/* </Avatar> */}
                  </ListItemAvatar>
                  <ListItemText
                    primary={expense.name}
                    secondary={expense.date}
                  />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </div>
      </section>
      <AddModal open={openAddModal} addHandler={addHandler} closeHandler={closeHandler} />
    </Box>
  );
};

export default NewExpenses;
