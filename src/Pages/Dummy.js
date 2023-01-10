import React from "react";
import styled from "styled-components";
function Dummy() {
  return (
    <Wrapper>
      <h1>This is just a dummy page. You are already logged in</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 250px;
`;
export default Dummy;
