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
  NumberExp,
  DetailExp,
  NumberPro,
  DetailPro,
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
} from "./IndexStyle";
import { ImLocation2 } from "react-icons/im";
import { IoMdMailUnread, IoLogoCss3 } from "react-icons/io";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillHtml5,
  AiOutlineMail,
  AiFillHome,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiSolidBuilding,
  BiLogoNodejs,
  BiLogoReact,
} from "react-icons/bi";
import { BsArrowUpShort, BsDot, BsGithub } from "react-icons/bs";
import { GiSuitcase } from "react-icons/gi";
import { LuHome } from "react-icons/lu";
import { SiMongodb } from "react-icons/si";
// import { LiaReact } from "react-icons/li";
import { TbBrandRedux, TbBrandMysql } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
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
            <IntroductionContainer id="#home">
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
                    I design and code beautifully simple things and i love what
                    i do!.
                  </Detail>
                  <Detail2>Just simple like that.</Detail2>
                </DetailDiv>
              </DetailBody>

              <ExpBody>
                <ExpContainer>
                  <NumberExp>02+</NumberExp>
                  <DetailExp>Years of experience</DetailExp>
                </ExpContainer>
                <ProjectContainer>
                  <NumberPro>4+</NumberPro>
                  <DetailPro>Projects Completed</DetailPro>
                </ProjectContainer>
              </ExpBody>
              <CircleBody>
                <CircleDiv>
                  <CircleContainer>
                    <BsArrowUpShort
                      style={{ color: "var(--primary-text-color)" }}
                    />
                  </CircleContainer>
                </CircleDiv>
              </CircleBody>
            </IntroductionContainer>
            <AboutContainer>
              <IntroDiv>
                <IntroBody>
                  <BsFillPersonFill
                    style={{ color: "grey", fontSize: "12px" }}
                  />
                  <Intro>About</Intro>
                </IntroBody>
              </IntroDiv>
              <AboutDiv>
                <About>
                  Every great design begin with an even{" "}
                  <span> Better story</span>
                </About>
              </AboutDiv>
              <DetailBody>
                <AboutDetailDiv>
                  <AboutDetail>
                    I design and code beautifully simple things and i love what
                    i do!. I design and code beautifully simple things and i
                    love what i do!.I design and code beautifully simple things
                    and i love what i do!. I design and code beautifully simple
                    things and i love what i do!.I design and code beautifully
                    simple things and i love what i do!. I design and code
                    beautifully simple things and i love what i do!.I design and
                    code beautifully simple things and i love what i do!. I
                    design and code beautifully simple things and i love what i
                    do!.
                  </AboutDetail>
                </AboutDetailDiv>
              </DetailBody>
            </AboutContainer>
            <ResumeContainer>
              <IntroDiv>
                <IntroBody>
                  <GiSuitcase style={{ color: "grey", fontSize: "12px" }} />
                  <Intro>Resume</Intro>
                </IntroBody>
              </IntroDiv>
              <ResumeBody>
                <ResumeHead>
                  Education & <span>Experience</span>
                </ResumeHead>
              </ResumeBody>
              <IstExpContainer>
                <ExpDiv>
                  <DotDiv>
                    <Dot>
                      <BsDot />
                    </Dot>
                    <Date>Sep-2021 - April-2022</Date>
                  </DotDiv>
                </ExpDiv>
                <IstExpDiv>
                  <IstHead>Full Stack Developer</IstHead>
                  <IstCoName>Vibgyor Web Technologies , Noida.</IstCoName>
                </IstExpDiv>
              </IstExpContainer>
              <IstExpContainer>
                <ExpDiv>
                  <DotDiv>
                    <Dot>
                      <BsDot />
                    </Dot>
                    <Date>Aug-2022 - Present</Date>
                  </DotDiv>
                </ExpDiv>
                <IstExpDiv>
                  <IstHead>Associate Software Developer</IstHead>
                  <IstCoName>Gortnm Innovations , Noida</IstCoName>
                </IstExpDiv>
              </IstExpContainer>
              <IstExpContainer>
                <ExpDiv>
                  <DotDiv>
                    <Dot>
                      <BsDot />
                    </Dot>
                    <Date>2017-2021</Date>
                  </DotDiv>
                </ExpDiv>
                <IstExpDiv>
                  <IstHead>Bachelor Degree of Computer Science</IstHead>
                  <IstCoName>Kashmir University, Kashmir</IstCoName>
                </IstExpDiv>
              </IstExpContainer>
              <IstExpContainer>
                <ExpDiv>
                  <DotDiv>
                    <Dot>
                      <BsDot />
                    </Dot>
                    <Date>2021-2022</Date>
                  </DotDiv>
                </ExpDiv>
                <IstExpDiv>
                  <IstHead>Master Degree of Computer Science</IstHead>
                  <IstCoName>Dr. Abdul Kalam University, Lucknow.</IstCoName>
                </IstExpDiv>
              </IstExpContainer>
            </ResumeContainer>
            <SkillsContainer>
              <IntroDiv>
                <IntroBody>
                  <BiSolidBuilding
                    style={{ color: "grey", fontSize: "12px" }}
                  />
                  <Intro>Skills</Intro>
                </IntroBody>
              </IntroDiv>
              <ResumeBody>
                <ResumeHead>
                  My <span>Skills</span>
                </ResumeHead>
              </ResumeBody>
              <SkillsDiv>
                <SkillsBody>
                  <SkillIconBody>
                    <SkillsIcon hoverColor="#f06529">
                      <AiFillHtml5 className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Html</SkillName>
                  </SkillIconBody>
                  <SkillIconBody>
                    <SkillsIcon hoverColor="#264de4">
                      <IoLogoCss3 className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Css</SkillName>
                  </SkillIconBody>
                  <SkillIconBody>
                    <SkillsIcon hoverColor="#F0DB4F">
                      <RiJavascriptFill className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Javascript</SkillName>
                  </SkillIconBody>
                  <SkillIconBody>
                    <SkillsIcon hoverColor="#3c873a">
                      <BiLogoNodejs className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Node js</SkillName>
                  </SkillIconBody>
                  <SkillIconBody>
                    <SkillsIcon hoverColor="#61DBFB">
                      <BiLogoReact className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>React js</SkillName>
                  </SkillIconBody>
                  <SkillIconBody>
                    <SkillsIcon hoverColor="#764ABC">
                      <TbBrandRedux className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Redux</SkillName>
                  </SkillIconBody>
                  <SkillIconBody>
                    <SkillsIcon hoverColor="#3FA037">
                      <SiMongodb className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Mongo Db</SkillName>
                  </SkillIconBody>{" "}
                  <SkillIconBody>
                    <SkillsIcon hoverColor="#00758F">
                      <TbBrandMysql className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>My Sql</SkillName>
                  </SkillIconBody>
                  <SkillIconBody>
                    <SkillsIcon hoverColor="var(--primary-text-color)">
                      <BsGithub className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Git</SkillName>
                  </SkillIconBody>
                </SkillsBody>
              </SkillsDiv>
            </SkillsContainer>
            <MyDetailsContainer>
              <IntroDiv>
                <IntroBody>
                  <AiOutlineMail style={{ color: "grey", fontSize: "12px" }} />
                </IntroBody>
              </IntroDiv>
              <ResumeBody>
                <ResumeHead>
                  Let's Work<span>Together!</span>
                </ResumeHead>
              </ResumeBody>
            </MyDetailsContainer>
          </RightBody>
        </RightContainer>
        <NavigationContainer>
          <NavigationBody>
            <IconsDiv>
              <IconsContainer>
                <AiFillHome />

                <BsFillPersonFill />
                <BiSolidBuilding />
              </IconsContainer>
            </IconsDiv>
          </NavigationBody>
        </NavigationContainer>
      </OuterContainer>
    </Main>
  );
};
export default IndexComponent;
