import { Box, AppBar, styled, Toolbar, Typography, Badge, Avatar, Menu} from "@mui/material";
import {Pets, Mail, Notifications} from '@mui/icons-material';
import { InputBase } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from "react";


const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none", 
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex", 
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display: { xs:"none", sm:"block"}}}>Friends App</Typography>
            <Pets sx={{display: { xs:"block", sm:"none"}}} />
            <Search><InputBase placeholder="search... " sx={{color: (theme) => theme.palette.primary.main}}></InputBase></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
                <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
                <Notifications />
            </Badge>
            <Avatar 
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={e=>setOpen(true)}
            />
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
            <Avatar 
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            /> 
            <Typography variant="span">Donalad</Typography>
            </UserBox>
        </StyledToolbar> 
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
     </AppBar>
    );
}

export default Navbar;