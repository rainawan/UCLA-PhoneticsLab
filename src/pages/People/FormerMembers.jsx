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
import { rows, columns } from "../../components/FormerMembers";
import Text from "../../components/Text";

const FormerMembers = () => {
  return (
    <div className="py-10">
      <Text h2 className="font-bold text-darkblue">
        Former Members
      </Text>
      <div className="px-20 lg:px-60 py-10">
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
                    {columnKey === "website" ? (
                      item.website ? (
                        <Link
                          isExternal
                          href={getKeyValue(item, columnKey)}
                          showAnchorIcon
                        />
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

export default FormerMembers;
