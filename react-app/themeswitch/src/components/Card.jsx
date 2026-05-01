const PRODUCTS = [
  {
    id: 1,
    title: "MacBook Pro",
    subtitle: "GPS · Aluminium · Starlight Sport",
    price: "$599",
    originalPrice: "$749",
    image:
      "https://images.unsplash.com/photo-1678138091332-432d4a1ac407?q=80&w=800&auto=format&fit=crop",
    rating: 4,
    reviews: 2841,
    tag: "Best Seller",
    tagColor:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  },
];

const StarRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2">
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 transition-colors ${
            i < rating ? "text-amber-400" : "text-stone-200 dark:text-stone-700"
          }`}
          fill="currentColor"
          viewBox="0 0 22 20"
          aria-hidden="true"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
    </div>
    <span className="text-xs text-stone-400 dark:text-stone-500 font-[Outfit,sans-serif]">
      ({reviews.toLocaleString()})
    </span>
  </div>
);

function ProductCard({ product }) {
  return (
    <article
      className="
      group relative w-full max-w-sm
      rounded-3xl overflow-hidden
      bg-white dark:bg-stone-900
      border border-stone-100 dark:border-stone-800
      shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]
      dark:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)]
      hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.18)]
      dark:hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.7)]
      hover:-translate-y-1
      transition-all duration-500 ease-out
    "
    >
      <div
        className="
        relative overflow-hidden
        bg-linear-to-br from-stone-50 to-stone-100
        dark:from-stone-800 dark:to-stone-900
        h-64
      "
      >
        <span
          className={`
          absolute top-4 left-4 z-10
          text-[10px] font-semibold tracking-widest uppercase
          px-2.5 py-1 rounded-full
          font-[Outfit,sans-serif]
          ${product.tagColor}
        `}
        >
          {product.tag}
        </span>
        <button
          aria-label="Add to wishlist"
          className="
            absolute top-4 right-4 z-10
            w-8 h-8 rounded-full
            bg-white/90 dark:bg-stone-800/90
            backdrop-blur-sm
            flex items-center justify-center
            border border-stone-100 dark:border-stone-700
            text-stone-400 hover:text-rose-500
            hover:scale-110
            transition-all duration-200
            shadow-sm
          "
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="
            w-full h-full object-cover
            group-hover:scale-105
            transition-transform duration-700 ease-out
          "
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div>
          <h2
            className="
            font-[Playfair_Display,Georgia,serif]
            text-lg font-bold leading-snug
            text-stone-900 dark:text-stone-50
          "
          >
            {product.title}
          </h2>
          <p
            className="
            text-xs text-stone-400 dark:text-stone-500
            font-[Outfit,sans-serif] mt-0.5 tracking-wide
          "
          >
            {product.subtitle}
          </p>
        </div>

        <StarRating rating={product.rating} reviews={product.reviews} />

        <div className="h-px bg-stone-100 dark:bg-stone-800" />

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span
              className="
              font-[Playfair_Display,Georgia,serif]
              text-2xl font-bold
              text-stone-900 dark:text-white
            "
            >
              {product.price}
            </span>
            <span
              className="
              text-xs line-through
              text-stone-400 dark:text-stone-600
              font-[Outfit,sans-serif]
            "
            >
              {product.originalPrice}
            </span>
          </div>

          <button
            type="button"
            className="
              flex items-center gap-1.5
              px-4 py-2 rounded-xl
              bg-stone-900 dark:bg-amber-500
              text-white dark:text-stone-900
              text-xs font-semibold tracking-wide
              font-[Outfit,sans-serif]
              hover:bg-stone-700 dark:hover:bg-amber-400
              active:scale-95
              transition-all duration-200
              shadow-md hover:shadow-lg
              focus-visible:outline-2 focus-visible:outline-amber-500 focus-visible:outline-offset-2
            "
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Card() {
  return <ProductCard product={PRODUCTS[0]} />;
}
