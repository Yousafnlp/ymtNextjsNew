import React from 'react'
import {DoubleDoseProductivityData} from '../data/Data.js'
import ServicesReusable from '../components/ServicesReusable.jsx'

function DoubleDoseProductivity() {
  const {
    images,
    sessionContent,
    keyFeatures,
    keyBenefits,
    targetAudience,
    tagline
  } = DoubleDoseProductivityData;
  return (   
     <><ServicesReusable
    images={images}
    sessionContent={sessionContent}
    keyFeatures={keyFeatures}
    keyBenefits={keyBenefits}
    targetAudience={targetAudience}
    tagline={tagline}
    /></>
  )
}

export default DoubleDoseProductivity