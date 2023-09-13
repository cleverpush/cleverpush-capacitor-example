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
          onClick={() => {
            CleverPush.init({
              channelId: 'RHe2nXvQk9SZgdC4x',
              autoRegister: false,
            })
            //CleverPush.setShowNotificationsInForeground({showNotifications:true})
            
          }}
        >
          Init CP
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.subscribe()}
        >
          Subscribe
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.unsubscribe()}
        >
          Unsubscribe
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
          onClick={() => CleverPush.showTopicsDialog()}
        >
          Show Topic Dialog
        </IonButton>


        <IonButton
          shape='round'
          onClick={() => CleverPush.trackPageView({ url: "TRACK_PAGE_VIEW_URL_STRING" })}
        >
          Track PageView
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.addSubscriptionTag({ tagId:"Add_Subscription_Tag_STRING"})}    
        >
          Add SubscriptionTag
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.removeSubscriptionTag({ tagId: "REMOVE_Subscription_Tag_STRING" })}
        >
          Remove SubscriptionTag
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.hasSubscriptionTag({tagId:"HAS_Subscription_Tag_STRING"})}
        >
          Has SubscriptionTag
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.getSubscriptionTags()}
        >
          Get SubscriptionTags
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.setSubscriptionTopics({topics:["set_Subscription_Topics_ONE","set_Subscription_Topics_TWO"]})}
        >
          Set SubscriptionTopics
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.getSubscriptionTopics()}
        >
          Get SubscriptionTopics
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.getAvailableTopics()}
        >
          Get AvailableTopics
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.enableDevelopmentMode()}
        >
          Enable Development Mode
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.setAuthorizerToken({token:"set_Authorizer_Token"})}
        >
          Set Authorizer Token
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.trackEvent({eventName:"TRACK_EVENT_DATA"})}
        >
          Track Event
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.getNotifications()}
        >
          Get Notifications
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.setSubscriptionAttribute({attributeId:"setSubscriptionAttribute",value:"setSubscriptionAttributeVALUE"})}
        >
          Set Subscription Attribute
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.getSubscriptionAttribute({attributeId:"getSubscriptionAttribute"})}
        >
          Get Subscription Attribute
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.getSubscriptionAttributes()}
        >
          Get Subscription Attributes
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.getAvailableAttributes()}
        >
          Get Available Attributes
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.setShowNotificationsInForeground({showNotifications:true})}
        >
          Enable Show Notifications In Foreground
        </IonButton>

        <IonButton
          shape='round'
          onClick={() => CleverPush.setShowNotificationsInForeground({showNotifications:false})}
        >
          Disable Show Notifications In Foreground
        </IonButton>
    
      </IonContent>
    </IonPage>
  );
};

export default Home;
