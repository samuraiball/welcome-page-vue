import axios from "axios";

export type BlogsJson = {
    feed: Feed[]
}

export type Feed = {
    title: string,
    published: string,
    summary: string,
    link: Link,
    category: Category[],
    edited: string
}

export type Category = {
    term: string
}
export type Link = {
    href: string
}


export default class BlogsDriver {
   constructor(private readonly welcomePageApiRUL: string) {
   }

    async fetch(): Promise<BlogsJson> {
        return (await axios.get<BlogsJson>(`${this.welcomePageApiRUL}/hatena/entries`)).data;
    }
}