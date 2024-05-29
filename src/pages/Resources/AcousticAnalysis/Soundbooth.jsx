import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Text from "../../../components/Text";
import Audio_Room from "../../../components/resources/acoustic_analysis/Audio_Room.jpg";
import Blue_Booth from "../../../components/resources/acoustic_analysis/Blue_Booth.jpg";
import Gold_Booth from "../../../components/resources/acoustic_analysis/Gold_Booth.jpg";
import Infant_Lab_Soundbooth from "../../../components/resources/acoustic_analysis/Infant_Lab_Soundbooth.jpg";
import Orange_Booth from "../../../components/resources/acoustic_analysis/Orange_Booth.jpg";
import Ultrasound_Room from "../../../components/resources/acoustic_analysis/Ultrasound_Room.jpg";

const Soundbooth = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3>Soundbooth</Text>
      </div>

      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="https://nextui.org/images/hero-card.jpeg"
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>

      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="https://nextui.org/images/hero-card.jpeg"
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Soundbooth;
