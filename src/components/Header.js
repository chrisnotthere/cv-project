import styled from 'styled-components';

const Header = () => {

  return (
    <HeaderWrapper>
      CV Generator&emsp;
      <i className="fa fa-file-o" aria-hidden="true"></i>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  text-align: center;
  font-size: 2rem;
  background-color: aquamarine;
  padding: 1rem;
`;

export default Header;
