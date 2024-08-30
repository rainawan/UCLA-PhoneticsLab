import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";

const HC16 = () => {
  return (
    <div>
      <Text className="text-left">HC 16</Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          the usual textbook: J. Sundberg (1987) The Science of the Singing
          Voice, Northern Illinois University Press
        </li>
        <li>
          optional books: G. Nair (1999) Voice - Tradition and Technology,
          Singular Publishing; R. Miller (1996) The Structure of Singing,
          Schirmer; I. Titze Principles of Voice Production
        </li>
        <li>
          "Human Speech: Source-filter Theory" (Caldwell) 2002 DVD in the{" "}
          <CustomLink href="https://media.dymaxion.ca/display/214/wwk770">
            IML
          </CustomLink>
          ; and similarly the series of DVDs called "The Singer's Voice", some
          of which overlap with the "Human Speech" series.
        </li>
      </ul>
    </div>
  );
};

export default HC16;
