import { useState } from "react";

export default function App() {
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div
      className="star-wrap"
      style={{ display: "flex", alignItems: "center", columnGap: "15px" }}
    >
      <div className="star-img" style={{ display: "flex" }}>
        {Array.from({ length: 10 }, (_, i) => {
          return (
            <Star key={i} onResut={() => setStar(i + 1)} full={hover ? hover>=i+1 : star >= i + 1} onMouseIn = {() => setHover(i+1)} onMouseOut = {() => setHover(0)} />
          );
        })}
      </div>
      <p>{ hover ||star || ""}</p>
    </div>
  );
}

function Star({ full, onResut, onMouseIn, onMouseOut }) {
  return (
    <span
      role="button"
      onClick={onResut}
      style={{ width: "25px", height: "25px", margin: "15px 0 ", display: "block", cursor: "pointer" }}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#FDE767"
          stroke="#FDE767"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FDE767"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
