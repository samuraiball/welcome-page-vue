import {FCC} from "@/lib/domain/Fcc";

export class Blogs extends FCC<Blog> {
    constructor(values: Blog[]) {
        super(values)
    }

    filterBySearchWord(word: string): Blogs {
        return new Blogs(this.values.filter((b: Blog) => b.title.toLowerCase().includes(word.toLowerCase())))
    }
    length(){
        return this.values.length
    }
}

export class Blog {
    constructor(
        readonly title: string,
        readonly link: string,
        readonly summary: string,
        readonly categories: Categories,
        readonly published: string
    ) {
    }
}

export class Categories extends FCC<Category> {
    constructor(values: Category[]) {
        super(values)
    }

}

export class Category {
    constructor(
        readonly value: string,
    ) {
    }
}
