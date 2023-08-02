import styled from "styled-components";

const Main = styled.div`
  /* border: 2px solid red; */
  padding: 10px;
`;
const OuterContainer = styled.div`
  /* border: 2px solid red; */
  /* padding: 10px; */
  display: grid;
  grid-template-columns: 1.2fr 3fr;
  border-radius: 4px;
  /* max-height: 800px; */
`;
const LeftContainer = styled.div`
  /* border: 1px solid blue; */
  /* padding: 10px; */
  border-radius: 5px;
  margin: 10px;
  background-color: black;
  /* max-height: 500px; */
`;
const RightContainer = styled.div`
  /* border: 2px solid red; */
  /* padding: 10px; */
`;
const LeftBody = styled.div`
  /* border: 2px solid red; */
  /* padding: 10px; */
  /* max-height: 400px; */
`;
const HeadingContainer = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 15px 0 15px;
`;
const NameDiv = styled.div`
  /* border: 2px solid red; */

  /* padding: 10px; */
`;
const ProfessionDiv = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: end;
  /* padding: 10px; */
`;
const Name = styled.p`
  /* border: 2px solid red; */
  /* padding: 10px; */
  color: white;
  font-family: "Brush Script MT", cursive;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 17px;
`;
const Profession = styled.p`
  /* border: 2px solid red; */
  /* padding: 10px; */
  color: white;
  font-family: serif;
  letter-spacing: 0.4px;
  /* display: flex;
  justify-content: end; */
`;
const ImageContainer = styled.div`
  /* border: 1px solid red; */
  padding: 15px;
  /* width: 200px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageBody = styled.div`
  /* border: 2px solid blue; */
  width: 190px;
  height: 170px;
  border-radius: 5px;
`;
const Image = styled.img`
  /* border: 2px solid red; */
  height: 100%;
  width: 100%;
  border-radius: 30px;

  /* padding: 10px; */
`;
const MailLocContainer = styled.div`
  /* border: 1px solid red; */
  padding: 5px 0;
`;
const MailDiv = styled.div`
  padding: 5px 0;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0;
  /* padding: 0; */
`;
const Mail = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  letter-spacing: 0.2px;
  /* font-family: "Courier New", Courier, monospace; */
`;
const LocationDiv = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 0;
`;
const Location = styled.p`
  padding: 2px 0;
  margin: 0;
  color: white;
  letter-spacing: 0.2px;
`;
const IconContainer = styled.div`
  padding: 12px 10px;
  /* border: 1px solid grey; */
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const IconBody = styled.div`
  border: 1px solid grey;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: transform 200ms linear;
    color: #5ccf5c;
  }
`;
const ButtonContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  padding: 15px 0 28px 0;
  :hover {
    cursor: pointer;
    transform: scale(1.06);
    transition: transform 200ms linear;
    background-color: grey;
  }
`;
const ButtonBody = styled.div`
  /* border: 1px solid red; */
  width: 200px;
  /* padding: 4px 0; */
  border-radius: 20px;
`;
const Button = styled.button`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  border-radius: 20px;
  height: 100%;
  padding: 10px 0;
  background-color: #5ccf5c;
  border: none;
  font-weight: 600;
  font-size: 19px;
  span {
    color: white;
  }
`;
const RightBody = styled.div`
  /* border: 2px solid green; */
  padding: 10px;
  height: 500px;
  overflow-y: scroll;
  background-color: black;
`;
const HeadBody = styled.div`
  /* border: 1px solid blue; */
  /* display: flex;
  flex-direction: column; */
  /* gap: 5px; */
  /* padding: 10px 60px; */
`;

const HeadIst = styled.p`
  color: white;
  font-size: 50px;
  /* padding: 0 137px; */
  letter-spacing: 1px;
  text-align: center;
  margin: 0;
  padding-bottom: 20px;
  span {
    color: #5ccf5c;
    font-family: "Brush Script MT", cursive;
  }
`;
const Head2nd = styled.p`
  color: green;
  font-size: 40px;
  font-family: "Brush Script MT", cursive;
`;
const Head3rd = styled.p`
  color: white;
  font-size: 50px;
  text-align: center;
  margin: 0;
`;
const DetailBody = styled.div`
  /* border: 1px solid red; */
  /* padding: 20px; */
`;
const DetailDiv = styled.div`
  padding: 0 50px;
`;
const Detail = styled.p`
  color: grey;
  /* text-align: center; */
`;
const Detail2 = styled.p`
  color: grey;
  /* text-align: center; */
`;

const CircleBody = styled.div`
  /* border: 1px solid red; */
  /* padding: 30px; */
  margin-top: 30px;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const CircleDiv = styled.div`
  /* border: 1px solid greenyellow; */
  padding: 20px 40px;
  display: flex;
  justify-content: end;
`;
const IconsDiv = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  color:grey
  /* flex-direction: row; */
  /* justify-content: center; */
  /* padding: 20px 10px; */
  /* align-items: center;
  width: 100%; */
  :hover {
    cursor: pointer;
  }
`;

const CircleContainer = styled.div`
  border: 1px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border-color: grey;
  position: relative;
  /* border-top-color: antiquewhite; */
  animation: spin 4s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const IconsContainer = styled.div`
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  gap: 10px;
  /* flex: ; */
  :hover {
    cursor: pointer;
    color: green;
  }
`;
const ExpBody = styled.div`
  border: 1px solid white;
  padding: 10px;
  margin-top: 20px;
`;
const ExpContainer = styled.div``;
const ProjectContainer = styled.div``;
const IntroDiv = styled.div`
  /* border: 1px solid red; */
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Intro = styled.p`
  color: grey;
  margin: 0;
  font-size: 12px;
`;
const IntroBody = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 4px 7px;
  border-radius: 30px;
  /* margin: 0; */
`;
export {
  Main,
  OuterContainer,
  LeftContainer,
  RightContainer,
  LeftBody,
  HeadingContainer,
  NameDiv,
  ProfessionDiv,
  Name,
  Profession,
  ImageContainer,
  Image,
  ImageBody,
  MailLocContainer,
  MailDiv,
  Mail,
  LocationDiv,
  Location,
  IconContainer,
  IconBody,
  ButtonContainer,
  ButtonBody,
  Button,
  RightBody,
  HeadBody,
  HeadIst,
  Head2nd,
  Head3rd,
  DetailBody,
  DetailDiv,
  Detail,
  Detail2,
  CircleDiv,
  CircleBody,
  IconsDiv,
  CircleContainer,
  IconsContainer,
  ExpBody,
  ExpContainer,
  ProjectContainer,
  IntroDiv,
  Intro,
  IntroBody,
};
