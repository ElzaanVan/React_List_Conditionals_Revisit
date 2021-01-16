import React from "react";
import styled from "styled-components";

function ValidationComponent(props) {
  const StyledDiv = styled.div`
    font-size: 5rem;
    color: #393e46;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  `;

  return (
    <StyledDiv>
      <p>{props.text}</p>
      {props.text > 7 ? <p>Text is too long</p> : <p>Text too short</p>}
    </StyledDiv>
  );
}

export default ValidationComponent;
