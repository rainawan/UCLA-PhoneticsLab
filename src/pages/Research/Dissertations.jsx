import Text from "../../components/Text";
import { Link, Divider } from "@nextui-org/react";

const Dissertations = () => {
  return (
    <div className="px-20 md:px-40 lg:px-60 py-20 bg-white text-left text-large">
      <Text h2>Working Papers</Text>
      <p>
        UCLA Working Papers in Phonetics (WPP) offers a preliminary report on
        works done in the UCLA Phonetics Lab between 1964 and 2012. All issues
        of the UCLA Working Papers in Phonetics can be accessible from the{" "}
        <Link
          isExternal
          href="https://escholarship.org/uc/uclaling_wpp/search?sort=desc&rows=10&start=0"
          underline="hover"
          color="danger"
          size="lg"
        >
          Open Access eScholarship Repository
        </Link>{" "}
        of the University of California.
      </p>
      <Divider className="my-4 w-full mx-auto border-t-2 border-gray-400" />
      <p>
        From #1 (June 1964) to #102 (December 2002), all issues of WPPs appeared
        as a print publication at irregular intervals at a frequency of one to
        three issues per year. Since Fall 2004, all issues of WPP are available
        in electronic form only. There will be no more print issues, and print
        copies are no longer available. The electronic-only issues are numbered
        continuing where the print issues stopped, so that the first electronic
        issue was #103 in 2004. The last issue is #111 from December 2012. In
        Fall 2007, our entire back catalog, dating from 1964, has been scanned
        and made available online along with the newer online-only issues. For
        the original print issues, each issue is a single file, with not only
        the research papers, but the inside and outside covers and the table of
        contents included in the scans.
      </p>
      <p>&nbsp;</p>
      <p>
        For the online-only issues, each paper is a separate file/publication.
        Unfortunately, the table of contents is not organized by issues (though
        the papers are titled and paginated by issues) and lists the papers in
        alphabetical order by first author's last name within the same
        publication year; this is the format used in eScholarship and we have no
        control over this.
      </p>
      <Divider className="my-4 w-full mx-auto border-t-2 border-gray-400" />
      <p>
        Note that dissertations by students in the Phonetics Lab were published
        in WPP until 1995 (the last was Hagiwara 1995, which was WPP #90). Now,
        many dissertations since the mid-eighties can be downloaded from the{" "}
        <Link
          isExternal
          href="https://linguistics.ucla.edu/research/"
          underline="hover"
          color="danger"
          size="lg"
        >
          Linguistics Department
        </Link>
        . The Linguistics Department website provides an almost complete list of
        students'{" "}
        <Link
          isExternal
          href="https://linguistics.ucla.edu/research/"
          underline="hover"
          color="danger"
          size="lg"
        >
          dissertations
        </Link>
        , as well as some{" "}
        <Link
          isExternal
          href="https://linguistics.ucla.edu/research/masters-theses/"
          underline="hover"
          color="danger"
          size="lg"
        >
          master theses
        </Link>
        .
      </p>
    </div>
  );
};

export default Dissertations;
