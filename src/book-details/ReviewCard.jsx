import { StarRating } from "./StarRating";

export const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
        <img
          src={review.avatar || 'https://i.pravatar.cc/40'}
          alt={review.userName}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-medium text-sm text-black">{review.userName || 'John Smith'}</p>
        <p className="text-xs text-green-500">Verified Purchase</p>
      </div>
    </div>
    <p className="text-xs text-gray-400 mb-1">
      Reviewed On {review.date || '28/07/2024'}
    </p>
    <div className="flex items-center gap-2 mb-2">
      <span className="font-semibold text-sm text-black">{review.title || 'Excellent Book'}</span>
      <span className="font-semibold text-sm text-gray-500">{review.rating}</span>
      <StarRating rating={review.rate || 5} />
    </div>
    <p className="text-sm text-gray-600">{review.comment}</p>
  </div>
);
