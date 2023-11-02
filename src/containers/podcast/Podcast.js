import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {podcastSection} from "../../portfolio";
import "./Podcast.scss";
import { Spotify } from 'react-spotify-embed';


export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }

  const spotifyWidth = 250; // Adjust to your preferred width
  const spotifyHeight = 80;
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
              <div key={i}>
                {/* <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                ></iframe> */}
                <Spotify className="podcast" width={spotifyWidth}
                  height={spotifyHeight} frameBorder="0"
                  scrolling="no"
                  title="Podcast" link="https://open.spotify.com/episode/2T9v592Yl3Zlc5X7Rfv2qZ?si=JH2TVpZmSrGgwcHDzClMFg"/>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
