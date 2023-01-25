import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import "./index.scss";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [toggle, setToggle] = useState(false);
  const sortByPrice = () => {
    toggle
      ? setCourses([...courses.sort((a, b) => a.price - b.price)])
      : axios.get("http://localhost:8000/courses").then((res) => {
          setCourses(res.data);
        });
    setToggle(!toggle);
  };
  useEffect(() => {
    axios.get("http://localhost:8000/courses").then((res) => {
      setCourses(res.data);
    });
  }, []);
  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="first">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide style={{ heigt: "908px", width: "100%" }}>
            <img src="https://preview.colorlib.com/theme/course/" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://preview.colorlib.com/theme/course/"
              style={{ heigt: "908px", width: "100%" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://preview.colorlib.com/theme/course/"
              style={{ heigt: "908px", width: "100%" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://preview.colorlib.com/theme/course/"
              style={{ heigt: "908px", width: "100%" }}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="second">
        <div className="tittle">
          <p></p>
          <h1>Popular Courses</h1>
          <button onClick={sortByPrice}>Sort by Price</button>
        </div>
        <div className="cards">
          {courses?.map((e) => {
            return (
              <div className="card" key={e._id}>
                <div className="card-img">
                  <Link to={`/:${e._id}`}>
                    <img src={e.image} alt="" />
                  </Link>
                </div>
                <div>
                  <p>{e.description}</p>
                  <p>Adobe Guide, Layes, Smart Objects etc...</p>
                </div>
                <div className="card-footer">
                  <img src={e.url} alt="" />
                  <div>
                    <p className="description">{e.name},</p>
                    <p className="author">Author</p>
                  </div>
                  <div className="price">${e.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="third">
        <div className="left">
          <h1>
            Register now and get a discount <span>50% </span>discount until 1
            January
          </h1>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum
            nulla, vitae tempo.
          </p>
          <button>REGISTER NOW</button>
        </div>
        <div className="right">
          <div>
            <h1>Search for your course</h1>
            <div>
              <input type="text" placeholder="Course Name " />
              <input type="text" placeholder="Category " />
              <input type="text" placeholder="Degree " />
              <button>Search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
