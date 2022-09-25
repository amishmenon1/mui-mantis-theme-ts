import { ReactElement } from 'react';

// material-ui
import { Grid } from '@mui/material';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';

// project import
// import UserCountCard from 'components/cards/statistics/UserCountCard';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <Page title="Sample Page">
    <MainCard title="Sample Card">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticsDataCard title="Total Users" count="78,250" percentage={70.5}>
          {/* <UserCountCard /> */}
        </AnalyticsDataCard>
      </Grid>
    </MainCard>
  </Page>
);

SamplePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SamplePage;
