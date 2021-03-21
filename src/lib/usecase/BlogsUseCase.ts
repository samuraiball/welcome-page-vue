import {BlogsPort} from "@/lib/port/BlogsPort";
import BlogsPresenter from "@/lib/presenter/BlogsPresenter";
import {Blogs} from "@/lib/domain/Blogs";

export default class BlogsUseCase {
    constructor(
        private readonly blogsPort: BlogsPort,
        private readonly blogsPresenter: BlogsPresenter
    ) {
    }

    async load() {
        const blogs = await this.blogsPort.fetch();
        this.blogsPresenter.set(blogs);
        this.blogsPresenter.setFiltered(blogs);
    }

    async loadStatistics() {
        const statistics = await this.blogsPort.fetchStatistics();
        this.blogsPresenter.setStatistics(statistics);
    }

    async filterByWord(searchWord: string) {
        const blogs = await this.blogsPort.fetch();
        this.blogsPresenter.setSearchWord(searchWord);
        this.blogsPresenter.setFiltered(blogs.filterBySearchWord(searchWord));
    }

    updateBlogsCount(blogs: Blogs) {
        this.blogsPresenter.setCounts(blogs.length())
    }
}