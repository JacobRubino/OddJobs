import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CONTRACTOR_NAMES, GET_FEEDBACK } from '../utils/queries';
import { ADD_FEEDBACK } from '../utils/mutations';

import './feedback.css';
import Auth from '../utils/auth';

const Feedback = () => {
  const [contractorName, setContractorName] = useState('');
  const [starRating, setStarRating] = useState('');
  const [review, setReview] = useState('');
  const [dateOfService, setDateOfService] = useState('');
  const [userName, setUserName] = useState('');
  const { loading, error, data } = useQuery(GET_CONTRACTOR_NAMES);
  const { loading: feedbackLoading, error: feedbackError, data: feedbackData } = useQuery(GET_FEEDBACK);
  const [addFeedback] = useMutation(ADD_FEEDBACK);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching contractor names: {error.message}</div>;
  if (feedbackLoading) return <div>Loading feedback...</div>;
  if (feedbackError) return <div>Error fetching feedback: {feedbackError.message}</div>;

  const { contractorNames } = data;
  const { feedback } = feedbackData;

  const handleSubmit = (e) => {
    e.preventDefault();

    addFeedback({
      variables: {
        contractorName,
        starRating: Number(starRating),
        review,
        dateOfService,
        userName,
      },
      refetchQueries: [{ query: GET_FEEDBACK }],
    })
      .then(() => {
        setContractorName('');
        setStarRating('');
        setReview('');
        setDateOfService('');
        setUserName('');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Function to convert numeric rating to stars
  const convertToStars = (rating) => {
    const starColors = ['red', 'pink', 'yellow', 'green', 'darkgreen'];
    const filledStars = Array(rating).fill().map((_, index) => (
      <span key={`filled-${index}`} className="star" style={{ color: starColors[rating - 1] }}>
        ★
      </span>
    ));
    const emptyStars = Array(5 - rating).fill().map((_, index) => (
      <span key={`empty-${index}`} className="star" style={{ color: 'gray' }}>
        ☆
      </span>
    ));
    return [...filledStars, ...emptyStars];
  };

  // Check if the user is logged in
  const isLoggedIn = Auth.loggedIn();

  return (
    <div className="feedback-container">
      {isLoggedIn ? (
        <div className="feedback-comments-container">
          <h3>Feedback Comments:</h3>
          <div className="feedback-comments-row">
            {feedback.map((comment, index) => (
              <div key={index} className="card comment-card">
                <div className="card-body">
                  <h5 className="card-title">{comment.contractorName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Rating: {convertToStars(comment.starRating)}
                  </h6>
                  {isLoggedIn && (
                    <>
                      <p className="card-text">Date of Service: {comment.dateOfService}</p>
                      <p className="card-text">User Name: {comment.userName}</p>
                    </>
                  )}
                  <p className="card-text">Review: {comment.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-center">
            Your voice matters!!! Help others by providing feedback for the contractor you hired.
          </h2>
          <form className="new-review-form" onSubmit={handleSubmit}>
            <select
              className="form-control input-field"
              id="contractor-name"
              name="contractor-name"
              value={contractorName}
              onChange={(e) => setContractorName(e.target.value)}
            >
              <option value="">Select Contractor</option>
              {contractorNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <input
              type="text"
              id="date-of-service"
              name="date-of-service"
              placeholder="Date of Service (MM/DD/YYYY)"
              className="form-control input-field"
              value={dateOfService}
              onChange={(e) => setDateOfService(e.target.value)}
            />
            <input
              type="text"
              id="user-name"
              name="user-name"
              placeholder="Your Name"
              className="form-control input-field"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="number"
              id="star_rating"
              name="star_rating"
              placeholder="Rate your experience from 1 (lowest) to 5 (highest) stars."
              className="form-control input-field"
              min="1"
              max="5"
              value={starRating}
              onChange={(e) => setStarRating(e.target.value)}
            />
            <textarea
              className="form-control textarea-field"
              id="review"
              name="review"
              rows="5"
              placeholder="Provide more details about the kind of service you received."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Add Feedback
            </button>
          </form>
          <div className="feedback-comments-container">
            <h3>Feedback Comments:</h3>
            <div className="feedback-comments-row">
              {feedback.map((comment, index) => (
                <div key={index} className="card comment-card">
                  <div className="card-body">
                    <h5 className="card-title">{comment.contractorName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Rating: {convertToStars(comment.starRating)}
                    </h6>

                        <p className="card-text">Date of Service: {comment.dateOfService}</p>
                        <p className="card-text">User Name: {comment.userName}</p>

                    <p className="card-text">Review: {comment.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Feedback;
