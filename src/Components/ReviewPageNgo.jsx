import React, { useState } from "react";

const ReviewPage = ({ feedbackAndReviews }) => {
    const [showAllReviews, setShowAllReviews] = useState(false);

    // Add a conditional check to prevent accessing properties of undefined feedbackAndReviews
    if (!feedbackAndReviews) {
        return null; // or render a loading indicator or placeholder
    }

    return (
        <div className="border-t border-gray-300 py-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Feedback & Reviews</h2>
            {feedbackAndReviews.slice(0, showAllReviews ? feedbackAndReviews.length : 3).map((review, index) => (
                <div key={index} className="mb-6">
                    <div className="flex items-center mb-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 ${i >= review.rating ? 'text-gray-300' : 'text-yellow-400'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ))}
                        </div>
                        <p className="ml-2 text-gray-700">{review.rating} star</p>
                    </div>
                    <div className="flex items-center">
                        <img src={review.photo} alt="Organizer" className="h-8 w-8 rounded-full" />
                        <p className="ml-2 text-gray-700">{review.personName}</p>
                    </div>
                    <p className="text-gray-700 mt-2">{review.comment}</p>
                </div>
            ))}
            {feedbackAndReviews.length > 3 && (
                <button
                    className="text-blue-600"
                    onClick={() => setShowAllReviews(!showAllReviews)}
                >
                    {showAllReviews ? 'Hide' : 'See All Reviews'}
                </button>
            )}
        </div>
    );
};

export default ReviewPage;
