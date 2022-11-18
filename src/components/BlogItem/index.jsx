import React, { useMemo, useEffect, useState } from "react";
import { Tooltip, Image, Tag } from "antd";
import moment from "moment";

import * as S from "./styles";

const BlogItem = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.blogImages?.length) return null;
    return item.blogImages?.map((item) => {
      return (
        <img
          className="blog_list_img"
          key={item.blogId}
          src={item.url}
          alt={item.name}
        />
      );
    });
  }, [item]);

  return (
    <S.BlogListWrapper>
      {renderBlogImages}
      <div className="blog_list_content" key={item.id}>
        <h2>{item.title}</h2>
        <p>
          Đã đăng vào lúc{" "}
          {moment(item.createdAt).format("kk:mm dddd DD/MM/YYYY")}
        </p>
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
        <S.ShowMoreBtn>Xem thêm</S.ShowMoreBtn>
      </div>
    </S.BlogListWrapper>
  );
};

const BlogItemHomePage = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.blogImages?.length) return null;
    return item.blogImages?.map((item) => {
      return (
        <img
          className="blog_list_img"
          key={item.blogId}
          src={item.url}
          alt={item.name}
        />
      );
    });
  }, [item]);

  return (
    <S.BlogListHomePageWrapper>
      <div className="manage_listing_top">{renderBlogImages}</div>
      <div className="manage_listing_middle">
        <div className="manage_listing_middle_btn_list">
          <span className="listing_middle_label">
            <div
              className="blog_content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </span>
        </div>
        <h4 className="blog_name">{item.title}</h4>
        <p className="listing_middle_content">
          Khoảng {moment(item.createdAt).fromNow()}
        </p>
      </div>
    </S.BlogListHomePageWrapper>
  );
};

const RelatedBlogItem = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.blogImages?.length) return null;
    return item.blogImages?.map((item) => {
      return (
        <img
          className="img_100"
          key={item.blogId}
          src={item.url}
          alt={item.name}
        />
      );
    });
  }, [item]);
  return (
    <S.BlogFeatureWrapper key={item.id}>
      {renderBlogImages}
      <div className="blog_feature_content">
        <p>{moment(item.createdAt).format("kk:mm dddd DD/MM/YYYY")}</p>
        <h3>{item.title}</h3>
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>
    </S.BlogFeatureWrapper>
  );
};

const RelatedBlogDetailItem = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.blogImages?.length) return null;
    return item.blogImages?.map((item) => {
      return (
        <img
          className="img_35"
          key={item.blogId}
          src={item.url}
          alt={item.name}
        />
      );
    });
  }, [item]);

  return (
    <S.SmBlogFeatureWrapper key={item.id}>
      {renderBlogImages}
      <div className="blog_feature_content">
        <h4>{item.title}</h4>
        <p>{moment(item.createdAt).format("kk:mm dddd DD/MM/YYYY")}</p>
      </div>
    </S.SmBlogFeatureWrapper>
  );
};

export { BlogItem, BlogItemHomePage, RelatedBlogItem, RelatedBlogDetailItem };
