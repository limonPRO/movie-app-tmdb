'use client'
import ActorCard from '@/components/cards/ActorCards';
import SectionTitle from '@/components/common/SectionTitle';
import { movieSliderOptions } from '@/config/sliderOption';
import React from 'react'
import Slider from "react-slick";


const MovieCredit = ({data}:any) => {
  return (
    <div className="w-full">
       <SectionTitle title='Cast'/>
    <div className="mt-5">
      <Slider {...movieSliderOptions}>
        {data?.crew?.map((item: any, idx: number) => (
          <ActorCard actor={item} key={idx} />
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default MovieCredit
