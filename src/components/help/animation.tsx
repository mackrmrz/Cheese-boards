import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef
} from 'react-spring';
import { isNamedTupleMember } from 'typescript';

const ProductPop = () => {
  
  const [open, setOpen] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '20%'
    }
  });
  // console.log("what is Size", size, {...rest});
  const transApi = useSpringRef();
  const transition = useTransition(open ? data.product : [], {
    ref: transApi,
    trail: 100 / data.product.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 }
  });
  //   console.log('what is transition doing', transition);

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
      0, open ? 0.1 : 0.6,
  ]);

  return (
    <div className="product-pop">
      <animated.div
        className='pop-container'
        style={{ ...rest, width: size, height: size }}
        onClick={() => setOpen((open) => !open)}
      > { !open ? <h1>See more</h1> : null }
        {transition((style, item) => (
          <animated.div
            className="card"
            style={{ ...style, background: item.boards_id }}
          >
            <div className="card-container">
                <div className='card-header'>
                    <img className='card-img-top' src={item.board_image} alt='picture'/>
                </div>
                <div className='card-body'>
                    <h3>{item.board_title}</h3>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore natus delectus.</h6>
                    <Link to='/prduct'> See more </Link>
                </div>
            </div>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default ProductPop;
