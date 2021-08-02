import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import logo from './assets/fakt.svg';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');

  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonHeader>
          <IonToolbar>
            <IonList>
              <IonItem routerLink="/login">
                <IonLabel>Login</IonLabel>
              </IonItem>
              <IonItem routerLink="/profile">
                <IonLabel>Profile</IonLabel>
              </IonItem>
              <IonItem routerLink="/search">
                <IonLabel>Search</IonLabel>
              </IonItem>
            </IonList>
          </IonToolbar>
        </IonHeader> */}

          <IonRouterOutlet id='main'>
            <Route path="/login" exact >
              <Login name={name} setName={setName} />
            </Route>
            <Route path="/profile" exact >
              <Profile name={name} />
            </Route>
            <Route path="/search" component={Search} exact />
            <Route path="/" exact >
              <Redirect to="/login" />
            </Route>
          </IonRouterOutlet>

      </IonReactRouter>
    </IonApp >
  )
};

export default App;
