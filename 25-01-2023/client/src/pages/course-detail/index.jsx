import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams;
  useEffect(() => {
    axios.get(`http://localhost:5173/${id}`).then((res) => {
      setCourse(res.data);
    });
  }, []);
  return <div style={{marginTop:"300px"}}>
    <img src={course.url} alt="" />
  </div>;
};

export default CourseDetail;
