import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion({heading,summary}) {
  return (
    <div>
      <Accordion style={{width:"30rem",margin:"2rem auto", background:"#fff"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{margin: '0 auto', fontSize: '1.5rem', fontWeight: '600'}}>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize: '1.2rem'}}>
            {summary}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
 
    </div>
  );
}
