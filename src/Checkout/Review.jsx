import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function Review({ addressFormData, cardFormData, from }) {
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem key={from.company || from.companyName
        } sx={{ py: 1, px: 0 }}>
          <ListItemText primary={from.company || from.companyName} />
          <Typography variant="body2">{from.carAmount || from.bikeAmount || from.ageAmount || from.totalAmount} -/PKR</Typography>
        </ListItem>

        {
          from.percentage ?
            <>
              <ListItem key={from.percentage} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={"Rate"} />
                <Typography variant="body2">{from.percentage}%</Typography>
              </ListItem>
            </> :
            null
        }

        {
          from.entity?.entity_name ?
            <>
              <ListItem key={from.entity.entity_name} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={"Insurance Type"} />
                <Typography variant="body2">{from.entity.entity_name}</Typography>
              </ListItem>
            </>
            :
            null
        }
        {
          from.tracker ?
            <>
              <ListItem key={from.tracker} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={"Tracker Amount"} />
                <Typography variant="body2">{from.state ? from.tracker : 0}</Typography>
              </ListItem>
            </>
            : null
        }


        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {from.state ? from.tracker + (from.carAmount || from.bikeAmount) : from.carAmount || from.bikeAmount || from.ageAmount || from.totalAmount}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Customer Details
          </Typography>
          <Typography gutterBottom>{`${addressFormData.firstName} ${addressFormData.lastName} `}</Typography>
          <Typography gutterBottom>{addressFormData.address1}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>

            <React.Fragment key={1}>
              <Grid item xs={6}>
                <Typography gutterBottom>Name : {cardFormData.cardName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Card NO : {cardFormData.cardNumber}</Typography>
              </Grid>
            </React.Fragment>

          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}