import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography';
import Steps from '../../components/Steps'
import {step1, step2,step3,step4,finalStep} from '../../steps/design/steps'

const steps = ['Специализации', 'Глазомер','Стадии разработки дизайна сайта','Угадай цвет']
const stepContent = [
  step1,step2,step3,step4
]

export default function Design({location}) {
  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
          Дизайнер
        </Typography>
        <Steps steps={steps} stepContent={stepContent} nextPath={'/develop'} finalStep={finalStep}/>
      </Container>
    </Layout>
  );
}

