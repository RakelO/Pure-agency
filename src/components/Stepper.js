import React from 'react';
import { connect } from 'react-redux';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';

const Stepper = ({ step }) => {
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    case 4:
      return <FourthStep />;
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  step: state.step
});

export default connect(mapStateToProps, null)(Stepper);