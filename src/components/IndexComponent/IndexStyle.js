import styled from "styled-components";

const Main = styled.div`
  /* border: 2px solid red; */
  padding: 10px;
`;
const OuterContainer = styled.div`
  /* border: 2px solid red; */
  background-color: var(--app-background);
  /* padding: 10px; */
  display: grid;
  grid-template-columns: 1.2fr 3fr 0.5fr;
  border-radius: 5px;
  gap: 30px 0;
  @media (max-width: 999px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1000px) and (max-width: 1250px) {
    grid-template-columns: 1.2fr 2fr;
  }
  /* max-height: 800px; */
`;
const LeftContainer = styled.div`
  /* border: 1px solid blue; */
  /* padding: 10px; */
  border-radius: 5px;
  margin: 10px;
  /* @media (max-width: 700px) {

  } */

  /* background-color: black; */
  /* max-height: 500px; */
`;
const RightContainer = styled.div`
  /* border: 2px solid red; */
  padding-left: 100px;
  @media (max-width: 1250px) {
    padding-left: 0;
  }
  /* padding: 10px; */
`;
const NavigationContainer = styled.div`
  /* border: 2px solid blue; */
  @media (max-width: 1250px) {
    /* grid-template-columns: 1fr; */
    display: none;
  }
`;
const NavigationBody = styled.div`
  position: fixed;
  width: 120px;
  /* border: 1px solid lime; */
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 1250px) {
    display: none;
  }
`;
const LeftBody = styled.div`
  /* border: 2px solid red; */
  /* max-height: 500px; */
  max-width: 350px;
  top: 50%;
  transform: translateY(-50%);
  position: fixed;
  width: 100%;
  border: 1px solid grey;
  border-radius: 20px;
  @media (max-width: 999px) {
    position: static;
    transform: translateY(0);
  }
  /* padding: 10px; */
  /* max-height: 400px; */
`;
const HeadingContainer = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 15px 20px 15px;
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
  color: var(--primary-text-color);
  font-family: "Brush Script MT", cursive;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 22px;
`;
const Profession = styled.p`
  /* border: 2px solid red; */
  /* padding: 10px; */
  text-align: right;
  color: var(--primary-text-color);
  font-family: serif;
  letter-spacing: 0.4px;
  width: 50%;
  font-size: 12px;
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
  width: 240px;
  height: 220px;
  border-radius: 5px;
`;
const Image = styled.img`
  /* border: 2px solid red; */
  height: 100%;
  width: 100%;
  border-radius: 30px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 250ms linear;
  /* pointer-events: none; */
  &:hover {
    filter: grayscale(0%);
  }

  /* padding: 10px; */
`;
const MailLocContainer = styled.div`
  /* border: 1px solid red; */
  padding: 20px 0 10px;
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
  color: var(--primary-text-color);
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
  color: var(--primary-text-color);
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
  padding: 25px 0 28px 0;
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
  /* height: 500px; */
  /* overflow-y: scroll; */
  background-color: var(--app-background);
`;
const HeadBody = styled.div`
  /* border: 1px solid blue; */
  width: fit-content;
  padding: 30px 0;
  /* display: flex;
  flex-direction: column; */
  /* gap: 5px; */
  /* padding: 10px 60px; */
`;

const HeadIst = styled.p`
  /* color: white; */
  font-size: 65px;
  /* padding: 0 137px; */
  letter-spacing: 1px;
  /* text-align: center; */
  margin: 0;
  padding-bottom: 20px;
  color: var(--primary-text-color);
  span {
    color: #5ccf5c;
    font-family: "Brush Script MT", cursive;
  }
  @media (max-width: 999px) {
    font-size: 40px;
  }
`;
const Head2nd = styled.p`
  color: green;
  font-size: 40px;
  font-family: "Brush Script MT", cursive;
`;
const Head3rd = styled.p`
  color: var(--primary-text-color);
  font-size: 60px;
  /* text-align: center; */
  margin: 0;
  /* border: 2px solid blue; */
  @media screen {
    font-size: 35px;
  }
`;
const DetailBody = styled.div`
  /* border: 1px solid red; */
  /* padding: 0 0; */
`;
const DetailDiv = styled.div`
  /* padding: 0 50px; */
  @media (max-width: 700px) {
    padding: 0 10px;
  }
`;
const AboutDetailDiv = styled.div`
  /* padding: 0 50px; */
  @media (max-width: 700px) {
    padding: 0 10px;
  }
`;
const Detail = styled.p`
  color: grey;
  /* text-align: center; */
`;
const AboutDetail = styled.p`
  color: grey;
  line-height: 24px;
  /* text-align: left; */
`;
const Detail2 = styled.p`
  color: grey;
  /* text-align: center; */
`;

const CircleBody = styled.div`
  /* border: 1px solid red; */
  /* padding: 30px; */
  margin-top: 35px;
  /* display: grid; */
  /* grid-template-columns: 3fr 1fr; */
`;
const CircleDiv = styled.div`
  /* border: 1px solid greenyellow; */
  padding: 20px 40px;
  display: flex;
  justify-content: center;
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
  gap: 20px;
  /* flex: ; */
  /* :hover {
    cursor: pointer;
    color: green;
  } */
  > svg {
    cursor: pointer;
    color: grey;
    font-size: 18px;
    /* background-color: blue; */
    :hover {
      color: green;
    }
  }
`;
const ExpBody = styled.div`
  /* border: 1px solid white; */
  padding: 40px 0;
  /* margin-top: 20px; */
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const ExpContainer = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  /* justify-content: ; */
`;
const ProjectContainer = styled.div`
  /* border: 1px solid red; */
`;
const IntroDiv = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  gap: 6px;
`;
const Intro = styled.p`
  color: ${({ active }) => (active ? "green" : "grey")};
  margin: 0;
  font-size: 12px;
`;
const IntroBody = styled.div`
  border: ${({ active }) => (active ? "1px solid green" : "1px solid grey")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 4px 7px;
  border-radius: 30px;
  /* margin: 0; */
`;

const NumberExp = styled.p`
  color: var(--secondary-color);
  margin: 0;
  text-align: center;
  font-size: 45px;
  /* font-weight: bolder; */
`;
const DetailExp = styled.p`
  color: grey;
  margin: 0;
  /* padding-top: 10px; */
  text-align: center;
`;
const NumberPro = styled.p`
  color: var(--secondary-color);
  margin: 0;
  /* text-align: center; */
  font-size: 45px;
  /* font-weight: bolder; */
`;
const DetailPro = styled.p`
  color: grey;
  margin: 0;
  /* padding-top: 10px; */
  /* text-align: center; */
`;
const IntroductionContainer = styled.div`
  min-height: 90vh;
  padding-top: 20px;
  /* border: 2px solid blue; */
`;
const AboutContainer = styled.div`
  min-height: 80vh;
`;
const ResumeContainer = styled.div`
  min-height: 100vh;
`;
const AboutDiv = styled.div`
  /* border: 1px solid white; */
  padding: 30px 0 20px;

  /* padding */
  letter-spacing: 1px;
  text-align: center;
  /* margin: 0; */
  /* padding-bottom: 20px; */
  color: var(--primary-text-color);
  span {
    color: #5ccf5c;
    font-family: "Brush Script MT", cursive;
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;
const About = styled.p`
  font-size: 50px;
  /* padding: 0 137px; */
  letter-spacing: 1px;
  text-align: left;
  margin: 0;
  padding-bottom: 20px;
  color: var(--primary-text-color);
  span {
    color: #5ccf5c;
    font-family: "Brush Script MT", cursive;
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;
const ResumeBody = styled.div`
  /* border: 1px solid white; */
  /* text-align: left; */
  padding: 30px 0;
`;
const ResumeHead = styled.p`
  /* color: var(--primary-text-color); */
  font-size: 40px;
  /* padding: 0 137px; */
  letter-spacing: 1px;
  text-align: left;
  margin: 0;
  padding-bottom: 20px;
  color: var(--primary-text-color);
  span {
    color: #5ccf5c;
    font-family: "Brush Script MT", cursive;
  }
  @media (max-width: 700px) {
    font-size: 40px;
  }
`;
const DotDiv = styled.div`
  /* border: 1px solid white; */
  /* display: grid; */
  display: flex;
  align-items: center;
  /* flex-direction: column; */
`;
const ExpDiv = styled.div`
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
`;
const Date = styled.p`
  color: grey;
  /* border: 1px solid white; */
  margin: 0;
`;
const Dot = styled.p`
  color: grey;
  font-size: 30px;
  text-align: left;
  margin: 0;
  padding: 0;
  /* border: 1px solid white; */
`;
const IstExpDiv = styled.div`
  /* border: 1px solid red; */
`;
const IstHead = styled.p`
  color: var(--primary-text-color);
  padding-left: 35px;
  font-size: 25px;
  margin: 0;
`;
const IstCoName = styled.p`
  color: grey;
  padding-left: 35px;
`;

const IstExpContainer = styled.div``;
const SkillsContainer = styled.div`
  min-height: 90vh;
`;
const SkillsIcon = styled.div`
  border: 1px solid grey;
  width: 4.2rem;
  border-radius: 30px;
  height: 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .brand-icon {
    color: grey;
    text-align: center;
    font-size: 45px;
    transition: color 300ms linear;
  }

  &:hover svg {
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "grey")};
  }
`;
const SkillsDiv = styled.div``;
const SkillIconBody = styled.div`
  /* border: 1px solid green; */
  width: 4.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SkillsBody = styled.div`
  /* border: 1px solid green; */
  padding: 0 10px;
  width: 550px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    width: auto;
  }
`;
const Percent = styled.p`
  color: var(--primary-text-color);
  font-size: 16px;
  letter-spacing: 1px;
`;
const SkillName = styled.p`
  color: var(--primary-text-color);
  font-size: 12px;
  font-weight: 600;
  /* font-weight: bold; */
  /* letter-spacing: 1px; */
`;

const MyDetailsContainer = styled.div`
  /* margin-top: 40px; */
`;
const FormContainer = styled.div`
  margin-top: 10px;
`;
const FormDiv = styled.div`
  /* margin-top: 40px; */
  /* border: 1px solid red; */
`;
const Section = styled.div`
  /* margin-top: 40px; */
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 0;
  gap: 15px;
`;
const Data = styled.div`
  /* margin-top: 40px; */
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  > input {
    background-color: var(--app-background);
    border: none;
    border-bottom: 1px solid var(--input-border);
    color: var(--primary-text-color);
  }
  > input:focus {
    outline: none;
  }
  > textarea {
    background-color: var(--app-background);
    font-family: sans-serif;
    border: none;
    border-bottom: 1px solid var(--input-border);
    padding: 7px 5px;
    color: var(--primary-text-color);
  }
  > textarea:focus {
    outline: none;
  }
`;
const ButtonDiv = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin-top: 30px;
  /* border: 1px solid white; */
  .submit-btn {
    margin-top: 15px;
    width: 9rem;
    text-align: center;
    height: 2.5rem;
    padding: 0;
    cursor: pointer;
    &:hover {
      cursor: pointer;
      transform: scale(1.06);
      transition: transform 200ms linear;
      background-color: grey;
      color: white;
    }
  }
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
  NumberExp,
  DetailExp,
  DetailPro,
  NumberPro,
  IntroductionContainer,
  AboutContainer,
  AboutDiv,
  About,
  AboutDetail,
  AboutDetailDiv,
  ResumeContainer,
  ResumeBody,
  ResumeHead,
  DotDiv,
  Dot,
  ExpDiv,
  Date,
  IstExpDiv,
  IstCoName,
  IstHead,
  IstExpContainer,
  SkillsContainer,
  SkillsDiv,
  SkillsIcon,
  Percent,
  SkillsBody,
  SkillIconBody,
  SkillName,
  MyDetailsContainer,
  NavigationContainer,
  NavigationBody,
  FormContainer,
  FormDiv,
  Section,
  Data,
  ButtonDiv,
};
