import styled from 'styled-components';

const CVButton = () => {
  return (
    <StyledWrapper>
      <a href="#projects" className="button">
        <span className="button-content">View My Work</span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

  .button {
    position: relative;
    overflow: hidden;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: var(--primary);
    background-size: 400%;
    color: var(--primary-foreground);
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1rem;
    transition: background 0.3s;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 0;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      rgba(181, 101, 29) 20.8%,
      rgba(150, 75, 0) 94.3%
    );
    transition: all 0.475s;
    z-index: -1;
  }
`;

export default CVButton;