import Text from "../../components/Text";
import { Link, Divider } from "@nextui-org/react";

const Dissertations = () => {
  return (
    <div className="px-20 md:px-40 lg:px-60 py-20 bg-white text-left text-large">
      <Text h2 className="font-bold text-darkblue pb-10">
        Dissertations
      </Text>
      <p>
        Until 1995, dissertations from the Phonetics Lab were published in
        the&nbsp;
        <Link
          isExternal
          href="http://phonetics.linguistics.ucla.edu/workpapph/wpp.htm"
          underline="hover"
          color="danger"
          size="lg"
        >
          working papers
        </Link>
        &nbsp;in phonetics series (the last was Hagiwara 1995, which was WPP
        #90). These dissertations are available online as part of the online
        version of WPP. The Linguistics Department website provides an almost
        complete list of students'&nbsp;
        <Link
          href="https://linguistics.ucla.edu/research/"
          underline="hover"
          color="danger"
          size="lg"
        >
          dissertations
        </Link>
        , as well as some&nbsp;
        <Link
          href="https://linguistics.ucla.edu/research/masters-theses/"
          underline="hover"
          color="danger"
          size="lg"
        >
          master theses
        </Link>
        .
      </p>
      <Divider className="my-4 w-full mx-auto border-t-2 border-gray-400" />
      <p>
        UCLA Working Papers in Phonetics (WPP) offers a preliminary report on
        work in progress in the UCLA Phonetics Lab. Through #102 in December
        2002, it appeared as a print publication at irregular intervals at a
        frequency of one to three issues per year. Since Fall 2004, new issues
        of WPP have appeared in electronic form only. There will be no more
        print issues, and print copies are no longer available. The
        electronic-only issues are numbered continuing where the print issues
        stopped, so that the first electronic issue was #103 in 2004. The most
        recent issue is #111 from December 2012. Since Fall 2007, our entire
        back catalog, dating from 1964, has been scanned and made available
        online along with the newer online-only issues. For the original print
        issues, each issue is a single file, with not only the research papers,
        but the inside and outside covers and the table of contents included in
        the scans.
      </p>
      <p className="py-4">
        For the newer online-only issues, each paper is a separate
        file/publication. Unfortunately the table of contents is not organized
        by issues (though the papers are titled and paginated by issues) and
        lists the papers in alphabetical order by first author's last name
        within the same publication year; this is the format used in
        eScholarship and we have no control over this.
      </p>
      <p>
        Note that dissertations by students in the Phonetics Lab have not been
        distributed as WPP since 1995. Virtually all dissertations since the
        mid-eighties can be downloaded from the&nbsp;
        <Link
          href="https://linguistics.ucla.edu/research/"
          underline="hover"
          color="danger"
          size="lg"
        >
          Linguistics Department
        </Link> or the
        Phonetics Lab. The Linguistics Department continues to work on making
        more of the back catalog of dissertations available online.
      </p>
    </div>
  );
};

export default Dissertations;
