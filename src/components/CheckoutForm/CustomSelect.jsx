import React from 'react';
import {useFormContext, Controller} from 'react-hook-form'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'




const CustomSelect = ({name, label,value, array, setFunction}) => {
    // const setFunction (value) => {
    //     switch (name) {
    //         case shippingOption:
    //             setShippingOption(value)
    //             break;
    //         case shippingSubdivision:
        
    //             break;
    //         case shippingCountry:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

  return (
    <Grid item xs={12} sm={6}>
        <InputLabel>{label}</InputLabel>
        <Select value={value} fullWidth onChange={(e) => setFunction(e.target.value)}>
            {array.map((elem) => (
                <MenuItem key={elem.id} value={elem.id}>
                    {elem.label}
                </MenuItem>
            ))}
        </Select>
    </Grid>
  )
}

export default CustomSelect