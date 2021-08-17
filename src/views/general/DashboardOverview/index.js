import React from 'react';
import Page from '~/components/Page';
import FollowingContract from './FollowingContract';
import ContractByRegion from './ContractByRegion';
import AcquisitionTrend from './AcquisitionTrend';
import TotalAdvance from './TotalAdvance';
import ModemConnectionQuality from './ModemConnectionQuality';
import ProportionReport from './ProportionReport';
import ContractByPayTv from './ContractByPayTV';
import TrafficPlaceDensity from './TrafficPlaceDensity';
import TotalBusinessHomeContract from './TotalBusinessHomeContract';
import ContractCanceledByPackage from './ContractCanceledByPackage';
import ContractCanceledByAge from './ContractCanceledByAge';
import ChurnTrending from './ChurnTrending';
import UserReturn from './UserReturn';
import MostPackageGrowth from './MostPackageGrowth';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

function DashboardOverview() {
  const classes = useStyles();

  return (
    <Page title="Dashboard" className={classes.root}>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={2}>
          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <FollowingContract />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <ProportionReport />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={4}>
            <ContractByRegion />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={8}>
            <ContractByPayTv />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={12}>
            <ModemConnectionQuality />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <AcquisitionTrend />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <TotalAdvance />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <TrafficPlaceDensity />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <TotalBusinessHomeContract />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={12}>
            <ContractCanceledByPackage />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={12}>
            <ContractCanceledByAge />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <ChurnTrending />
          </Grid>
          {/*********************/}

          <Grid item xs={12} md={6} lg={6}>
            <UserReturn />
          </Grid>
          {/*********************/}

          <Grid item xs={12} md={6} lg={12}>
            <MostPackageGrowth />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardOverview;
