import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout'
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link'

export default function Index({location}) {
  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
          Это все, спасибо за участие!
        </Typography>
        <div>
          <Link to="/analysis">Повторить</Link>
        </div>
      </Container>
    </Layout>
  );
}
