import React, { useState } from "react";
import { Container, Card, ListGroup, Badge } from "react-bootstrap";
import ReviewForm from "../components/ReviewForm"; // Import the ReviewForm component

const ReviewsPage = () => {
  // Sample reviews data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      review: "Amazing event! The speakers were fantastic, and I learned a lot.",
      sentiment: "Positive", // AI sentiment analysis result
    },
    {
      id: 2,
      user: "Jane Smith",
      rating: 4,
      review: "Great experience, but the food could have been better.",
      sentiment: "Neutral", // AI sentiment analysis result
    },
    {
      id: 3,
      user: "Alice Johnson",
      rating: 2,
      review: "The event was poorly organized, and the sessions were boring.",
      sentiment: "Negative", // AI sentiment analysis result
    },
    {
      id: 4,
      user: "Bob Brown",
      rating: 5,
      review: "Absolutely loved it! Can't wait for the next one.",
      sentiment: "Positive", // AI sentiment analysis result
    },
  ]);

  // Function to render star ratings
  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  // Function to determine sentiment badge color
  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case "Positive":
        return "success";
      case "Neutral":
        return "warning";
      case "Negative":
        return "danger";
      default:
        return "secondary";
    }
  };

  // Function to handle new review submission
  const handleNewReview = (newReview) => {
    const review = {
      id: Date.now(), // Unique ID for the review
      user: "Anonymous", // Default user name
      rating: newReview.rating,
      review: newReview.review,
      sentiment: "Neutral", // Default sentiment (can be updated with AI analysis)
    };
    setReviews([...reviews, review]); // Add the new review to the list
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📝 Recent Reviews from Attendees</h2>

      {/* Review Form */}
      <ReviewForm onSubmit={handleNewReview} />

      {/* Reviews List */}
      <Card className="mt-4">
        <Card.Body>
          <ListGroup variant="flush">
            {reviews.map((review) => (
              <ListGroup.Item key={review.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{review.user}</h5>
                    <p>{review.review}</p>
                    <div>{renderStars(review.rating)}</div>
                  </div>
                  <Badge pill bg={getSentimentColor(review.sentiment)}>
                    {review.sentiment}
                  </Badge>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReviewsPage;