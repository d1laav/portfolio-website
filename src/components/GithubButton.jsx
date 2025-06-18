import styled from "styled-components";
import { Github } from "lucide-react";

const CubeButton = () => {
  return (
    <StyledWrapper>
      <a
        href="https://github.com/d1laav"
        target="_blank"
        rel="noopener noreferrer"
        className="button-icon"
      >
        <div className="icon">
          <Github />
        </div>
        <div className="cube">
          <div className="side front">Here's My GitHub</div>
          <div className="side top">Let's Go!</div>
        </div>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-icon {
    display: flex;
    border: 2px #fff solid;
    border-radius: 0.4rem;
    width: fit-content;
    cursor: pointer;
    overflow: hidden;
    transition: border-color 0.3s;
    text-decoration: none;
    perspective: 1200px;
  }

  .icon {
    background-color: hsl(var(--primary));
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon svg {
    width: 20px;
    height: 20px;
    color: hsl(var(--primary-foreground));
  }

  .cube {
    position: relative;
    width: 180px;
    height: 48px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
  }

  .button-icon:hover .cube {
    transform: rotateX(90deg);
  }

  .side {
    position: absolute;
    width: 100%;
    height: 100%;
    font-weight: 600;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 0; /* pastikan tidak menyebabkan deformasi */
    box-sizing: border-box;
  }

  .front {
    background: #222229;
    color: white;
    transform: rotateX(0deg) translateZ(24px);
  }

  .top {
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    transform: rotateX(-90deg) translateZ(24px);
  }

  .button-icon:hover {
    border-color: #8b4513;
  }
`;

export default CubeButton;
