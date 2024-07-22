import Text from "../../components/Text";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

import {
  columns,
  undergradRows,
  otherUndergradRows,
  gradRows,
  otherGradRows,
} from "../../components/Courses";

const Courses = () => {
  return (
    <div className="py-20 bg-white px-10 md:px-20 lg:px-40">
      <Text h2 className="text-left font-bold text-darkblue">
        Courses
      </Text>

      <div>
        <Text h3 className="text-left">
          Regular Undergraduate Courses
        </Text>
      </div>

      <div>
        <Table isStriped style={{ tableLayout: "fixed" }} className="text-left">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn width={column.width} key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={undergradRows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* <div className=" pt-10">
        <Text h3 className="text-left">
          Other Undergraduate Courses
        </Text>
      </div> */}

      {/* <div>
        <Table isStriped style={{ tableLayout: "fixed" }} className="text-left">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn width={column.width} key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={otherUndergradRows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div> */}

      <div className="pt-10">
        <Text h3 className="text-left">
          Regular Graduate Courses
        </Text>
      </div>

      <div>
        <Table isStriped style={{ tableLayout: "fixed" }} className="text-left">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn width={column.width} key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={gradRows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="pt-10">
        <Text h3 className="text-left">
          Other Graduate Courses
        </Text>
      </div>

      <div>
        <Table isStriped style={{ tableLayout: "fixed" }} className="text-left">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn width={column.width} key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={otherGradRows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Courses;
