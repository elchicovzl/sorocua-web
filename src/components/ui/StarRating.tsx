import Icon from "./Icon";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={`flex justify-center text-primary drop-shadow-xs ${className || ""}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name="star"
          filled={star <= rating}
          className="text-xl"
        />
      ))}
    </div>
  );
}
