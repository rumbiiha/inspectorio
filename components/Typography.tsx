import styled from 'styled-components'

interface TProps {
  p?: boolean;
  h1?: boolean;
  h2?: boolean;
}

const TypographyDiv = styled.div<TProps>`
    margin: ${props => props.p ? '.5rem 0' : '0'};
    line-height: 1.5;
    font-size: ${props => props.h1 ? '4rem' : props.h2 ? '2rem' : '1.5rem'};
    font-weight: ${props => props.h1 ? 'bold' : 'normal'};
`;

const Typography = (props: any) => <TypographyDiv {...props}>{props.text}</TypographyDiv>;

export default Typography;