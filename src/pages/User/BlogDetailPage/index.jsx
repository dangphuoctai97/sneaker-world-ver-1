import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Breadcrumb } from "antd";
import { Link, generatePath, useParams } from "react-router-dom";
import moment from "moment";

import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";
import {
  getBlogDetailAction,
  getBlogListFeatureAction,
} from "../../../redux/actions";
import { ROUTES, TITLES } from "../../../constants/";
import { RelatedBlogDetailItem } from "../../../components/BlogItem";
import LoadingWrapper from "../../../components/LoadingWrapper";
import { BiCommentDetail } from "react-icons/bi";

import * as S from "./styles";

const BlogDetailPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const blogId = parseInt(id.split(".")[1]);

  const { blogDetail, blogListFeature } = useSelector((state) => state.blog);

  useEffect(() => {
    document.title = TITLES.USER.BLOG_DETAILS;
    dispatch(
      getBlogListFeatureAction({
        params: {
          page: 1,
          order: "id.desc",
        },
      })
    );
    dispatch(getBlogDetailAction({ id: blogId }));
  }, [blogId]);

  const renderRelatedBlogList1 = () => {
    const newBlogListFeature1 = blogListFeature.data.filter(
      (item) =>
        item.id !== blogId && item.categoryId === blogDetail.data.categoryId
    );
    return newBlogListFeature1?.slice(0, 4)?.map((item) => {
      return (
        <Link
          to={generatePath(ROUTES.USER.BLOG_DETAILS, {
            id: `${item.slug}.${item.id}`,
          })}
          style={{ width: "100%" }}
          key={item.id}
        >
          <RelatedBlogDetailItem item={item} />
        </Link>
      );
    });
  };

  const renderRelatedBlogList2 = () => {
    const newBlogListFeature2 = blogListFeature.data.filter(
      (item) =>
        item.id !== blogId && item.categoryId !== blogDetail.data.categoryId
    );
    return newBlogListFeature2?.slice(0, 4)?.map((item) => {
      return (
        <Link
          to={generatePath(ROUTES.USER.BLOG_DETAILS, {
            id: `${item.slug}.${item.id}`,
          })}
          style={{ width: "100%" }}
          key={item.id}
        >
          <RelatedBlogDetailItem item={item} />
        </Link>
      );
    });
  };

  return (
    <>
      {blogDetail.loading ? (
        <LoadingWrapper />
      ) : (
        <>
          <TopWrapper
            breadcrumb={[
              ...BREADCRUMB,
              // {
              //   title:
              //     blogDetail.data.category === 1
              //       ? "Chia s??? kinh nghi???m"
              //       : "Review s???n ph???m",
              //   path: ROUTES.USER.BLOG_LIST,
              //   state: { categoryId: [blogDetail.data.category?.id] },
              // },
              {
                title: "Chi ti???t b??i vi???t",
                icon: <BiCommentDetail style={{ fontSize: 20 }} />,
              },
            ]}
            height={200}
          />
          <S.BlogListContainer>
            <Row
              style={{
                marginLeft: "-8px",
                marginRight: "-8px",
                marginTop: "-5px",
              }}
              gutter={[16, 16]}
            >
              <Col
                xs={24}
                sm={24}
                lg={17}
                style={{ paddingRight: 8, paddingLeft: 8 }}
              >
                <h1>{blogDetail.data.title}</h1>
                <time>
                  ???? ????ng v??o l??c{" "}
                  {moment(blogDetail.data.createdAt).format(
                    "kk:mm dddd DD/MM/YYYY"
                  )}
                </time>
                <Row
                  style={{
                    marginLeft: "-4px",
                    marginRight: "-4px",
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                  gutter={[8, 8]}
                ></Row>
                <S.BlogDetailContent
                  dangerouslySetInnerHTML={{ __html: blogDetail.data.content }}
                />
              </Col>
              <Col xs={24} sm={24} lg={7}>
                <Row
                  style={{
                    marginLeft: "-8px",
                    marginRight: "-8px",
                  }}
                  gutter={[16, 16]}
                >
                  <Col
                    xs={24}
                    sm={12}
                    lg={24}
                    style={{ paddingRight: 8, paddingLeft: 8 }}
                  >
                    <S.RelatedBlogContainer>
                      <div className="related_tag">
                        <div className="related_title">C??ng ch??? ?????</div>
                      </div>
                      <S.RelatedBlogContent>
                        {renderRelatedBlogList1()}
                      </S.RelatedBlogContent>
                    </S.RelatedBlogContainer>
                  </Col>
                  <Col
                    xs={24}
                    sm={12}
                    lg={24}
                    style={{ paddingRight: 8, paddingLeft: 8 }}
                  >
                    <S.RelatedBlogContainer>
                      <div style={{ marginTop: 20 }} className="related_tag">
                        <div className="related_title">Ch??? ????? kh??c</div>
                      </div>
                      <S.RelatedBlogContent>
                        {renderRelatedBlogList2()}
                      </S.RelatedBlogContent>
                    </S.RelatedBlogContainer>
                  </Col>
                </Row>
              </Col>
            </Row>
          </S.BlogListContainer>
        </>
      )}
    </>
  );
};

export default BlogDetailPage;
