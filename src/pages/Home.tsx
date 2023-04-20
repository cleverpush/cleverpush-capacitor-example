import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import React, { useEffect } from 'react';
import CleverPush from 'cleverpush-capacitor-sdk';

const Home: React.FC = () => {
  const handleOnSubscribed = (data: any) => {
    console.log('handleOnSubscribed', data);
  }

  const handleOnProcessAppBannerOpened = (data: any) => {
    console.log('handleOnProcessAppBannerOpened', data);
  }

  const handleOnProcessNotificationOpened = (data: any) => {
    console.log('handleOnProcessNotificationOpened', data);
  }

  const handleOnProcessNotificationReceived = (response: any) => {
    console.log('handleOnProcessNotificationReceived', response);
  }

  useEffect(() => {
    CleverPush.addListener('subscribed', handleOnSubscribed);
    CleverPush.addListener('appBannerOpened', handleOnProcessAppBannerOpened);
    CleverPush.addListener('notificationOpened', handleOnProcessNotificationOpened);
    CleverPush.addListener('notificationReceived', handleOnProcessNotificationReceived);
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Welcome to the Capacitor Test App.</p>
        <p>
          This app was created to test and develop Capacitor core and plugins.
          To test plugins, open the side menu and navigate to the plugin's page!
        </p>
        <IonButton
          shape='round'
          onClick={() => CleverPush.subscribe()}
        >
          Subscribe
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.isSubscribed().then(({ isSubscribed }) => window.alert(isSubscribed + ''))}
        >
          Is Subscribed
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.getSubscriptionId().then(({ subscriptionId }) => window.alert(subscriptionId))}
        >
          Get Subscription id
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => {
            CleverPush.init({
              channelId: 'RHe2nXvQk9SZgdC4x',
              autoRegister: false,
            })
          }}
        >
          Init CP
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.showTopicsDialog()}
        >
          Show Topic Dialog
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => window.alert('Test')}
        >
          Throw Alert
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
