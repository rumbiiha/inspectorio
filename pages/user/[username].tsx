import React from 'react';
import type { NextPage } from 'next';
import { getUserByUsername } from '../api';
import usePageLoading from '../../hooks/usePageLoading';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import { DetailsCard } from '../../components/Card';
import Grid from '../../components/Grid';

interface User {
  name: string
  avatar_url: string
  location: string
}

const UserPage: NextPage<{ user: User }> = ({ user }) => {

  const loading = usePageLoading();
  const router = useRouter();
  return (
    <>
      <Grid onClick={() => router.back()}>
        &larr; Back Home
      </Grid>
      <Loader status={loading} />
      <DetailsCard user={user} />
    </>
  )
}

UserPage.getInitialProps = async (props) => {
  const res = await getUserByUsername(props.query.username as string);
  const { name, avatar_url, location } = res.data
  return {
    user: {
      name,
      avatar_url,
      location,
    },
    loading: false
  }
}

export default UserPage;
