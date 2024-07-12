import Text from "../../components/Text";
const SpogLab = () => {
  return (
    <div className="py-20 bg-white">
      <div>
        <Text h2 className="font-bold text-darkblue">
          SPOG Lab
        </Text>
        <Text className="text-xl pt-1o">
          <a
            href="https://spog.ucla.edu/"
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

export default SpogLab;
