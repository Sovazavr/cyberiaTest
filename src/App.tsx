import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from "./App.module.scss";
import { GlobalSVGSelector } from './components/GlobalSVGSelector/GlobalSVGSelector';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import { ScrollBtn } from './components/ScrollBtn/ScrollBtn';
import Menu from './components/Header/Menu';
import Project from './components/Project/Project';
import { Route, Routes } from 'react-router-dom';


import { getProjectsThunk, Item } from './store/slices/projectsSlice';


import { useAppDispatch, useAppSelector } from './hooks/reduxHook';



function App() {

  const [showButton, setShowButton] = useState<boolean>(false)
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)

  const projects = useAppSelector(state => state.projects)
  const dispatch = useAppDispatch()

  let firstRender = useRef(true)
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      // const projects = getProjectsData()
      dispatch(getProjectsThunk())

      // console.log("projectsType", typeof (projects.items));
      // console.log("projectsitemsType", typeof (projects.items.items));


    } else {
      console.log("projects", projects);
      // storage.setItem('items', projects.items)

      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });


    }
  }, [projects])

  useEffect(() => {
    if (openedMenu) {
      document.body.style.overflowY = 'hidden'
    } else{
      document.body.style.overflowY = 'visible'
    }
  }, [openedMenu])



  useEffect(() => {
    dispatch(getProjectsThunk())
  }, [dispatch]);





  return (
    <div className={s.all}>
      <Header setOpenedMenu={setOpenedMenu} />
      {/* <div className={s.back__svg}>
         <GlobalSVGSelector typeSvg={'back-svg'} />
      </div> */}
      {/*  */}

      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/project' element={<Project />} />
      </Routes>
      <Form />
      <Footer />
      {showButton && !openedMenu ? <ScrollBtn /> : <></>}
      {/* {openedMenu ? <Menu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} /> : <></>} */}
      <Menu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />
    </div>

  );
}

export default App;
