import React from 'react';
import MenuComp from "./MenuComp";
import Box from '@material-ui/core/Box';
import "../style/style.css";



function Homepage() {
  return (
    <div style={{backgroundColor:"#BC865C"}}>
    
      <Box className="App-main">
        <Box className="App-main-menu"><MenuComp /></Box>
                {/* box 1 start */}      
          <Box className="App-main-box">
              <Box className="App-main-box-content">
                <Box className="App-main-box-content-title"><p>vásárlásról és kiszállításról</p><p>Termékek listája</p>
                <p>Szolgáltatások</p>
                <p>Kapcsolat</p>
                </Box>
                <Box className="App-main-box-content-text"><p></p></Box>
                <Box className="App-main-box-content-title">
                  <p>Általános szerződési feltételek</p><p>Adatkezelési Nyilatkozat</p>
                <p>Impresszum</p>
                </Box>
              </Box>
               <Box className="App-main-box-content-action">
                  <h1>Morella</h1>
                </Box>
               
        </Box>
                {/* box 1 end */}  
               
      </Box>
    </div>
  )
}

export default Homepage
