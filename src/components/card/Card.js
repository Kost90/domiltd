import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { card, img } from "./Card.module.css";
import { Link } from "gatsby";
import {motion} from 'framer-motion'

function Card() {
  const variants = {
    hidden:{
      y: 100,
      opacity: 0,
    },
    visible:{
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    }
  }
  const data = useStaticQuery(graphql`
    query Carddata {
      allMdx(filter: { frontmatter: { key: { eq: "card" } } }) {
        nodes {
          excerpt(pruneLength: 1000)
          frontmatter {
            id
            image {
                publicURL
            }
            image_alt
            title
            url
          }
        }
      }
    }
  `);

  return (
    <>
     {data.allMdx.nodes.map((el) => (
        <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ amount: 0.2, once: true }} variants={variants} className={card} key={el.frontmatter.id}>
          <img src={el.frontmatter.image.publicURL} className={img}/>
          <h6>{el.frontmatter.title}</h6>
          <p>{el.excerpt}</p>
          <Link to={`/services/${el.frontmatter.url}`}>Read more</Link>
        </motion.div>
      ))}
    </>
  );
}

export default Card;
