import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));



function Steps({steps = [], stepContent = [], nextPath='', finalStep}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {

    setActiveStep((prevActiveStep) => {
        if (prevActiveStep > 0) {
            return prevActiveStep - 1}
        }
    );        
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>{finalStep}</Typography>
            <Button onClick={handleReset}>Повторить</Button>
            <Link to={nextPath} asButton>
                Завершить
            </Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{stepContent[activeStep]}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Назад
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {'Дальше'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Steps.prototype = {
    steps: PropTypes.array.isRequired,
    stepContent: PropTypes.array.isRequired,
    nextPath: PropTypes.string.isRequired
}

export default Steps