import React from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonLabel,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonButton,
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/react";

import "./Forms.css";

import { add, createOutline, documentOutline } from "ionicons/icons";

import mock from "../../mock/questions.json";
const questions = mock.questions;
const sets: any = [];

const getQuestionSets = (questionsInSet: number) => {
  const amountOfQuestions = questions.length;
  const amountOfSets = Math.floor(amountOfQuestions / questionsInSet) + 1;

  for (let index = 0; index < amountOfSets; index++) {
    let set = questions.slice(
      index * questionsInSet,
      (index + 1) * questionsInSet
    );

    // console.log(set);
    sets.push(set);
  }
};

getQuestionSets(8); // By 10 Can be modified

const Forms: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Start of content */}

        <div id="container" className="flex h-full">
          {/* ------------------------- SIDEBAR ------------------------- */}

          <div className="bg-slate-400">
            <nav className="grid grid-cols-1">
              <IonButton className="aspect-square m-2 flex justify-center items-center">
                <IonLabel>S1</IonLabel>
              </IonButton>
            </nav>
          </div>

          {/* -------------------------- MAIN CONTENT -------------------------------- */}
          <section className="basis-11/12 ml-10 mt-5">
            <h1>Forms</h1>
            <div className="flex pt-5">
              {sets.map((set: Array<object>, index: number) => (
                <IonAccordionGroup
                  key={index}
                  className="basis-6/12 mr-5"
                  expand="inset"
                >
                  {set.map((item: any, index: number) => (
                    <IonAccordion key={index + 1} value={`item-${index + 1}`}>
                      <IonItem slot="header" color="light">
                        <IonIcon icon={createOutline} className="w-6 h-6" />
                        <IonLabel className="ion-padding">
                          <strong>Question {item.id}</strong>
                          <br />
                          {item.question}
                        </IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        <div className="flex">
                          <p className="basis-3/12">Rebel</p>
                          <p className="basis-9/12">{item.answers.rebel}</p>
                        </div>
                        <div className="flex">
                          <p className="basis-3/12">Cooperator</p>
                          <p className="basis-9/12">
                            {item.answers.cooperator}
                          </p>
                        </div>
                        <div className="flex">
                          <p className="basis-3/12">Leader</p>
                          <p className="basis-9/12">{item.answers.leader}</p>
                        </div>
                        <div className="flex">
                          <p className="basis-3/12">Follower</p>
                          <p className="basis-9/12">{item.answers.follower}</p>
                        </div>
                      </div>
                    </IonAccordion>
                  ))}
                </IonAccordionGroup>
              ))}

              {/* -------------------------- FAB BUTTON -------------------------------- */}
            </div>

            
          </section>
        </div>
        <IonFab slot="fixed" horizontal="end" vertical="bottom">
              <IonFabButton>
                <IonIcon icon={add}></IonIcon>
              </IonFabButton>
              <IonFabList side="top">
                <IonFabButton>
                  <IonIcon icon={documentOutline}></IonIcon>
                </IonFabButton>
                <IonFabButton>
                  <IonIcon icon={add}></IonIcon>
                </IonFabButton>
              </IonFabList>
            </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Forms;
