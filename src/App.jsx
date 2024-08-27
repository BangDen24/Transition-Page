import './App.scss'

function App() {
  return (
     <div className="loading">
      <main>
        <div className="frame">
          <div className="frame__title">
            <h1 className="frame__title-main">Image to Content Page Transition</h1>
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
          {previews.map((preview, index) => (
            <div className="preview" key={index}>
              <div className="preview__img-wrap">
                <div className="preview__img">
                  <div
                    className="preview__img-inner"
                    style={{ backgroundImage: `url(${preview.imgUrl})` }}
                  ></div>
                </div>
              </div>
              <div className="preview__title">
                <h2 className="preview__title-main">
                  {preview.title.map((text, i) => (
                    <span className="oh" key={i}>
                      <span className="oh__inner">{text}</span>
                    </span>
                  ))}
                </h2>
                <p className="preview__desc">{preview.desc}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="content-wrap">
          {contents.map((content, index) => (
            <div className="content" key={index}>
              <div className="content__group">
                <div className="content__title">
                  {content.title.map((text, i) => (
                    <span className="oh" key={i}>
                      <span className="oh__inner">{text}</span>
                    </span>
                  ))}
                </div>
                <div className="content__meta oh">
                  <span className="oh__inner">{content.meta}</span>
                </div>
                <div className="content__text">{content.text}</div>
              </div>
              <div className="content__thumbs">
                {content.thumbs.map((thumb, i) => (
                  <div
                    className="content__thumbs-item"
                    key={i}
                    style={{ backgroundImage: `url(${thumb})` }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

const previews = [
  {
    imgUrl: 'img/1.jpg',
    title: ['Andesite', 'aphanitic'],
    desc: 'A volcanic rock of intermediate composition, between silica-poor basalt and silica-rich rhyolite.',
  },
  {
    imgUrl: 'img/2.jpg',
    title: ['Batholith', 'plutonic'],
    desc: 'A large mass of intrusive igneous rock made mostly of felsic or intermediate rock types.',
  },
  // Tambahkan objek lainnya sesuai dengan data yang diinginkan
];

const contents = [
  {
    title: ['Andesite', 'aphanitic'],
    meta: 'By James Maurice Rojo',
    text: 'Andesite (/ˈændəzaɪt/) is a volcanic rock of intermediate composition...',
    thumbs: ['img/1_1.jpg', 'img/1_2.jpg', 'img/1_3.jpg', 'img/1_4.jpg'],
  },
  {
    title: ['Batholith', 'plutonic'],
    meta: 'By Anna Walters',
    text: "A batholith (from Ancient Greek bathos 'depth', and lithos 'rock') is a large mass of intrusive igneous rock...",
    thumbs: ['img/2_1.jpg', 'img/2_2.jpg', 'img/2_3.jpg', 'img/2_4.jpg'],
  },
  // Tambahkan objek lainnya sesuai dengan data yang diinginkan
];

export default App
