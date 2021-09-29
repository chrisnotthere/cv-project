/* eslint-disable jsx-a11y/anchor-has-content */
import styled from 'styled-components';

const Footer = () => {

  return (
    <FooterWrapper>
      made by chrisnotthere
      <Link href="https://github.com/chrisnotthere/cv-project"><i className="fa fa-github fa-2x fa-spin" aria-hidden="true"></i></Link>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  text-align: center;
  font-size: 0.8rem;
  background-color: aquamarine;
  padding: 0.75rem;
 `;

 const Link = styled.a`
  color: inherit;
  margin: 0.5rem;
 `;

export default Footer;
