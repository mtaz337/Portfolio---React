import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {podcastSection} from "../../portfolio";
import "./Podcast.scss";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, i) => {
            if (!podcastLink) {
              console.log(
                `Podcast link for ${podcastSection.title} is missing`
              );
            }
            return (
              <div className="podcast" key={i}>
                {/* <iframe
                  className="podcast"
                  src="https://www.hanselminutes.com"
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                ></iframe> */}
            <iframe 
            title="What will React come up with Next?"
            allowtransparency="true"
            height="300"
            width="100%"
            style={{
              border: "none",
              minWidth: "100%",
              height: "300px",
            }}
            scrolling="no"
            data-name="pb-iframe-player"
            src="https://www.podbean.com/player-v2/?i=pb8mt-1b9ac072-dir&square=1&share=1&download=1&fonts=Arial&skin=1&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=666666&size=300"
            loading="lazy"
            allowFullScreen
          ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
