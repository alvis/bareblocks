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

import {
  IonApp,
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { navigate } from 'gatsby';
import React from 'react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import type { FC } from 'react';

const App: FC = () => (
  <>
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>A Dynamic React Page</IonTitle>
          <IonButtons slot="primary">
            <IonButton color="light" onClick={() => navigate('/')}>
              Back
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </IonApp>
  </>
);

export default App;
