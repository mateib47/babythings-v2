import React, {useState, useEffect} from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



import FormInput from './CustomTextField'
import CustomSelect from './CustomSelect' //test this if it works


const BabyForm = ({checkoutToken, next}) => {
    const [babySize, setbabySize] = useState('');
    const methods = useForm();
    const sizes = checkoutToken.extra_fields.find(x => x.id == 'extr_VPvL5zWGQlAQkX').options.map(y => {return {'label':y, 'id':1}}) ;
    const [value, setValue] = React.useState(null);


  return (
    <>
    <Typography variant="h6" gutterBottom>Baby's Details</Typography>
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => (next({...data})))}>
            <Grid container spacing={3}>
                <FormInput required name="babyName" label="Baby's name" />
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Baby's birthday"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <FormInput required name="language" label="Language" />
                <CustomSelect name="size" label="Baby's current clothing size" array={sizes} value={babySize} setFunction={setbabySize}/>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Gift" />
                </Grid> 
            </Grid>
            <br/>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <Button component={Link} to="/cart" variant="outlined">Back to cart</Button>
                <Button type="submit" variant="contained" color="primary">Next</Button>
            </div>
        </form>
    </FormProvider>
</>
  )
}

export default BabyForm