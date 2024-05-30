import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";
import Text from "../../../components/Text";
import Audio_Room from "../../../components/resources/acoustic_analysis/Audio_Room.jpg";
import Blue_Booth from "../../../components/resources/acoustic_analysis/Blue_Booth.jpg";
import Gold_Booth from "../../../components/resources/acoustic_analysis/Gold_Booth.jpg";
import Infant_Lab_Soundbooth from "../../../components/resources/acoustic_analysis/Infant_Lab_Soundbooth.jpg";
import Orange_Booth from "../../../components/resources/acoustic_analysis/Orange_Booth.jpg";
import Ultrasound_Room from "../../../components/resources/acoustic_analysis/Ultrasound_Room.jpg";
import { members } from "../../../components/CurrentMembers";
import { cards } from "../../../components/Soundbooth";

const Soundbooth = () => {
  return (
    <div>
      <div className="pt-10">
        <Text h3>Soundbooth</Text>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <Card
            key={card.id}
            isFooterBlurred
            radius="lg"
            className="border-none relative overflow-hidden"
          >
            <Image
              alt={card.alt}
              className="object-cover w-full h-full"
              src={card.src}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{card.room_name}</p>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  {card.button}
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Soundbooth;
