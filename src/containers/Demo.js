import React from 'react'

const Demo = () => {
    return (
        <div id='video'>
            <iframe 
                width="1120" 
                height="630" 
                src="https://www.youtube.com/embed/9KVhCc_vHVg" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen='allowfullscreen'>    
            </iframe>
        </div> 
    )
}

export default Demo