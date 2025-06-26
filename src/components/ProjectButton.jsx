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

  a {
    position: relative;
    display: inline-block;
    padding: 8px 18px; /* Ukuran lebih kecil */
    border: 2px solid #212121;
    text-transform: uppercase;
    color: #212121;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px; /* Ukuran font lebih kecil */
    background: transparent;
    overflow: hidden;
    transition: color 0.3s, background 0.3s;
    border-radius: 6px;
  }

  a:hover {
    background: #212121;
    color: #fff;
  }

  a span {
    position: relative;
    z-index: 3;
  }
`;

export default CVButton;