const employmentStatusMap = {
  employed: 10,
  unemployed: 20,
  'self-employed': 30
};

export const calculateResult = ({ employmentStatus, proprietorships, filingStatus }) => {
  const employmentStatusPrice = employmentStatusMap[employmentStatus];
  const filingStatusPrice = filingStatus.length <= 1 ? 10 : filingStatus.length * 5;
  const multiplier = (employmentStatus === 'self-employed' && proprietorships > 1) ? proprietorships : 1;

  return (employmentStatusPrice + filingStatusPrice) * multiplier;
};
