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
  FormContainer,
  FormDiv,
  Section,
  Data,
  ButtonDiv,
  CopyRightContainer,
  CopyrightText
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
  BiSolidMessageDetail,
} from "react-icons/bi";
import { BsArrowUpShort, BsDot, BsGithub } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GiSuitcase } from "react-icons/gi";
import { LuHome } from "react-icons/lu";
import { SiMongodb } from "react-icons/si";
// import { LiaReact } from "react-icons/li";
import { TbBrandRedux, TbBrandMysql } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import useIsInViewport from "../../hooks/useInViewport";
import LoaderComponent from "../commons/LoaderComponent/LoaderComponent";

// import { AiFillLinkedin } from "react-icons/ai"

//  https://portfolio-backend-ak7u.onrender.com/send-mail

const IndexComponent = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const downloadRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const messageRef = useRef(null);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loader, setLoader] = useState(false)
  //   const isHomeIntersecting = useIsInViewport(homeRef);
  const isIntersecting = (ref, onActive) => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          console.log("entries", entries[0].intersectionRatio, onActive);
          setCurrentSection(onActive);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return observer;
  };
  useEffect(() => {
    const homeObserver = isIntersecting(homeRef, "home");
    const aboutObserver = isIntersecting(aboutRef, "about");
    const educationObserver = isIntersecting(educationRef, "education");
    const skillsObserver = isIntersecting(skillsRef, "skills");
    const messageObserver = isIntersecting(messageRef, "message");
    document.addEventListener("scroll", () => { });
    return () => {
      document.removeEventListener("scroll", () => { });
      homeObserver.disconnect();
      aboutObserver.disconnect();
      educationObserver.disconnect();
      skillsObserver.disconnect();
      messageObserver.disconnect();
    };
  }, []);

  const changeTheme = () => {
    downloadRef.current.click();
    // const root = document.querySelector(":root");
    // const computedStyles = getComputedStyle(root);
    // if (computedStyles.getPropertyValue("--theme") === "dark") {
    //   root.style.setProperty("--app-background", "rgb(240, 240, 240)");
    //   root.style.setProperty("--primary-text-color", "black");
    //   root.style.setProperty("--theme", "light");
    //   root.style.setProperty("--body-background", "white");
    // } else {
    //   root.style.setProperty("--app-background", "rgb(30, 30, 30)");
    //   root.style.setProperty("--theme", "dark");
    //   root.style.setProperty("--primary-text-color", "white");
    //   root.style.setProperty("--body-background", "black");
    // }
  };
  const nameHandler = async (e) => {
    // console.log("nameHandler===", e.target.value)
    setName(e.target.value)
  }
  const emailHandler = async (e) => {
    // console.log("emailHandler===", e.target.value)
    setEmail(e.target.value)
  }
  const phoneHandler = async (e) => {
    // console.log("phoneHandler===", e.target.value)
    setPhone(e.target.value)
  }
  const messageHandler = async (e) => {
    // console.log("messageHandler===", e.target.value)
    setMessage(e.target.value)
  }
  console.log(name, phone, email, message)
  const submitHandler = async () => {
    try {
      // console.log("submitHandler===", name)
      setLoader(true)
      const response = await fetch("https://portfolio-backend-ak7u.onrender.com/send-mail", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, message })
      })
      console.log("response===>", response.status)
      if (response.status === 200) {
        console.log("bbbbbbbbbbb", name)
        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
        setLoader(false)
      }
      const result = await response.json()
      console.log("resultt====>", result)

      // setName("")
    } catch (error) {
      console.log(error)
    }
  }
  const navigationHandler = (type) => {
    switch (type) {
      case "home":
        homeRef.current.scrollIntoView();
        break;
      case "about":
        aboutRef.current.scrollIntoView();
        break;
      case "education":
        educationRef.current.scrollIntoView();
        break;
      case "skills":
        skillsRef.current.scrollIntoView();
        break;
      case "message":
        messageRef.current.scrollIntoView();
        break;
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
                <Image
                  src="my-img-2.JPG"
                  onContextMenu={(e) => e.preventDefault()}
                />
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
            <CopyRightContainer>
              <CopyrightText>@ 2023 Bisma, All Rights Reserved</CopyrightText>
            </CopyRightContainer>
            <ButtonContainer>
              <ButtonBody>
                <Button onClick={changeTheme}>
                  <span>R</span>esume
                  {/* <span>M</span>E! */}
                </Button>
                <a
                  href="/bisma-manzoor.pdf"
                  style={{ display: "none" }}
                  ref={downloadRef}
                  download="bisma-manzoor.pdf"
                />
              </ButtonBody>
            </ButtonContainer>
          </LeftBody>
        </LeftContainer>
        <RightContainer>
          <RightBody>
            <IntroductionContainer ref={homeRef}>
              <IntroDiv data-aos="fade-left" data-aos-duration="800">
                <IntroBody active={currentSection === "home"}>
                  <LuHome
                    style={{
                      color: currentSection === "home" ? "green" : "grey",
                      fontSize: "12px",
                    }}
                  />
                  <Intro active={currentSection === "home"}>Introduce</Intro>
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
                  <NumberPro>04+</NumberPro>
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
            <AboutContainer ref={aboutRef}>
              <IntroDiv>
                <IntroBody
                  data-aos="fade-left"
                  data-aos-duration="800"
                  active={currentSection === "about"}
                >
                  <BsFillPersonFill
                    style={{
                      color: currentSection === "about" ? "green" : "grey",
                      fontSize: "12px",
                    }}
                  />
                  <Intro active={currentSection === "about"}>About</Intro>
                </IntroBody>
              </IntroDiv>
              <AboutDiv>
                <About
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  Every great design begin with an even{" "}
                  <span> Better story</span>
                </About>
              </AboutDiv>
              <DetailBody>
                <AboutDetailDiv
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="250"
                >
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
            <ResumeContainer ref={educationRef}>
              <IntroDiv>
                <IntroBody
                  data-aos="fade-left"
                  data-aos-duration="800"
                  active={currentSection === "education"}
                >
                  <GiSuitcase
                    style={{
                      color: currentSection === "education" ? "green" : "grey",
                      fontSize: "12px",
                    }}
                  />
                  <Intro active={currentSection === "education"}>Resume</Intro>
                </IntroBody>
              </IntroDiv>
              <ResumeBody
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250"
              >
                <ResumeHead>
                  Education & <span>Experience</span>
                </ResumeHead>
              </ResumeBody>
              <IstExpContainer data-aos="zoom-in-up" data-aos-duration="800">
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
              <IstExpContainer
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
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
              <IstExpContainer
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
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
              <IstExpContainer
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="700"
              >
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
            <SkillsContainer ref={skillsRef}>
              <IntroDiv>
                <IntroBody
                  data-aos="fade-left"
                  data-aos-duration="800"
                  active={currentSection === "skills"}
                >
                  <BiSolidBuilding
                    style={{
                      color: currentSection === "skills" ? "green" : "grey",
                      fontSize: "12px",
                    }}
                  />
                  <Intro active={currentSection === "skills"}>Skills</Intro>
                </IntroBody>
              </IntroDiv>
              <ResumeBody
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250"
              >
                <ResumeHead>
                  My <span>Skills</span>
                </ResumeHead>
              </ResumeBody>
              <SkillsDiv>
                <SkillsBody>
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                  >
                    <SkillsIcon hoverColor="#f06529">
                      <AiFillHtml5 className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Html</SkillName>
                  </SkillIconBody>
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <SkillsIcon hoverColor="#264de4">
                      <IoLogoCss3 className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Css</SkillName>
                  </SkillIconBody>
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    <SkillsIcon hoverColor="#F0DB4F">
                      <RiJavascriptFill className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Javascript</SkillName>
                  </SkillIconBody>
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  >
                    <SkillsIcon hoverColor="#3c873a">
                      <BiLogoNodejs className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Node js</SkillName>
                  </SkillIconBody>
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                    data-aos-delay="900"
                  >
                    <SkillsIcon hoverColor="#61DBFB">
                      <BiLogoReact className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>React js</SkillName>
                  </SkillIconBody>
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                    data-aos-delay="1100"
                  >
                    <SkillsIcon hoverColor="#764ABC">
                      <TbBrandRedux className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Redux</SkillName>
                  </SkillIconBody>
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                    data-aos-delay="1300"
                  >
                    <SkillsIcon hoverColor="#3FA037">
                      <SiMongodb className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Mongo Db</SkillName>
                  </SkillIconBody>{" "}
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                    data-aos-delay="1500"
                  >
                    <SkillsIcon hoverColor="#00758F">
                      <TbBrandMysql className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>My Sql</SkillName>
                  </SkillIconBody>
                  <SkillIconBody
                    data-aos="zoom-in-left"
                    data-aos-duration="800"
                    data-aos-delay="1700"
                  >
                    <SkillsIcon hoverColor="var(--primary-text-color)">
                      <BsGithub className="brand-icon" />
                    </SkillsIcon>
                    <SkillName>Git</SkillName>
                  </SkillIconBody>
                </SkillsBody>
              </SkillsDiv>
            </SkillsContainer>
            <MyDetailsContainer ref={messageRef}>
              <IntroDiv>
                <IntroBody
                  data-aos="fade-left"
                  data-aos-duration="800"
                  active={currentSection === "message"}
                >
                  <AiOutlineMail
                    style={{
                      color: currentSection === "message" ? "green" : "grey",
                      fontSize: "12px",
                    }}
                  />
                  <Intro active={currentSection === "message"}>
                    Let's connect
                  </Intro>
                </IntroBody>
              </IntroDiv>
              <ResumeBody
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="250"
              >
                <ResumeHead>
                  Let's Work<span>Together!</span>
                </ResumeHead>
                <FormContainer>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <FormDiv>
                      <Section>
                        <Data>
                          <label
                            htmlFor=""
                            style={{ color: "var(--primary-text-color)", userSelect: "none" }}
                          >
                            Full Name<span>*</span>
                          </label>
                          <input
                            type="text"
                            style={{
                              padding: "7px 5px",
                            }}
                            placeholder="Your Name"
                            onChange={nameHandler}
                            value={name}
                            required
                          />
                        </Data>
                        <Data>
                          <label
                            htmlFor=""
                            style={{ color: "var(--primary-text-color)", userSelect: "none" }}
                          >
                            Email<span>*</span>
                          </label>
                          <input
                            type="text"
                            style={{
                              padding: "7px 5px",
                            }}
                            placeholder="Your Email"
                            onChange={emailHandler}
                            value={email}
                            required
                          />
                        </Data>
                      </Section>
                      <Section>
                        <Data>
                          <label
                            htmlFor=""
                            style={{ color: "var(--primary-text-color)", userSelect: "none" }}
                          >
                            Phone<span>*</span>
                          </label>
                          <input
                            type="text"
                            style={{
                              padding: "7px 5px",
                            }}
                            placeholder="Your Phone"
                            onChange={phoneHandler}
                            value={phone}
                            required
                          />
                        </Data>
                      </Section>
                      <Data>
                        <label
                          htmlFor=""
                          style={{ color: "var(--primary-text-color)", userSelect: "none" }}
                        >
                          Message<span>*</span>
                        </label>
                        <textarea
                          cols="10"
                          rows="3"
                          placeholder="Your Message"
                          onChange={messageHandler}
                          value={message}
                          required
                        ></textarea>
                      </Data>
                      <ButtonDiv>
                        {
                          !loader
                            ?
                            <Button className="submit-btn" onClick={submitHandler}>Submit</Button>
                            :
                            <Button className="submit-btn" onClick={submitHandler}><LoaderComponent className="loader" /></Button>
                        }
                        {/* <Button className="submit-btn" onClick={submitHandler}>Submit</Button> */}
                      </ButtonDiv>
                    </FormDiv>
                  </form>
                </FormContainer>
              </ResumeBody>
            </MyDetailsContainer>
          </RightBody>
        </RightContainer>
        <NavigationContainer>
          <NavigationBody>
            <IconsDiv>
              <IconsContainer>
                <AiFillHome
                  onClick={navigationHandler.bind(this, "home")}
                  style={{
                    color: currentSection === "home" ? "green" : "grey",
                  }}
                />

                <BsFillPersonFill
                  onClick={navigationHandler.bind(this, "about")}
                  style={{
                    color: currentSection === "about" ? "green" : "grey",
                  }}
                />
                <GiGraduateCap
                  onClick={navigationHandler.bind(this, "education")}
                  style={{
                    color: currentSection === "education" ? "green" : "grey",
                  }}
                />
                <FaShapes
                  onClick={navigationHandler.bind(this, "skills")}
                  style={{
                    color: currentSection === "skills" ? "green" : "grey",
                  }}
                />
                <BiSolidMessageDetail
                  onClick={navigationHandler.bind(this, "message")}
                  style={{
                    color: currentSection === "message" ? "green" : "grey",
                  }}
                />
              </IconsContainer>
            </IconsDiv>
          </NavigationBody>
        </NavigationContainer>
      </OuterContainer>
    </Main>
  );
};
export default IndexComponent;
