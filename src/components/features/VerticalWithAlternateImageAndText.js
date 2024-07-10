import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import ResidentialBuild from "../../images/residential_building.jpg";
import CommercialBuild from "../../images/commercial-building2.jpg";
import IndustrialBuild from "../../images/industrial-image.jpg";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
  `alt="${props.altText}"`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 text-justify`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
      ResidentialBuild,
      subtitle: "Exclusive",
      title: "Residential",
      description:
        "Crafting beautiful and welcoming homes that blend luxury, comfort, and unique style for lasting happiness. Our residential projects are designed with your lifestyle in mind, ensuring that every space is both functional and aesthetically pleasing. From sprawling estates to cozy bungalows, each home we create is a sanctuary tailored to the needs and dreams of its residents.",
      url: ""
    },

    {
      imageSrc:
      CommercialBuild,
      subtitle: "Expandable",
      title: "Commercial",
      description:
        "Building vibrant commercial spaces tailored for business success.Our commercial projects are engineered to foster productivity and growth, ensuring that every business space we create is optimized for efficiency and scalability. From retail centers to office complexes, we deliver environments that enhance user experience and operational success.",
      url: ""
    },

    {
      imageSrc:
        IndustrialBuild,
      subtitle: "Scalable",
      title: "Industry",
      description:
        "Constructing robust, functional and inspiring spaces for manufacturing, education, healthcare, and public service. Our industrial projects are designed with durability and functionality at their core, ensuring that every space we construct meets the rigorous demands of manufacturing, education, healthcare, and public service sectors. From factories to hospitals, we build environments that support critical operations and enhance productivity.",
      url: ""
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Our Domains</HeadingTitle>
          <HeadingDescription>
            Here are the domains Rhine Construction is currently involved in.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} altText={card.title + " Building"}/>
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>See More Details</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
