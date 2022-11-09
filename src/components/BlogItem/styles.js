import styled, { css } from "styled-components";
import { Button } from "antd";

export const BlogListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .blog_list_img {
    width: 325px;
    height: auto;
  }
`;
export const BlogListContent = styled.div`
  padding-left: 1rem;
  flex: 1;

  & {
    h5 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 0px;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    time {
      margin-bottom: 2.5rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      font-size: 12px;
    }
    .blog_content {
      display: -webkit-box;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: fit-content;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
  }
`;
export const BlogFeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 1rem;
  .img_100 {
    width: 100%;
    height: 100%;
    cursor: pointer;
    vertical-align: middle;
    border-style: none;
  }
  .blog_feature_content {
    display: flex;
    flex-direction: column;
    padding: 0.3rem 0.5rem;
    width: 100%;
    .font_size_16 {
      font-size: 16px;
    }
    .font_size_12 {
      font-size: 16px;
    }
    h5 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 0px;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    p {
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      font-size: 12px;
    }
    .blog_content {
      display: -webkit-box;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
  }
`;

export const SmBlogFeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.5rem 0px;
  .img_35 {
    width: 35%;
    height: 35%;
    cursor: pointer;
  }
  .blog_feature_content {
    padding: 0.3rem 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 0.3rem 0.5rem;
    width: 100%;
    .font_size_16 {
      font-size: 16px;
    }
    .font_size_12 {
      font-size: 16px;
    }
    h5 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 0px;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    p {
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      font-size: 12px;
    }
    .blog_content {
      display: -webkit-box;
      font-size: 15px;
      margin-bottom: 1rem;
      padding-right: 0.5rem;
      color: rgb(118, 118, 118);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
  }
`;

export const ShowMoreBtn = styled(Button)`
  display: inline-flex;
  align-items: center;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  color: rgb(0, 40, 120);
  background-color: geekblue;
  border: 1px solid royalblue;
  &:hover {
    background-color: royalblue;
    color: #fff;
  }
`;
