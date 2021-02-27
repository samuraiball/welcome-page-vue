import {BlogsPort} from "@/lib/port/BlogsPort";
import BlogsPresenter from "@/lib/presenter/BlogsPresenter";

export default class BlogsUseCase {
    constructor(
        private readonly blogsPort: BlogsPort,
        private readonly blogsPresenter: BlogsPresenter
    ) {
    }

    async load() {
        const blogs = await this.blogsPort.fetch();
        this.blogsPresenter.set(blogs)
    }

    async loadStatistics() {
        const statistics = await this.blogsPort.fetchStatistics();
        this.blogsPresenter.setStatistics(statistics)
    }
}