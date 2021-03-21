export default class WelcomePageState {
    blogs: BlogState[] = []
    filteredBlogs: BlogState[] = []
    blogsStatistics: BlogsStatisticsState = BlogsStatisticsState.empty()
    searchWord: string = ""
    filteredBlogsCounts: number = 0
}

export class BlogState {
    constructor(
        readonly title: string,
        readonly link: string,
        readonly summary: string,
        readonly categories: string[],
        readonly published: string
    ) {
    }
}

export class BlogsStatisticsState {
    constructor(readonly categories: CategoryStatisticsState[]) {
    }

    static empty() {
        return new BlogsStatisticsState([])
    }
}

export class CategoryStatisticsState {
    constructor(
        readonly name: string,
        readonly number: number
    ) {
    }
}
