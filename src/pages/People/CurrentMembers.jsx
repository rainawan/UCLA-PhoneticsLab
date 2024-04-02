import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import ReplaceImg from "../../../public/myfairlady4.jpg";

const CurrentMembers = () => {
  const cardData = [
    {
      name: "Abeer Abbas",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/person/abeer-abbas/",
    },
    {
      name: "Jake Aziz",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/person/jake-aziz/",
    },
    {
      name: "Meg Cychosz",
      occupation: "Faculty",
      imgSrc: ReplaceImg,
      link: "https://megseekosh.github.io/",
    },
    {
      name: "Ben Eischens",
      occupation: "Faculty",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/person/ben-eischens",
    },
    {
      name: "Bruce Hayes",
      occupation: "Faculty",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/people/hayes/index.htm",
    },
    {
      name: "Jinyoung Jo",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://jinyoungjo.com/",
    },
    {
      name: "Sun-Ah Jun",
      occupation: "Lab Director",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/people/jun/sun-ah.htm",
    },
    {
      name: "Pat Keating",
      occupation: "Faculty",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/people/keating/keating.htm",
    },
    {
      name: "Ekaterina Khlystova (Katya)",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://ekhlystova.wixsite.com/home",
    },
    {
      name: "Jody Kreiman",
      occupation: "Faculty",
      imgSrc: ReplaceImg,
      link: "https://profiles.ucla.edu/jody.kreiman",
    },
    {
      name: "Kevin Liang",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://kevinliang8.github.io/",
    },
    {
      name: "John McGahay",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://www.linkedin.com/in/john-mcgahay-a78ba7126/",
    },
    {
      name: "Claire Moore-Cantwell",
      occupation: "Faculty",
      imgSrc: ReplaceImg,
      link: "http://www.clairemoorecantwell.org/",
    },
    {
      name: "Jahnavi Narkar",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "http://jahnavinarkar.com/",
    },
    {
      name: "Jian-Leat Siah",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/person/jian-siah/",
    },
    {
      name: "Elizabeth Sola-Llonch (Iza)",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/person/elizabeth-sola-llonch/",
    },
    {
      name: "Megha Sundara",
      occupation: "Faculty",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/person/megha-sundara/",
    },
    {
      name: "Yang Wang",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://yangwangthelinguist.github.io/",
    },
    {
      name: "Lily Xu",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://sites.google.com/view/lilyxxu/",
    },
    {
      name: "Z. L. Zhou",
      occupation: "Graduate Student",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/person/zlzhou/",
    },
    {
      name: "Kie Zuraw",
      occupation: "Faculty",
      imgSrc: ReplaceImg,
      link: "https://linguistics.ucla.edu/people/zuraw/index.htm",
    },
  ];

  return (
    <div className="px-20 md:px-40 lg:px-40">
      <h1 class="pt-5 text-4xl">Current Members</h1>

      <div class="p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {cardData.map((card, index) => (
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
                    alt="Card background"
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
