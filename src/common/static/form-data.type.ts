import { AnswerStyleType } from './answer-style.type'

export type FormDataType = {
  /**
   * The question text from the question form.
   */
  questionText: string

  /**
   * The selected answer style from the question form.
   */
  selectedStyle: AnswerStyleType
}
