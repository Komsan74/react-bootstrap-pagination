const dataList = (data, rowsPerPage, pageNumber) => {
  // จำนวนแถวข้อมูลทั้งหมด...
  const rows = data.length;

  // ตำแหน่งหน้าสุดท้าย...
  const lastPage = Math.ceil(rows / rowsPerPage);
  // จำนวนหน้า...
  const items = [...Array(lastPage + 1).keys()].slice(1);

  // ข้อมูลที่แสดงใจแต่ละหน้า...
  let pageList = [];
  if (rows > 0) {
    pageList = data.map((data, index) => {
      const firstIndex = (pageNumber - 1) * rowsPerPage;
      const lastIndex = (pageNumber - 1) * rowsPerPage + rowsPerPage - 1;

      if (firstIndex <= index) {
        if (index <= lastIndex) {
          return data;
        }
      }
      return pageList;
    });
  }

  return { items, pageList };
};

export { dataList };
