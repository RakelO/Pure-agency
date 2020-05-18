import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Title from './common/Title';
import { RadioIcon } from './common/inputIcons';
import { calculateResult } from '../utils/calculateResult';

const TitleSecondary = styled.h4`
  ${({ theme: { colors }}) => css`
    color: ${colors.grey};
    font-size: 16px;
    line-height: 26px;
    margin: 0;
    text-align: center;
    font-weight: normal;
    margin-bottom: 32px;
  `}
`;

const Chip = styled.label`
  ${({ pro, theme: { colors }}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    border-radius: 4px;
    padding: 16px 24px;
    box-shadow: 0px 4px 8px rgba(41, 47, 66, 0.07);
    border: 1px solid ${colors.lightGrey};
    color: ${colors.darkGrey};
    height: 80px;
    margin-bottom: 16px;
    input {
      display: none;
    }
    ${pro && css`
      background-color: ${colors.purple};
      border-color: ${colors.darkPurple};
      box-shadow: 0px 2px 4px rgba(110, 91, 226, 0.3);
      color: ${colors.white};
    `}
  `}
`;

const InnerLeft = styled.div`
  display: flex;
  align-items: center;
`;

const InnerRight = styled.div`
  text-align: right;
`;

const Summ = styled.div`
  font-weight: 500;
  line-height: 26px;
`;

const SummTitle = styled.span`
  ${({ theme: { colors }}) => css`
    color: ${colors.lightGrey};
    font-size: 13px;
    line-height: 21px;
  `}
`;

const FourthStep = ({ values }) => (
  <>
    <Title>Ready to see your score?</Title>
    <TitleSecondary>We value a freedom of choice.
      You can pick our pre-selected PRO specially for you or find one on your own. You decide.
    </TitleSecondary>
    <Chip pro htmlFor="taxGig1">
      <input id="taxGig1" type="radio" name="status"/>
      <InnerLeft>
        <RadioIcon marginRight={12}/>
        TaxGig Hero
      </InnerLeft>
      <InnerRight>
        <SummTitle>Fixed price</SummTitle>
        <Summ>${calculateResult(values)}</Summ>
      </InnerRight>
    </Chip>
    <Chip htmlFor="taxGig2">
      <input id="taxGig2" type="radio" name="status"/>
      <InnerLeft>
        <RadioIcon marginRight={12}/>
        Find another Pro
      </InnerLeft>
    </Chip>
  </>
);

const mapStateToProps = (state) => ({
  values: state.values
});

export default connect(mapStateToProps, null)(FourthStep);
