import React from 'react';
import { useQuery, gql } from "@apollo/client";

import Card from '../../components/card/Card';
import './Catalog.css'

const CatalogScreen = () => {
  let cards = [];

  const query = gql`
    query ExampleQuery {
        locations {
            results {
                id
                name
                residents {
                    id
                    name
                    status
                    species
                    type
                    gender
                    image
                }
            }
        }
    }
`;

  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  cards = data.locations.results[0].residents;

  return (
    <>
      <div className="Catalog">
        {cards.map((card) => (
          <Card props={card}/>
        ))}
      </div>
    </>
  )
}

export default CatalogScreen
