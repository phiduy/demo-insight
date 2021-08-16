import React from 'react';
import Tasks from './Tasks';
import NewUsers from './NewUsers';
import ItemOrders from './ItemOrders';
import BugReports from './BugReports';
import NewsUpdate from './NewsUpdate';
import Page from '~/components/Page';
import WeeklySales from './WeeklySales';
import FollowingContract from './FollowingContract';
import ContractByRegion from './ContractByRegion';
import OrderTimeline from './OrderTimeline';
import TrafficBySite from './TrafficBySite';
import ModemConnectionQuality from './ModemConnectionQuality';
import ProportionReport from './ProportionReport';
import ContractByPayTv from './ContractByPayTV';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

function DashboardEcommerceView() {
  const classes = useStyles();

  return (
    <Page title="Dashboard" className={classes.root}>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={2}>
          {/*********************/}
          {/* <Grid item xs={12} sm={6} md={3}>
            <WeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <BugReports />
          </Grid> */}

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <FollowingContract />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <ProportionReport />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <ContractByRegion />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={6}>
            <ContractByPayTv />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={12}>
            <ModemConnectionQuality />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={4}>
            <OrderTimeline />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={4}>
            <TrafficBySite />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={8}>
            <Tasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardEcommerceView;
