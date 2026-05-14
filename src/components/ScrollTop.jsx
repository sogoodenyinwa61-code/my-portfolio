import { useEffect, useState } from "react";

function ScrollTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {showButton && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollTop;