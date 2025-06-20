export function StarRating({ rating }: { rating: number }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 1.5l2.93 5.94 6.56.95-4.75 4.63 1.12 6.53L10 15.27 5.14 19.55l1.12-6.53-4.75-4.63 6.56-.95L10 1.5z" />
          </svg>
        );
      } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="halfGrad">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill="url(#halfGrad)"
              d="M10 1.5l2.93 5.94 6.56.95-4.75 4.63 1.12 6.53L10 15.27 5.14 19.55l1.12-6.53-4.75-4.63 6.56-.95L10 1.5z"
            />
            <path
              fill="none"
              stroke="currentColor"
              d="M10 1.5l2.93 5.94 6.56.95-4.75 4.63 1.12 6.53L10 15.27 5.14 19.55l1.12-6.53-4.75-4.63 6.56-.95L10 1.5z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 stroke-current"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path d="M10 1.5l2.93 5.94 6.56.95-4.75 4.63 1.12 6.53L10 15.27 5.14 19.55l1.12-6.53-4.75-4.63 6.56-.95L10 1.5z" />
          </svg>
        );
      }
    }

    return <div className="flex gap-1">{stars}</div>;
  }