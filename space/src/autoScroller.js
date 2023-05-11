import React from 'react';
import { useState } from 'react';

import $ from 'jquery';

const MILES_TO_KM = 0.621371;

function AutoScroller() {

    const [scrollDistance, setScrollDistance] = useState("");

    function handleNewState(e) {
        alert('A number was submitted: ' + scrollDistance);
        $('html, body').animate({ scrollTop: scrollDistance * MILES_TO_KM}, 800);
        e.preventDefault();
    }
    
    return (
        <>
            <form id="autoScroller">
                <label>
                    Kilometers to scroll to:<br/>
                    <input type="text" value={scrollDistance} onChange={(e) => setScrollDistance(e.target.value)} onKeyPress={(event) => {
                        // Numbers only, thanks to Phat_Tran on StackExchange for this workaround!
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }}/>
                    <br/>
                </label>
            <button onClick={(e)=>handleNewState(e)}>AutoScroll</button>
            </form>
        </>
    );
  }

export function AutoScrollerFunction() {
    return <AutoScroller />;
}