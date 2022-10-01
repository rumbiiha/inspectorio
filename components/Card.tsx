import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components'
import Grid from './Grid';
import Typography from './Typography';

interface UserProps {
  user: {
    name: string
    avatar_url: string
    location: string
  }
}

interface UserName {
  name: string
}

const ACard = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid rgb(53, 53, 53);
  background: rgb(31, 31, 31);
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,&:focus,&:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`;

const Card = ({ name }: UserName) => {
  return (
    <Link href={`user/${name}`}>
      <ACard>
        <Typography h2 text={`${name}`} />
      </ACard>
    </Link>
  )
}

export const DetailsCard = ({ user }: UserProps) => {
  return (
    <Grid>
      <ACard style={{ width: '100%', display: 'flex' }}>
        <Image src={user.avatar_url} alt={user.name} width={100} height={100} />
        <div style={{ paddingLeft: 20 }}>
          <Typography h2 text={user.name} />
          <Typography p text={user.location} />
        </div>
      </ACard>
    </Grid>
  )
}

export default Card;
