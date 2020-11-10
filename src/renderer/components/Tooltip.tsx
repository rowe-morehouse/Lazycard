import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinisicElements {
            'paper-tooltip': { Tooltip: string }
        }
    }
}

export default Tooltip;


// import React from 'react';

// class ITooltip extends React.Component{
//     render(){
//         return (
//             <Paper-tooltip></Paper-tooltip>
//         );
//     }
// }

// export default ITooltip;
