import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography';
import Steps from '../../components/Steps'
import {step1, step2,step3,step4,finalStep} from './steps'

const steps = ['Специализации', 'Глазомер','Стадии разработки дизайна сайта','Угадай цвет']
const stepContent = [
  step1,step2,step3,step4
]

export default function Develop({location}) {
  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
        Разработчик или программисти.
        </Typography>
        <Steps steps={steps} stepContent={stepContent} nextPath={'/test'} finalStep={finalStep}/>
      </Container>
    </Layout>
  );
}