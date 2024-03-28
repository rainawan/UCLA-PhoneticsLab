import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import ReplaceImg from "../../../public/myfairlady4.jpg";

const CurrentMembers = () => {
  const cardData = [
    { name: "Abeer Abbas", occupation: "Graduate Student", imgSrc: ReplaceImg },
    { name: "Jake Aziz", occupation: "Graduate Student", imgSrc: ReplaceImg },
    { name: "Meg Cychosz", occupation: "Faculty", imgSrc: ReplaceImg },
  ];

  return (
    <div className="px-20 md:px-40 lg:px-40">
      <h1 class="pt-5 text-4xl">Current Members</h1>

      <div class="p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} className="bg-blue py-4 items-center">
            <CardHeader className="text-white pb-0 pt-2 px-4 flex-col">
              <div>
                <h3 className="font-bold text-xl">{card.name}</h3>
                <h3 className="text-gray-400 text-base">{card.occupation}</h3>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2 justify-center items-center">
              <div className="relative">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={card.imgSrc}
                  width={270}
                />
                <Button className="absolute bottom-0 right-0 z-10">
                  Button
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CurrentMembers;
