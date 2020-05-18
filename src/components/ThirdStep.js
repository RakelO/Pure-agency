import React from 'react';
import { connect } from 'react-redux';
import Title from './common/Title';
import FormWrapper from './common/FormWrapper';
import CheckLabel from './common/CheckLabel';
import { CheckIcon } from './common/inputIcons';
import { actions } from '../store';

const filingStatuses = [
  {
    id: 'single',
    label: 'Single'
  }, {
    id: 'married-jointly',
    label: 'Married filing jointly'
  }, {
    id: 'married-separatly',
    label: 'Married filing separately'
  }, {
    id: 'household',
    label: 'Head of Household'
  }, {
    id: 'widow',
    label: 'Qualifyng widow(-er) with dependent child'
  }
];

const ThirdStep = ({ values, changeValue }) => {
  const onChange = (e) => {
    const { checked, name } = e.target;
    changeValue({
      fieldName: 'filingStatus',
      value: checked ? [...values, name] : values.filter(item => item !== name)
    });
  }
  return (
    <>
      <Title>What best describes your filing status?</Title>
      <FormWrapper>
        {filingStatuses.map(({ id, label }) => (
          <CheckLabel htmlFor={id} key={id}>
            <input
              id={id}
              type="checkbox"
              name={id}
              checked={values.includes(id)}
              onChange={onChange}
            />
            <CheckIcon/>
              {label}
            </CheckLabel>
        ))}
      </FormWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  values: state.values.filingStatus
});

const mapDispatchToProps = {
  changeValue: actions.changeValue
};

export default connect(mapStateToProps, mapDispatchToProps)(ThirdStep);
