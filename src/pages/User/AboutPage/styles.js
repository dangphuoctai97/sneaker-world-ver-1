import styled, { css } from "styled-components";

export const AboutContainer = styled.div`
  padding: 0.5rem 0px;
  background-color: rgb(239, 239, 239);
  .form_title {
    text-align: center;
    vertical-align: center;
    margin-bottom: 0.5rem;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
  }
`;
export const IntroduceContainer = styled.div`
  p {
    font-size: 18px;
  }
  background-color: #fff;
  padding: 20px;
  max-width: 1280px;
  margin: 0px auto;
  margin-top: 20px;
`;
export const ContactForm = styled.div`
  padding: 20px 0;
  margin: 1rem 0;
  max-width: 1280px;
  margin: 0px auto;
  & {
    .contact_info {
      h1 {
        color: #fff;
        margin-bottom: 10px;
      }
      p {
        color: #fff;
      }
      span {
        color: #fff;
      }
      padding: 1rem 3rem;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      color: white;
      filter: contrast();
      background-image: url(https://wallpaperaccess.com/full/281072.jpg);
      background-attachment: fixed;
      background-position: 60% bottom;
      background-size: cover;
    }
    .contact_form {
      background-color: #fff;
      h1 {
        color: royalblue;
      }
      form label {
        color: royalblue;
      }
      padding: 2rem 3rem;
    }
    .info_col {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin: 1.5rem 0px;
      & span {
        font-size: 15px;
        cursor: pointer;
      }
    }
  }
`;
export const SliderContainer = styled.div`
  margin: 2rem 0;
  max-width: 1280px;
  margin: 0px auto;
`;
export const ReviewContainer = styled.div`
  padding: 20px 40px;
`;
export const MapContainer = styled.div`
  margin: 2rem 0;
  max-width: 1280px;
  margin: 0px auto;
`;
