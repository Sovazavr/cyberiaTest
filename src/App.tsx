import React from 'react';
import s from "./App.module.scss";
import { GlobalSVGSelector } from './components/GlobalSVGSelector/GlobalSVGSelector';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Form from './components/Form/Form';


function App() {
  return (
    <div className={s.all}>
      <Header/>
      <div className={s.back__svg}>
        {/* <GlobalSVGSelector typeSvg={'back-svg'} /> */}
      </div>
      <Content/>
      <Form/>
    </div>

  );
}

export default App;
