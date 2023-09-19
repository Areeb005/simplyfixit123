import React from 'react'
import usePersistedState from 'use-persisted-state-hook'

import CartDetail from '../components/Checkout/CartDetail'
import Confirm from '../components/Checkout/Confirm'

function Cart() {

    const [quiz, setQuiz] = usePersistedState('thisQuiz', "")
    const [SmartHomeTheaterSoundbar, setSmartHomeTheaterSoundbar] = usePersistedState('SmartHomeTheaterSoundbar', 0)


    return (
        <>
            {
                quiz === "TvMounting" || quiz === "SmartHomeSecurityCamera" || quiz === "SmartHomeVideoDoorbell" ||
                    quiz === "SmartHomeThermostat" || quiz === "SmartHomeHubOrSpeaker" || quiz === "SmartHomeSmartDoorLock" ||
                    quiz === "SmartHomeSmartGarage" || quiz === "SmartHomeWifiConnectionSetup" || quiz === "SmartHomeSingleExtensionSetup" ||
                    quiz === "SmartHomeTheaterSoundbar" || quiz === "SmartHomeTheaterSpeakerSubwoofer" || quiz === "SmartHomeTheaterVideoStreamingDevice" ||
                    quiz === "SmartHomeTheaterBlurayDvdPlayer" || quiz === "SmartHomeTheaterGamingSystem" || quiz === "SmartHomeTheaterUniversalRemote" ||
                    quiz === "SmartHomeTheaterOtherDevices"
                    ?
                    <CartDetail />
                    :
                    <Confirm />
            }

        </>
    )
}

export default Cart
