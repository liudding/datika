
export type QUESTION_TYPE = 1 | 2 | 3

const QUESTION_TYPE_NAME_MAP = {
    1: '单选',
    2: '多选',
    3: '判断'
}

export function questionType(type: QUESTION_TYPE) {
    return QUESTION_TYPE_NAME_MAP[type];
}
