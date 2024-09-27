import React from 'react'
import {SuccessCoachingData} from '../data/Data.js'
import ServicesReusable from '../components/ServicesReusable.jsx'

function SuccssCoaching() {
  const {
    images,
    sessionContent,
    keyFeatures,
    keyBenefits,
    targetAudience,
    tagline
  } = SuccessCoachingData;
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

export default SuccssCoaching