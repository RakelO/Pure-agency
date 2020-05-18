import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ primary, secondary, theme: { colors } }) => css`
    display: flex;
    align-items: center;
    line-height: 46px;
    padding: 0 24px;
    border-radius: 4px;
    font-size: inherit;
    cursor: pointer;
    stroke: ${colors.white};
    & svg {
      margin-left: 14px;
    }
    &:disabled {
      background-color: ${colors.disabled};
      border-color: ${colors.lightGrey};
      color: ${colors.lightGrey2};
      box-shadow: none;
      stroke: ${colors.lightGrey2};
      &:hover {
        box-shadow: none;
      }
    }
    ${primary && css`
      background-color: ${colors.green};
      border-color: ${colors.darkGreen};
      color: ${colors.white};
      box-shadow: 0px 2px 4px rgba(73, 129, 18, 0.3);
      &:hover {
        box-shadow: 0px 2px 10px rgba(73, 129, 18, 0.7);
      }
    `}
    ${secondary && css`
      background-color: ${colors.white};
      border-color: ${colors.lightGrey};
      color: ${colors.grey};
      box-shadow: 0px 2px 4px rgba(133, 136, 146, 0.12);
      &:hover {
        box-shadow: 0px 2px 10px rgba(133, 136, 146, 0.4);
      }
    `}
  `}
`;

export default Button;