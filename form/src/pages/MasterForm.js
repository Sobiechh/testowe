import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputMask from 'react-input-mask'
import LakeImage from '../assets/lake.jpg';
import './style/Home.css';


const validationSchema = yup.object({
  email: yup
    .string('Wprowadź email')
    .email('Wprowadzono niepoprawny email')
    .required('Email jest wymagany'),
  name: yup
    .string("Wprowadź swoję imie")
    .required('Imię jest wymagane')
    .matches(
      /^[A-Z].*$/,
      "Wprowadź imię z dużej litery"
    )
  ,
  surname: yup
    .string("Wprowadź swoję nazwisko")
    .required('Nazwisko jest wymagane')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwisko z dużej litery"
    )
  ,
  phone: yup
    .string("Wprowadź numer telefonu")
    .required('Numer telefonu jest wymagany')
    .matches(
      /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})*$/,
      'Zły numer telefonu'
    ),
  city: yup
    .string("Wprowadź nazwę miasta")
    .required('Nazwa miasta jest wymagana')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwę miasta z dużej litery"
    )
  ,
  country: yup
    .string("Wprowadź nazwę kraju")
    .required('Nazwa kraju jest wymagana')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwę kraju z dużej litery"
    )
  ,
  province: yup
    .string("Wprowadź nazwę województwa")
    .required('Nazwa województwa jest wymagana')
    .matches(
      /^[A-ZĄĆĘŁŃÓŚŹŻ].*$/,
      "Wprowadź nazwę województwa z dużej litery"
    )
  ,
  postalCode: yup
    .string("Wprowadź kod pocztowy")
    .required('Kod pocztowy jest wymagany')
    .matches(
      /^\(?([0-9]{2})\)?([-]?)([0-9]{3})*$/,
      'Zły kod pocztowy'
    ),
});

const inputStyle = {
  style: {
    fontSize: 22,
    color: 'white',
    shrink: true,
  }
}

const inputLabelStyle = {
  floatingLabelFocusStyle: {
    fontSize: 400,
  }
}

const values = {
  defaultDateValue: "1998-06-13"
};

const MasterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      country: '',
      province: '',
      city: '',
      postalCode: '',
      radio: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" justifyContent="center">
          <Typography variant='h3'>
            Dane osobowe
        </Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box p={3}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Imię"
              placeholder="Piotrek"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box p={3}>
            <TextField
              fullWidth
              id="surname"
              name="surname"
              label="Nazwisko"
              placeholder="Sobieszczyk"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <TextField
            id="date"
            label="Data urodzenia"
            type="date"
            InputProps={inputStyle}
            InputLabelProps={inputLabelStyle}
            defaultValue={values.defaultDateValue}
          />
        </Box>
        <Box display="flex" flexDirection="row">
          <Box p={3}>
            <TextField
              fullWidth
              id="country"
              name="country"
              label="Kraj"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
          </Box>
          <Box p={3}>
            <TextField
              fullWidth
              id="province"
              name="province"
              label="Województwo"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.province}
              onChange={formik.handleChange}
              error={formik.touched.province && Boolean(formik.errors.province)}
              helperText={formik.touched.province && formik.errors.province}
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box p={3}>
            <TextField
              fullWidth
              id="city"
              name="city"
              label="Miasto"
              InputProps={inputStyle}
              InputLabelProps={inputLabelStyle}
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Box>
          <Box p={3}>
            <InputMask
              mask="99-999"
              value={formik.values.postalCode}
              disabled={false}
              onChange={formik.handleChange}
              maskChar=""
            >
              {() => <TextField
                fullWidth
                id="postalCode"
                name="postalCode"
                label="Kod pocztowy"
                InputProps={inputStyle}
                InputLabelProps={inputLabelStyle}
                value={formik.values.postalCode}
                error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                helperText={formik.touched.postalCode && formik.errors.postalCode}
              />}
            </InputMask>
          </Box>
        </Box>
        <Box p={3}>
          <InputMask
            mask="999-999-999"
            value={formik.values.phone}
            disabled={false}
            onChange={formik.handleChange}
            maskChar=""
          >
            {() => <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Telefon"
              InputProps={{
                startAdornment: <InputAdornment position="start"><PhoneIcon />+48</InputAdornment>,
                style: {
                  fontSize: 22,
                  color: 'white',
                  shrink: true,
                }
              }}
              InputLabelProps={inputLabelStyle}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />}
          </InputMask>
        </Box>
        <Box p={3}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            InputProps={inputStyle}
            InputLabelProps={inputLabelStyle}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant='h3'>
            Pokój
          </Typography>
        </Box>
        <Box p={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">  </FormLabel>
            <RadioGroup aria-label="Miejsce" name="radio" value={formik.values.radio} onChange={formik.handleChange}>
              <FormControlLabel value="female" control={<Radio />} label={
                <>
                  <img src={LakeImage} className="profile-img" width="200px" height="200px" alt="lake" style={{ margin: "5px" }} />
                </>
              } />
              <FormControlLabel value="male" control={<Radio />} label="image"/>
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box p={1}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Wyślij
            </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};


export default MasterForm;