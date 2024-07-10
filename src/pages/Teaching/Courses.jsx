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

import { undergradRows, columns, gradRows } from "../../components/Courses";

const Courses = () => {
  return (
    <div className="py-20 bg-white">
      <Text h2 className="font-bold text-darkblue">
        Courses
      </Text>

      <div className="px-10 md:px-20 lg:px-10">
        <Table isStriped className="text-left">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
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

      <Text className="py-2 color">* marks usually-offered quarters.</Text>
    </div>
  );
};

export default Courses;
