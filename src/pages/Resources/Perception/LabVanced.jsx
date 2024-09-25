import Text from "../../../components/Text";
import { Link } from "@nextui-org/react";

const LabVanced = () => {
  return (
    <div>
      <Text h3 className="pt-10">
        LabVanced
      </Text>
      <Text p>
        The Phonetics Lab has a group account on{" "}
        <Link
          isExternal
          href="https://www.labvanced.com/"
          underline="hover"
          color="danger"
          size="lg"
        >
          LabVanced
        </Link>
        . So if you want to use LabVanced, please create an account in
        LabVanced, and give your user id or email address to the lab director,
        informing that you want to use the phonetics Lab's group account of
        LabVanced.
      </Text>

      <Text p>
        If a laptop is used to run an experiment, we recommend also using an
        external D/A device for presenting audio stimuli; and outside a
        soundbooth, we recommend using Sennheiser or other sound-attenuating
        headphones."
      </Text>
    </div>
  );
};

export default LabVanced;
