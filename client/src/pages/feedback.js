import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the feedback
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <div>
      <h1>Feedback Page</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => window.location.href = '/'}>Go Back</button>
    </div>
  );
};

export default Feedback;
