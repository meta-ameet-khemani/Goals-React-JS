import React, { Fragment } from "react";
// import { useState, useEffect } from 'react';
// https://static.toiimg.com/photo/msid-54312318,width-96,height-65.cms
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "1",
    title: "A first meetup",
    image:
      "https://static.toiimg.com/photo/msid-54312318,width-96,height-65.cms",
    address: "Some dummy address",
    description: "This is the first meetup",
  },
  {
    id: "2",
    title: "A second meetup",
    image:
      "https://static.toiimg.com/photo/msid-54312318,width-96,height-65.cms",
    address: "Some dummy address",
    description: "This is the second meetup",
  },
  {
    id: "3",
    title: "A third meetup",
    image:
      "https://static.toiimg.com/photo/msid-54312318,width-96,height-65.cms",
    address: "Some dummy address",
    description: "This is the third meetup",
  },
];

const getData = async () => {
  const response = await fetch("http:localhost:3000/api/meetup", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse.data.map(meetup => {
    return {
      id: meetup._id.toString(),
      title: meetup.title,
      address: meetup.address,
      description: meetup.description,
      image: meetup.image
    }
  });
};

const Homepage = (props) => {
  // const [meetups, setMeetups] = useState([]);

  // useEffect(() => {
  //   setMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <Fragment>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// this will run only on server
// export const getServerSideProps = context => {
//   // const req = context.req;
//   // const res = context.res;
//   return {
//     props: {
//       meetups: getData()
//     }
//   }
// }

// must be in page component for pre-render page
export const getStaticProps = async () => {
  return {
    props: {
      meetups: await getData(),
    },
    revalidate: 1,
  };
};

export default Homepage;
