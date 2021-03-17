import question from "@/api/question";


export function checkIsSame(answers: string[], oldAnswers?: string[]) {
    if (!oldAnswers) return false;

    const newData = answers.join("_");
    const oldData = oldAnswers.map((i: any) => i.answer).join("_");

    return newData == oldData;
}


/**
* 检测学生填涂是否需要校正
* 单选题，涂了多个
*/
export function checkNeedCorrection(data: any, questions: any) {

    const sortedQuestions = questions.sort(function (a: any, b: any) {
        if (+a.label > +b.label) return 1;
        return -1;
    })

    const answers = data.answers;

    const toValidate = [];

    for (let i = 0; i < sortedQuestions.length; i++) {
        if (sortedQuestions[i].type === 1 && answers[i].length > 1) {
            toValidate.push({
                index: i,
                question: sortedQuestions[i],
                answer: answers[i],
            });
        }
    }

    return toValidate.length > 0 ? toValidate : false;
}
