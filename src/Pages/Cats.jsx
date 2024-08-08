import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
  height: 300px;

  .imgContainer {
    width: 100%;
    height: 60%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  }

  .textBody {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h2 {
    font-size: 20px;
    margin: 2px 0;
  }

  p {
    max-width: 100%;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 92%;
  }
`;

function Cats() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPets = async () => {
    try {
      const res = await fetch("http://pets-v2.dev-apis.com/pets");
      const data = await res.json();
      setPets(data.pets);
      setIsLoading(false);
      console.log(data.pets);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  // use effect is used to get an external appi call or something else
  useEffect(() => {
    fetchPets();
    // the first time the function come in and the array is empty as seen bellow, it renders at once at the first render of the page
    //but if the array bellow has variable set and any if statement attached, it execute what the if statement or the value passed into the array says
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      {pets?.map((pet) => (
        <StyledCard key={pet.id}>
          <div className="imgContainer">
            <img src={pet?.images[0]} alt={`${pet.name}`} />
          </div>
          <div className="textBody">
            <h2>{pet.name}</h2>
            <p>{pet.description}</p>
          </div>
        </StyledCard>
      ))}
    </Wrapper>
  );
}

export default Cats;
