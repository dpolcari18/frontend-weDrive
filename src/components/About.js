import React from 'react'

const About = () => {
    return (
        <div id='about'>
            <h2>About weDrive</h2>
            <p>Driving is the most <strong className='highlight-text'>dangerous</strong> thing most people do on a daily basis.</p> 
            <p> At weDrive we try to <strong className='highlight-text'>mitigate</strong> that risk by providing the information necessary to make <strong className='highlight-text'>smart decisions</strong>.</p>
            <h4>Information Provided</h4>
            <ul style={{'listStyle': 'none'}}>
                <li>Directions</li>
                <li>Traffic Conditions</li>
                <li>Weather Conditions</li>
                <li>Vehicle Inspection Checklist</li>
                <li>Vehicle Maintenance Tracker</li>
            </ul>
            <h4>Emergency Contacts</h4>
            <p>While we strive to reduce the risks of driving, we understand it's impossible to reduce that risk to zero. That's why we make sure whenever you are driving, your emergency contact is <strong className='highlight-text'>notified</strong> via email anytime you start a trip.</p>
            <p>They are provided with your <strong className='highlight-text'>planned route</strong>, <strong className='highlight-text'>departure time</strong> and <strong className='highlight-text'>estimated arrival time</strong>. Upon your safe arrival we notify them again to let them know you arrived safely!</p>
        </div>
    )
}

export default About