import { useRouter } from "next/router";
import React from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();

  const onMeetupAddHandler = async (meetupData) => {
    const response = await fetch("/api/meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    router.push("/");
  };

  return (
    <React.Fragment>
      <NewMeetupForm onAddMeetup={onMeetupAddHandler} />
    </React.Fragment>
  );
};

export default NewMeetup;
