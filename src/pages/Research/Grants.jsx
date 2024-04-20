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
import { rows, columns } from "../../components/Grants";
import Text from "../../components/Text";

const Grants = () => {
  return (
    <div className="py-20 bg-white">
      <Text h2>
        Grants
      </Text>
      <div className="px-10 md:px-20 lg:px-40">
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

export default Grants;
