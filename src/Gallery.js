import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const GalleryContainer = styled.div`
  --s: 200px; /* control the size */
  --g: 8px;   /* control the gap */
  
  display: grid;
  grid: auto-flow var(--s) / repeat(2, var(--s));
  gap: var(--g);

  ${tw`m-0 p-0 box-border`}
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  filter: grayscale(100%);
  z-index: 0;
  transition: transform 0.4s, filter 0.4s, z-index 0s 0.25s, clip-path 0.4s;
  
  clip-path: circle(50% at 50% 50%); /* Maintain circular shape */

  &:hover {
    transform: scale(2.2);
    filter: grayscale(0);
    z-index: 1;
    clip-path: circle(50% at 50% 50%);
    transition: transform 0.4s, filter 0.4s, z-index 0s, clip-path 0.4s;
  }

  &:nth-child(1) {
    clip-path: circle(55% at 70% 70%);
    place-self: start;
  }

  &:nth-child(2) {
    clip-path: circle(55% at 30% 70%);
    place-self: start end;
  }

  &:nth-child(3) {
    clip-path: circle(55% at 70% 30%);
    place-self: end start;
  }

  &:nth-child(4) {
    clip-path: circle(55% at 30% 30%);
    place-self: end;
  }

  &:nth-child(1):hover,
  &:nth-child(2):hover,
  &:nth-child(3):hover,
  &:nth-child(4):hover {
    clip-path: circle(50% at 50% 50%);
  }
`;

const GalleryWrapper = styled.div`
  ${tw`flex justify-center -mx-8 -mb-8 items-center min-h-screen bg-black`}
`;

const Gallery = () => {
  return (
    <GalleryWrapper>
      <GalleryContainer>
        <Image src="https://images.pexels.com/photos/3030453/pexels-photo-3030453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="first-img" />
        <Image src="https://images.pexels.com/photos/1154504/pexels-photo-1154504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="second-img" />
        <Image src="https://images.pexels.com/photos/10934704/pexels-photo-10934704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="third-img" />
        <Image src="https://images.pexels.com/photos/4784378/pexels-photo-4784378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fourth-img" />
      </GalleryContainer>
    </GalleryWrapper>
  );
};

export default Gallery;
