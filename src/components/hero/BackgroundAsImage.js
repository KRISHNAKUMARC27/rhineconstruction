// import React from "react";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line

// import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

// const StyledHeader = styled(Header)`
//   ${tw`pt-8 max-w-none`}
//   ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
//     ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
//   }
//   ${NavToggle}.closed {
//     ${tw`text-gray-100 hover:text-primary-500`}
//   }
// `;
// const Container = styled.div`
//   ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
//   background-image: url("${require("../../images/intro-bg.jpg")}");
// `;

// const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

// const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
// const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
// const LeftColumn = tw.div`flex flex-col items-center lg:block`;
// const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

// const Heading = styled.h1`
//   ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
//   span {
//     ${tw`inline-block mt-2`}
//   }
// `;

// // const SlantedBackground = styled.span`
// //   ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
// //   &::before {
// //     content: "";
// //     ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
// //   }
// // `;

// const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

// const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

// const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
//   padding-bottom: 56.25% !important;
//   padding-top: 0px !important;
//   ${tw`rounded`}
//   iframe {
//     ${tw`rounded bg-black shadow-xl`}
//   }
// `;

// export default () => {
//   const navLinks = [
//     <NavLinks key={1}>
//       <NavLink href="/components/innerPages/AboutUsPage">
//         About
//       </NavLink>
//       <NavLink href="#">
//         Blog
//       </NavLink>
//       <NavLink href="#">
//         Locations
//       </NavLink>
//       <NavLink href="#">
//         Pricing
//       </NavLink>
//     </NavLinks>,
//     <NavLinks key={2}>
//       <PrimaryLink href="#">
//         Hire Us
//       </PrimaryLink>
//     </NavLinks>
//   ];

//   return (
//     <Container>
//       <OpacityOverlay />
//       <HeroContainer>
//         <StyledHeader links={navLinks} />
//         <TwoColumn>
//           <LeftColumn>
//             <Notification>We have launched operations in Erode.</Notification>
//             <Heading>
//               <span>FROM BLUEPRINT TO REALITY</span>
//               <br />
//               {/* <SlantedBackground>Marketing Team.</SlantedBackground> */}
//             </Heading>
//             <PrimaryAction>Read Customer Stories</PrimaryAction>
//           </LeftColumn>
//           <RightColumn>
//             <StyledResponsiveVideoEmbed
//               url="https://www.youtube.com/embed/XGCaLzaNfF4"
//               background="transparent"
//             />
//           </RightColumn>
//         </TwoColumn>
//       </HeroContainer>
//     </Container>
//   );
// };
//-----------------------------------------
import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative min-h-screen -mx-8 -mt-8`}
`;

const BackgroundImage = styled.div`
  ${tw`absolute inset-0 bg-center bg-cover transition-opacity duration-500`}
  background-image: url("${(props) => props.bgImage}");
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  z-index: ${(props) => (props.isVisible ? 1 : 0)};
`;

const OpacityOverlay = tw.div`z-20 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

const PaginationButton = styled.button`
  ${tw`w-8 h-8 rounded-full border-2 border-white bg-transparent mx-2`}
  &.active {
    ${tw`bg-gray-100`}
  }
`;

const PaginationContainer = tw.div`absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 flex`;

export default () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/components/innerPages/AboutUsPage">About</NavLink>
      <NavLink href="/components/blocks/Features/Services">Services</NavLink>
      <NavLink href="/components/blocks/Cards/Slider">Locations</NavLink>
      <NavLink href="#">Projects</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/components/blocks/Form/SimpleContactUs">
        Hire Us
      </PrimaryLink>
    </NavLinks>,
  ];

  const pages = [
    {
      notification: "We have launched operations in Erode.",
      heading: "FROM BLUEPRINT TO REALITY",
      actionText: "Read Customer Stories",
      videoUrl: "https://www.youtube.com/embed/XGCaLzaNfF4",
      bgImage: require("../../images/intro-bg.jpg"),
    },
    {
      notification: "Our services are now available in Coimbatore.",
      heading: "BUILDING THE FUTURE",
      actionText: "See Our Projects",
      videoUrl: "https://www.youtube.com/embed/XGCaLzaNfF4",
      bgImage: require("../../images/intro-bg-2.jpg"),
    },
    // Add more pages as needed
  ];

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  return (
    <Container>
      {pages.map((page, index) => (
        <BackgroundImage
          key={index}
          bgImage={page.bgImage}
          isVisible={index === currentPage}
        />
      ))}
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>{pages[currentPage].notification}</Notification>
            <Heading>
              <span>{pages[currentPage].heading}</span>
            </Heading>
            <PrimaryAction>{pages[currentPage].actionText}</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url={pages[currentPage].videoUrl}
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
        <PaginationContainer>
          {pages.map((_, index) => (
            <PaginationButton
              key={index}
              className={index === currentPage ? "active" : ""}
              onClick={() => handlePageChange(index)}
            />
          ))}
        </PaginationContainer>
      </HeroContainer>
    </Container>
  );
};
