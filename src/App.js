import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Cart from './pages/Cart';

import TvMounting from './pages/services page/TvMounting';

import FanLight from './pages/services page/FanLight';
import FanInstallation from './pages/services page/FanInstallation';
import LightFixtureInstalltion from './pages/services page/LightFixtureInstalltion';

import Handyman from './pages/services page/Handyman';
import HandymanFurniture from './pages/services page/HandymanFurtniture';
import HandymanWallhanging from './pages/services page/HandymanWallhanging';
import ApplianceInstallation from './pages/services page/ApplianceInstallation';
import HandymanWasherDryer from './pages/services page/HandymanWasherDryer';
import HandymanStoveInstallation from './pages/services page/HandymanStoveInstallation';
import HandymanOvenInstallation from './pages/services page/HandyManOvenInstallation';
import HandyManRefrigiratorInstallation from './pages/services page/HandyManRefrigiratorInstallation';

import SmartHome from './pages/services page/Smart Home/SmartHome';
import SmartHomeSecurityCamera from './pages/services page/Smart Home/SmartHomeSecurityCamera';
import SmartHomeVideoDoorbell from './pages/services page/Smart Home/SmartHomeVideoDoorbell';
import SmartHomeThermostat from './pages/services page/Smart Home/SmartHomeThermostat';
import SmartHomeHubOrSpeaker from './pages/services page/Smart Home/SmartHomeHubOrSpeaker';
import SmartHomeSmartDoorLock from './pages/services page/Smart Home/SmartHomeSmartDoorLock';
import SmartHomeSmartGarage from './pages/services page/Smart Home/SmartHomeSmartGarage';
import WiFiConnection from './pages/services page/Smart Home/WiFiConnection';
import SmartHomeWifiConnectionSetup from './pages/services page/Smart Home/SmartHomeWifiConnectionSetup';
import SmartHomeSingleExtensionSetup from './pages/services page/Smart Home/SmartHomeSingleExtensionSetup';
import InstantQuotePage from './pages/dashboard pages/InstantQuotePage';
import ContactUsPage from './pages/dashboard pages/ContactUsPage';
import Orders from './pages/dashboard pages/Orders';
import RateUsPage from './pages/dashboard pages/RateUsPage';
import DashboardLogin from './pages/dashboard pages/DashboardLogin';
import SmartHomeTheaterSoundbar from './pages/services page/Smart Home/Home Theater Pages/SmartHomeTheaterSoundbar';
import SmartHomeTheaterSpeakerSubwoofer from './pages/services page/Smart Home/Home Theater Pages/SmartHomeTheaterSpeakerSubwoofer';


import SmartHomeTheaterVideoStreamingDevice from './pages/services page/Smart Home/Home Theater Pages/SmartHomeTheaterVideoStreamingDevice';
import SmartHomeTheaterBlurayDvdPlayer from './pages/services page/Smart Home/Home Theater Pages/SmartHomeTheaterBlurayDvdPlayer';
import SmartHomeTheaterGamingSystem from './pages/services page/Smart Home/Home Theater Pages/SmartHomeTheaterGamingSystem';
import SmartHomeTheaterUniversalRemote from './pages/services page/Smart Home/Home Theater Pages/SmartHomeTheaterUniversalRemote';
import SmartHomeTheaterOtherDevices from './pages/services page/Smart Home/Home Theater Pages/SmartHomeTheaterOtherDevices';
import SmartHomeHomeTheater from './pages/services page/Smart Home/Home Theater Pages/SmartHomeHomeTheater';
import { Success } from './components/payment/paymentSuccess';
import { Fail } from './components/payment/paymentFail';
import { useEffect } from 'react';



function App() {
  const isAuth = sessionStorage.getItem("id") ? true : false;

  useEffect(() => {
    if (((window.location.host).includes("localhost")) == false) {
      if (window.location.protocol == 'http:') {
        window.location.protocol = "https:"
      }

      setInterval(() => {
        console.clear()
      }, 1000);
    }

  }, [])



  return <>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/services" element={<Services />} />

      <Route exact path="/services/tv-mounting" element={<TvMounting />} />

      <Route exact path="/services/handyman" element={<Handyman />} />
      <Route exact path={`/services/handyman/furniture`} element={<HandymanFurniture />} />
      <Route exact path={`/services/handyman/wallhanging`} element={<HandymanWallhanging />} />
      <Route exact path={`/services/handyman/appliance-installation`} element={<ApplianceInstallation />} />
      <Route exact path={`/services/handyman/washer-dryer-installation`} element={<HandymanWasherDryer />} />
      <Route exact path={`/services/handyman/stove-installation`} element={<HandymanStoveInstallation />} />
      <Route exact path={`/services/handyman/oven-installation`} element={<HandymanOvenInstallation />} />
      <Route exact path={`/services/handyman/refrigirator-installation`} element={<HandyManRefrigiratorInstallation />} />

      <Route exact path={`/services/fan-light`} element={<FanLight />} />
      <Route exact path={`/services/fan-fixture-installation`} element={<FanInstallation />} />
      <Route exact path={`/services/light-fixture-installtion`} element={<LightFixtureInstalltion />} />

      <Route exact path={`/services/smart-home`} element={<SmartHome />} />
      <Route exact path={`/services/smart-home-installation-security-camera`} element={<SmartHomeSecurityCamera />} />
      <Route exact path={`/services/smart-home-installation-video-doorbell`} element={<SmartHomeVideoDoorbell />} />
      <Route exact path={`/services/smart-home-installation-thermostat`} element={<SmartHomeThermostat />} />
      <Route exact path={`/services/smart-home-installation-smart-hub-or-speaker`} element={<SmartHomeHubOrSpeaker />} />
      <Route exact path={`/services/smart-home-installation-smart-door-lock`} element={<SmartHomeSmartDoorLock />} />
      <Route exact path={`/services/smart-home-installation-smart-garage`} element={<SmartHomeSmartGarage />} />

      <Route exact path={`/services/smart-home-installation-home-theater`} element={<SmartHomeHomeTheater />} />
      <Route exact path={`/services/smart-home-installation-home-theater-soundbar`} element={<SmartHomeTheaterSoundbar />} />
      <Route exact path={`/services/smart-home-installation-home-theater-speaker-subwoofer`} element={<SmartHomeTheaterSpeakerSubwoofer />} />
      <Route exact path={`/services/smart-home-installation-home-theater-video-streaming-device`} element={<SmartHomeTheaterVideoStreamingDevice />} />
      <Route exact path={`/services/smart-home-installation-home-theater-bluray-dvd-player`} element={<SmartHomeTheaterBlurayDvdPlayer />} />
      <Route exact path={`/services/smart-home-installation-home-theater-gaming-system`} element={<SmartHomeTheaterGamingSystem />} />
      <Route exact path={`/services/smart-home-installation-home-theater-universal-remote`} element={<SmartHomeTheaterUniversalRemote />} />
      <Route exact path={`/services/smart-home-installation-home-theater-other-smart-devices`} element={<SmartHomeTheaterOtherDevices />} />

      <Route exact path={`/services/smart-home-installation/wifi-connection`} element={<WiFiConnection />} />
      <Route exact path={`/services/smart-home-installation-wifi-connection-setup`} element={<SmartHomeWifiConnectionSetup />} />
      <Route exact path={`/services/smart-home-installation-single-extension-setup`} element={<SmartHomeSingleExtensionSetup />} />


      <Route exact path="/testimonial" element={<Testimonial />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/success" element={<Success />} />
      <Route exact path="/fail" element={<Fail />} />

      <Route exact path={`/admin/login`} element={<DashboardLogin />} />
      {
        isAuth ? <>
          <Route exact path={`/admin/dashboard/instant-quotes-data`} element={<InstantQuotePage />} />
          <Route exact path={`/admin/dashboard/contact-data`} element={<ContactUsPage />} />
          <Route exact path={`/admin/dashboard/Orders`} element={<Orders />} />
          <Route exact path={`/admin/dashboard/rate-us-data`} element={<RateUsPage />} />
        </>
          :
          <Route path='*' element={<Navigate to="/" replace={true} />} />
      }
    </Routes>

    <Footer />
  </>
}


export default App;