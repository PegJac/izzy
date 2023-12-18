import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import { styled } from "styled-components";
import thumbnail from "./assets/thumbnail.png";
import izzy1 from "./assets/izzy1.jpg";
import collage from "./assets/collage.png";

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
    }, 2000);
  }, []);

  return (
    <Wrapper>
      <SideBar>
        CULTURE UNITED - <span>GO TO IZZY!</span>
      </SideBar>
      <Content>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <Hero showArrow={showArrow}>
            <HeroImage>
              <img src={thumbnail} alt="thumbnail" />
            </HeroImage>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Hero>
        </motion.div>

        <Spacer />
        <motion.div
          style={{ width: "100%", margin: "auto", display: "flex" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <Main>
            <p>
              This documentary tells the story of Izzy Young, a man that came to
              play a very special role during the folk music revival in New York
              City in the early 1960's.
              <br />
              <br />
              His store, the Folklore Center in Greenwich Village, sold books,
              records, instruments, and anything related to folk music. But it
              was more than a store. It was a meeting place, a classroom, a
              stage, and the home for the poets and folk musicians in the
              Village.
            </p>
          </Main>
        </motion.div>
        <Spacer />
        <motion.div
          style={{ width: "100%", margin: "auto", display: "flex" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <Image src={collage} alt="izzy" />
        </motion.div>
        <Spacer />
        <motion.div
          style={{ width: "100%", margin: "auto", display: "flex" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <Main>
            <p>
              Here, young and talented artists not yet with a record deal, such
              as Joni Mitchell, Emmylou Harris, Tim Buckley and Patti Smith, got
              a chance to perform, to learn, and to grow.
              <br />
              <br />
              In 1973, Izzy Young suddenly decided to move to Sweden, where he
              started a similar shop and continued his mission to promote and
              preserve folk music and culture, both American and Swedish.
              <br />
              <br />
              This film - Go to Izzy! - follows Izzy Young during the last few
              years of his life.
            </p>
          </Main>
        </motion.div>
        <Spacer />
        <motion.div
          style={{ width: "100%", margin: "auto", display: "flex" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <Image src={izzy1} alt="izzy" />
        </motion.div>
        <Spacer />
        <motion.div
          style={{ width: "100%", margin: "auto", display: "flex" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <Main>
            <p>
              At the age of nearly 90 Izzy struggles to keep his store open for
              business. It isn't easy. Few people buy anything, they mostly come
              in to hear him tell stories from the 60's.
              <br />
              <br />
              What's more, Izzy's health is deteriorating, he has dementia. But
              he won't let that slow him down. Izzy hosts concerts several
              nights a week and returns to the store every morning for another
              day of interaction with lovers of folk music.
              <br />
              <br />
              One day Patti Smith and her band comes to town, and Izzy learns
              from guitarist Lenny Kaye how Izzy got him started in music. And
              not long thereafter, a surprising announcement: another one of
              Izzy’s protégés from the 60’s is awarded the Nobel Prize in
              Literature - an event that gets Izzy to put on a tail coat for the
              first time in his life.
            </p>
          </Main>
        </motion.div>
        <Spacer />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=uoW5J-568Ys"}
            playing={true}
            loop
            pip
            style={{
              aspectRatio: "16/9",
            }}
            width="100%"
            height="100%"
          />
        </motion.div>
        <Spacer />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <a href="https://www.instagram.com/cultureunitedmedia/">
            <Footer>
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8699 3.2605C11.2364 3.2605 10.9067 3.27149 9.87246 3.31868C8.84012 3.36587 8.13487 3.53006 7.51818 3.76988C6.87176 4.01294 6.28545 4.39433 5.80063 4.88819C5.30755 5.37245 4.92593 5.95834 4.68232 6.60509C4.44379 7.22178 4.27895 7.92768 4.23176 8.96002C4.18522 9.99365 4.17358 10.3227 4.17358 12.9569C4.17358 15.591 4.18457 15.9201 4.23176 16.9543C4.27895 17.9867 4.44314 18.6919 4.68297 19.3086C4.92602 19.955 5.30741 20.5413 5.80128 21.0262C6.28555 21.5192 6.87144 21.9008 7.51818 22.1445C8.13487 22.3836 8.84012 22.5478 9.87246 22.595C10.9067 22.6422 11.2364 22.6532 13.8699 22.6532C16.5035 22.6532 16.8331 22.6422 17.8674 22.595C18.8998 22.5478 19.605 22.3836 20.2217 22.1438C20.8681 21.9008 21.4544 21.5194 21.9392 21.0255C22.4323 20.5413 22.8139 19.9554 23.0576 19.3086C23.2967 18.6919 23.4609 17.9867 23.5081 16.9543C23.5553 15.9201 23.5663 15.5904 23.5663 12.9569C23.5663 10.3233 23.5553 9.99365 23.5081 8.95937C23.4609 7.92703 23.2967 7.22178 23.0569 6.60509C22.8135 5.95807 22.4318 5.37193 21.9386 4.88755C21.4543 4.39447 20.8684 4.01284 20.2217 3.76923C19.605 3.5307 18.8991 3.36587 17.8668 3.31868C16.8331 3.27213 16.5041 3.2605 13.8699 3.2605ZM13.8699 5.00778C16.4589 5.00778 16.7659 5.01748 17.7886 5.06402C18.7336 5.10733 19.2469 5.26441 19.5889 5.39822C20.0413 5.5734 20.3646 5.78414 20.7039 6.12286C21.0433 6.46223 21.2534 6.78545 21.4286 7.23794C21.5617 7.5799 21.7195 8.09316 21.7628 9.03823C21.8093 10.0609 21.819 10.3679 21.819 12.9569C21.819 15.5458 21.8093 15.8528 21.7628 16.8755C21.7195 17.8205 21.5624 18.3338 21.4286 18.6758C21.2734 19.0969 21.0258 19.478 20.7039 19.7908C20.3911 20.1128 20.0101 20.3604 19.5889 20.5155C19.2469 20.6486 18.7336 20.8064 17.7886 20.8497C16.7659 20.8962 16.4595 20.9059 13.8699 20.9059C11.2804 20.9059 10.974 20.8962 9.95132 20.8497C9.00625 20.8064 8.49299 20.6493 8.15103 20.5155C7.72986 20.3603 7.34882 20.1127 7.03595 19.7908C6.71414 19.4779 6.46653 19.0969 6.31131 18.6758C6.17814 18.3338 6.02042 17.8205 5.97711 16.8755C5.93056 15.8528 5.92087 15.5458 5.92087 12.9569C5.92087 10.3679 5.93056 10.0609 5.97711 9.03823C6.02042 8.09316 6.1775 7.5799 6.31131 7.23794C6.48649 6.78545 6.69722 6.46223 7.03595 6.12286C7.34878 5.80097 7.72983 5.55335 8.15103 5.39822C8.49299 5.26506 9.00625 5.10733 9.95132 5.06402C10.974 5.01748 11.281 5.00778 13.8699 5.00778Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8709 16.192C13.446 16.192 13.0253 16.1083 12.6328 15.9457C12.2402 15.7831 11.8836 15.5448 11.5832 15.2444C11.2827 14.9439 11.0444 14.5873 10.8818 14.1948C10.7192 13.8022 10.6355 13.3815 10.6355 12.9566C10.6355 12.5318 10.7192 12.1111 10.8818 11.7185C11.0444 11.326 11.2827 10.9693 11.5832 10.6689C11.8836 10.3685 12.2402 10.1302 12.6328 9.96756C13.0253 9.80497 13.446 9.72128 13.8709 9.72128C14.729 9.72128 15.5519 10.0622 16.1586 10.6689C16.7654 11.2756 17.1062 12.0986 17.1062 12.9566C17.1062 13.8147 16.7654 14.6376 16.1586 15.2444C15.5519 15.8511 14.729 16.192 13.8709 16.192ZM13.8709 7.97271C12.5491 7.97271 11.2814 8.4978 10.3467 9.43247C9.41205 10.3671 8.88696 11.6348 8.88696 12.9566C8.88696 14.2785 9.41205 15.5461 10.3467 16.4808C11.2814 17.4155 12.5491 17.9406 13.8709 17.9406C15.1927 17.9406 16.4604 17.4155 17.3951 16.4808C18.3297 15.5461 18.8548 14.2785 18.8548 12.9566C18.8548 11.6348 18.3297 10.3671 17.3951 9.43247C16.4604 8.4978 15.1927 7.97271 13.8709 7.97271ZM20.3047 7.88221C20.3047 8.19466 20.1806 8.49432 19.9597 8.71526C19.7387 8.93619 19.4391 9.06032 19.1266 9.06032C18.8142 9.06032 18.5145 8.93619 18.2936 8.71526C18.0727 8.49432 17.9485 8.19466 17.9485 7.88221C17.9485 7.56976 18.0727 7.2701 18.2936 7.04916C18.5145 6.82822 18.8142 6.7041 19.1266 6.7041C19.4391 6.7041 19.7387 6.82822 19.9597 7.04916C20.1806 7.2701 20.3047 7.56976 20.3047 7.88221Z"
                  fill="white"
                />
              </svg>
              cultureunitedmedia
            </Footer>
            <Footer>CultureUnitedMedia@gmail.com</Footer>
          </a>
        </motion.div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, #070720 0%, #07061a 100%);
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  position: relative;

  * {
    color: white;
  }
`;

const Content = styled.div`
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    text-decoration-color: transparent;
    transition: all 0.2s ease-in-out;
    text-underline-offset: 3px;

    &:hover {
      text-decoration-color: #ffffff;
    }
  }

  p {
    padding-left: 20px;
    border-left: 2px solid #ff5757;
  }

  @media screen and (min-width: 1200px) {
    padding: 60px 80px;
    max-width: 1200px;
    margin: auto;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;

const Hero = styled.div<{ showArrow: boolean }>`
  position: relative;

  svg {
    opacity: 0;
    transition: all 2s ease-in-out;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(20px);
      }
      60% {
        transform: translateY(10px);
      }
    }

    svg {
      transition: all 0.5s ease-in-out;
      opacity: ${({ showArrow }) => (showArrow ? 1 : 0)};
      height: 25px;
      width: 25px;
      margin-top: 20px;
      animation: bounce 2s infinite;
      animation-delay: 5s;
    }
  }
`;

const Main = styled.div`
  margin: auto;
  max-width: 400px;

  @media screen and (min-width: 1200px) {
    max-width: 700px;
  }
`;

const SideBar = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  padding: 10px;

  span {
    color: #ff5757;
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 50px;

  @media screen and (min-width: 1200px) {
    height: 100px;
  }
`;

const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 780px) {
    width: calc(100% - 200px);
    margin: auto;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: min-content;
  margin: auto;

  svg {
    margin-right: 20px;
  }
`;

export default App;
