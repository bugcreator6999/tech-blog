import { BlogPostType } from '@/types/blogPost';
import { MicroCMSQueries, createClient } from 'microcms-js-sdk';

if (!process.env.API_KEY) {
    throw new Error("need api key")
} else {
    console.log("api key is ok");
}
if (!process.env.SERVICE_DOMAIN) {
    throw new Error("need service domain")
} else {
    console.log("service domain is ok");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

export const getBlogs = async () => {
    const blogList = await client.getList<BlogPostType>({
        endpoint: "blogs"
    })
    return {
        contents: blogList.contents
    }
}


export const getBlogDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<BlogPostType>({
        endpoint: "blogs",
        contentId,
        queries,
    });
    return detailData;
};