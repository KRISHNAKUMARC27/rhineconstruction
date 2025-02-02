import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
// import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import Erode from "../../images/Erode.jpg";
import Tiruppur from "../../images/Tiruppur.jpg";
import Tiruchengode from "../../images/Tiruchengode.jfif";
import Coimbatore from "../../images/Coimbatore.jpg";
import Salem from "../../images/Salem.jfif";
import Header from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: Erode,
      title: "Erode",
      description:
        "Mainly based in Erode, Rhine construction has completed and ongoing projects in Erode",
      locationText: "Tamil Nadu, India",
      // pricingText: "USD 39/Day",
      rating: "4.9",
    },
    {
      imageSrc: Coimbatore,
      title: "Coimbatore",
      description:
        "Rhine construction is looking to expand its operations in the Manchester of South India",
      locationText: "Tamil Nadu, India",
      // pricingText: "USD 50/Day",
      rating: 4.9,
    },
    {
      imageSrc: Tiruppur,
      title: "Tiruppur",
      description:
        "Rhine construction has completed projects in Tiruppur and are open for more projects",
      locationText: "Tamil Nadu, India",
      // pricingText: "USD 19/Day",
      rating: "5.0",
    },
    {
      imageSrc: Salem,
      title: "Salem",
      description:
        "Rhine constructions are looking to expand its operations in Salem",
      locationText: "Tamil Nadu, India",
      // pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: Tiruchengode,
      title: "Tiruchengode",
      description:
        "hine construction are looking to expand its operations in Tiruchengode",
      locationText: "Tamil Nadu, India",
      // pricingText: "USD 99/Day",
      rating: 4.5,
    },
  ];

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Content>
          <HeadingWithControl>
            <Heading>Our Locations</Heading>
            <Controls>
              <PrevButton onClick={sliderRef?.slickPrev}>
                <ChevronLeftIcon />
              </PrevButton>
              <NextButton onClick={sliderRef?.slickNext}>
                <ChevronRightIcon />
              </NextButton>
            </Controls>
          </HeadingWithControl>
          <CardSlider ref={setSliderRef} {...sliderSettings}>
            {cards.map((card, index) => (
              <Card key={index}>
                <CardImage imageSrc={card.imageSrc} />
                <TextInfo>
                  <TitleReviewContainer>
                    <Title>{card.title}</Title>
                    <RatingsInfo>
                      <StarIcon />
                      <Rating>{card.rating}</Rating>
                    </RatingsInfo>
                  </TitleReviewContainer>
                  <SecondaryInfoContainer>
                    <IconWithText>
                      <IconContainer>
                        <LocationIcon />
                      </IconContainer>
                      <Text>{card.locationText}</Text>
                    </IconWithText>
                    {/* <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText> */}
                  </SecondaryInfoContainer>
                  <Description>{card.description}</Description>
                </TextInfo>
                <PrimaryButton>Hire Us</PrimaryButton>
              </Card>
            ))}
          </CardSlider>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
