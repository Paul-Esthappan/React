// import logo from './logo.svg';
import './App.css';
import Bootstrap1 from './Bootstrap1';
import RecatHook from './RecatHook';
import IncDec from './IncDec';
import ArrayMap from './ArrayMap';
import SnippetTex from './SnippetTex';
import SnippTask2 from './SnippTask2';
import IncDec2 from './IncDec2';
import MapCard from './MapCard';
import CourselMap from './CourselMap';
import TableMap from './TableMap';
import Ternery from './Ternery';
import SpreadMap from './SpreadMap';
import KeralaTourism from './KeralaTourism';
import ArrUsestate from './ArrUsestate';
import Destructureing from './Destructureing';
import Props from './Props';
import Props3 from './Props3';
import UseEffectHook from './UseEffectHook';
import ApidataTask from './ApidataTask';
import UseStatehookLinkPage from './UseStatehookLinkPage';
import UseStateLinkComponent from './UseStateLinkComponent';
import ListTask from './ListTask';
import PropTaskLink from './PropTaskLink';
import ToggleTask from './ToggleTask';
import FormOnsubmit from './FormOnsubmit';

import UseEffectContex from './UseEffectContex';

import CountUseeffect from './CountUseeffect';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouterDom from './RouterDom';
import UseNavigate from './UseNavigate';
import WebPageRestaurant from './WebPageRestaurant';
import Menu from './Restaurantfiles/Menu';
import NavScrollExample from './Restaurantfiles/NavScrollExample';
import Starters from './Restaurantfiles/Starters';
import UseParmsHook from './UseParmsHook';


// import Api from './Api';



function App() {
  return (
    <div className="App">

      {/* <BrowserRouter>
        <Routes>
          <Route path='/:username' element={<UseParmsHook/>}/>
        </Routes>
      </BrowserRouter> */}
      

      {/* <UseEffectContex/> */}

{/* ********* Restaurant ***************/}

<BrowserRouter>
<Routes>
  <Route path='/' element={<WebPageRestaurant/>}/>
  <Route path='Home' element={<WebPageRestaurant/>}/>
  <Route path='Menu' element={ <><NavScrollExample/><Menu/></>}/>
  <Route path='Menu/Starters' element={<><NavScrollExample/><Starters/></>}/>
</Routes>
</BrowserRouter>


{/* ********* Restaurant ***************/}


{/* 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><UseNavigate/><RouterDom/></>}/>

      <Route path='/ApiData' element={<> <RouterDom/><ApidataTask/> </>}/>
      <Route path='Button' element={<ArrayMap/>}/>
      <Route path='/ToggleTask' element={<ToggleTask/>}/>
      <Route path='/ToggleTask1' element={<ToggleTask/>}/>
    </Routes>
    </BrowserRouter> */}




      {/* <CountUseeffect/> */}

      {/* <FormOnsubmit/> */}
      {/* <ToggleTask/> */}
      {/* <PropTaskLink/> */}
      {/* <ListTask/> */}
      {/* <Props3/> */}
      {/* <ApidataTask/> */}
      {/* <UseStatehookLinkPage/> */}
      {/* <UseStateLinkComponent/> */}
      {/* <Api/> */}
      {/* <UseEffectHook/> */}
      {/* <Props/> */}
      {/* <Destructureing/> */}
      {/* <Tablearray/> */}
      {/* <ArrUsestate/> */}
      {/* <IncDec2/> */}
      {/* <SnippTask2/>
      <SnippetTex/> */}
      {/* <ArrayMap/> */}
      {/* <IncDec/> */}
       {/* <RecatHook/> */}
      {/* <KeralaTourism/> */}
      {/* <SpreadMap/> */}
      {/* <Ternery/> */}
      {/* <TableMap/> */}
      {/* <CourselMap/> */}
      {/* <MapCard/> */}
      {/* <SnippTask2/>
      <SnippetTex/>
      <ArrayMap/>
      <IncDec/>
    <RecatHook/>
    <Bootstrap1/> */}
    </div>
  );
}

export default App;
