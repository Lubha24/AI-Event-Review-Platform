import React, { useState } from "react";

function ReviewForm() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Review:", { rating, review });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      <br />
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
