/**
 * @callback NextQuestionCallback
 * @param {QuestionType} question
 * @returns {void}
 * 
 * @callback finishCallback
 * @param {QuestionResultViewType[]} resultArray
 * @returns {void}
 */

class SelectManager{
    /**
     * @type {Number}
     */
    #questionNumber

    /**
     * @type {QuestionType[]}
     */
    #questions

    /**
     * @type {boolean[]}
     */
    #questionAnswers

    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback

    /**
     * @type {finishCallback}
     */
    #finishCallback

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions){

    }

}

export {SelectManager}