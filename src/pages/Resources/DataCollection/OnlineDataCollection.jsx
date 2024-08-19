import Text from "../../../components/Text";
import { Link, Divider } from "@nextui-org/react";

const OnlineDataCollection = () => {
  return (
    <div>
      <Divider></Divider>
      <Text h3 className="text-left pt-10">
        Online Data Collection
      </Text>
      <p>
        If you want to collect data online, you can use a platform such as{" "}
        <Link
          isExternal
          href="https://linguistics.ucla.edu/graduate/prospective-students/graduate-admissions/"
          underline="hover"
          color="blue"
          size="lg"
        >
          Labvanced
        </Link>
        {", "}
        <Link
          isExternal
          href="https://www.mturk.com/"
          underline="hover"
          color="blue"
          size="lg"
        >
          Mechanical Turk
        </Link>
        {", or "}
        <Link
          isExternal
          href="https://www.prolific.com/?utm_source=google&utm_medium=ppc&utm_content=163002821037&utm_campaign=21340189877&utm_term=prolific&hsa_acc=4083515484&hsa_cam=21340189877&hsa_grp=163002821037&hsa_ad=700919351244&hsa_src=g&hsa_tgt=kwd-300570721843&hsa_kw=prolific&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjws560BhCuARIsAHMqE0HI7sabmuJ3T2KKiiyKf7Rf4aup_LOz5TogpY34Hd1kHbXwFTBHmJkaAoTFEALw_wcB"
          underline="hover"
          color="blue"
          size="lg"
        >
          Prolific
        </Link>
        . The Phonetics Lab has a group account of Labvanced. So, if you want to
        use Labvanced, please create an account in Labvanced, and give your user
        id or email address to the lab director, informing that you want to use
        the phonetics Lab's group account of Labvanced. To use other online
        platforms (Mechanical Turk or Prolific), please create an account in
        their respective website.
      </p>
      <p>&nbsp;</p>
    </div>
  );
};

export default OnlineDataCollection;
