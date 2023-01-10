import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import OffersCard from "../Cards/OffersCard";
import SubscribePlanImage from "../../Assests/subscribeplans.png";
function Homepage() {
  return (
    <Container>
      <Wrapper1>
        <h2 className="text">
          Hone your english <br /> speaking skills over <br />{" "}
          <span className="one">one-on-one video</span>
          call
        </h2>
        <h5 className="descrip">
          Practice english conversation with excellent communuicators <br />{" "}
          across the country and speak like a PRO 😎.
        </h5>

        <div className="buttons">
          {" "}
          <Button
            style={{
              height: 50,
              width: 150,
              borderRadius: 20,
              backgroundColor: "#ff736a",
              color: "#ffffff",
            }}
          >
            <h3>Book a trial</h3>
          </Button>
          <Button
            variant="outlined"
            style={{
              height: 50,
              width: 220,
              borderRadius: 20,
              borderColor: "#ff736a",
              color: "#ff736a",
              marginLeft: "2rem",
            }}
          >
            <h3>Download our app</h3>
          </Button>
        </div>
        <div className="dummy"></div>
      </Wrapper1>
      <Stats>
        <div className="contents">
          <div>
            <div className="gradientBG">
              <StatsContents
                left="398px"
                top="72px"
                margin="0rem 2rem 0rem 2rem"
              >
                <div>
                  <text className="number">
                    80K <span className="plusSign">+</span>
                  </text>
                </div>
                <div>
                  <text className="detail">Happy Learners</text>
                </div>
              </StatsContents>
              <StatsContents left="162px" top="72px" margin="0 0 0 0">
                <text className="number">
                  50K <span className="plusSign">+</span>
                </text>
                <div>
                  <text className="detail">Mobile Downloads</text>
                </div>
              </StatsContents>
              <StatsContents left="193px" top="198px" margin="1rem 0rem 0rem 0">
                <div>
                  <text className="number">
                    53K <span className="plusSign">+</span>
                  </text>
                </div>
                <div>
                  <text className="detail">Sessions per month</text>
                </div>
              </StatsContents>
              <StatsContents left="428px" top="198px" margin=" 1rem 0 0 2rem">
                <text className="number">
                  200 <span className="plusSign">+</span>
                </text>
                <div>
                  <text className="detail">Speakers around the globe</text>
                </div>
              </StatsContents>
            </div>
            <div className="descriptions">
              <h5 className="trial">Book a trial</h5>
              <h3 className="english">
                Start your English <br />
                speaking journey today!
              </h3>
              <h4 className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                pellentesque praesent vitae sit sagittis venenatis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </h4>
              <Button
                style={{
                  height: 50,
                  width: 150,
                  borderRadius: 20,
                  backgroundColor: "#ff736a",
                  color: "#ffffff",
                }}
              >
                <h3>Book a trial</h3>
              </Button>
            </div>
          </div>
        </div>
      </Stats>
      <OfferWrapper>
        <h3 className="offerhead">What we offer ?</h3>
        <div className="offercontents">
          <OffersCard
            img={
              "https://ochrehealth.com.au/wp-content/uploads/2020/08/ACT-4.jpg"
            }
            title={"Customised Curriculum"}
          />
          <OffersCard
            img={
              "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?cs=srgb&dl=pexels-pixabay-355948.jpg&fm=jpg"
            }
            title={"Expermental Learning"}
          />
          <OffersCard
            img={
              "https://images.pexels.com/photos/4492135/pexels-photo-4492135.jpeg?cs=srgb&dl=pexels-artem-podrez-4492135.jpg&fm=jpg"
            }
            title={"Shadowing Method"}
          />
        </div>
      </OfferWrapper>
      <WorksWrapper>
        <h3 className="workstitle">How it works ?</h3>
        <WorksCard top="145px" left="145px">
          <h3>1. Create account</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            pellentesque praesent vitae sit sagittis venenatis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </WorksCard>
        <WorksCard top="145px" left="1050px">
          {" "}
          <h3>2. Subscribe</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            pellentesque praesent vitae sit sagittis venenatis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </WorksCard>
        <WorksCard top="400px" left="145px">
          {" "}
          <h3>3. Select time slot</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            pellentesque praesent vitae sit sagittis venenatis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </WorksCard>
        <WorksCard top="400px" left="1050px">
          {" "}
          <h3>4. You are done</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            pellentesque praesent vitae sit sagittis venenatis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </WorksCard>
        <SubscribePlans>
          <img src={SubscribePlanImage} alt="pic" />
        </SubscribePlans>
      </WorksWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3rem;
`;
const Wrapper1 = styled.div`
  width: 100%;
  height: 67vh;
  display: flex;
  flex-direction: column;
  .text {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    padding-left: 9rem;
    letter-spacing: -0.05em;
    font-feature-settings: "liga" off;
    margin: 2rem 0 0 0;
    color: #001f27;
    .one {
      color: #19c0a6;
      margin-right: 0.8rem;
    }
  }
  .descrip {
    font-style: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.01em;
    font-feature-settings: "liga" off;
    padding-left: 9rem;
    color: #001f27;
    margin: 1.5rem 0 0 0;
  }
  .buttons {
    padding-left: 8.8rem;
    margin: 2.2rem 0 0 0;
  }
  .dummy {
    box-sizing: border-box;

    position: absolute;
    width: 483px;
    height: 286px;
    left: 865px;
    top: 74px;
    margin-top: 6.5rem;
    border: 1px solid #000000;
    border-radius: 30px;
  }
`;
const Stats = styled.div`
  position: absolute;
  width: 100%;
  height: 68vh;
  left: 0px;
  top: 592px;
  gap: 1rem;
  .contents {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 500px;

    position: absolute;
    width: 90%;
    height: 80%;
    left: 0px;
    top: 60px;
  }
  .gradientBG {
    position: absolute;
    width: 530px;
    height: 400px;
    left: 0px;
    top: 0px;

    background: linear-gradient(
      90deg,
      #00d2ff -13.02%,
      rgba(0, 210, 255, 0) 103.77%
    );
  }
  .plusSign {
    color: #19c0a6;
  }
  .descriptions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 15px;

    width: 513px;
    height: 330px;
    margin-left: 53rem;
  }
  .trial {
    width: 89px;
    height: 24px;
    font-style: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #139980;
    margin: 0;
  }
  .english {
    width: 500px;
    height: 104px;
    font-style: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -0.01em;
    color: #001f27;
    margin: 0rem;
    padding: 0rem;
  }
  .lorem {
    width: 410px;
    height: 72px;

    font-style: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #001f27;
    margin: 0.5rem 0 0.5rem 0;
  }
`;
const StatsContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 24px 15px;
  gap: 10px;
  position: absolute;
  width: 205px;
  height: 96px;
  margin: ${(props) => props.margin};
  left: ${(props) => props.left};
  top: ${(props) => props.top};

  background: #3a3636;
  border-radius: 12px;
  .number {
    width: 84px;
    height: 48px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: #ffffff;
  }
  .detail {
    width: 200px;
    height: 21px;
    font-style: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.01em;
    color: #ffffff;
  }
`;
const OfferWrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  left: 0px;
  top: 1100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  .offerhead {
    width: 307px;
    height: 52px;
    left: 562px;
    font-style: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -0.01em;
  }
  .offercontents {
    width: 80%;

    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const WorksWrapper = styled.div`
  height: 90vh;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 1700px;
  .workstitle {
    position: absolute;
    width: 281px;
    height: 52px;
    left: 145px;
    font-style: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -0.01em;
  }
`;
const WorksCard = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 343px;
  height: 175px;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  border-left: 1.5px solid black;
  border-top: 0.5px solid black;
  background: #ffffff;
  padding: 0.5rem;

  box-shadow: 26px 26px 23px rgba(204, 210, 212, 0.36);
  border-radius: 12px;
`;
const SubscribePlans = styled.div`
  position: absolute;
  width: 235px;
  height: 510px;
  left: 650px;
  top: 120px;
  border-radius: 18px;
`;

export default Homepage;
