import React, { useMemo, useEffect, useState } from "react";
import { Tooltip, Image, Tag } from "antd";
import moment from "moment";

import * as S from "./styles";

const BlogItem = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.images?.length) return null;
    return item.images?.map((item) => {
      return (
        <Image
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
      <S.BlogListContent key={item.id}>
        <h5>{item.title}</h5>
        <time>
          Đã đăng vào lúc{" "}
          {moment(item.createdAt).format("kk:mm dddd DD/MM/YYYY")}
        </time>
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
        <S.ShowMoreBtn>Xem thêm</S.ShowMoreBtn>
      </S.BlogListContent>
    </S.BlogListWrapper>
  );
};

const BlogItemHomePage = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.images?.length) return null;
    return item.images?.map((item) => {
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
      {renderBlogImages}
      <S.BlogListHomePageContent key={item.id}>
        <Tooltip className="blog_name" placement="topLeft" title={item.title}>
          <h2>{item.title}</h2>
        </Tooltip>
        <time>Khoảng {moment(item.createdAt).fromNow()}</time>
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </S.BlogListHomePageContent>
    </S.BlogListHomePageWrapper>
  );
};

const RelatedBlogItem = ({ item }) => {
  const renderBlogImages = useMemo(() => {
    if (!item.images?.length) return null;
    return item.images?.map((item) => {
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
        <h5>{item.title}</h5>
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
    if (!item.images?.length) return null;
    return item.images?.map((item) => {
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
        <h5 className="font_size_16">{item.title}</h5>
        <p className="font_size_12">
          {moment(item.createdAt).format("kk:mm dddd DD/MM/YYYY")}
        </p>
      </div>
    </S.SmBlogFeatureWrapper>
  );
};

export { BlogItem, BlogItemHomePage, RelatedBlogItem, RelatedBlogDetailItem };
