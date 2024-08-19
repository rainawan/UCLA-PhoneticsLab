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
        Experiments that are done as part of a course do not require Human
        Subjects approval, but experiments done as research (including masters
        theses and dissertations) do require prior approval. All users of the
        lab, including those from outside the Linguistics Department, are
        responsible for obtaining their own approval. IRB applications are now
        done entirely online and require an account. The coordinator of the
        Language (infant) Lab can help with applications. Students can apply to
        the department for money to pay subjects (see the Graduate Advising page
        for more info), or can access the Psychology (SONA) subject pool (see
        the coordinator of the infant lab)
      </p>
    </div>
  );
};

export default RunningExperiments;
