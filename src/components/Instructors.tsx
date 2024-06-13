"use client";
import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBlcnNvbnxlbnwwfHx8fDE2NDk3MjU0Nzg&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHBlcnNvbnxlbnwwfHx8fDE2NDk3MjU0ODQ&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHBlcnNvbnxlbnwwfHx8fDE2NDk3MjU1MDk&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHBlcnNvbnxlbnwwfHx8fDE2NDk3MjU1MjA&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHBlcnNvbnxlbnwwfHx8fDE2NDk3MjU1NDU&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHBlcnNvbnxlbnwwfHx8fDE2NDk3MjU1NzM&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

function Instructors() {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>
          Meet Our Instructors
        </h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>
          Discover the talented professionals who will guide your musical journey.
        </p>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
