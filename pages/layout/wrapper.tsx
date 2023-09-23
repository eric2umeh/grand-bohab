import React from 'react';

interface Props {
  children: any;
}

const Wrapper = ({ children }: Props) => (
  <div>{children}</div>
);

export default Wrapper;
