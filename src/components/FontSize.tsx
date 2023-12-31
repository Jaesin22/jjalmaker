import React from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { sizeInfo } from "../reducers/font";
import { useDispatch, useSelector } from "react-redux";

interface SizeOption {
  name: number;
}

interface BannerInfoState {
  size: number;
}

const sizes: SizeOption[] = [
  { name: 20 },
  { name: 30 },
  { name: 40 },
  { name: 50 },
  { name: 60 },
  { name: 70 },
  { name: 80 },
  { name: 90 },
  { name: 100 },
];

const FontSize = () => {
  const dispatch = useDispatch();

  const { size } = useSelector(
    (state: { bannerInfo: BannerInfoState }) => state.bannerInfo
  );

  const changeSize = (selected: SizeOption) => {
    // store에 있는 state 바꾸는 함수 실행
    dispatch(sizeInfo(selected.name));
  };

  const menu = (
    <Menu
      style={{ border: "1px solid #d9d9d9", borderRadius: "2px" }}
      className="w-16 lg:w-20"
    >
      {sizes.map((size, index) => (
        <Menu.Item key={index} onClick={() => changeSize(size)}>
          {size.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      className="flex w-16 bg-white h-7 lg:w-20 lg:h-8"
      style={{ border: "1px solid #d9d9d9", borderRadius: "2px" }}
    >
      <Dropdown overlay={menu} className="ant-dropdown-link">
        <a
          href="font size dropdown"
          className="ant-dropdown-link text-black bolder font-bold"
          onClick={(e) => e.preventDefault()}
        >
          <span className="ml-2 text-base text-black">{size}</span>
          <DownOutlined
            style={{ color: "#e9ecef" }}
            className="ml-1 lg:w-10 lg:ml-2"
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default React.memo(FontSize);
