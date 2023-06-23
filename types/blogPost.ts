import type {
    MicroCMSImage,
    MicroCMSDate,
    MicroCMSContentId,
} from "microcms-js-sdk";

export type BlogPostType = {
    id: string;
    title: string;
    content: string;
    eyecatch?: MicroCMSImage
} & MicroCMSContentId & MicroCMSDate;