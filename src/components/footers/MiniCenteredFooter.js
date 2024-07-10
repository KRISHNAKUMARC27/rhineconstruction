import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo-removebg-preview.png";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/icons8-instagram.svg";
import { ReactComponent as GoogleIcon } from "../../images/icons8-google.svg";

const Container = styled(ContainerBase)`
  ${tw`text-gray-100 -mx-8 -mb-8`}
  background-image: radial-gradient(circle at center center, rgba(33, 33, 33, 0), rgb(33, 33, 33)),
    repeating-linear-gradient(135deg, rgb(33, 33, 33) 0px, rgb(33, 33, 33) 1px, transparent 1px, transparent 4px),
    repeating-linear-gradient(45deg, rgb(56, 56, 56) 0px, rgb(56, 56, 56) 5px, transparent 5px, transparent 6px),
    linear-gradient(90deg, rgb(33, 33, 33), rgb(33, 33, 33));
`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Rhine Construction</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Reviews</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.instagram.com/rhineconstruction">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="rhineconstructions@gmail.com">
              <GoogleIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2024, Rhine Construction Inc. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
