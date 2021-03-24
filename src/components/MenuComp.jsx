import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles({
  
   hambicon: {
    position: "absolute",
    backgroundColor: "#fff", /*dark*/
    color: "#BC865C", /*light*/
    stroke: "#BC865C",
    fontSize: "70px",
    right: "15px",
    top: "15px",
    padding: "20px",
    borderRadius: "50%",
    border: "2px solid #BC865C",
    borderColor: "#BC865C",
       '&:hover': {
      backgroundColor: "#fff",
      color: "#BC865C",
      stroke: "#BC865C",
       border: "2px solid #BC865C",
    },
    '@media (min-width: 50em)': { 
      fontSize: "90px",
    }
    
  },
});



function MenuComp() {
  const classes = useStyle();
  
  return <MenuIcon className={classes.hambicon}></MenuIcon>;

}
export default MenuComp