import { GetServerSideProps, NextPage } from "next";
import { Template } from "../../components/Template";
import { client, Profile, ProfileSchema } from "../api";

type Props = {
  profile: Profile,
};

const ProfilePage: NextPage<Props> = (props: Props) => {
  return (
    <Template>
      <div className="h-screen w-screen flex items-center justify-center -mt-16">
        <div className="shadow p-8 rounded-xl bg-amber-200">
          <div className="bg-amber-50 rounded-md mb-4 p-1">
            名前:{props.profile.name}
          </div>
          <div className="bg-amber-50 rounded-md mb-4 p-1">
            {/** NOTE: microCMSは管理者以外は編集しないこと前提なのでXSS対策はしない */}
            説明<div className='inline' dangerouslySetInnerHTML={{ __html: props.profile.description }} />
          </div>
          <div className="bg-amber-50 rounded-md mb-4 p-1">
            住処:{props.profile.location}
          </div>
          <div className="bg-amber-50 rounded-md p-1">
            居場所:{props.profile.whereabouts}
          </div>
        </div>
      </div>

    </Template>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const profile = await client.get({ endpoint: "profile" });
  const pojo = await ProfileSchema.safeParseAsync(profile);
  if (pojo.success) {
    const props: Props = {
      profile: pojo.data,
    };
    return {
      props: props,
    }
  } else {
    throw pojo.error;
  }
  // const props: Props = {
  //   profile: {
  //     location: '滋賀県のどこか',
  //     whereabouts: 'ない',
  //     name: 'パン太',
  //     description: 'パン太だよ',
  //   }
  // };
  // return {
  //   props: props,
  // };
};
export default ProfilePage;