import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "antd";

import * as S from "./styles";

const TopWrapper = ({ titlePage, breadcrumb = [], height }) => {
  const navigate = useNavigate();
  function renderBreadcrumb() {
    return breadcrumb.map((breadcrumbItem, breadcrumbIndex) => {
      return (
        <Breadcrumb.Item
          key={`breadcrumb-${breadcrumbIndex}`}
          {...(breadcrumbIndex !== breadcrumb.length - 1 && {
            href: "#",
          })}
          onClick={() => navigate(breadcrumbItem.path)}
        >
          {breadcrumbItem.icon && breadcrumbItem.icon}
          <span>{breadcrumbItem.title}</span>
        </Breadcrumb.Item>
      );
    });
  }

  return (
    <S.TopContainer height={height}>
      <Breadcrumb>{renderBreadcrumb()}</Breadcrumb>
      {titlePage && <S.TopTitle>{titlePage}</S.TopTitle>}
    </S.TopContainer>
  );
};

export default TopWrapper;
