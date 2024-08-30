import Text from "../../../../components/Text";
import CustomLink from "../../../../components/CustomLink";

const HC16 = () => {
  return (
    <div>
      <Text className="text-left">HC16</Text>
      <ul className="px-10 list-disc list-outside">
        <li>
          The usual textbook: J. Sundberg (1987){" "}
          <span class="italic">The Science of the Singing Voice</span>, Northern
          Illinois University Press
        </li>
        <li>
          Optional books: G. Nair (1999){" "}
          <span class="italic">Voice - Tradition and Technology</span>, Singular
          Publishing ; R. Miller (1996){" "}
          <span class="italic">The Structure of Singing, Schirmer</span>; I.
          Titze <span class="italic">Principles of Voice Production</span>
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
