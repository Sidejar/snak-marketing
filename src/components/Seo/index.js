/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>Snak App</title>
      <meta
        name="description"
        content="Practice conversational language skills"
      />
      <meta property="og:title" content="Sank Marketing" />
      <meta
        property="og:description"
        content="Practice conversational language skills"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content="Snak Marketing" />
      <meta
        name="twitter:description"
        content="Practice conversational language skills"
      />
      {children}
    </>
  )
}

export default Seo
