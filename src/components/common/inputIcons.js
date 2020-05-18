import styled, { css } from 'styled-components';
import check from '../../img/check.svg';

export const RadioIcon = styled.div`
  ${({ marginRight, theme: { colors }}) => css`
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${colors.white};
    border-radius: 50%;
    border: 1px solid ${colors.green};
    margin-right: ${marginRight}px;
    padding: 2px;

    input:checked + &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: ${colors.green};
    }
  `}
`;

export const CheckIcon = styled.div`
  ${({ theme: { colors }}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid ${colors.green};
    margin-right: 26px;

    input:checked + & {
      background-color: ${colors.green};
      &::before {
        content: '';
        display: block;
        width: 10px;
        height: 8px;
        background-image: url('${check}');
        background-size: cover;
      }
    }
  `}
`;