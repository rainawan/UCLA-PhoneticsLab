import { Card, CardFooter, Image, Button, Divider } from "@nextui-org/react";
import Text from "../../../components/Text";
import { cards } from "../../../components/Soundbooth";

const Soundbooth = () => {
  return (
    <div className="pb-10">
      <div className="pt-10">
        <Text h3>In-Person Booth/Room and Sign-Up</Text>
      </div>
      {/* <Divider></Divider>
      <div className="pt-10"></div> */}

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
            <CardFooter className="justify-between before:bg-white/10 border-white/20 bg-black/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
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
