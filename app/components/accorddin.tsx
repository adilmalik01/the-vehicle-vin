import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CustomAccordion() {
  return (
    <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: '#F7F8FA' }}
        >
          <Typography style={{ fontWeight: 'bold' }}>What is Thevehiclevin Canada?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Detailed information about Thevehiclevin in Canada.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ backgroundColor: '#F7F8FA' }}
        >
          <Typography style={{ fontWeight: 'bold' }}>Is Thevehiclevin Canada legit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Information regarding the legitimacy of Thevehiclevin Canada.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          style={{ backgroundColor: '#F7F8FA' }}
        >
          <Typography style={{ fontWeight: 'bold' }}>Compare Thevehicle vs Carfax in terms of cost and content</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Comparative analysis between Thevehicle and Carfax.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          style={{ backgroundColor: '#F7F8FA' }}
        >
          <Typography style={{ fontWeight: 'bold' }}>What is Canada VIN check vs VIN decoder?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Explanation of Canada VIN check and VIN decoder differences.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
