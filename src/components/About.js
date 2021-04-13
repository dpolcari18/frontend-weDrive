import React from 'react'

const About = () => {
    return (
        <div>
            <h2>About weDrive</h2>
            <p>Driving is the most <strong>dangerous</strong> thing most people do on a daily basis.</p> 
            <p> At weDrive we try to <strong>mitigate</strong> that risk by providing the information necessary to make <strong>smart decisions</strong>.</p>
            <h4>Information Provided</h4>
            <ul style={{'list-style': 'none'}}>
                <li>Directions</li>
                <li>Traffic Conditions</li>
                <li>Weather Conditions</li>
                <li>Vehicle Inspection Checklist</li>
                <li>Vehicle Maintenance Tracker</li>
            </ul>
            <h4>Emergency Contacts</h4>
            <p>While we strive to reduce the risks of driving, we understand it's impossible to reduce that risk to zero. That's why we make sure whenever you are driving, your emergency contact is <strong>notified</strong> via email anytime you start a trip.</p>
            <p>They are provided with your <strong>planned route</strong>, <strong>departure time</strong> and <strong>estimated arrival time</strong>. Upon your safe arrival we notify them again to let them know you arrived safely!</p>
        </div>
    )
}

export default About