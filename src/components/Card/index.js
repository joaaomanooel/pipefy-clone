import React from 'react';

import { Container, Label } from './styles';

export default ({ data }) => {
  return (
    <Container>
      <header>{data.labels.map(label => <Label color={label} />)}</header>
      <p>{data.content}</p>
      {data.user && (<img src={data.user} alt="" />)}
    </Container>
  );
};
