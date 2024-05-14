import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Text from "../../components/Text";
import { members } from "../../components/CurrentMembers";

const CurrentMembers = () => {
  return (
    <div className="px-20 md:px-0 lg:px-40 py-20 bg-white">
      <Text h2>Current Members</Text>

      <div class="p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {members.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="bg-darkblue py-4 items-center">
              <CardHeader className="text-white pb-0 pt-2 flex-col lg:h-[100px] md:h-[140px] sm:h-[100px]">
                <div>
                  <h3 className="font-bold text-xl">{card.name}</h3>
                  <h3 className="text-gray-400 text-base">{card.occupation}</h3>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2 justify-center items-center">
                <div className="relative w-full h-40">
                  <Image
                    alt={card.name}
                    className="object-cover rounded-xl"
                    src={card.imgSrc}
                    // width={300}
                    // height={200}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
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
