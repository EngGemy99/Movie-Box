import axios from "axios";
import { useEffect, useState } from "react";

const CustomHooks = (url, page) => {
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  useEffect(() => {
    axios
      .get(url)
      // to Handel resolve and reject in one then
      .then(
        (res) => {
          setContent(res.data.results);
          setNumOfPages(res.data.total_pages);
        },
        (e) => {
          console.log(e.message);
        }
      );
  }, [url, page]);

  return { content, numOfPages };
};

export default CustomHooks;
