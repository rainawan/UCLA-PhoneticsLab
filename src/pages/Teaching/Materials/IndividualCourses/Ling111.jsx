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
          <CustomLink href="https://phonetics.linguistics.ucla.edu/facilities/acoustic/praat.html">
            page of Praat resources
          </CustomLink>{" "}
        </li>
        <li>
          Sample syllabus:{" "}
          <CustomLink href="https://phonetics.linguistics.ucla.edu/teaching/111Win06Jun.pdf">
            Winter06
          </CustomLink>
        </li>
        <li>ToBI materials at OSU</li>
        <li>
          Sun-Ah Jun's{" "}
          <CustomLink href="https://phonetics.linguistics.ucla.edu/teaching/111Win06Jun.pdf">
            Korean ToBI{" "}
          </CustomLink>{" "}
          at UCLA
        </li>
      </ul>
    </div>
  );
};

export default Ling111;
