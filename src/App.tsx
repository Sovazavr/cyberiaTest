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
import { useIsLoading, useItems } from './hooks/useStateHooks';
import { LordIcon } from './components/Loader/Loader';



function App() {

  const [showButton, setShowButton] = useState<boolean>(false)
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)


  const isLoading = useIsLoading()

  const dispatch = useAppDispatch()


  let firstRender = useRef(true)
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false

      dispatch(getProjectsThunk())



    } else {

      // storage.setItem('items', projects.items)

      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });


    }
  }, [])

  useEffect(() => {
    if (openedMenu) {
      document.body.style.overflowY = 'hidden'
    } else {
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
        <Route path='/' element={!isLoading ? <Content /> : <LordIcon
          src={'https://cdn.lordicon.com/dtgezzsi.json'}
          trigger={'loop'}
          colors={{ primary: '#303958', secondary: '#2d76f9' }}
          size={200}
        />} />
        <Route path='/project'>
          <Route path=':id' element={<Project />} />
        </Route>

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
