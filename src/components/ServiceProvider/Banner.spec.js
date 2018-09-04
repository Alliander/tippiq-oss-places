import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import Banner from './Banner';
import { Api } from '../../helpers';
import { configureStore } from '../../store';

const api = new Api();
const clientId = 'c63d545a-0633-11e6-b686-bb1d47039b65';

describe('Service provider Banner component', () => {
  it('should render', () => {
    const store = configureStore({}, browserHistory, false, api);
    const renderer = renderIntoDocument(
      <Provider store={store} key="provider">
        <Banner serviceProviderId={clientId} />
      </Provider>
    );

    return expect(renderer).toBeTruthy();
  });
});
