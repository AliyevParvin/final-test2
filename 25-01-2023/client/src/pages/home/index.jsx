import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import "./index.scss"
const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [toggle, setToggle] = useState(false)
  const sortByPrice=()=>{
    setCourses([...courses.sort(a,b)])
  }
  useEffect(() => {
   axios.get("http://localhost:8000/courses").then(res=>{
    setCourses(res.data)
   })
  }, [])
  return (
    <div id="home">
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
        <div className="tittle"><p></p>
          <h1>Popular Courses</h1>
          </div>
          <div className="cards">
            {courses?.map(e=>{
              return (
                <div className="card" key={e._id}>
                  <div className="card-img"><img src={e.image} alt="" /></div>
                  <div>
                    <p>{e.description}</p>
                    <p>Adobe Guide, Layes, Smart Objects etc...</p>

                  </div>
                  <div className="card-footer"><img src={e.url} alt="" />
                  <div><p>{e.name}</p><p>Author</p></div>
                  <div className="price">{e.price}</div>
                  </div>

                </div>
              )

            })}
          </div>
      </section>
    </div>
  );
};

export default HomePage;
