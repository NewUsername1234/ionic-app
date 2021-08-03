import { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/react';
export const Search: React.FC = () => {

    /* mock data */
    const cities: Array<string> = ["Bantawora", "Capellanía", "Goczałkowice Zdrój", "Puerto Tejada", "Rolândia", "Göteborg", "Maní", "La Cañada", "Rukem", "Wutan", "Novyy Svit", "Mandalt", "Pangalangan", "Borlänge", "Boje", "Gadingrejo", "Krajan Pundungsari", "Babakankadu", "Fray Luis A. Beltrán", "Rudky", "Tsukawaki", "Xinxing", "Al Qārah", "Novyy Svit", "Buesaco", "Tsetsegnuur", "Sirari", "Karangpao", "Rumat Heib", "Tubalan", "Miskolc", "San Rafael", "Moundou", "Borek", "La Bélgica", "Saribudolok", "Klippan", "Ostrów Lubelski", "Haliut", "Quelimane", "Halteu", "Celorico de Basto", "Marne-la-Vallée", "Xinfeng", "Oesapa", "Xiangshui", "Santo Estêvão", "Limoeiro do Norte", "Tadrart", "San Pedro de Atacama", "Tyszowce", "Heshang", "Yichun", "Phitsanulok", "Vis", "Mokotów", "Lalapanzi", "Sena", "Kangani", "Carahue", "Alpedrinha", "Buenavista", "Cachan", "Akunk’", "Tieba", "Bagangan", "Pamedaran", "São Bento do Sul", "Sumbergayam", "Kazuno", "Shifo", "Babo-Pangulo", "Paços de Ferreira", "Ketanggungan", "Chisong", "Östersund", "Wanareja", "Dongwan", "Kalkara", "Bitaogan", "Muarabadak", "Kalinovskaya", "Brudzew", "Qinggou", "Jednorożec", "Naudero", "Orlovka", "Cherga", "Al Wardānīn", "Dongfeng", "Situsari", "Bieliny", "Zasip", "Ten’gushevo", "Karungdong", "Palaióchora", "Janaúba", "Fagatogo", "General Levalle", "Wuxing"
    ];

    /* states */
    const [searchText, setSearchText] = useState('');

    /* constants */
    const filteredCities = cities.filter(city =>
        city.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <IonPage id='search'>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton text='Back' defaultHref='/profile' color='primary' />
                        </IonButtons>
                        <IonTitle className='ion-text-center'>Search</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus" />
                <IonList>
                    {filteredCities.map((city, index) =>
                    (<IonItem key={index}>
                        <IonLabel>{city}</IonLabel>
                    </IonItem>))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Search;