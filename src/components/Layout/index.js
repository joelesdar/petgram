import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle, showTitle = false, showSubtitle = false }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 😺</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {title && showTitle && <Title>{title}</Title>}
        {subtitle && showSubtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
