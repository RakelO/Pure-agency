import styled, { css } from 'styled-components';

const Title = styled.h2`
  ${({ theme: { colors }}) => css`
    color: ${colors.darkGrey};
    font-size: 38px;
    line-height: 60px;
    text-align: center;
    margin: 0;
    font-weight: 500;
  `}
`;

export default Title;