import React, { useEffect } from "react";

const getQuestions: React.FC = () => {
  useEffect(() => {
    async function getQuestionSetsArray() {
      let { data: questionSetsArray, error } = await supabase
        .from("questionSets")
        .select("id")
        .range(0, 9); // 10 items

      // console.log(questionSetsArray);

      error
        ? console.log("Error fetching question sets:", error)
        : //console.table(questionSetsArray),
          questionSetsArray;
    }
    getQuestionSetsArray();
  }, []);
};

export { getQuestions };
