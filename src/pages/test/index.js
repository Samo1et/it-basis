import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography';
import Steps from '../../components/Steps'
import {step1, step2,step3,step4,step5,finalStep} from './steps'

const steps = ['Тестировщик', 'Перспектива','Поиск багов','Мифы профессии','Важные личные качества']
const stepContent = [
  step1,step2,step3,step5,step4
]

export default function Test({location}) {
  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
        Инженер по тестированию. QUA
        </Typography>
        <Steps steps={steps} stepContent={stepContent} nextPath={'/final'} finalStep={finalStep}/>
      </Container>
    </Layout>
  );
}