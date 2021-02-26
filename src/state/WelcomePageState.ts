export default class WelcomePageState {
    blogs: BlogState[] = []
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
