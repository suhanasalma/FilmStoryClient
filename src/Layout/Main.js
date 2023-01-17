import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/SharedPages/Navbar/Navbar';
import useStyles from '../StyleFile/Styles'

const Main = () => {
   const classes = useStyles()
   console.log(classes)
   return (
     <div className={classes.root}>
       <Navbar />
       <div className={classes.content}>
         <div className={classes.toolbar} />
         <Outlet />
       </div>
     </div>
   );
};

export default Main;