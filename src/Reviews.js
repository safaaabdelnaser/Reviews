import React, { useState } from "react";
import reviews from "./Data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";
const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {  name, job, image, text } = reviews[currentIndex];
  console.log(reviews);
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const prevPeople = () => {
    setCurrentIndex(checkNumber(currentIndex - 1));
  };
  const nextPeople = () => {
    setCurrentIndex(checkNumber(currentIndex + 1));
  };
  const randomPeople = () => {
    let randomPeople = Math.floor(Math.random() * reviews.length);
    if (randomPeople === currentIndex) {
        randomPeople = currentIndex + 1;
    }
    setCurrentIndex(checkNumber(randomPeople));
  };
  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPeople}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPeople}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPeople}>Suprise me</button>
      </article>
    </>
  );
};

export default Reviews;
