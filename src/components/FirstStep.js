import React from 'react';
import { connect } from 'react-redux';
import Title from './common/Title';
import FormWrapper from './common/FormWrapper';
import CheckLabel from './common/CheckLabel';
import { RadioIcon } from './common/inputIcons';
import { actions } from '../store';

const employmentStatuses = [
  {
    id: 'employed',
    label: 'Employed'
  }, {
    id: 'unemployed',
    label: 'Unemployed'
  }, {
    id: 'self-employed',
    label: 'Self-employed'
  }
];

const FirstStep = ({ value, changeValue }) => {
  const onChange = (e) => {
    changeValue({
      fieldName: 'employmentStatus',
      value: e.target.value
    });
  }
  return (
    <>
      <Title>What is your employment status?</Title>
      <FormWrapper>
        { employmentStatuses.map(({ id, label }) => (
          <CheckLabel htmlFor={id} key={id}>
            <input
              checked={value === id}
              id={id}
              value={id}
              type="radio"
              name="employmentStatus"
              onChange={onChange}
            />
            <RadioIcon marginRight={28}/>
            {label}
          </CheckLabel>
        ))}
      </FormWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.values.employmentStatus
});

const mapDispatchToProps = {
  changeValue: actions.changeValue
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstStep);