import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { IonContent,  IonPage, IonInput, IonItem, IonLabel, IonList, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Login.css';


interface IProps {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
}
const Login: React.FC<IProps> = ({ name, setName }) => {

    /* states */

    const [password, setPassword] = useState<string>('');
    const [credentialsAreCorrect, setCredentialsAreCorrect] = useState(false);

    /* functions */
    const checkCredentials = () => {
        const result = name.split('').reverse().join('') === password ? true : false;
        setCredentialsAreCorrect(result);
    }

    /* useEffect */
    useEffect(() => { if (name.length !== 0 && password.length !== 0) checkCredentials() }, [name, password]);

    /* constants depending on credentials */
    const bgColour =
        (name.length !== 0 &&
            password.length !== 0) ?
            credentialsAreCorrect ?
                'white'
                :
                'lightcoral'
            : 'white';

    const loginIsDisabled = credentialsAreCorrect ? false : true;

    return (
        <IonPage id='login'>
            <IonContent style={{ '--background': bgColour }}>
                <IonGrid fixed={true} >
                    <IonRow>
                        <IonCol><h1 className="ion-text-center">Please Login:</h1></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonItem>
                                    <IonLabel position="stacked">Name</IonLabel>
                                    <IonInput type='text' value={name} onIonChange={e => setName(e.detail.value!)}> </IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="stacked">Password</IonLabel>
                                    <IonInput type='password' value={password} onIonChange={e => setPassword(e.detail.value!)}> </IonInput>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem button routerLink="/profile" disabled={loginIsDisabled}>
                                <IonLabel>Login</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>


        </IonPage>
    );
};

export default Login;