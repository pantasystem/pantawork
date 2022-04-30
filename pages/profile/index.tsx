import { NextPage } from "next";
import { Template } from "../../components/Template";

const ProfilePage: NextPage = () => {
  return (
    <Template>
      <div className="flex">
        ポートフォリオ作ってる途中で飽きちゃった・・<br />
        本当はmicroCMSとか使ってharunonが教えてくれたJamstack?とかにしてみたかったけど・・<br />
      </div>
    </Template>
  )
};

export default ProfilePage;