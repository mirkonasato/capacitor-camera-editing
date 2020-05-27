import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
const { Camera } = Plugins;

const Home: React.FC = () => {
  const [pictureSrc, setPictureSrc] = useState('');
  const handleClick = async () => {
    const photo = await Camera.getPhoto({
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
    setPictureSrc(photo.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={handleClick}>Take Picture</IonButton>
        <img src={pictureSrc} alt="" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
