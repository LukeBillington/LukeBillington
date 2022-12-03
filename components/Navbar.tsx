import Link from "next/link";
import { useState } from "react";
import styled, { css } from "styled-components";

const NavbarWrapper = styled.nav<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  z-index: 1000;

  > div {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 96rem;
  }

  a {
    color: #ffffff;
    text-transform: uppercase;
    line-height: 5rem;
    display: block;
    margin-left: 1rem;
    margin-right: 1rem;
    text-decoration: none;

    :hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  ul {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  li {
    text-align: center;
    font-weight: 300;

    :nth-of-type(1) {
      font-size: 2.2rem;
      font-weight: 600;
    }
  }

  button {
    background-color: transparent;
    text-indent: -999rem;
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 0;
    opacity: 1;
    transition: opacity 0.2s;
    cursor: pointer;

    > div {
      position: relative;
    }

    span {
      display: block;
      width: 50%;
      height: 0.1rem;
      background-color: #ffffff;
      position: absolute;
      top: calc(50% - 0.05rem);
      left: 25%;
      transition: transform 0.2s;

      :nth-of-type(1) {
        transform: ${(props) =>
          props.visible ? "rotate(-225deg)" : "translateY(-0.4rem)"};
      }
      :nth-of-type(2) {
        transform: ${(props) =>
          props.visible ? "rotate(225deg)" : "translateY(0.4rem)"};
      }
    }
  }

  @media only screen and (max-width: 767px) {
    ${(props) => {
      const styles = [
        css`
          li:not(:nth-of-type(1)) {
            display: none;
          }

          ul {
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.9);
          }

          li:nth-of-type(1) {
            width: 100%;
          }
        `,
      ];
      if (props.visible) {
        styles.push(css`
          li {
            display: block !important;
          }
          ul {
            height: 100vh;
          }
        `);
      }
      return styles;
    }}
  }

  @media only screen and (min-width: 768px) {
    ul {
      justify-content: space-around;
    }

    li {
      flex: 1;
    }

    li:nth-of-type(1) {
      order: 2;
      flex: 2;
    }

    li:nth-of-type(2) {
      order: 1;
    }

    li:nth-of-type(3) {
      order: 2;
    }

    button {
      opacity: 0;
    }
  }
`;

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <NavbarWrapper visible={visible}>
      <div>
        <ul>
          <li>
            <Link href="/">Luke Billington</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <button
          onClick={() => {
            setVisible((old) => !old);
          }}
        >
          Menu
          <span />
          <span />
        </button>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
