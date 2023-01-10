import React from "react";
import styled from "styled-components";
function OffersCard(props) {
  return (
    <Wrapper>
      <div className="image">
        <img src={props.img} alt="pic" />
      </div>
      <div className="container">
        <h3 className="title">{props.title}</h3>
        <div className="abt">
          <p className="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            pellentesque praesent vitae sit.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 20rem;
  height: 100%;
  overflow: hidden;
  display: block;
  border-radius: 0.7rem;
  .image {
    width: 100%;
    height: 30vh;
    overflow: hidden;
    display: block;
  }
  img {
    max-height: 100%;
    min-width: 100%;
    display: block;
    object-fit: fill;
  }
  .container {
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) -14.34%,
      #c4c4c4 116.43%
    );
    backdrop-filter: blur(32.5px);
    padding: 0.5rem;
  }
  .abt {
    margin: 1rem 1rem 0rem 1rem;
    word-wrap: break-word;
    white-space: pre-wrap;
    height: 10vh;
  }
  .title {
    width: 240px;
    height: 24px;

    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin: 1rem 1rem 0 1rem;
    letter-spacing: -0.01em;

    color: #00d2ff;

    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  }
  .about {
    height: 63px;

    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin: 0rem;
    word-break: break-all;
    letter-spacing: -0.01em;
    font-feature-settings: "liga" off;
    color: #ffffff;
  }
`;

export default OffersCard;
