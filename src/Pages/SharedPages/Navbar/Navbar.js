import React,{useState} from 'react';
import {AppBar,IconButton,Avatar,Button,Tooltip,Toolbar,Drawer, useMediaQuery, Icon} from '@mui/material';
import {MenuIcon,Menu,AccountCircle,Brightness4,Brightness7} from "@mui/icons-material";
import {Link} from 'react-router-dom'
import { ClassNames } from '@emotion/react';
import useStyles from './Navstyles'
import {useTheme} from '@mui/material/styles'
import Sidebar from './SideBar/Sidebar';



const Navbar = () => {
   const classes = useStyles()
   const theme = useTheme()
   const [mobileOpen,setMobileOpen] = useState(false)
   const isMobile = useMediaQuery('(max-width:600px)');
   const isAuthenticated = true
   return (
     <>
       <AppBar position="fixed">
         <Toolbar className={classes.toolbar}>
           {isMobile && (
             <IconButton
               color="inherit"
               edge="start"
               style={{ outline: "none" }}
               onClick={() =>
                 setMobileOpen((prevMobileOpen) => !prevMobileOpen)
               }
               className={classes.menuButton}
             >
               <Menu />
             </IconButton>
           )}
           <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
             {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
           </IconButton>
           {!isMobile && "Search..."}
           <div>
             {!isAuthenticated ? (
               <Button color="inherit" onClick={() => {}}>
                 Login &nbsp; <AccountCircle />
               </Button>
             ) : (
               <Button
                 color="inherit"
                 component={Link}
                 to="/profile/:id"
                 className={classes.linkButton}
                 onClick={() => {}}
               >
                 {!isMobile && <>My Movies &nbsp;</>}
                 <Avatar
                   style={{ width: 30, height: 30 }}
                   alt="profile"
                   src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                 />
               </Button>
             )}
           </div>
           {isMobile && "Search..."}
         </Toolbar>
       </AppBar>
       <div>
         <nav className={classes.drawer}>
           {isMobile ? (
             <Drawer
               variant="temporary"
               anchor="right"
               open={mobileOpen}
               onClose={() =>
                 setMobileOpen((prevMobileOpen) => !prevMobileOpen)
               }
               //  onClose={()=>setMobileOpen(!mobileOpen)}
               // className={classes.drawerBackground}
               classes={{ paper: classes.drawerPaper }}
               ModalProps={{ keepMounted: true }}
             >
               <Sidebar setMobileOpen={setMobileOpen}></Sidebar>
             </Drawer>
           ) : (
             <Drawer
               variant="permanent"
               open
               classes={{ paper: classes.drawerPaper }}
             >
               <Sidebar setMobileOpen={setMobileOpen}></Sidebar>
             </Drawer>
           )}
         </nav>
       </div>
     </>
   );
};

export default Navbar;