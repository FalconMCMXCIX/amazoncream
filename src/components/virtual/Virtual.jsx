import React from 'react';
import css from './Vurtual.module.css';
import Shade from '../../assets/shade.png';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';
import ReactCompareImage from 'react-compare-image';



const Virtual = () => {
  return (
    <div className={css.Virtual}>
        <div className={css.left}>
            <span>Virtual Try-On</span>
            <span>Never buy the wrong Shade Again</span>
            <span>Try now</span>
            <img src={Shade} alt="shade"/>
        </div>
        <div className={css.right}>
            <div className={css.wrapper}>
                <ReactCompareImage 
                leftImage={Before}
                rightImage={After}/>
            </div>
        </div>
    </div>
  )
}

export default Virtual