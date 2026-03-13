/**
 * @callback NextQuestionCallback
 * @param {QuestionViewType} question
 * @returns {void}
 * 
 */

class QuizManager{
    /**
     * @type {number}
     */
    #currentQuestionNumber

    /**
     * @type {QuestionType[]}
     */
    #questions

    /**
     * @type {string[]}
     */
    #questionAnswers

    /**
     * @type {}
     */
    #nextQuestionCallback
}