import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { actions } from '../store';
import { MIN_STEP, MAX_STEP } from '../constants';
import { ReactComponent as Arrow } from '../img/arrow.svg';
import Button from './common/Button';

const headerFooterHeight = 72;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.header`
  ${({ theme: { colors }}) => css`
    width: 100%;
    height: ${headerFooterHeight}px;
    background-color: ${colors.white};
    box-shadow: inset 0px -1px 0px ${colors.lightGrey};
    z-index: 1;
  `}
`;

const Loader = styled.div`
  ${({ step, theme: { colors }}) => css`
    height: 4px;
    position: absolute;
    left: 0;
    top: ${headerFooterHeight}px;
    background-color: ${colors.green};
    width: ${step * 100 / MAX_STEP}%;
    transition: width 0.35s;
  `}
`;

const Main = styled.main`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.background};
    height: calc(100vh - ${2 * headerFooterHeight}px);
  `}
`;

const BlockWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 100%;
  height: ${headerFooterHeight};
  background-color: #fff;
  padding: 12px 160px;
`;

const Wrapper = ({ step, children, nextStep, previousStep }) => (
  <StyledWrapper>
    <Header/>
    <Loader step={step}/>
    <Main>
      <BlockWrapper>
        {children}
      </BlockWrapper>
    </Main>
    <Footer>
      <Button
        primary
        onClick={nextStep}
        disabled={step === MAX_STEP}
      >
        Next step
        <Arrow/>
      </Button>
      {step !== MIN_STEP && <Button secondary onClick={previousStep}>Back</Button>}
    </Footer>
  </StyledWrapper>
);

const mapStateToProps = (state) => ({
  step: state.step
});

const mapDispatchToProps = {
  nextStep: actions.nextStep,
  previousStep: actions.previousStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);