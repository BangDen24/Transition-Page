import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import "./App.scss";
import a from "./assets/1_1.jpg";
import b from "./assets/1_2.jpg";
import c from "./assets/1_3.jpg";
import d from "./assets/1_4.jpg";
import e from "./assets/1.jpg";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

function App() {
  useEffect(() => {
    const previews = document.querySelectorAll(".preview");
    const contents = document.querySelectorAll(".content");
    const main = document.querySelector(".smooth-content");
    const backbutton = document.querySelector(".action");

    const split = new SplitText(".preview__title-main", { type: "words" });
    const splittitle = new SplitText(".content__group", { type: "words" });

    previews.forEach((preview, index) => {
      preview.addEventListener("click", () => {
        contents.forEach(() => {
          document.body.style.overflow = "hidden";
          document.querySelector(".preview-wrap").style.zIndex = 0;
          contents[index].classList.add("content--current");
          main.classList.add(".content-open");

          const tl = gsap.timeline();
          tl.to(previews[index], {
            scale: 0.6,
            transformOrigin: "left top",
            duration: 0.8,
            pointerEvents: "none",
            onStart: () => {
              gsap.set(previews[index], {
                y: 100,
              });
            },
          })
          .fromTo(
            ".content__thumbs-item",{
              scale: 0.4,
              transformOrigin: "left bottom"
            },
            {
              scale: 1,
              duration: 0.8
            },"-=0.8"
          )
          .to(
            backbutton,{
              opacity: 1,
              visibility: "visible",
              pointerEvents: "auto"
            },"<"
          )
            .to(
              ".preview__desc",
              {
                opacity: 0
              },"-+1.8"
            )
            .to(
              split.words,
              {
                y: -150,
                duration: 1.5,
              },"<"
            )
            .fromTo(
              splittitle.words,
              {

                // opacity: 0,
                y: 150,
                duration: 1.5,
              },
              {
                // opacity: 1,
                y: 0,
              },"<"
            )
            .to(
              previews[index + 1],
              {
                y: 500,
                duration: 1,
                opacity: 0
              },"<0.5"
            );
              
            backbutton.addEventListener("click", () => {
              contents[index].classList.remove("content--current");
              main.classList.remove(".content-open");
              document.body.style.overflow = "visible";
              document.querySelector(".preview-wrap").style.zIndex = 100;

              tl.reverse();
            })
        });
      });
    });

  }, []);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: ".smooth-wrapper",
      content: ".smooth-content",
      smooth: 2,
      effects: true,
    });
    gsap.to(".preview__img-inner", {
      ease: "none",
      scaleY: 1.8,
      scrollTrigger: {
        trigger: ".smooth-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });
    gsap.fromTo(
      ".preview__title",
      {
        y: +100,
      },
      {
        ease: "none",
        y: -50,
        scrollTrigger: {
          trigger: ".preview__img-inner",
          start: "top top",
          endTrigger: ".preview-wrap",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      }
    );
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
                  <span className="oh1">Andesite</span>
                  <span className="oh1">aphanitic</span>
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
          <section className="content-wrap">
            <div className="content">
              <div className="content__group">
                <div className="content__title">
                  <span className="oh">
                    <span className="oh__inner">Andesite</span>
                  </span>
                  <span className="oh">
                    <span className="oh__inner">aphanitic</span>
                  </span>
                </div>
                <div className="content__meta oh">
                  <span className="oh__inner">By James Maurice Rojo</span>
                </div>
                <div className="content__text">
                  Andesite (/ˈændəzaɪt/) is a volcanic rock of intermediate
                  composition. In a general sense, it is the intermediate type
                  between silica-poor basalt and silica-rich rhyolite.
                </div>
              </div>
              <div className="content__thumbs">
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${a})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${b})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${c})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${d})` }}
                ></div>
              </div>
            </div>
            <div className="content">
              <div className="content__group">
                <div className="content__title">
                  <span className="oh">
                    <span className="oh__inner">Andesite</span>
                  </span>
                  <span className="oh">
                    <span className="oh__inner">aphanitic</span>
                  </span>
                </div>
                <div className="content__meta oh">
                  <span className="oh__inner">By James Maurice Rojo</span>
                </div>
                <div className="content__text">
                  Andesite (/ˈændəzaɪt/) is a volcanic rock of intermediate
                  composition. In a general sense, it is the intermediate type
                  between silica-poor basalt and silica-rich rhyolite.
                </div>
              </div>
              <div className="content__thumbs">
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${a})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${b})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${c})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${d})` }}
                ></div>
              </div>
            </div>
            <div className="content">
              <div className="content__group">
                <div className="content__title">
                  <span className="oh">
                    <span className="oh__inner">Andesite</span>
                  </span>
                  <span className="oh">
                    <span className="oh__inner">aphanitic</span>
                  </span>
                </div>
                <div className="content__meta oh">
                  <span className="oh__inner">By James Maurice Rojo</span>
                </div>
                <div className="content__text">
                  Andesite (/ˈændəzaɪt/) is a volcanic rock of intermediate
                  composition. In a general sense, it is the intermediate type
                  between silica-poor basalt and silica-rich rhyolite.
                </div>
              </div>
              <div className="content__thumbs">
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${a})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${b})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${c})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${d})` }}
                ></div>
              </div>
            </div>
            <div className="content">
              <div className="content__group">
                <div className="content__title">
                  <span className="oh">
                    <span className="oh__inner">Andesite</span>
                  </span>
                  <span className="oh">
                    <span className="oh__inner">aphanitic</span>
                  </span>
                </div>
                <div className="content__meta oh">
                  <span className="oh__inner">By James Maurice Rojo</span>
                </div>
                <div className="content__text">
                  Andesite (/ˈændəzaɪt/) is a volcanic rock of intermediate
                  composition. In a general sense, it is the intermediate type
                  between silica-poor basalt and silica-rich rhyolite.
                </div>
              </div>
              <div className="content__thumbs">
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${a})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${b})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${c})` }}
                ></div>
                <div
                  className="content__thumbs-item"
                  style={{ backgroundImage: `url(${d})` }}
                ></div>
              </div>
            </div>
            <button className="unbutton action action--back">
              <svg width="25px" height="25px" viewBox="0 0 25 25">
                <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" />
              </svg>
              <span>Go back</span>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
