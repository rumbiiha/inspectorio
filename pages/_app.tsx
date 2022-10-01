import type { AppProps } from 'next/app'
import Wrapper from '../components/PageWrapper'
import Container from '../components/Cointainer'
import GlobalStyle from '../components/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <GlobalStyle />
    <Container>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Container>
    </>
  )
}

export default MyApp
