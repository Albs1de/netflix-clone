export default function ShowActualMovie() {
  return (
    <div className="flex justify-center" style={{ backgroundColor: "black" }}>
      <figure className=" relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <button>
          <img
            className="rounded-lg m-0"
            src="/images/marioMovie.jpeg"
            alt="Super Mario Bros Movie 2023"
          />
        </button>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>Actual Movie: Super Mario Bros</p>
        </figcaption>
      </figure>
    </div>
  );
}
