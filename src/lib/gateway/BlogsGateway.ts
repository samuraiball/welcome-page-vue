import {BlogsPort} from "@/lib/port/BlogsPort";
import {Blog, Blogs, Categories, Category} from "@/lib/domain/Blogs";
import BlogsDriver from "@/lib/driver/BlogsDriver";

export default class BlogsGateway implements BlogsPort {
    constructor(private readonly blogDriver: BlogsDriver) {
    }

    async find(): Promise<Blogs> {
        const json = await this.blogDriver.fetch();
        return new Blogs(
            json.feed.map((f) => new Blog(
                f.title,
                f.link.href,
                f.summary,
                new Categories(
                    f.category.map((c) => new Category(c.term))
                ),
                f.published
            ))
        )
    }
}
