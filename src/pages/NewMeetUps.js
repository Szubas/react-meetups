import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetUpsPage() {

  const navigate = useNavigate();

  const addMeetup = (meetupData) => {
    fetch("https://reacttuttorial-default-rtdb.firebaseio.com/meetups.json", {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetupProp={addMeetup} />
    </section>
  );
}

export default NewMeetUpsPage;
