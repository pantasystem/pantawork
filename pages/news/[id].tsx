import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Template } from "../../components/Template";
import { client, New, NewSchema, NewsResSchema } from "../api";

const NewPage: NextPage<Props> = (props) => {
  return (
    <Template title={props.new.title}>
      <div dangerouslySetInnerHTML={{ __html: props.new.content }}>

      </div>
    </Template>
  );
};

type Props = {
  new: New,
}

export const getStaticProps: GetStaticProps = async (context) => {
  const n = await client.get({ endpoint: "news", contentId: context.params?.id?.toString() ?? '' });
  const aNew = await NewSchema.safeParseAsync(n);
  if (!aNew.success) {
    throw aNew.error;
  }

  return {
    props: {
      new: aNew.data,
    }
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const data = await client.get({ endpoint: "news" });
  const paths = data.contents.map((content: any) => `/news/${content.id}`);
  return {
    paths, fallback: false
  };
};


export default NewPage;