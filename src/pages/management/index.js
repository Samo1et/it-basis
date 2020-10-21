import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography';
import Steps from '../../components/Steps'
import {step1, step2,step3,step4,step5,finalStep} from '../../steps/management/steps'

const steps = ['Должность', 'Требования', 'Сортировка','Задачи', 'Get-Kanban']
const stepContent = [
  step1,step2,step3,step4,step5
]

export default function Management({location}) {
  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
          Менеджер
        </Typography>
        <Steps steps={steps} stepContent={stepContent} nextPath={'/design'} finalStep={finalStep}/>
      </Container>
    </Layout>
  );
}