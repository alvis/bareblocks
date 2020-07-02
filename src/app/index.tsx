/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   An example dynamic react page
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { Link } from 'gatsby';
import React from 'react';

import type { FC } from 'react';

const App: FC = () => (
  <>
    <h1>A Dynamic React Page</h1>
    <p>
      <Link to="/">Back to the front page</Link>
    </p>
  </>
);

export default App;
