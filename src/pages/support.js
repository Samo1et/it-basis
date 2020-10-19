import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout'
import Typography from '@material-ui/core/Typography';

export default function Support({location}) {
  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
        Support
        </Typography>
      </Container>
    </Layout>
  );
}