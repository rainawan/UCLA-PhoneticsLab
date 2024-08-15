import Text from "../../../components/Text";
const Labvanced = () => {
  return (
    <div>
      <div className="pb-10 px-4">
        <Text h4>Labvanced</Text>
        <Text p>
          {" "}
          If you want to use Labvanced to collect online data, please create an
          account in{" "}
          <a
            href="https://www.labvanced.com/"
            className="text-blue hover:underline"
            target="_blank"
          >
            LabAdvanced.
          </a>{" "}
          and give your user id or email address to the lab director, informing
          that you want to use the phonetics Lab's group account of Labvanced.
        </Text>
      </div>
    </div>
  );
};

export default Labvanced;
