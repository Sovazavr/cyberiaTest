import React, { useEffect, useState } from 'react';
import s from "./App.module.scss";
import { GlobalSVGSelector } from './components/GlobalSVGSelector/GlobalSVGSelector';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import { ScrollBtn } from './components/ScrollBtn/ScrollBtn';
import Menu from './components/Header/Menu';
import Project from './components/Project/Project';
import { Route, Routes} from 'react-router-dom';


function App() {

  const [showButton, setShowButton] = useState<boolean>(false)
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)

  
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
      <Header setOpenedMenu={setOpenedMenu}/>
      {/* <div className={s.back__svg}>
         <GlobalSVGSelector typeSvg={'back-svg'} />
      </div> */}
      {/*  */}
      
      <Routes>
        <Route path='/' element={<Content />}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      <Form />
      <Footer />
      {showButton ? <ScrollBtn /> : <></>}
      {openedMenu ? <Menu setOpenedMenu={setOpenedMenu}/> : <></>}
    </div>

  );
}

export default App;
