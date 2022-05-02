import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Template } from "../../components/Template";
import { client, New, NewSchema, NewsResSchema } from "../api";

const NewPage: NextPage<Props> = (props) => {
  return (
    <Template title="お知らせとか">
      <div>

      </div>
    </Template>
  );
};

const PAGE_PER = 10;


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




export default NewPage;