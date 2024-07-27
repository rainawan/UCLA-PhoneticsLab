import Text from "../../components/Text";

import { LuDownload } from "react-icons/lu";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Link,
  Divider,
} from "@nextui-org/react";
import { rows, columns } from "../../components/Materials";

const Materials = () => {
  return (
    <div className="px-20 md:px-60 lg:px-40 py-20 bg-white text-left text-large">
      <Text h2 className="text-left font-bold text-darkblue">
        Materials
      </Text>
      <Divider></Divider>

      <Text h3 className="py-10 text-left">
        Downloadable Phonetic Transcription Exercises
      </Text>

      <p className="text-left pb-10">
        These are a subset of the old Language Lab tapes. For each exericise,
        there is a pdf handout which contains links to the sound files. One way
        to use these exercises is to open the handout file, print out a copy to
        write on, but leave the file displayed on the screen. Click on the
        screen links to hear the individual sound files. The other way is to
        download the files to your own computer.{" "}
      </p>
      <div>
        <Table isStriped className="text-left">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>
                    {columnKey === "handout" ? (
                      item.handout ? (
                        <a
                          href={getKeyValue(item, columnKey)}
                          className="text-blue dark:text-white hover:underline"
                          download
                        >
                          Download
                        </a>
                      ) : (
                        ""
                      )
                    ) : (
                      getKeyValue(item, columnKey)
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Materials;
