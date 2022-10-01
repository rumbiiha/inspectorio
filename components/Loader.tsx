import styled from 'styled-components'

const LoaderDiv = styled.div`
left: 0;
top: 0;
width: 100%;
height: 100%;
position: absolute;
background: #2f2f2f9c;
& div {
left: 50%;
position: absolute;
top: 50%;
  & span{
    width: 75px;
    height: 75px;
    display: inline-block;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.05);
    border-top-color: #fff;
    animation: spin 1s infinite linear;
    border-radius: 100%;
    border-style: solid;
  }
}`;

interface iProps{
  status: boolean
}

const Loader = ({status}:iProps)=> {
  return (
    <>
    {!!status && <LoaderDiv>
      <div>
        <span />
      </div>
    </LoaderDiv>}
    </>
  )
}

export default Loader;
