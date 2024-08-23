import Text from "../../components/Text";
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

import {
  columns,
  undergradRows,
  gradRows,
  otherGradRows,
} from "../../components/Courses";

const Courses = () => {
  const newGradRows = gradRows.map((item) => ({
    ...item,
    offered: item.offered.replace(
      "[website]",
      `<a href={"https://linguistics.ucla.edu/courses/"}>website</a>`
    ),
  }));

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
          <TableBody items={newGradRows}>
            {(item) =>
              item.offered == "See schedule" ? (
                <TableRow>
                  <TableCell>{item.course}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Link
                      size="sm"
                      underline="always"
                      color="foreground"
                      showAnchorIcon
                      isExternal
                      href="https://linguistics.ucla.edu/courses/"
                    >
                      See schedule
                    </Link>
                  </TableCell>
                  <TableCell>{item.details}</TableCell>
                </TableRow>
              ) : (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )
            }
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
            {(item) =>
              item.offered == "See schedule" ? (
                <TableRow>
                  <TableCell>{item.course}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Link
                      size="sm"
                      underline="always"
                      color="foreground"
                      showAnchorIcon
                      isExternal
                      href="https://linguistics.ucla.edu/courses/"
                    >
                      See schedule
                    </Link>
                  </TableCell>
                  <TableCell>{item.details}</TableCell>
                </TableRow>
              ) : (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Courses;
