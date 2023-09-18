
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import { baseUrl } from '../../../../config/server';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';

const UserReview=()=> {
  const {user}=useContext(AuthContext)
  console.log(user)
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isSendEnabled, setIsSendEnabled] = useState(false);
  const navigate = useNavigate();

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    const newFeedback = event.target.value;
    setFeedback(newFeedback);
    setIsSendEnabled(newFeedback.trim() !== '');
  };

  const handleSendClick = () => {
    // console.log(`Rating: ${rating}, Feedback: ${feedback}`, );
  };

  const submitFeedback = () => {
    const date = document.getElementsByName("date")[0].value;
    const name = user.first_name ?`${user.first_name} ${user.last_name}`: form.first_name.value;
    const profession = user.profession ? user.profession: form.profession.value;
    const image=user?.profile_image || "https://i.ibb.co/crZxsPm/review-Pic.png"
  
    if (rating === null) {
      alert("Please select a rating before submitting.");
      return;
    }
  
    const userFeedback = {
      feedback: feedback,
      name: name,
      date: date,
      profession: profession,
      rating: rating,
      image:image
    };
  
    fetch(`${baseUrl}/user-reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify( userFeedback ),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to submit review and rating.");
        }
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Feedback sent successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
    .catch((err) => {
      console.error(err);
    });
  };
  
  // const sendButtonHandler = () => {
  //   submitFeedback();
  // };

  return (
    <div className='mt-16'>
      <h2 className='text-3xl text-center font-bold text-primary mb-5'>Share your Feedback</h2>
      <p><span className='font-semibold'>Your feedback is important. However, we're unable to respond to comments or support requests submitted through this form</span>. Please <Link to="/contact" className="underline text-primary">contact us directly</Link> if you need help or have account or service-related questions.</p>
      <form  id="feedbackForm" 
      onSubmit={(e) => e.preventDefault()} 
      className=' md:w-1/2 w-full'>
        <div className='my-5'>
          <h1 className='text-lg md:text-xl'>How was your overall experience?</h1>
          <div className='flex justify-between gap-2'>
            {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
              <button className='py-2 px-3 border border-primary hover:bg-primary hover:text-white rounded-lg' 
              key={value} onClick={() => handleRatingClick(value)}>
                {value}
              </button>
            ))}
          </div>
          <div className='flex gap-11 text-[10px] md:text-[13px] justify-between mt-2'>
            <p>Not At All Satisfied</p>
            <p>Extremely Satisfied</p>
          </div>
        </div>
        {/* {rating && ( */}
          <div>
            <h1 className='text-lg md:text-xl my-2'>How can we improve your experience?</h1>
            <textarea
              placeholder="Please enter comments about your experience. To protect your identity, please do not submit personal or account information. We are unable to reply to questions or provide service assistance through this form."
              value={feedback}
              onChange={handleFeedbackChange}
              className="textarea textarea-bordered textarea-xs w-full h-28"
            />
            <div className='mt-5'>
              {user.first_name? 
                <input type="text" name="name" 
                defaultValue={user.first_name && user.first_name? user.first_name+ ' '+ user.last_name:user.first_name} className="border input input-bordered w-full"/>:
                <input type="text" name="first_name" placeholder="Your Name" className="input input-bordered w-full" />
              }
            </div>
            <div className='grid md:grid-cols-2 gap-5 my-5'>
              {user.profession? 
                <input type="text" name="name" defaultValue={user.profession} className="border input input-bordered w-full"/>:
                <input type="text" name="profession" placeholder="Your profession" 
                className="input input-bordered w-full" />
              }
              <input name="date" className="border px-3 py-3 rounded-md w-full" type="date" />
            </div>

            <p className='my-5'>By submitting feedback, you agree Nexus Bank, its affiliates and any authorized parties may use, commercialize or reproduce the feedback without restriction or any compensation to you. 
            {/* <Link>Privacy | Security</Link> */}
            </p>
            <button
            type="button"
            className="btn bg-primary border text-white hover:bg-gray-100 hover:text-primary hover:border-primary"
            disabled={!isSendEnabled}
            id="sendButton"
            onClick={() => submitFeedback()} 
        >
            Send Feedback
        </button>
          </div>
        {/* )} */}
      </form>
    </div>
  );
}

export default UserReview;