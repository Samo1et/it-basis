import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography';
import Steps from '../../components/Steps'
import {step1, step2,step3,step4,step5,finalStep} from './steps'

const steps = ['Бизнес-аналитик', 'Пазл', 'Системный-аналитик','Перевод', 'Кто ещё?']
const stepContent = [
  step1,step2,step3,step4,step5
]

export default function Analysis({location}) {
  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
            Аналитик
        </Typography>
        <Steps steps={steps} stepContent={stepContent} nextPath={'/management'} finalStep={finalStep}/>
      </Container>
    </Layout>
  );
}