//import './App.css';

import 'react-toastify/dist/ReactToastify.css';

import RoutesApp from './routesApp'

import { FooterComponent, NavbarComponent, SidebarComponent } from './views/components/layout';




export default function App() {
  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <RoutesApp />
      <FooterComponent />
    </>
  );
}

