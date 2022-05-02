import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Template } from "../../../components/Template";
import { client, New, NewsResSchema } from "../../api";


type Props = {
  news: Array<New>,
}

const PAGE_PER = 10;

type NewCardProps = {
  new: New,
  url: string,
}

const NewCard: React.FC<NewCardProps> = (props) => {
  return (
    <div className="pb-1">
      <Link href={props.url} passHref>
        <a>
          <h3 className="text-xl bg-amber-50 p-2">{props.new.title}</h3>
        </a>
      </Link>
    </div>
  )
};

const NewsPage: NextPage<Props> = ({ news }) => {
  return (
    <Template title="お知らせ一覧">
      <div className="w-screen h-screen">
        <div className="flex">
          <div className="p-4">
            <div className="shadow w-128 p-6">
              <div className="text-2xl">
                News
              </div>
              {
                news.map((n) => (<NewCard key={n.id} new={n} url={`/news/${n.id}`} />))
              }
            </div>

          </div>
        </div>
      </div>
    </Template>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {

  const stId = Number.parseInt(context.params?.id?.toString() ?? '0');

  const rawRes = await client.get({ endpoint: "news", queries: { offset: (stId) * 5, limit: PAGE_PER } });
  const res = await NewsResSchema.safeParseAsync(rawRes);

  if (!res.success) {
    throw res.error;
  }
  const props: Props = {
    news: res.data.contents,
  };
  return {
    props: props,
  }
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const news = await client.get({ endpoint: "news" });

  const res = await NewsResSchema.safeParseAsync(news);
  if (!res.success) {
    throw res.error;
  }

  const range: (start: number, end: number) => Array<number> = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(res.data.totalCount / PAGE_PER)).map((n) => `/news/page/${n}`)
  return {
    paths, fallback: false,
  }
}


export default NewsPage;