import React, { useEffect, useState } from 'react';
import s from "./App.module.scss";
import { GlobalSVGSelector } from './components/GlobalSVGSelector/GlobalSVGSelector';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import { ScrollBtn } from './components/ScrollBtn/ScrollBtn';


function App() {

  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);


  return (
    <div className={s.all}>
      <Header />
      <div className={s.back__svg}>
        {/* <GlobalSVGSelector typeSvg={'back-svg'} /> */}
      </div>
      <Content />
      <Form />
      <Footer />
      {showButton ? <ScrollBtn /> : <></>}

    </div>

  );
}

export default App;
