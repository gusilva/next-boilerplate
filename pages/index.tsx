import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';

const Home: FC = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={4}>
        <main>
          <Typography variant="h2" gutterBottom>
            App Boilerplate
          </Typography>
          <Typography variant="h5" gutterBottom>
            Get started by editing <code> pages/index.js</code>
          </Typography>
        </main>
      </Grid>
    </Grid>
  );
};

export default Home;
