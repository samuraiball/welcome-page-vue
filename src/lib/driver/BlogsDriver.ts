import axios from "axios";

export type BlogsJson = {
    feed: Feed[]
}

export type Feed = {
    title: string,
    published: string,
    summary: string,
    link: LinkJson,
    category: CategoryJson[],
    edited: string
}

export type CategoryJson = {
    term: string
}
export type LinkJson = {
    href: string
}

export type BlogsStatisticsJson = {
    categoryStatistics: CategoryStatisticsJson[]
}

export type CategoryStatisticsJson = {
    name: string,
    number: number,
}


export default class BlogsDriver {
    constructor(private readonly welcomePageApiRUL: string) {
    }

    async fetch(): Promise<BlogsJson> {
        return (await axios.get<BlogsJson>(`${this.welcomePageApiRUL}/hatena/entries`)).data;
    }

    async fetchStatistics(): Promise<BlogsStatisticsJson> {
        return (await axios.get<BlogsStatisticsJson>(`${this.welcomePageApiRUL}/hatena/statics`)).data;
    }
}