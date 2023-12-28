import React, { useRef, useState } from "react";

const ScrollComponent = ({ children }) => {
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -50 : 50;
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  window.addEventListener("resize", () => {
    setIsDesktop(window.innerWidth > 768);
  });

  return (
    <div className="scroll-container">
      <div className="scroll-button-container">
        {isDesktop && (
          <button
            className="scroll-button"
            onClick={() => handleScroll("left")}
          >
            ◄
          </button>
        )}
      </div>
      <div className="scroll-content-container" ref={scrollRef}>
        <div className="scroll-content">{children}</div>
      </div>
      <div className="scroll-button-container">
        {isDesktop && (
          <button
            className="scroll-button"
            onClick={() => handleScroll("right")}
          >
            ►
          </button>
        )}
      </div>
      {!isDesktop && (
        <div className="scroll-bar-container">
          <div className="scroll-bar x-scroll" />
          <div className="scroll-bar y-scroll" />
        </div>
      )}
    </div>
  );
};

const ScrollComponentStyles = `
.scroll-container {
  position: relative;
  overflow: hidden;
}

.scroll-content-container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.scroll-content {
  width: max-content;
  display: flex;
  scroll-snap-align: start;
}

.scroll-button-container {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.scroll-button-container:hover {
  opacity: 1;
}

.scroll-button {
  border: none;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
  user-select: none;
}

.scroll-bar-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.3);
}

.scroll-bar {
  position: absolute;
  height: 100%;
  background-color: white;
}

.x-scroll {
  width: 100%;
  left: 0;
}

.y-scroll {
  width: 8px;
  right: 0;
  height: 100%;
}

@media (min-width: 768px) {
  .scroll-button-container {
    display: none;
  }

  .scroll-bar-container {
    display: none;
  }
}
`;

export { ScrollComponent, ScrollComponentStyles };
