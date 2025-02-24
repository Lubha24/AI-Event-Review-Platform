import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: auto;
  text-align: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const StarRating = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffcc00;
  margin: 0.5rem 0;
`;

const SubmitButton = styled.button`
  background: #007bff;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #0056b3;
  }
`;

const ReviewForm = ({ onSubmit }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!review || rating === 0) {
      alert("Please provide a review and rating.");
      return;
    }
    onSubmit({ review, rating });
    setReview("");
    setRating(0);
  };

  return (
    <FormContainer>
      <h3>Submit Your Review</h3>
      <TextArea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <StarRating>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} onClick={() => setRating(star)}>
            {star <= rating ? "⭐" : "☆"}
          </span>
        ))}
      </StarRating>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </FormContainer>
  );
};

export default ReviewForm;
