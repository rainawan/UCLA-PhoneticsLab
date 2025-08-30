import Text from "../../../components/Text";
import { Link } from "@nextui-org/react";

const Eyetracker = () => {
  return (
    <div>
      <Text h3 className="pt-10">
        Eyetracker
      </Text>
      <Text p>
        <Text p>
          The Phonetics Lab has two SR Research Eyelink 1000 eyetrackers. A
          stationary eyetracker is installed in Room 2101A and a portable
          eyetracker is normally held in Room 2101E in the Phonetics Lab. These
          eyetrackers can record the eye movements of both adults and children
          in response to visual stimuli displayed on a computer monitor.{" "}
        </Text>
        <Text p>
          Implementing an eyetracking experiment requires a great deal of
          preparation and training. Learning materials can be found on the
          official{" "}
          <Link
            isExternal
            href="https://www.sr-research.com/support-options/learning-resources/"
            underline="hover"
            color="danger"
            size="lg"
          >
            SR Research website
          </Link>{" "}
          and{" "}
          <Link
            isExternal
            href="https://www.youtube.com/@SRResearch"
            underline="hover"
            color="danger"
            size="lg"
          >
            Youtube channel
          </Link>
          .
        </Text>

        <Text p>
          Physical copies of User Manual and Installation Guide for the Eyelink
          1000 can be found on shelves of phonetics lab eyetracking room
          (2101A). Students who wish to make use of the tracker in Room 2101A
          must sign-up using the Google calendar, accessible from the Reserve
          button under the 'Resources/Data Collection' menu of this website.
          After using the eyetracker in Room 2101A, the room should be restored
          to the default layout between testing sessions (see the diagram on the
          room's whiteboard).{" "}
        </Text>

        <Text p>
          The portable SR Research eyetracker can be used for in-lab studies or
          be packed in a padded crate we have in the lab to collect data
          off-site at schools, clinics, or other locations. If you are
          interested in using the portable eye-tracker, please contact the lab director.
        </Text>
      </Text>
    </div>
  );
};

export default Eyetracker;
