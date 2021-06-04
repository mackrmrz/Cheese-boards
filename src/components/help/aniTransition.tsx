import React, {useState} from 'react';
import { animated, config, useTransition } from 'react-spring'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

const FadeIn = () => {
    const [ show, setShow ] = useState(false);
    const transition = useTransition( show, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: show,
        delay: 100,
        config: config.molasses,
        onRest: () => setShow(!show),
    })
    console.log("Chexking", transition);
  return (
    <div className='fade-transition'>
     {transition((styles, item) => item && <animated.div style={styles}>This fades in and out</animated.div>)} 
    </div>
  )
}

export default FadeIn
