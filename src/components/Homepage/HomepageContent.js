import React from "react";

import classes from "./HomepageContent.module.css";
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.jpg';

const HomepageContent = () => {
  return (
    <div>
      <center>
        <h2 className={classes.heading}>
          This is your one stop destination for all expense management tasks.
        </h2>
        <p>From this to that</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
        <br />
        <div>
          <img
            src={pic1}
            alt="transaction"
          />
        </div>
        <br />
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div>
          <img
            src={pic2}
            alt="graphs"
          />
        </div>
        <br />
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div>
          <img
            src={pic3}
            alt="write"
          />
        </div>
      </center>
    </div>
  );
};

export default HomepageContent;
