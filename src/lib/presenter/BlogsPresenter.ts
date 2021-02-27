import WelcomePageState, {BlogsStatisticsState, BlogState, CategoryStatisticsState} from "@/state/WelcomePageState";
import {Blogs} from "@/lib/domain/Blogs";
import BlogsStatistics from "@/lib/domain/Statistics";

export default class BlogsPresenter {
    constructor(private state: WelcomePageState) {
    }

    set(blogs: Blogs) {
        this.state.blogs = blogs.map(b => new BlogState(
            b.title,
            b.link,
            b.summary,
            b.categories.map(c => c.value),
            b.published
        ))
    }

    setStatistics(statistics: BlogsStatistics) {
        console.log(statistics)
        this.state.blogsStatistics = new BlogsStatisticsState(
            statistics.categories.map(c => new CategoryStatisticsState(c.name, c.number)))
    }
}