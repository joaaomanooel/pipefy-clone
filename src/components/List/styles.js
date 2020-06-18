import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 0 15px;
  opacity: ${({ done }) => done && 0.6};
  flex: 0 0 320px; /** flex-grow: 0; flex-shrink: 0; flex-basis: 320px */

  & + div {
   border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      border: 0;
      background-color: #3B5BFD;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
