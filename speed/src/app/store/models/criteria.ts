export class ResultCriteria {
    constructor(public id: number = null,
                public name: string = '') { }
}

export class ResultCriterion {
    constructor(public type: string = '',
                public id: number = null) { }
}

ResultCriterion

export interface SearchCriteria {
    name: string;
    value: string;
}