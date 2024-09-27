import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";

const Ling103 = () => {
  return (
    <div>
      <Text pbold className="text-left">
        Ling 103
      </Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          The master reserves list: a standing list of books kept on 2-hour
          reserve in Powell Library, so that they remain behind the reserve desk
          rather than on the open shelves. These include phonetic descriptions
          of languages commonly studied for 103 term projects. With a
          professor's note, students can check out books for longer than 2
          hours.{" "}
          <CustomLink href="https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA">
            Link to the library's reserve page
          </CustomLink>
          (select this quarter's instructor, OR Linguistics, OR 103 Phonetics).
        </li>
        <li>
          Term project resources:{" "}
          <CustomLink href="https://phonetics.linguistics.ucla.edu/teaching/project%20-%20combined%20handouts.pdf">
            sample handouts for the term project
          </CustomLink>{" "}
          from Pat Keating, Spring 2007
        </li>
        <li>
          Term project resources:{" "}
          <CustomLink href="https://www.ethnologue.com/">ethnologue</CustomLink>
        </li>
        <li>
          Term project resources: Illustrations of the IPA -{" "}
          <CustomLink href="https://richardbeare.github.io/marijatabain/ipa_illustrations_all.html">
            maps and lists of languages
          </CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default Ling103;
