import React from 'react';
import { useQuery } from '@apollo/client';

function Query(props) {

  const { query, children } = props;

  return <>{children(useQuery(query))}</>;
}

export default Query;