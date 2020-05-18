import styled, { css } from 'styled-components';

const CheckLabel = styled.label`
  ${({ theme: { colors }}) => css`
    display: flex;
    align-items: center;
    line-height: 26px;
    padding: 20px 28px;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.lightGrey};
    cursor: pointer;
    &:last-child {
      border: none;
    }
    & input {
      display: none;
    }
  `}
`;

export default CheckLabel;