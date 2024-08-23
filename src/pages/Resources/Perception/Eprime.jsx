import Text from "../../../components/Text";
import { Link } from "@nextui-org/react";

const Eprime = () => {
  return (
    <div>
      <Text h3 className="pt-10">
        Eprime
      </Text>
      <Text p>
        The{" "}
        <Link
          isExternal
          href="https://pstnet.com/products/e-prime/"
          underline="hover"
          color="danger"
          size="lg"
        >
          E-Prime
        </Link>{" "}
        Player is available throughout the lab for running experiments. To
        program an experiment in Eprime, you need to get the key for the program
        from the Language (Infant) Lab manager, and use it to access a copy of
        Eprime on one of the lab's computers.
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

export default Eprime;
