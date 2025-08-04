import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplitText = ({
  text,
  delay = 100,
  duration = 0.9,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef();

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll("span");

    gsap.set(letters, from);

    gsap.to(letters, {
      ...to,
      ease,
      duration,
      stagger: delay / 1000,
      onComplete: onLetterAnimationComplete,
    });
  }, []);

  const split =
    splitType === "chars"
      ? text.split("")
      : splitType === "words"
      ? text.split(" ")
      : [text];

  return (
    <div
      ref={containerRef}
       style={{ fontSize: "100px", fontWeight: "600", textAlign: "center", color: "#97938fff" }}
    >
      {split.map((part, i) => (
        <span
          key={i}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {part}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
