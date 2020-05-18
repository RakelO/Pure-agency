export const calculateStep = ({ step, values }, direction) => {
  const nextStep = step + direction;
  if (nextStep === 2 && values.employmentStatus !== 'self-employed') {
    return nextStep + direction;
  }
  return nextStep;
};
