import Text from "../../components/Text";
import { Link, Divider } from "@nextui-org/react";

const Dissertations = () => {
  return (
    <div className="px-20 md:px-40 lg:px-60 py-20 bg-white text-left text-large">
      <Text h2>Join the Lab</Text>
      <Divider className="my-4 w-full mx-auto border-t-2 border-gray-400" />
      <p>&nbsp;</p>

      <Text h3>Grad Students</Text>
      <p>
        Most students in the lab are in the graduate program in Linguistics.
        Click{" "}
        <Link
          isExternal
          href="https://linguistics.ucla.edu/graduate/prospective-students/graduate-admissions/"
          underline="hover"
          color="danger"
          size="lg"
        >
          here
        </Link>{" "}
        for information about graduate admissions. The department can sponsor
        students on official exchange programs, "Non-degree objective" students,
        and informal visiting students. See the department's{" "}
        <Link
          isExternal
          href="https://linguistics.ucla.edu/graduate/prospective-students/visitingexchange-students/"
          underline="hover"
          color="danger"
          size="lg"
        >
          page about visiting/exchange students.
        </Link>
      </p>
      <p>&nbsp;</p>

      {/* <Divider className="my-4 w-full mx-auto border-t-2 border-gray-400" /> */}
      <Text h3>Postdocs</Text>
      <p>
        There are no paid research positions for Ph.D.s in the phonetics lab.
        The NIH training program which we used to have, is no more. Postdocs
        with their own fellowships interested in being sponsored by an
        individual faculty member in the lab are most welcome to contact that
        person directly.
      </p>
      <p>&nbsp;</p>
      {/* <Divider className="my-4 w-full mx-auto border-t-2 border-gray-400" /> */}
      <Text h3>Visiting Scholars</Text>
      <p>
        Ph.D.s from other universities interested in courtesy appointments
        should first request sponsorship by an individual faculty member in the
        lab. The official appointment (Visiting Scholar, or something less
        formal), including visa, will then be arranged by department staff.
        However, such visiting appointments are not always possible, depending
        on the availability and current interests of the faculty. See the
        department's{" "}
        <Link
          isExternal
          href="https://linguistics.ucla.edu/research/visiting-scholar-requirements/"
          underline="hover"
          color="danger"
          size="lg"
        >
          page about visiting scholars
        </Link>{" "}
        for more information.
      </p>
      <p>&nbsp;</p>

      <Text h3>Join the listserv of the Phonetics Lab</Text>
      <p>
        The Phonetics Lab has a listserv,
        <Link
          underline="hover"
          color="danger"
          size="lg"
          href="mailto:p-lab@lists.ucla.edu"
        >
          p-lab@lists.ucla.edu
        </Link>
        , for communication among its members. If you are a member of the
        Phonetics Lab, please send your email address to{" "}
        <Link
          underline="hover"
          color="danger"
          size="lg"
          href="mailto:jun@humnet.ucla.edu"
        >
          the Director
        </Link>{" "}
        so it can be added to the listserv.
      </p>
      <p>&nbsp;</p>
    </div>
  );
};

export default Dissertations;
