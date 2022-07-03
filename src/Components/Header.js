import React from 'react';
import { Container, Toolbar, Typography, AppBar, Select, MenuItem, makeStyles, createTheme, ThemeProvider, FormControl } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(()=>({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer"
        

    },
}))

const darktheme = createTheme({
    palette:{
        primary:{
            main: "#fff",
        },
        type: "dark",
    }
})

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const {currency, setCurrency} = CryptoState();

   

    const handleChange = (e) => {
        setCurrency(e.target.value);
    }

    
  return (
      <ThemeProvider theme={darktheme}>
   <AppBar color="transparent" position="static">
       <Container>
           <Toolbar>
               <Typography 
               className={classes.title}
               variant="h6"
                onClick={()=> navigate("/")}
               >
                   Crypto Hunter
                </Typography>

            <Select 
               variant="outlined"
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               style={{width: 100,height: 40,marginRight: 15,}}
                   value={currency}
                   onChange={handleChange}
               >
                   <MenuItem vlaue={"USD"}>USD</MenuItem>
                   <MenuItem value={"INR"}>INR</MenuItem>
                   

               </Select>

           </Toolbar>



       </Container>
   </AppBar>

   </ThemeProvider>
  )
}

export default Header