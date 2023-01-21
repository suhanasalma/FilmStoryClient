import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";

export default makeStyles(theme=>({
   movie:{
      padding:"10px"
   },
   title:{
      color:theme.palette.text.primary,
      textOverflow:'ellipsis',
      width:'230px',
      whiteSpace:'nowrap',
      overflow:'hidden',
      marginTop:'10px',
      marginBottom:0,
      textAlign:'center'
   }
}))