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

const getQuestionSets = () => {
  const amountOfQuestions = questions.length;
  const sets = Math.floor(amountOfQuestions / 10) + 1;
  return sets;
};

const amountOfSets = getQuestionSets();
console.log(amountOfSets);

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

          <div className="flex">
            <div className=" p-5">
              <IonAccordionGroup className="" expand="inset">
                {/* Find a solution to divide by 10 the accordions */}

                {questions.map((item, index) => (
                  <IonAccordion key={index + 1} value={`item-${index + 1}`}>
                    <IonItem slot="header" color="light">
                      <IonIcon icon={createOutline} className="w-6 h-6" />
                      <p className="ion-padding">
                        <strong>Question {index + 1}</strong>
                        <br />
                        {item.question}
                      </p>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      <div className="flex">
                        <p className="basis-3/12">Rebel</p>
                        <p className="basis-9/12">{item.answers.rebel}</p>
                      </div>
                      <div className="flex">
                        <p className="basis-3/12">Cooperator</p>
                        <p className="basis-9/12">{item.answers.cooperator}</p>
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
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Forms;
