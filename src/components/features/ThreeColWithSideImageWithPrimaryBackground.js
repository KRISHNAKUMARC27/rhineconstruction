import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import InteriorIconImage from "images/icons8-interior-design-100.png";
import DesignIconImage from "images/icons8-3d-design-66.png";
import PlanIconImage from "images/icons8-plan-64.png";
import ConstructionIconImage from "images/icons8-construction-100.png";
import RepairIconImage from "images/icons8-repair-100.png";
import ElevationIconImage from "images/icons8-building-64.png";

//const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;
// const Container = styled.div`
//   ${tw`relative text-gray-100`}
//   background-image: repeating-linear-gradient(135deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(22.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(22.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(157.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),linear-gradient(90deg, rgb(151, 26, 210),rgb(57, 199, 205));  `;
const Container = styled.div`
  ${tw`relative text-gray-100`}
background-image: repeating-linear-gradient(135deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(112.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(22.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(45deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(22.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(135deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(157.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(67.5deg, hsla(264,0%,88%,0.03) 0px, hsla(264,0%,88%,0.03) 1px,transparent 1px, transparent 12px),linear-gradient(90deg, rgb(44,82,130),rgb(144,205,244));  `;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug text-justify`}
  }
`;

export default ({
  cards = null,
  heading = "Our Services",
  subheading = "",
  description = "Your Vision, Our Craftsmanship: Comprehensive Construction Solutions",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: PlanIconImage,
      title: "Plans",
      description:
        "We offer comprehensive architectural planning services to ensure that every aspect of your construction project is carefully mapped out.",
    },
    {
      imageSrc: ElevationIconImage,
      title: "Elevations",
      description:
        "Our elevation designs provide a detailed view of the building’s exterior appearance, showcasing the design before construction begins.",
    },
    {
      imageSrc: InteriorIconImage,
      title: "Interior Works",
      description:
        "We provide complete interior design and execution services tailored to each client's unique style, taste and functionality requirements.",
    },
    {
      imageSrc: DesignIconImage,
      title: "3D Designs",
      description:
        "With our advanced 3D design services, clients can visualize their projects in high-quality three-dimensional representations. ",
    },
    {
      imageSrc: ConstructionIconImage,
      title: "Constructions",
      description:
        "Our core service encompasses the actual construction of residential, commercial, industrial buildings.",
    },
    {
      imageSrc: RepairIconImage,
      title: "Repair & Renovation",
      description:
        "Whether you need to revitalize a historic structure or modernize an existing building, our repair and renovation services are designed to extend the life of your property.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
