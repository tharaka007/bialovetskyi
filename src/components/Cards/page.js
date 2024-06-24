"use client";
import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import { useState, useEffect } from "react";
import "./cards.css";

const GET_PAGES = gql`
  query NewQuery {
    pages {
      edges {
        node {
          content(format: RENDERED)
        }
      }
    }
  }
`;

const Cards = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const { data } = await client.query({
          query: GET_PAGES,
        });
        setPages(data.pages.edges);
      } catch (error) {
        console.error("Error fetching pages:", error);
				setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  if (loading) {
    // animation till the loading
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );
  }

	if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="cards-section py-16 px-[62px]">
      <h2 className="font-bold text-5xl leading-[58px] text-center mb-6">
        My latest projects
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      {pages.map(({ node }) => (
        <div key={node.title}>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
    </section>
  );
};

export default Cards;
