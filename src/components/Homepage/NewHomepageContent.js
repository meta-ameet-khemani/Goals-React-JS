import { Box, Typography } from "@mui/material";
import React from "react";

import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.jpg";

const NewHomepageContent = () => {
  return (
    <div>
      <center>
        <Box m={15} />
        <Typography variant="h5" color="common.white">
          This is your one stop destination for all expense management tasks.
        </Typography>
        <br />
        {/* <Typography variant="h5" color="common.white" align="center" width='50%'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography> */}
        <br />
        <br />
        <div>
          <img src={pic1} alt="transaction" width='30%' />
        </div>
        <br />
        <br />
        <Typography variant="h5" color="common.white" align="center" width='50%'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <div>
          <img src={pic2} alt="graphs" width='30%' />
        </div>
        <br />
        <br />
        <Typography variant="h5" color="common.white" align="center" width='50%'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <div>
          <img src={pic3} alt="write" width='30%' />
        </div>
      </center>
    </div>
  );
};

export default NewHomepageContent;
