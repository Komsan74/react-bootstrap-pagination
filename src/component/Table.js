import { Table } from "react-bootstrap";

export default function Tables(props) {
  const displayList = props.data;
  console.log({ displayList });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {props.header.map((head, idx) => {
              return <th key={idx}>{head}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {displayList.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
