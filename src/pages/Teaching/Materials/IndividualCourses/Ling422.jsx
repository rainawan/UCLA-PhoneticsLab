import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";
import powerpoint from "../Downloads/spex.ppt";

const Ling422 = () => {
  return (
    <div>
      <Text pbold className="text-left">
        Ling 422
      </Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          Bruce Hayes's{" "}
          <CustomLink href="https://linguistics.ucla.edu/people/hayes/103/SpectrogramReading/index.htm">
            practice spectrogram reading
          </CustomLink>
        </li>
        <li>
          A{" "}
          <CustomLink download href={powerpoint}>
            Powerpoint file
          </CustomLink>{" "}
          of spectrograms to be read from Pat Keating
        </li>
        <li>
          Rob Hagiwara's{" "}
          <CustomLink href="https://home.cc.umanitoba.ca/%7Erobh/howto.html">
            Monthly Mystery Spectrogram page
          </CustomLink>{" "}
          at the U. of Manitoba
        </li>
      </ul>
    </div>
  );
};

export default Ling422;
