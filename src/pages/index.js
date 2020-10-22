import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout'
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link'
import Grid from '@material-ui/core/Grid'
import Typical from 'react-typical'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //backgroundColor: 
  },
}));

export default function Index({ location }) {
  const classes = useStyles();
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
        <Grid container spacing={3}  direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
              <div style={{ 
                backgroundImage: 'url(https://images.emojiterra.com/google/android-oreo/512px/1f916.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '10rem'
                }} />
             
          </Grid>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typical
              steps={[
                'Привет, это приложение прольет свет на работу в IT.', 1000,
                'Открою маленький секрет, в IT работают не только программисты', 1500,
                '500 Interal Server error', 500,
                ' для проекта средних масштабов потребуется команда специалистов', 1000,
                'Destroy all people', 500
              ]}
              loop={Infinity}
              wrapper='p'
            />
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Layout>
  );
}
