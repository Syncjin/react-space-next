import React from 'react';
import styled, {css} from 'styled-components';
import Link from 'next/link';

const LogoDiv = styled.div`
  width: 100%;
  height: 100%;
  max-width: 200px;
  position: absolute;
  z-index: 20;
  text-align: center;
  display: table;
`;

const LogoA = styled.a`
  font-size: 2rem;
  height: 100%;
  display: table-cell;
  color: #333;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  text-decoration: none;
`;



const Logo = () => {
  return (
    <LogoDiv>
      <Link href={'/'}>
        <LogoA >SpaceCloud</LogoA>
      </Link>
    </LogoDiv>
  )
};


export default Logo;