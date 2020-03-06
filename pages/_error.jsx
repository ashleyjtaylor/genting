import React from 'react';

import Error from '../components/Error/Error';

const AppError = ({ statusCode }) => <Error statusCode={statusCode} />;

AppError.getInitialProps = async (props) => {
  return {
    statusCode: props.query.statusCode
  };
};

export default AppError;
