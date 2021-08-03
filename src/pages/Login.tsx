import { useState, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonPage, IonInput, IonItem, IonLabel, IonList, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import './Login.css';


interface IProps {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
}
const Login: React.FC<IProps> = ({ name, setName }) => {

    /* history */
    const history = useHistory();

    /* states */
    const [password, setPassword] = useState<string>('');
    const [bgColour, setBgColour] = useState('white');

    /* functions */
    const checkCredentials = () => {
        if (name.split('').reverse().join('') === password) {
            history.push('/profile');
            setBgColour('white');
        } else {
            setBgColour('red');
        }
    }

    /* constants */
    const loginIsDisabled = (name.length !== 0 && password.length !== 0) ? false : true;

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
                            <IonButton color="primary" expand='block' onClick={checkCredentials} disabled={loginIsDisabled} fill='outline' shape='round'>Login</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;