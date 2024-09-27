import React from 'react'
import {ReshapeYourLifeData} from '../data/Data.js'
import ServicesReusable from '../components/ServicesReusable.jsx'

function ReshapeYourLife() {
  const {
    images,
    sessionContent,
    keyFeatures,
    keyBenefits,
    targetAudience,
    tagline
  } = ReshapeYourLifeData;
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

export default ReshapeYourLife