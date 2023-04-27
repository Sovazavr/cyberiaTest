import React from 'react';
import s from "./App.module.scss";
import { GlobalSVGSelector } from './components/GlobalSVGSelector/GlobalSVGSelector';
import Header from './components/Header/Header';


function App() {
  return (
    <div className={s.all}>
      <Header/>
      <div className={s.back__svg}>
        <GlobalSVGSelector typeSvg={'back-svg'} />
      </div>

    </div>

  );
}

export default App;
