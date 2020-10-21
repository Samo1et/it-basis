import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography';
import Steps from '../../components/Steps'
import {step1, step2,step3,step4,step5,step6,step7,step8,finalStep} from '../../steps/develop/steps'

const steps = ['Программист', 'Frontend','Backend','Мобильная разработка','Flex-box','GameDev', '1C', 'CodeChecker']
const stepContent = [ step1,step2,step3,step4,step5,step6,step7,step8 ];

export default function Develop({location}) {
  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
        Разработчик или программист.
        </Typography>
        <Steps steps={steps} stepContent={stepContent} nextPath={'/test'} finalStep={finalStep}/>
      </Container>
    </Layout>
  );
}