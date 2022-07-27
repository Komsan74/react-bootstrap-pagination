import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import Tables from "./component/Table";
import { dataList } from "./controller/DataList";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  // get fake data from fakestoreapi.com
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // pagination initialize...
  const [currentPage, setCurrentPage] = useState(1);
  console.log({ currentPage });

  // ฟังชั่น dataList(data, rowsPerPage, pageNumber) => return { pageList, items }
  const pageData = dataList(data, 7, currentPage);
  // ข้อมูลที่จะนำไปแสดงในแต่ละหน้า ...
  const pageList = pageData.pageList.filter((x) => x.length !== 0);
  // หมายเลขลำดับหน้า...
  const items = pageData.items;

  // Items Number Button
  const pageClick = (page) => {
    setCurrentPage(page);
  };
  // Previous Button
  const prevClick = () => {
    setCurrentPage(currentPage - 1);
  };
  // Next Button
  const nextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      <h1>Pagination with react-bootstrap sample</h1>
      <Container>
        <Tables data={pageList} header={["#", "Title", "Category", "Price"]} />
        <Pagination>
          <Pagination.Prev onClick={prevClick} />
          {items.map((item, index) => {
            return (
              <Pagination.Item
                key={index}
                active={item === currentPage}
                onClick={() => pageClick(item)}>
                {item}
              </Pagination.Item>
            );
          })}
          <Pagination.Next onClick={nextClick} />
        </Pagination>
      </Container>
    </div>
  );
}
