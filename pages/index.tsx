import type { NextPage } from 'next';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Typography from '../components/Typography';
import usePageLoading from '../hooks/usePageLoading';

const Home: NextPage = () => {
  const loading = usePageLoading();
  const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

  return (
    <>
      <Typography h1 text="Top 5 Github Users"/>
      <Typography p text="Tap the username to see more Information" />
      <Loader status={loading} />
      <Grid>{topFive.map((name) =><Card key={name} name={name}/>)}</Grid>
    </>
  )
};

export default Home;
