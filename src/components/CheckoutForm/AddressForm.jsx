import React, {useState, useEffect} from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import {Link} from 'react-router-dom'

import {commerce} from '../../lib/commerce'
import FormInput from './CustomTextField'
import CustomSelect from './CustomSelect' //test this if it works


const AddressForm = ({checkoutToken, next}) => {
    const methods = useForm();
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const countries = Object.entries(shippingCountries).map(([code, name]) => ( {id: code, label:name}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ( {id: code, label:name}));
    const options = shippingOptions.map((so) => ({id : so.id, label: `${so.description} - ${so.price.formatted_with_symbol}`}));



    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});

        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, []);

    useEffect(() => {
        if(shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]); // dependency - whenever country changes, we are recalling this useEffect

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);


  return (
    <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => (next({...data, shippingCountry, shippingSubdivision, shippingOption})))}>
                <Grid container spacing={3}>
                    <FormInput required name="firstName" label="First name" />
                    <FormInput required name="lastName" label="Last name" />
                    <FormInput required name="address1" label="Address" />
                    <FormInput required name="email" label="Email" />
                    <FormInput required name="city" label="City" />
                    <FormInput required name="zip" label="ZIP / Postal code" />
                    <CustomSelect name="country" label="Shipping Country" array={countries} value={shippingCountry} setFunction={setShippingCountry}/>
                    <CustomSelect name="subdivision" label="Shipping Subdivision" array={subdivisions} value={shippingSubdivision} setFunction={setShippingSubdivision}/>
                    <CustomSelect name="option" label="Shipping Options" array={options} value={shippingOption} setFunction={setShippingOption}/>
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

export default AddressForm