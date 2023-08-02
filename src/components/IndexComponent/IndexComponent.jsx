import {
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
  CircleBody,
  CircleDiv,
  IconsDiv,
  CircleContainer,
  SpinningText,
  TextPath,
  CirclePath,
  IconsContainer,
  ExpBody,
  ExpContainer,
  ProjectContainer,
  IntroDiv,
  Intro,
  IntroBody,
} from "./IndexStyle";
import { ImLocation2 } from "react-icons/im";
import { IoMdMailUnread } from "react-icons/io";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail, BiSolidBuilding } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";
import { LuHome } from "react-icons/lu";
import { BsFillPersonFill } from "react-icons/bs";
// import { AiFillLinkedin } from "react-icons/ai"
const IndexComponent = () => {
  const changeTheme = () => {
    const root = document.querySelector(":root");
    const computedStyles = getComputedStyle(root);
    if (computedStyles.getPropertyValue("--theme") == "dark") {
      root.style.setProperty("--app-background", "rgb(240, 240, 240)");
      root.style.setProperty("--primary-text-color", "black");
      root.style.setProperty("--theme", "light");
      root.style.setProperty("--body-background", "white");
    } else {
      root.style.setProperty("--app-background", "rgb(30, 30, 30)");
      root.style.setProperty("--theme", "dark");
      root.style.setProperty("--primary-text-color", "white");
      root.style.setProperty("--body-background", "black");
    }
  };
  return (
    <Main>
      <OuterContainer>
        <LeftContainer>
          <LeftBody>
            <HeadingContainer>
              <NameDiv>
                <Name>Bisma Manzoor</Name>
              </NameDiv>
              <ProfessionDiv>
                <Profession>Full Stack Developer</Profession>
              </ProfessionDiv>
            </HeadingContainer>
            <ImageContainer>
              <ImageBody>
                <Image src="bag3.jpeg" />
              </ImageBody>
            </ImageContainer>
            <MailLocContainer>
              <MailDiv>
                <IoMdMailUnread style={{ color: "5ccf5c" }} />
                <Mail>bismahmanxoor1@gmail.com</Mail>
              </MailDiv>
              <LocationDiv>
                <ImLocation2 style={{ color: "5ccf5c" }} />
                <Location>Eidgah Srinagar</Location>
              </LocationDiv>
            </MailLocContainer>
            <IconContainer>
              <IconBody>
                <AiFillLinkedin
                  style={{ color: "5ccf5c", fontSize: "20px", color: "grey" }}
                />
              </IconBody>
              <IconBody>
                <BiLogoGmail
                  style={{ color: "5ccf5c", fontSize: "20px", color: "grey" }}
                />
              </IconBody>
              <IconBody>
                <AiFillGithub
                  style={{ color: "5ccf5c", fontSize: "20px", color: "grey" }}
                />
              </IconBody>
            </IconContainer>
            <ButtonContainer>
              <ButtonBody>
                <Button onClick={changeTheme}>
                  <span>H</span>IRE <span>M</span>E!
                </Button>
              </ButtonBody>
            </ButtonContainer>
          </LeftBody>
        </LeftContainer>
        <RightContainer>
          <RightBody>
            <IntroDiv>
              <IntroBody>
                <LuHome style={{ color: "grey", fontSize: "12px" }} />
                <Intro>Introduce</Intro>
              </IntroBody>
            </IntroDiv>
            <HeadBody>
              <HeadIst>
                Say Hi from <span>Bisma,</span>
              </HeadIst>
              {/* <Head2nd>Bisma,</Head2nd> */}
              <Head3rd>a Full Stack Developer</Head3rd>
            </HeadBody>
            <DetailBody>
              <DetailDiv>
                <Detail>
                  I design and code beautifully simple things and i love what i
                  do!.
                </Detail>
                <Detail2>Just simple like that.</Detail2>
              </DetailDiv>
            </DetailBody>
            <CircleBody>
              <CircleDiv>
                <CircleContainer>
                  {/* <svg viewBox="0 0 100 100">
                                        <defs>
                                            <path id="circle-path" d="M 50 0 A 50 50 0 1 1 49.999 0" />
                                        </defs>

                                        <text textAnchor="middle">
                                            <textPath xlinkHref="#circle-path" startOffset="25%" textLength="150%" fill="white">
                                                Spinning Text Spinning Text Spinning Text Spinning Text
                                            </textPath>
                                        </text>
                                    </svg> */}
                  <BsArrowUpShort
                    style={{ color: "var(--primary-text-color)" }}
                  />
                </CircleContainer>
              </CircleDiv>
              <IconsDiv>
                <IconsContainer>
                  <LuHome style={{ color: "grey" }} />
                  <BsFillPersonFill style={{ color: "grey" }} />
                  <BiSolidBuilding style={{ color: "grey" }} />
                </IconsContainer>
              </IconsDiv>
            </CircleBody>
            <ExpBody>
              <ExpContainer></ExpContainer>
              <ProjectContainer></ProjectContainer>
            </ExpBody>
          </RightBody>
        </RightContainer>
      </OuterContainer>
    </Main>
  );
};
export default IndexComponent;
