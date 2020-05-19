import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Header, PostList } from 'components'
import { Layout } from 'layouts'

const PostWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const beginnerCourses = edges.filter((edge, index) => index < 10)
  const intermediateCourses = edges.filter((edge, index) => index >= 10)

  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title} />
      <Header title={data.site.siteMetadata.title}>
        A Michael Liendo Experience
      </Header>
      <h3 style={{ textAlign: 'center', marginTop: '10%' }}>Beginner Course</h3>
      <PostWrapper>
        {beginnerCourses.map(({ node }, index) => {
          const { excerpt, frontmatter } = node
          const { cover, path, title, id } = frontmatter
          console.log(index)
          // dont return the about section or the uses section (first items)
          if (index <= 1) return

          return (
            <>
              <PostList
                key={id}
                cover={cover.childImageSharp.fluid}
                path={path}
                title={title}
                excerpt={excerpt}
              />
            </>
          )
        })}
      </PostWrapper>
      <hr />
      <h3 style={{ textAlign: 'center', marginTop: '5%' }}>
        Intermediate Course
      </h3>
      <PostWrapper>
        {intermediateCourses.map(({ node }) => {
          const { excerpt, frontmatter } = node
          const { cover, path, title, id } = frontmatter

          return (
            <>
              <PostList
                key={id}
                cover={cover.childImageSharp.fluid}
                path={path}
                title={title}
                excerpt={excerpt}
              />
            </>
          )
        })}
      </PostWrapper>
    </Layout>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              id: PropTypes.number.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___id] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            id
            title
            path
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
