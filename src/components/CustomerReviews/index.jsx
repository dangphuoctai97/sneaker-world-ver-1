import { useMemo } from "react";
import { Space, Rate, Col } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, A11y, Autoplay } from "swiper";
import moment from "moment";

import * as S from "./styles";

const CustomerReviews = ({ reviewList }) => {
  const renderReviewList = useMemo(() => {
    if (!reviewList.data.length) return null;
    return reviewList.data?.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <S.ProductRating>
            <div className="product_rating_avata">
              <S.RatingAvatarImg
                size={{ md: 40, sm: 32 }}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <div className="product_rating_main_author-name">
                {item.user.fullName}
              </div>
            </div>
            <div className="product_rating_main">
              <div className="product_user_rating">
                <Rate value={item.rate} disabled style={{ fontSize: 14 }} />
              </div>
              <div className="product_rating_time">
                {moment(item.createdAt).fromNow()}
              </div>
              <div className="product_rating_content">{item.comment}</div>
            </div>
          </S.ProductRating>
        </SwiperSlide>
      );
    });
  }, [reviewList.data]);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "royalblue",
        }}
        modules={[Navigation, A11y, Autoplay, FreeMode]}
        spaceBetween={15}
        slidesPerView={6}
        autoplay={{ delay: 1500 }}
        speed={800}
        loop={true}
        navigation
        freeMode={true}
      >
        {renderReviewList}
      </Swiper>
    </>
  );
};

export default CustomerReviews;
