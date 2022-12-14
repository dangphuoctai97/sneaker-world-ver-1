import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import {
  Button,
  Form,
  Input,
  Spin,
  Card,
  Select,
  Upload,
  Modal,
  Checkbox,
  Switch,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import slug from "slug";

import * as S from "./styles";

import { onPreview, convertImageToBase64 } from "../../../utils/file";
import { ROUTES, TITLES } from "../../../constants";
import {
  updateUserAction,
  getUserDetailAction,
  clearUserDetailAction,
} from "../../../redux/actions";

const AdminUserUpdatePage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateForm] = Form.useForm();

  const { userDetail } = useSelector((state) => state.user);

  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserDetailAction({ id: id }));
    document.title = TITLES.ADMIN.USER_UPDATE;
  }, [id]);

  useEffect(() => {
    if (userDetail.data.id) {
      updateForm.resetFields();
    }
  }, [userDetail.data]);

  useEffect(() => {
    return () => dispatch(clearUserDetailAction());
  }, []);

  const initialValues = {
    fullName: userDetail.data.fullName,
    email: userDetail.data.email,
    role: userDetail.data.role,
    // gender: userList.data.gender,
    // address: userList.data.gender,
  };

  const handleUpdateUser = async (values) => {
    const { ...userValues } = values;
    // const newImages = [];
    // for (let i = 0; i < images.length; i++) {
    //   const imgBase64 = await convertImageToBase64(images[i].originFileObj);
    //   await newImages.push({
    //     ...(images[i].id && { id: images[i].id }),
    //     name: images[i].name,
    //     type: images[i].type,
    //     thumbUrl: images[i].thumbUrl,
    //     url: imgBase64,
    //   });
    // }
    dispatch(
      updateUserAction({
        id: id,
        values: {
          ...userValues,
          updatedBy: userInfo.data.fullName,
        },
        // images: newImages,
        // initialImageIds: blogDetail.data.images.map((item) => item.id),
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.USER_MANAGE),
        },
      })
    );
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>C???p nh???t ng?????i d??ng</h3>
        <Button
          type="primary"
          onClick={() => {
            updateForm.submit();
          }}
        >
          C???p nh???t
        </Button>
      </S.TopWrapper>
      <Spin spinning={userDetail.loading}>
        <Card>
          <Form
            form={updateForm}
            name="updateUserForm"
            layout="vertical"
            initialValues={initialValues}
            labelCol={{ span: 2 }}
            onFinish={(values) => handleUpdateUser(values)}
          >
            <Form.Item
              label="H??? v?? t??n"
              name="fullName"
              rules={[
                { required: true, message: "Please input your fullName!" },
              ]}
            >
              <Input disabled={componentDisabled} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Email kh??ng h???p l???" },
              ]}
            >
              <Input disabled={componentDisabled} />
            </Form.Item>
            <>
              {userInfo.data.id === userDetail.data.id ? (
                <Form.Item
                  label="Vai tr??"
                  name="role"
                  help="B???n kh??ng th??? s???a vai tr?? c???a m??nh"
                  validateStatus="error"
                >
                  <Select disabled></Select>
                </Form.Item>
              ) : (
                <Form.Item
                  label="Vai tr??"
                  name="role"
                  rules={[
                    {
                      required: true,
                      message: "This field is required!",
                    },
                  ]}
                >
                  <Select>
                    <Select.Option value="admin"></Select.Option>
                    <Select.Option value="user"></Select.Option>
                  </Select>
                </Form.Item>
              )}
            </>
          </Form>
          <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
          >
            T??i mu???n thay ?????i th??ng tin ng?????i d??ng
          </Checkbox>
        </Card>
      </Spin>
    </S.Wrapper>
  );
};

export default AdminUserUpdatePage;
