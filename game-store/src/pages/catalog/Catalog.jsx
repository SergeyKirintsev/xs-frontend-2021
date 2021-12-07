import React from 'react';
import { useQuery, gql } from "@apollo/client";
import styled from 'styled-components';

import Card from '../../components/card/Card';

const Catalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 40px;
  background: #E5E5E5;
  padding: 40px 60px;
`

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
      <Catalog>
        {cards.map((card) => (
          <Card key={card.id} props={card}/>
        ))}
      </Catalog>
    </>
  )
}

export default CatalogScreen
