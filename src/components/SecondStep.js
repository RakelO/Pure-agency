import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Title from './common/Title';
import { actions } from '../store';

const StyledLabel = styled.label`
  ${({ theme: { colors }}) => css`
    display: block;
    color: ${colors.grey};
    font-size: 13px;
    line-height: 21px;
    font-weight: 500;
    margin-top: 30px;
    text-align: left;
    width: 100%;
  `}
`;

const StyledInput = styled.input`
  ${({ theme: { colors }}) => css`
    display: block;
    border: 1px solid ${colors.lightGrey};
    background-color: ${colors.white};
    font-size: inherit;
    color: ${colors.darkGrey};
    line-height: 26px;
    border-radius: 4px;
    padding: 10px 16px;
    width: 100%;
  `}
`;

const SecondStep = ({ value, changeValue }) => (
  <>
    <Title>How many separate sole proprietorships do you operate?</Title>
    <StyledLabel htmlFor="proprietorships">Please enter a quantity</StyledLabel>
    <StyledInput
      type="number"
      id="proprietorships"
      name="proprietorships"
      value={value}
      min={1}
      onChange={(e) => {
        changeValue({
          fieldName: 'proprietorships',
          value: e.target.value
        });
      }}
    />
  </>
);

const mapStateToProps = (state) => ({
  value: state.values.proprietorships
});

const mapDispatchToProps = {
  changeValue: actions.changeValue
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondStep);