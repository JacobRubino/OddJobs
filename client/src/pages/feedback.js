import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTRACTOR_NAMES } from '../utils/queries';

import './feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [starRating, setStarRating] = useState('');

  const { loading, error, data } = useQuery(GET_CONTRACTOR_NAMES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching contractor names: {error.message}</div>;

  const { contractorNames } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Rest of the handleSubmit function
  };

  return (
    <div className="feedback-container">
      <h2 className="text-center">
        Your voice matters!!! Help others by providing feedback for the contractor you hired.
      </h2>
      <form className="new-review-form" onSubmit={handleSubmit}>
        <select
          className="form-control input-field"
          id="contractor-name"
          name="contractor-name"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        >
          <option value="">Select Contractor</option>
          {contractorNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        {/* Rest of the form */}
        {/*
          Add the following input field for star rating
        */}
  <input
          type="number"
          id="star_rating"
          name="star_rating"
          placeholder="Rate your experience from 1(lowest) to 5(highest) stars."
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
          placeholder="Provide more detail about your experience here."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;

