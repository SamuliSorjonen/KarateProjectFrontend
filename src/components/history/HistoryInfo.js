import React, {Component} from 'react';

class HistoryInfo extends Component {
    render() {
        return (
            <div style={historyContainer}>
                <h3>What is Karate?</h3>
                <p>Karate (空手) is a martial art developed in the Ryukyu Kingdom. It developed from the indigenous Ryukyuan martial arts
                    (called te (手), "hand"; tii in Okinawan) under the influence of Kung Fu, particularly Fujian White Crane.
                    Karate is now predominantly a striking art using punching, kicking, knee strikes, elbow strikes and open-hand
                    techniques such as knife-hands, spear-hands and palm-heel strikes. Historically, and in some modern styles,
                    grappling, throws, joint locks, restraints and vital-point strikes are also taught.
                    A karate practitioner is called a karateka (空手家).</p>
                <br/>
                <p>The Ryukyu Kingdom was annexed by Japan in 1879. Karate was brought to the Japanese archipelago in the early 20th century during
                    a time of migration as Ryukyuans, especially from Okinawa, looked for work in Japan. It was systematically taught in Japan
                    after the Taishō era. In 1922, the Japanese Ministry of Education invited Gichin Funakoshi to Tokyo to give a karate demonstration.
                    In 1924 Keio University established the first university karate club in mainland Japan and by 1932, major Japanese universities had
                    karate clubs. In this era of escalating Japanese militarism, the name was changed from 唐手 ("Chinese hand" or "Tang hand") to 空手
                    ("empty hand") – both of which are pronounced karate in Japanese – to indicate that the Japanese wished to develop
                    the combat form in Japanese style. After World War II,
                    Okinawa became an important United States military site and karate became popular among servicemen stationed there.</p>
            </div>
        );
    }
}

const historyContainer = {
    background:'transparent',
    border:'solid',
    borderColor:'black',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding:'30px',
    margin:'20px',
    borderRadius:'10px',
    color:'black'
}

export default HistoryInfo;