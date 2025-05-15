import styled from 'styled-components';
import CV from "@/assets/CV_David_Immanuel_Resner.pdf";

const Button = () => {
  return (
    <StyledWrapper>
      <a href={CV} download className='btn'>Here's My CV</a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    font-size: 17px;
    background: transparent;
    border: none;
    padding: 1em 1.5em;
    color: var(--primary-foreground);
    text-transform: uppercase;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #895943;
    transition: 0.5s ease;
  }

  .btn:hover {
    color: var(--card);
    transition-delay: 0.5s;
  }

  .btn:hover::before {
    width: 100%;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #895943;
    transition: 0.4s ease;
    z-index: -1;
  }

  .btn:hover::after {
    height: 100%;
    transition-delay: 0.4s;
  }`;

export default Button;
