import React from 'react';

import maleAvatar1 from '../../assets/avatar/maleAvatar1.jpg';
import maleAvatar2 from '../../assets/avatar/maleAvatar2.png';

const About = () => {
  return <React.Fragment>
      <center>
        <p>We are a team of 2 persons</p>
        <br />
        <div>
            <img style={{ width: '15%' }}
                src={maleAvatar1}
                alt='Shubham Khatri'
            />
            <br />
            <p>Shubham Khatri</p>
        </div>
        <br />
        <div>
            <img style={{ width: '15%' }}
                src={maleAvatar2}
                alt='Ameet Khemani'
            />
            <br />
            <p>Ameet Khemani</p>
        </div>
      </center>
  </React.Fragment>;
};

export default About;
