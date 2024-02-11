import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {motion} from 'framer-motion'
import {
  tabs_wrapper,
  text_content_container,
  subtitel_tabs_content_text,
  side_img,
} from "./Tab.module.css";

function Tab({ id }) {
  const data = useStaticQuery(graphql`
    query Tabsdata {
      allMdx {
        nodes {
          frontmatter {
            id
            key
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            image_alt
          }
          excerpt(pruneLength: 10000)
        }
      }
    }
  `);

  const content = data.allMdx.nodes.filter((el) => el.frontmatter.id === id);
  const image = getImage(content[0].frontmatter.image);

  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
      transition: { duration: 0.5 },
    }}
    viewport={{ amount: 0.2, once: true }} className={tabs_wrapper}>
      <div className={text_content_container}>
        <div className={subtitel_tabs_content_text}>
          <StaticImage
            src="../../images/svg/svg-icon-about-sec.svg"
            alt="svg-icon"
          />
          <p>{content[0].frontmatter.title} services</p>
        </div>
        <h5>{content[0].frontmatter.title}</h5>
        <p>{content[0].excerpt}</p>
        <button type="button">
          <Link to="some link from data">Read More</Link>
        </button>
      </div>
      <GatsbyImage
        image={image}
        alt={content[0].frontmatter.image_alt}
        className={side_img}
      />
    </motion.div>
  );
}

export default Tab;
