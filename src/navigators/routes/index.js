/**
 * routes/index.js
 *
 * @format
 * @flow strict-local
 */

'use strict';

import AuthedRoutes from './authedRoutes';
import UnauthedRoutes from './unauthedRoutes';
import AppLoadingRoute from './appLoadingRoute';

export {AppLoadingRoute, UnauthedRoutes, AuthedRoutes};
