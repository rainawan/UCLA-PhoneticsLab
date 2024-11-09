import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";

const Ling111 = () => {
  return (
    <div>
      <Text pbold className="text-left">
        Ling C111/C211
      </Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          Link to our{" "}
          <CustomLink href="../../../../../OldPhoneticsResources/praat.html">
            page of Praat resources
          </CustomLink>{" "}
        </li>
        <li>
          Sample syllabus:{" "}
          <CustomLink href="../../../../../OldPhoneticsResources/111Win06Jun.pdf">
            Winter06
          </CustomLink>
        </li>
        <li>
          <CustomLink href="https://web.archive.org/web/20130218081131/http://www.ling.ohio-state.edu/~tobi/">
            ToBI
          </CustomLink>{" "}
          materials at OSU
        </li>
        <li>
          <CustomLink href="https://www.ling.ohio-state.edu/research/phonetics/E_ToBI/">
            Guidelines for ToBI labeling
          </CustomLink>
        </li>
        <li>
          Sun-Ah Jun's{" "}
          <CustomLink href="https://linguistics.ucla.edu/people/jun/ktobi/k-tobi.html">
            Korean ToBI{" "}
          </CustomLink>{" "}
          at UCLA
        </li>
      </ul>
    </div>
  );
};

export default Ling111;
