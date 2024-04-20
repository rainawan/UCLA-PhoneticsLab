import Text from "../../components/Text";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  CardHeader,
} from "@nextui-org/react";

import { data } from "../../components/Databases";

const Databases = () => {
  return (
    <div className="bg-white px-20 md:px-0 lg:px-40 py-20">
      <Text h2>Databases</Text>
      <div class="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="bg-gray-800 py-4 items-center">
              <CardBody className="overflow-visible py-2 justify-center items-center">
                <div className="relative">
                  <Image
                    alt={card.title}
                    className="object-cover rounded-xl"
                    src={card.imgSrc}
                    width={270}
                  />
                </div>
              </CardBody>
              <CardHeader className="text-white pb-0 pt-2 px-4 flex-col lg:h-[120px] md:h-[140px] sm:h-[100px]">
                <div>
                  <h3 className="font-bold text-xl">{card.title}</h3>
                  <h3 className="text-gray-400 text-base">{card.desc}</h3>
                </div>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Databases;
