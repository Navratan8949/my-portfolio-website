import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { IoReorderThreeOutline } from "react-icons/io5";
import { ListItemIcon } from '@mui/material';
import { FaBookmark } from "react-icons/fa";

import { IoHome } from "react-icons/io5";

export default function ResponsiveDrawer() {
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List style={{ background: 'black', color: 'white', paddingTop: '30px', gap: '30px', display: 'flex', flexDirection: 'column' }}>
                <center className='responsive-in-logo' style={{ fontSize: '35px' }}>Portfolio</center>
                <ListItem >
                    <ListItemButton sx={{ fontSize: '25px' }}>
                        {/* <ListItemIcon>
                            <IoHome color='white' />
                        </ListItemIcon> */}
                        Home
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{ fontSize: '25px' }}>
                        {/* <ListItemIcon>
                            <FaBookmark color='white' />
                        </ListItemIcon> */}
                        About Me
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{ fontSize: '25px' }}>
                        {/* <ListItemIcon>
                            <IoHome color='white' />
                        </ListItemIcon> */}

                        Skills
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{ fontSize: '25px' }}>
                        {/* <ListItemIcon>
                            <IoHome color='white' />
                        </ListItemIcon> */}
                        Contact Me
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton sx={{ fontSize: '25px' }}>
                        {/* <ListItemIcon>
                            <IoHome color='white' />
                        </ListItemIcon> */}
                        Service
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const anchor = 'right';

    return (
        <React.Fragment key={anchor}>
            <div onClick={toggleDrawer(anchor, true)}><IoReorderThreeOutline className='nav_toggle' fontSize={'30px'} /></div>
            <Drawer
                // sx={{ background: "black" }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
        </React.Fragment>
    );
}
