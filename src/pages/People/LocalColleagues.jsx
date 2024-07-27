import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Link,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { members } from "../../components/LocalColleagues";
import Text from "../../components/Text";

const LocalColleagues = () => {
  return (
    <div className="px-20 md:px-0 lg:px-40 py-20 bg-white">
      <Text h2>Local Colleagues</Text>

      <div class="p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {members.map((card, index) => (
          <a
            key={index}
            href={card.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="bg-darkblue py-4 items-center">
              <CardHeader className=" h-1/3 py-2 text-white flex-col lg:h-[150px] md:h-[140px] sm:h-[100px]">
                <div className="">
                  <h3 className="font-bold text-xl">{card.name}</h3>
                  <h3 className="text-gray-400 text-base">{card.department}</h3>
                </div>
              </CardHeader>
              <CardBody className="h-2/3 py-2 justify-center items-center">
                <div className="h-40 px-2 justify-center items-center aspect-square">
                  <Image
                    alt={card.name}
                    className="h-40 object-cover rounded-xl aspect-square"
                    src={card.imgSrc}
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
    // <div className="py-20 bg-white">
    //   <Text h2 className="font-bold text-darkblue">
    //     Local Colleagues
    //   </Text>
    //   <div className="px-10 md:px-20 lg:px-40">
    //     <Table isStriped className="text-left">
    //       <TableHeader columns={columns}>
    //         {(column) => (
    //           <TableColumn key={column.key}>{column.label}</TableColumn>
    //         )}
    //       </TableHeader>
    //       <TableBody items={rows}>
    //         {(item) => (
    //           <TableRow key={item.key}>
    //             {(columnKey) => (
    //               <TableCell>
    //                 {columnKey === "website" ? (
    //                   item.website ? (
    //                     <Link
    //                       isExternal
    //                       href={getKeyValue(item, columnKey)}
    //                       showAnchorIcon
    //                     />
    //                   ) : (
    //                     ""
    //                   )
    //                 ) : (
    //                   getKeyValue(item, columnKey)
    //                 )}
    //               </TableCell>
    //             )}
    //           </TableRow>
    //         )}
    //       </TableBody>
    //     </Table>
    //   </div>
    // </div>
  );
};

export default LocalColleagues;
