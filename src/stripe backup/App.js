import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Cart from './pages/Cart';
import TvMounting from './pages/services page/TvMounting';
import FanInstallation from './pages/services page/FanInstallation';
import LightFixtureInstalltion from './pages/services page/LightFixtureInstalltion';
import HandymanFurniture from './pages/services page/HandymanFurtniture';
import HandymanWallhanging from './pages/services page/HandymanWallhanging';
import ApplianceInstallation from './pages/services page/ApplianceInstallation';
import HandymanWasherDryer from './pages/services page/HandymanWasherDryer';
import HandymanStoveInstallation from './pages/services page/HandymanStoveInstallation';
import HandymanOvenInstallation from './pages/services page/HandyManOvenInstallation';
import HandyManRefrigiratorInstallation from './pages/services page/HandyManRefrigiratorInstallation';




import { useEffect, useState } from 'react';
import StripeCheckoutForm from "./components/payment/StripeCheckoutForm"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NoyKlAursW1G9pEJluCqSVwhowVRuKfab5ZBOQKwYBgmLO634GwNeES5AoPhjYXpgTwvMOWb3XWOKtWUHMNjgA3002j7Z0B5V');

const apiKey = 'sk_test_51NoyKlAursW1G9pEU7e8oGoTXgvzmPc9VzhL4HJP8b9ZFXFBSZgzf6kjcUz7vSUFSj8oWoYwg2GoyFfWIPBfqy4H00hT5ti1Hy';
const url = 'https://api.stripe.com/v1/payment_intents';
const data = {
  amount: 1099,
  currency: 'aud',
  'automatic_payment_methods[enabled]': true,
};

function App() {
  const [secret, setSecret] = useState(null)

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      body: new URLSearchParams(data),
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Payment intent created successfully!');
        console.log(data);
        setSecret(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }, [])

  if (secret != null) {
    return <>
      {console.log("secret")}
      {console.log("secret")}
      {console.log("secret")}
      {console.log("secret")}
      {console.log("secret")}
      {console.log(secret)}



      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/services" element={<Services />} />

        <Route exact path="/services/tv-mounting" element={<TvMounting />} />
        <Route exact path={`/services/fan-installation`} element={<FanInstallation />} />
        <Route exact path={`/services/light-fixture-installtion`} element={<LightFixtureInstalltion />} />
        <Route exact path={`/services/handyman-furniture`} element={<HandymanFurniture />} />
        <Route exact path={`/services/handyman-wallhanging`} element={<HandymanWallhanging />} />
        <Route exact path={`/services/handyman-appliance-installation`} element={<ApplianceInstallation />} />
        <Route exact path={`/services/handyman-washer-dryer`} element={<HandymanWasherDryer />} />
        <Route exact path={`/services/handyman-stove-installation`} element={<HandymanStoveInstallation />} />
        <Route exact path={`/services/handyman-oven-installation`} element={<HandymanOvenInstallation />} />
        <Route exact path={`/services/handyman-refrigirator-installation`} element={<HandyManRefrigiratorInstallation />} />

        <Route exact path="/testimonial" element={<Testimonial />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/cart-stripe" element={
          <Elements stripe={stripePromise} options={{ clientSecret: secret.client_secret }}>
            <StripeCheckoutForm />
          </Elements>
        } />

        {/* <Route exact path="/checkout" element={<Car />} /> */}
      </Routes>

      <Footer />
    </>
  };
}

export default App;
