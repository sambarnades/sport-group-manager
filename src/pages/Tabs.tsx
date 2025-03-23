import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Forms from "./tabs/Forms";
import ClassLists from "./tabs/ClassLists";
import Groups from "./tabs/Groups";

import {
  americanFootballOutline,
  createOutline,
  peopleOutline,
} from "ionicons/icons";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/forms" />
        <Route exact path="/tabs/forms">
          <Forms />
        </Route>
        <Route exact path="/tabs/classlists">
          <ClassLists />
        </Route>
        <Route exact path="/tabs/groups">
          <Groups />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/forms" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="forms" href="/tabs/forms">
          <IonIcon icon={createOutline} />
          <IonLabel>Forms</IonLabel>
        </IonTabButton>
        <IonTabButton tab="classlists" href="/tabs/classlists">
          <IonIcon icon={peopleOutline} />
          <IonLabel>ClassLists</IonLabel>
        </IonTabButton>
        <IonTabButton tab="groups" href="/tabs/groups">
          <IonIcon icon={americanFootballOutline} />
          <IonLabel>Groups</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
