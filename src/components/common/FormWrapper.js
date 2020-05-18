import styled, { css } from 'styled-components';

const FormWrapper = styled.div`
  ${({ theme: { colors }}) => css`
    width: 100%;
    border: 1px solid ${colors.lightGrey};
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(41, 47, 66, 0.07);
    margin-top: 32px;
  `}
`;

export default FormWrapper;
