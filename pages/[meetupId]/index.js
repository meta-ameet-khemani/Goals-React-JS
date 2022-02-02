import React from "react";

import dbConnect from "../../lib/dbConnect";
import Meetup from "../../models/Meetup";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <React.Fragment>
      {/* <MeetupDetail
        src={props.meetupData.src}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      /> */}
      <MeetupDetail
        src="https://static.toiimg.com/photo/msid-54312318,width-96,height-65.cms"
        title="A second meetup"
        address="Some dummy address"
        description="This is the second meetup"
      />
    </React.Fragment>
  );
};

export const getStaticPaths = async () => {
  await dbConnect();

  const meetups = await Meetup.find({}, { _id: 1 });
  // console.log(meetups);

  return {
    // defining all supported paths here
    // if set to true, then server will try to generate it
    fallback: false,
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString()
        },
      }
    }),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  await dbConnect();
  const { title, image, address, description } = await Meetup.findOne({_id: meetupId});
  return {
    props: {
      meetupData: { title, image, address, description },
    },
  };
};

export default MeetupDetails;
