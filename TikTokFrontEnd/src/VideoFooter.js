import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({channel, description, song}) {
    return ( 
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                


                </div>


                <div className="videoFooter__ticker" >
                
                <p>{song}</p>
                </div>

                <div className="videoFooter__icon">
                <MusicNoteIcon />
                </div>

                
        </div>
    )
}

export default VideoFooter