import styled from 'styled-components';

export const AsideContainer = styled.div`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const AsideImg = styled.img`
  width: 48px;
`;

export const AsideFooter = styled.footer``;

export const AsideBtn = styled.button`
  width: 48px;
  height: 48px;

  border: 0;

  background: #12afcb;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #17d6eb;
  }
`;
