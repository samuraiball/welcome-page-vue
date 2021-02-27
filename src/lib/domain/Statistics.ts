import {FCC} from "@/lib/domain/Fcc";

export default class BlogsStatistics {
    constructor(
        readonly categories: CategoriesStatistics
    ) {
    }
}

export class CategoriesStatistics extends FCC<CategoryStatistics>{
    constructor(readonly values: CategoryStatistics[]) {
        super(values)
    }
}

export class CategoryStatistics{
    constructor(
        readonly name: string,
        readonly number: number
    ){}
}

