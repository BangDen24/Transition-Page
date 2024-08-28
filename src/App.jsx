import React from "react";
import "./App.scss";
import e from "./assets/1.jpg";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {

  React.useEffect(() => {
    ScrollSmoother.create({
      wrapper: ".smooth-wrapper",
      content: ".smooth-content",
      smooth: 2,
      effects: true,
    });
  }, []);

  React.useEffect(() => {
    gsap.to(".preview__img-inner", {
      ease: "none",
      scaleY: 1.8,
      scrollTrigger: {
        trigger: ".preview__image--inner",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  React.useEffect(() => {
    gsap.to(".preview__title", {
      ease: "none",
      y: -200,
      scrollTrigger: {
        trigger: ".preview__image--inner",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="smooth-wrapper">
      <div className="smooth-content">
        <main>
          <div className="frame">
            <div className="frame__title">
              <h1 className="frame__title-main">
                Image to Content Page Transition
              </h1>
              <a
                aria-label="Back to the article"
                className="frame__title-back"
                href="https://tympanus.net/codrops/?p="
              >
                <span className="oh__inner">Back to the article</span>
                <svg width="18px" height="18px" viewBox="0 0 24 24">
                  <path
                    vectorEffect="non-scaling-stroke"
                    d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
                  ></path>
                </svg>
              </a>
            </div>
            <a
              className="frame__prev"
              href="http://tympanus.net/Development/GridLayoutAnimation/"
            >
              Previous demo
            </a>
          </div>
          <section className="preview-wrap">
            <div className="preview">
              <div className="preview__img-wrap">
                <div className="preview__img">
                  <div
                    className="preview__img-inner"
                    style={{ backgroundImage: `url(${e})` }}
                  ></div>
                </div>
              </div>
              <div className="preview__title">
                <h2 className="preview__title-main">
                  <span className="oh">Andesite</span>
                  <span className="oh">aphanitic</span>
                </h2>
                <p className="preview__desc">
                  A volcanic rock of intermediate composition, between
                  silica-poor basalt and silica-rich rhyolite.
                </p>
              </div>
            </div>
            <div className="preview">
              <div className="preview__img-wrap">
                <div className="preview__img">
                  <div
                    className="preview__img-inner"
                    style={{ backgroundImage: `url(${e})` }}
                  ></div>
                </div>
              </div>
              <div className="preview__title">
                <h2 className="preview__title-main">
                  <span className="oh">Andesite</span>
                  <span className="oh">aphanitic</span>
                </h2>
                <p className="preview__desc">
                  A volcanic rock of intermediate composition, between
                  silica-poor basalt and silica-rich rhyolite.
                </p>
              </div>
            </div>
            <div className="preview">
              <div className="preview__img-wrap">
                <div className="preview__img">
                  <div
                    className="preview__img-inner"
                    style={{ backgroundImage: `url(${e})` }}
                  ></div>
                </div>
              </div>
              <div className="preview__title">
                <h2 className="preview__title-main">
                  <span className="oh">Andesite</span>
                  <span className="oh">aphanitic</span>
                </h2>
                <p className="preview__desc">
                  A volcanic rock of intermediate composition, between
                  silica-poor basalt and silica-rich rhyolite.
                </p>
              </div>
            </div>
            <div className="preview">
              <div className="preview__img-wrap">
                <div className="preview__img">
                  <div
                    className="preview__img-inner"
                    style={{ backgroundImage: `url(${e})` }}
                  ></div>
                </div>
              </div>
              <div className="preview__title">
                <h2 className="preview__title-main">
                  <span className="oh">Andesite</span>
                  <span className="oh">aphanitic</span>
                </h2>
                <p className="preview__desc">
                  A volcanic rock of intermediate composition, between
                  silica-poor basalt and silica-rich rhyolite.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
