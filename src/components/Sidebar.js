import React from 'react';
import { makeStyles } from "@mui/styles";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const useStyles = makeStyles({
    drawerPaper: {
        width: 'inherit'
    },
    link: {
        textDecoration: 'none'
    }
});

const Sidebar = () => {

    const classes = useStyles();

    return <Drawer
        style={{ width: '220px' }}
        variant='persistent'
        anchor='left'
        open={true}
        classes={{ paper: classes.drawerPaper }}
    >
        <List>
            <Link to='/' className={classes.link}>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItemButton>
            </Link>
            <Link to='/about' className={classes.link}>
                <ListItemButton>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary='About Us' />
                </ListItemButton>
            </Link>
        </List>
    </Drawer>;
};

export default Sidebar;
