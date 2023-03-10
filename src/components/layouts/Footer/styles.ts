import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--color-dark-grey);
  margin: 0 -1.6rem;
  padding: 0 1.6rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0rem;
    padding: 0 2.9 0 3rem;

    .footer-navbar {
      width: 100%;
      margin-bottom: 4rem;
      padding: 3rem 1.6rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    margin: 0;
  }

  .wrapper {
    width: 100%;
    max-width: 120rem;
    display: flex;
    justify-content: center;
    margin-top: 3.9rem;
    border-top: 1px solid var(--color-grey);

    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
`;
