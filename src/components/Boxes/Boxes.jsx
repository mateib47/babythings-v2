import React from 'react';
import useStyles from './styles';
import Box from './Box/Box';



const Boxes = () => {
    const classes = useStyles(); 
  return (
      <div style={{height: '100vh'}}>
              <div className={classes.root} >
        <Box />    
    </div>
          </div>

  )
}

export default Boxes