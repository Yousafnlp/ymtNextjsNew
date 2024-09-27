import React from 'react'
import ServicesReusable from '../components/ServicesReusable.jsx'
import {WellnessCoachingData} from '../data/Data.js'

function WellnessCoaching() {
  const {
    images,
    sessionContent,
    keyFeatures,
    keyBenefits,
    targetAudience,
    tagline
  } = WellnessCoachingData;
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

export default WellnessCoaching