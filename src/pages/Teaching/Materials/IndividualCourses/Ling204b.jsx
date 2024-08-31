import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";

const Ling204b = () => {
  return (
    <div>
      <Text pbold className="text-left">
        Ling 204b
      </Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          1993 ASA Speech Production videos by Maureen Stone and others, in the{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            IML
          </CustomLink>{" "}
          (use those to put on reserve) and in the cabinet in the General Lab
        </li>
        <li>
          Information on using the lab's equipment for measuring aspects of
          speech production is in the Articulatory Analysis section under
          Resources in this website.
        </li>
        <li>
          Peter Ladefoged et al.{" "}
          <CustomLink href="https://linguistics.ucla.edu/people/ladefoge/manual.htm">
            dissection manual
          </CustomLink>{" "}
          (on-line version that replaces the earlier WPP #77), now housed on the
          Linguistics Department's Ladefoged page as well as in the{" "}
          <CustomLink href="https://escholarship.org/uc/uclaling">
            online WPP
          </CustomLink>{" "}
          series as{" "}
          <CustomLink href="https://escholarship.org/uc/item/9q2137pr">
            #102
          </CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default Ling204b;
