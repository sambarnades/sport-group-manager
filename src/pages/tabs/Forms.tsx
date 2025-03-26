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
} from "@ionic/react";

import "./Forms.css";

import { addOutline, createOutline } from "ionicons/icons";

import mock from "../../mock/questions.json";
const questions = mock.questions;
const sets: any = [];

const getQuestionSets = (questionsInSet: number) => {
  const amountOfQuestions = questions.length;
  const amountOfSets = Math.floor(amountOfQuestions / questionsInSet) + 1; // By 10

  for (let index = 0; index < amountOfSets; index++) {
    let set = questions.slice(
      index * questionsInSet,
      (index + 1) * questionsInSet
    );

    // console.log(set);
    sets.push(set);
  }
};

getQuestionSets(8);

const Forms: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Start of content */}

        {/* ------------------------- SIDEBAR ------------------------- */}

        <div id="container" className="flex h-full">
          <div className="bg-slate-400">
            <div className="grid grid-cols-1">
              <IonButton className="aspect-square m-2 flex justify-center items-center">
                <IonLabel>S1</IonLabel>
              </IonButton>
            </div>
            <IonButton className="aspect-square absolute bottom-15 m-2 flex justify-center items-center">
              <IonIcon icon={addOutline} />
            </IonButton>
          </div>

          {/* -------------------------- MAIN CONTENT -------------------------------- */}

          <div className="flex basis-11/12 m-5">
              {/* Find a solution to divide by 10 the accordions */}

              {sets.map((set: Array<object>, index: number) => (
                <IonAccordionGroup key={index} className="basis-6/12 p-2" expand="inset">
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
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Forms;
