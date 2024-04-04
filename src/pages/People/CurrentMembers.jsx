import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Text from "../../components/Text";
import { members } from "../../components/CurrentMembers";

const CurrentMembers = () => {
  return (
    <div className="px-20 md:px-40 lg:px-40 py-20">
      <Text h2 className="font-bold text-blue pb-10">
        Current Members
      </Text>

      <div class="p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {members.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              // key={index}
              // href={card.link}
              className="bg-blue py-4 items-center"
            >
              <CardHeader className="text-white pb-0 pt-2 px-4 flex-col">
                <div>
                  <h3 className="font-bold text-xl">{card.name}</h3>
                  <h3 className="text-gray-400 text-base">{card.occupation}</h3>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2 justify-center items-center">
                <div className="relative">
                  <Image
                    alt={card.name}
                    className="object-cover rounded-xl"
                    src={card.imgSrc}
                    width={270}
                  />
                </div>
              </CardBody>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CurrentMembers;
