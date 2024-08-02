import Text from "../../components/Text";
import { Card, CardBody, Image, CardHeader, Divider } from "@nextui-org/react";

import { outside_ucla, within_ucla } from "../../components/Databases";

const Databases = () => {
  return (
    <div className="bg-white px-20 md:px-0 lg:px-40 py-20">
      <Text h2>Databases</Text>
      <Text h3 className="px-6">
        Corpora Available in the Lab
      </Text>
      <div class="p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {within_ucla.map((card, index) => (
          <a
            key={index}
            href={card.file ? card.file : card.link}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Card className="bg-gray-800 py-4 items-center">
              <CardBody className="overflow-hidden py-2 justify-center items-center">
                <div className="relative w-full h-40">
                  <Image
                    alt={card.title}
                    className="object-cover rounded-xl aspect-square"
                    src={card.imgSrc}
                  />
                </div>
              </CardBody>
              <CardHeader className="text-white pb-0 pt-2 px-4 flex-col lg:h-[120px] md:h-[140px] sm:h-[100px]">
                <div className="overflow-auto">
                  <h3 className="font-bold text-xl">{card.title}</h3>
                  <div className="text-gray-400 text-base">{card.desc}</div>
                  {/* <h3 className="text-gray-400 text-base">{card.desc}</h3> */}
                </div>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
      <Divider className="mt-10 w-full mx-auto border-t-2 border-gray-400" />

      <Text h3 className="px-6 pt-10">
        Corpora Available outside of UCLA
      </Text>
      <div class="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {outside_ucla.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="bg-gray-800 py-4 items-center">
              <CardBody className="overflow-hidden py-2 justify-center items-center">
                <div className="relative w-full h-40">
                  <Image
                    alt={card.title}
                    className="object-cover rounded-xl aspect-square"
                    src={card.imgSrc}
                  />
                </div>
              </CardBody>
              <CardHeader className="text-white pb-0 pt-2 px-4 flex-col lg:h-[120px] md:h-[140px] sm:h-[100px]">
                <div className="overflow-auto">
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
