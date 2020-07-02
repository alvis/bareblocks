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

import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { navigate } from 'gatsby';
import React from 'react';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import type { FC } from 'react';

const App: FC = () => {
  const auth0 = useAuth0();
  const name =
    (auth0.user as Record<string, string | undefined>).name ?? 'Default Name';

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>A Dynamic React Page</IonTitle>
          <IonButtons slot="primary">
            <IonButton color="light" onClick={async () => navigate('/')}>
              Back
            </IonButton>
            <IonButton
              onClick={() =>
                auth0.logout({ returnTo: window.location.origin })
              }>
              Logout
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>Welcome back {name}</IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default withAuthenticationRequired(App);
