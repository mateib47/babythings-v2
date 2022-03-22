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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';



import FormInput from './CustomTextField'
import CustomSelect from './CustomSelect' //test this if it works


const BabyForm = ({checkoutToken, next}) => {
    const [babyBirthday, setBabyBirthday] = useState('');
    const [babySize, setBabySize] = useState('');

    const methods = useForm();
    const sizes = checkoutToken.extra_fields.find(x => x.id == 'extr_VPvL5zWGQlAQkX')
        .options.map(function(elem, index, arrayobj){return {'label':elem, 'id':index}}) ;
    const [value, setValue] = React.useState(null);
    console.log(sizes)

    useEffect(() => {
        if(babyBirthday){
            if(babyBirthday == -1){
                //throw some error
            }else if(babyBirthday <= 3){
                setBabySize(0);
            }else if(babyBirthday > 3 && babyBirthday <= 6){
                setBabySize(1);
            }else if(babyBirthday > 6 && babyBirthday <= 9){
                setBabySize(2);
            }else if(babyBirthday > 9 && babyBirthday <= 12){
                setBabySize(3);
            }else if(babyBirthday > 12 && babyBirthday <= 18){
                setBabySize(4);
            }else if(babyBirthday > 18 && babyBirthday <= 24){
                setBabySize(5);
            }else{
                //baby too big error
            }
        }
    }, [babyBirthday]);


  return (
    <>
    <Typography variant="h6" gutterBottom>Baby's Details</Typography>
    <br/>
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => (next({...data})))}>
            <Grid container spacing={3}>
                <FormInput required name="babyName" label="Baby's name" />
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker required
                            onChange={(e) => {
                                let months;
                                let today = new Date()
                                months = (today.getFullYear() - e.getFullYear()) * 12;
                                months -= e.getMonth();
                                months += today.getMonth();
                                months = months <= 0 ? -1 : months 
                                setBabyBirthday(months);                             
                                setValue(e);
                            }}
                            label="Baby's birthday"
                            value={value}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <RadioGroup row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="dutch"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="dutch" control={<Radio />} label="Dutch" />
                        <FormControlLabel value="english" control={<Radio />} label="English" />
                    </RadioGroup>
                </Grid>
                <CustomSelect name="size" label="Baby's current clothing size" array={sizes} value={babySize} setFunction={setBabySize}/>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel control={<Checkbox/>} label="Gift" />
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