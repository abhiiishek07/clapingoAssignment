import { React, useState } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userID, setUserID] = useState(null);
  const [password, setPassword] = useState(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  //   let user = useSelector((state) => state.auth);
  const handleSubmit = () => {
    if (userID.length === 0) {
      alert("please enter userID");
    } else if (password.length === 0) {
      alert("please enter password");
    } else {
      dispatch(addUser([userID, password]));
      navigate("/");
    }
  };
  return (
    <>
      <Wrapper>
        <form>
          <div>
            <label className="">Enter UserID: </label>
            <input
              type="text"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Enter Password: </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSubmit}
            style={{
              height: 50,
              width: 150,
              borderRadius: 20,
              backgroundColor: "#19c0a6",
              color: "#ffffff",
              margin: "1rem",
            }}
          >
            <h3>Submit</h3>
          </Button>
        </form>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 300px;
`;
export default Login;
