import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import localHost from '../localHost';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Customer Details', 'Payment details', 'Review your order'];

function getStepContent(step,handleAddressFormChange,handleCardFormChange,addressFormData,cardFormData,from,type) {
  switch (step) {
    case 0:
      return <AddressForm onFormChange={handleAddressFormChange}/>;
    case 1:
      return <PaymentForm onFormChange={handleCardFormChange} />;
    case 2:
      return <Review addressFormData={addressFormData} cardFormData={cardFormData} from={from} type={type}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressFormData, setAddressFormData] = React.useState({});
  const [cardFormData, setCardFormData] = React.useState({});

  const isObjectEmpty = (objectName) => {
  for (let prop in objectName) {
    if (objectName.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};
  

const validateCustomerDetails = (data) => {

  return (
    data.firstName?.trim() !== '' &&
    data.lastName?.trim() !== '' &&
    data.address.trim() !== '' &&
    data.city.trim() !== '' &&
    data.postalCode.trim() !== ''
  );
}
const validatePaymentDetails = (data) => {
  return (
   !isObjectEmpty(data) &&
   data.cardName.trim() !== '' &&
   data.cardNumber.trim() !== '' &&
   data.expDate.trim() !== '' &&
   data.cvv.trim() !== ''

  ); 
};

  const handleAddressFormChange = (data) => {
    setAddressFormData(data);
  };
  const handleCardFormChange = (data) => {
    setCardFormData(data);
  };

  const handleNext = () => {
    // Validate the form data based on the active step
    let isFormValid = false;
  
    switch (activeStep) {
      case 0:
        // Validate the Customer Details form
        isFormValid = validateCustomerDetails(addressFormData);
        break;
      case 1:
        // Validate the Payment Details form
        isFormValid = validatePaymentDetails(cardFormData);
        break;
      case 2:
        isFormValid=true
      default:
        // Handle additional steps if needed
        break;
    }
  
    // If the form is valid, proceed to the next step
    if (isFormValid) {
      setActiveStep(activeStep + 1);
    } else {
      // Optionally, you can show an error message or take other actions
      console.error('Form validation failed. Please fill in all required fields.');
    }
  };
  

  // const handleNext = () => {
    
  //   setActiveStep(activeStep + 1);
  // };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const location = useLocation()
  const { from } = location.state
  let fullName = `${addressFormData?.firstName} ${addressFormData?.lastName}`;
  addressFormData["fullName"] = fullName;
  let local = JSON.parse(localStorage?.getItem("FormData"))
  delete local.leadID;
  delete local.fullName;
  delete local.phone;
  delete from.image_url;
  const updateData = {
    fullName: addressFormData.fullName,
    email: local.email,
    address: addressFormData.address,
    city: addressFormData.city,
    postalCode: addressFormData.postalCode,
    cardDetails: {
      cardFormData
    },
    insurance: [
      {
        type: from.type,
        details: {
          ...local,
          ...from
        }
      }
    ]
  }
 if(activeStep === steps.length){
  delete updateData.insurance[0].details.type
  let amount = 0;
  if(updateData.insurance[0].details?.state){
    amount = (updateData.insurance[0].details.carAmount || updateData.insurance[0].details.bikeAmount) + updateData.insurance[0].details.tracker
  }
  else{
    amount = updateData.insurance[0].details.carAmount || updateData.insurance[0].details.bikeAmount 
  }
  
  updateData.insurance[0].details["amount"] = updateData.insurance[0].details?.ageAmount || updateData.insurance[0].details?.totalAmount
  delete updateData.insurance[0].details?.carAmount
  delete updateData.insurance[0].details?.bikeAmount
  delete updateData.insurance[0].details?.state
  delete updateData.insurance[0].details?.entity.img
  delete updateData.insurance[0].details?.ageAmount
  delete updateData.insurance[0].details.tracker
  delete updateData.insurance[0].details.email
  delete updateData.insurance[0].details?.totalAmount
  console.log(updateData)
  axios.post(`${localHost}Card`, {
    updateData
  }).then(function (response) {
    Swal.fire(
      'Thank You!',
      'Our Team will contact you soon!',
      'success'
    );
    // navigate('/insurance/bikePlan')
  })
    .catch(function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Our team working on that',
      })
    });
 }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep,handleAddressFormChange,handleCardFormChange,addressFormData,cardFormData,from)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}