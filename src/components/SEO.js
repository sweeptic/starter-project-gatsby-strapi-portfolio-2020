import React from 'react'
import { Helmet } from 'react-helmet'
import { useSeo } from './useSeo'

const SEO = ({ title, description }) => {
  const { site } = useSeo()

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

export default SEO
