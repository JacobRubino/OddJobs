import React, { useState } from 'react';
import './feedback.css'; // Import the CSS file for Feedback component

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [starRating, setStarRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate starRating value
    if (starRating < 1 || starRating > 5) {
      alert('Please enter a star rating between 1 and 5.');
      return;
    }

    // Submit the feedback
    console.log('Feedback submitted:', feedback);
    console.log('Star rating:', starRating);

    // Reset form fields
    setFeedback('');
    setStarRating('');
  };

  return (
    <div className="feedback-container">
      <h2 className="text-center">Your voice matters!!! Help others by providing feedback for the contractor you hired.</h2>
      <form className="new-review-form" onSubmit={handleSubmit}>
        <input
          className="form-control input-field"
          type="text"
          id="review-title"
          name="user-name"
          placeholder="Contractor Name"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
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
