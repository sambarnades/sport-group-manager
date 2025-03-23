import React from "react";
import { IonContent, IonPage, IonIcon, IonLabel } from "@ionic/react";

import { addOutline, removeOutline } from "ionicons/icons";

const Forms: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Start of content */}

        {/* ------------------------- Sidebar ------------------------- */}

        <div id="container" className="flex h-full">
          <div className="basis-1/24 bg-slate-400">
            <div className="grid grid-cols-1">
              <div className="aspect-square h-10 bg-slate-600 m-2 rounded-xl flex justify-center items-center order-last  absolute bottom-15">
                <IonIcon icon={addOutline} className="text-xl" />
              </div>
              <div className="aspect-square bg-slate-600 m-2 rounded-xl flex justify-center items-center">
                <IonLabel>S1</IonLabel>
              </div>
            </div>
          </div>
          <div className="basis-23/24">
            <p>Content</p>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
      </IonContent>
    </IonPage>
  );
};

export default Forms;
