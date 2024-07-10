import Text from "../../components/Text";
const InfantLab = () => {
  return (
    <div className="py-20 bg-white">
      <div>
        <Text h2 className="font-bold text-darkblue">
          Infant Lab
        </Text>
        <Text className="pt-20">
          <a
            href="https://languagelab.humanities.ucla.edu/en/"
            className="text-blue hover:underline"
            target="_blank"
          >
            View here.
          </a>
        </Text>
      </div>
    </div>
  );
};

export default InfantLab;
