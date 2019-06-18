import React from 'react';

import Placeholder, { Media } from 'rn-placeholder';

import { PlaceholderView } from './styles';

const PlaceholderLoading = loading => (
  <Placeholder isReady={!loading} animation="fade">
    <PlaceholderView>
      <Media size={160} margin={13} />
      <Media size={160} margin={13} />
      <Media size={160} margin={13} />
      <Media size={160} margin={13} />
      <Media size={160} margin={13} />
      <Media size={160} margin={13} />
    </PlaceholderView>
  </Placeholder>
);

export default PlaceholderLoading;
