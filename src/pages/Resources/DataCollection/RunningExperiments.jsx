import Text from "../../../components/Text";
import { Link, Divider } from "@nextui-org/react";

const RunningExperiments = () => {
  return (
    <div>
      <Divider></Divider>
      <Text h3 className="text-left pt-10">
        Running Experiments in the Phonetics Lab
      </Text>
      <p>
        Not only members of the lab, but members of the Linguistics Department,
        and indeed of the larger academic community, are welcome to use the
        facilities of the lab for their research. If you want to use our
        facilities (e.g., recording soundbooth, a perception booth, eye-tracker,
        EGG, Aerodynamic equipment), please consult information under other
        sub-menus under '<span className="font-bold">Resources</span>
        '. If you want to use a soundbooth/room or eye-tracker, etc., please
        reserve your time online in each sign-up calendar via the{" "}
        <span className="font-bold">Data Collection</span> submenu page under '
        <span className="font-bold">Resources</span>'.
      </p>
      <p>&nbsp;</p>
      <p>
        Experiments that are done as part of a course do not require Human
        Subjects approval, but experiments done as research (including masters
        theses and dissertations) do require prior approval. All users of the
        lab, including those from outside the Linguistics Department, are
        responsible for obtaining their own approval. IRB applications are now
        done entirely online and require an account. The coordinator of the
        Language (infant) Lab can help with applications. Students can apply to
        the department for money to pay subjects (see the{" "}
        <Link
          isExternal
          href="https://linguistics.ucla.edu/graduate/current-students/funding-language-assistants-experimental-subjects/"
          underline="hover"
          color="danger"
          size="lg"
        >
          Graduate Advising Page
        </Link>{" "}
        for more info), or can access the Psychology (SONA) subject pool (see
        the coordinator of the infant lab).
      </p>
    </div>
  );
};

export default RunningExperiments;
