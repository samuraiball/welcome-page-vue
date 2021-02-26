import WelcomePageState, {BlogState} from "@/state/WelcomePageState";
import {Blogs} from "@/lib/domain/Blogs";

export default class BlogsPresenter {
    constructor(private blogsState: WelcomePageState) {
    }

    set(blogs: Blogs) {
        this.blogsState.blogs = blogs.map(b => new BlogState(
            b.title,
            b.link,
            b.summary,
            b.categories.map(c => c.value),
            b.published
        ))
    }
}