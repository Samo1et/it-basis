import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout'
import Link from '../components/Link'
import Typography from '@material-ui/core/Typography'

export default function Index({ location }) {

  return (
    <Layout pathname={location.pathname}>
      <Container maxWidth="sm">
        <Typography>
          Hello World!
        </Typography>
        <p>
          Привет, это приложение прольет свет на работу в IT.
        </p>
        <p>
          Открою маленький секрет, в IT работают не только программисты,
          для проекта средних масштабов потребуется команда специалистов.
        </p>
        <p>
          Предлагаю пройти путь создания интернет-магазина, заодно узнать об участниках
        </p>
        <div>
          <Link to="/analysis">Поехали</Link>
        </div>
      </Container>
    </Layout>
  );
}
