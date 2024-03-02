import styled from "styled-components";

const HeaderForm = styled.div(
  (props) => `
  box-sizing: border-box;
  overflow: hidden;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  font-family: Muli, sans-serif;
  width:${props.dwidth};
  margin-top: 19px;
`
);
const RegisterForm = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 1px 4px 8px 4px #e3e3e3;
  background: white;
  overflow: hidden;
  padding: 20px 35px;
  margin: 0px auto 24px;
  max-width: 630px;
  display: flex;
  flex-direction: column;
  font-family: Muli, sans-serif;
  .lableCheckBox {
    font-size: 49px;
    margin-bottom: 42px !important;
    font-size: 17px;
    font-family: Muli, sans-serif;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .ant-input-group {
    line-height: 49px;
  }
  .btnText {
  }
  .btnGoogle {
    display: flex;
    font-size: 24px;
    font-weight: 600;
    color: #101928;
    border: 1px solid #00000136;
    align-items: center;
    justify-content: center;
    padding: 12px;
    height: 60px;
    box-shadow: 1px 1px 9px #b3b3b3;
    background: white;
  }
  .form-heading {
    letter-spacing: 0px;
    margin: 0px;
    font-family: Mulih, sans-serif;
    min-width: 0px;
    font-size: 23px;
    font-weight: 700;
    line-height: 40px;
    padding: 0px 0px 24px;
    cursor: cursor;
  }
  .marginInput {
    margin: 12px;
  }
  .form-Lable {
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    text-align: left;
    flex-grow: 1;
    color: #101928;
  }
  .lableFont {
    font-family: Muli, sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.03ch;
  }
  .ant-input {
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 0px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    font-size: 14px;
    line-height: 50px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-top-color: rgb(217, 217, 217);
    border-right-color: rgb(217, 217, 217);
    border-right-width: 1px;
    border-bottom-color: rgb(217, 217, 217);
    border-left-color: rgb(217, 217, 217);
    border-radius: 2px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    transition: all 0.3s;
  }
  .ant-input-group-addon {
    line-height: 50px;
    position: relative;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-right-color: rgb(217, 217, 217);
    border-right-style: solid;
    border-right-width: 1px;
    border-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: all 0.3s;
  }
  .paddingCheckBox {
    padding: 15px;
  }
  .ant-checkbox-inner,
  .ant-checkbox-input {
    transform: scale(1.6);
  }
  .form-button {
    letter-spacing: 0px;
    margin: 0px;
    width: 100%;
    min-width: 0px;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    padding: 11px 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    min-height: 48px;
    background: rgb(8 10 12);
    position: relative;
    color: white;
    transition: background 300ms ease 0s, border 300ms ease 0s,
      color 300ms ease 0s;
  }

  .ant-input {
    border: none;
    background-color: transparent;
    margin: 0px;
    padding: 3px;
    height: 48px;
    border-left: 1px solid rgb(213, 215, 218);
  }

  .ant-input-group-addon {
    border: none;

    border-right: 1px black;
    background-color: transparent;
    margin: 0px;
    padding: 0px;
  }
  .form-numberselector {
    background: white;
    border: none;
    margin-right: 10px;
  }
  select option {
    width: 100%;
    border: none;
  }

  .form-phonecolumn {
    font-family: Muli, sans-serif;
    background-color: rgb(255, 255, 255);
    padding: 0px 1px 0px 06px;
    font: 400 13.3333px Arial;
    outline: none;
    height: 50px;
    width: 100%;
    font-size: 17px;
    color: rgb(16, 25, 40);
    border: 1px solid rgb(213, 215, 218);
    overflow: hidden;
  }
  .form-Input {
    margin-top: 0px;
    margin-right: 10px;
    font-family: Muli, sans-serif;
    padding: 10px 16px;
    border: 0px;
    width: 100%;
    outline: none;
    height: 50px;
    box-sizing: border-box;
    font-size: 17px;
    line-height: 24px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-shadow: none;
    text-align: start;
    appearance: auto;
    font-size: 17px;
    font-weight: 400;
    color: #101928;
    -webkit-rtl-ordering: logical;
    cursor: text;
    position: relative;
    display: flex;
    border-radius: 4px;
    border: 1px solid rgb(213, 215, 218);
    background-color: rgb(255, 255, 255);
    width: 100%;
    overflow: hidden;
    font: 400 13.3333px Arial;
    text-indent: 0px;
  }
  .form-link {
    margin: 0px 0px 4px;
    min-width: 0px;
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    display: block;
    line-height: 24px;
    transition: color 150ms ease-in-out 0s, box-shadow 150ms ease-in-out 0s;
    outline: none;
    font-family: Muli, sans-serif;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
  }
  .form-links {
    letter-spacing: 0px;
    margin: 0px 0px 4px;
    min-width: 0px;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(3, 122, 255);
    transition: color 150ms ease-in-out 0s, box-shadow 150ms ease-in-out 0s;
    outline: none;
    font-family: Muli, sans-serif;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 0px;
  }
`;

const CenterForm = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 1px 4px 8px 4px #e3e3e3;
  background: white;
  overflow: hidden;
  padding: 20px 35px;
  margin: 0px auto 24px;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  font-family: Muli, sans-serif;

  .ant-input-group {
    line-height: 49px;
  }
  .form-heading {
    letter-spacing: 0px;
    margin: 0px;
    min-width: 0px;
    font-size: 23px;
    cursor: pointer;
    font-weight: 700;
    line-height: 40px;
    padding: 0px 0px 24px;
  }
  .form-Lable {
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    text-align: left;
    flex-grow: 1;
    color: #101928;
  }
  .lableFont {
    font-family: Muli, sans-serif;
    font-size: 14px;
    font-weight: 700;
  }
  .ant-input {
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 0px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    font-size: 14px;
    line-height: 50px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-top-color: rgb(217, 217, 217);
    border-right-color: rgb(217, 217, 217);
    border-right-width: 1px;
    border-bottom-color: rgb(217, 217, 217);
    border-left-color: rgb(217, 217, 217);
    border-radius: 2px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    transition: all 0.3s;
  }

  .form-numberselector {
    background-color: inherit;
    border: none;
    border-radius: 46px;
    border-color: transparent !important;
    box-shadow: none;
  }

  .ant-input-group-addon {
    line-height: 50px;
    position: relative;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-right-color: rgb(217, 217, 217);
    border-right-style: solid;
    border-right-width: 1px;
    border-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: all 0.3s;
  }
  .form-button {
    letter-spacing: 0px;
    margin: 0px;
    width: 100%;
    min-width: 0px;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    padding: 11px 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    min-height: 48px;
    background: rgb(8 10 12);
    position: relative;
    color: white;
    transition: background 300ms ease 0s, border 300ms ease 0s,
      color 300ms ease 0s;
  }
  .ant-input-password {
    margin: 0;
    padding: 0;
    line-height: 50px;
    position: relative;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-right-color: rgb(217, 217, 217);
    border-right-style: solid;
    border-right-width: 1px;
    border-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: all 0.3s;
  }
  .ant-input {
    border: none;
    background-color: transparent;
    margin: 0px;
    padding: 3px;
    height: 48px;
    border-left: 1px solid rgb(213, 215, 218);
  }

  .ant-input-group-addon {
    border: none;

    border-right: 1px black;
    background-color: transparent;
    margin: 0px;
    padding: 0px;
  }
  .form-phonecolumn {
    font-family: Muli, sans-serif;
    background-color: rgb(255, 255, 255);
    padding: 0px 1px 0px 16px;
    font: 400 13.3333px Arial;
    outline: none;
    height: 50px;
    width: 100%;
    font-size: 17px;
    color: rgb(16, 25, 40);
    border: 1px solid rgb(213, 215, 218);
    overflow: hidden;
  }
  .form-Input {
    margin-top: 0px;
    margin-right: 10px;
    font-family: Muli, sans-serif;
    padding: 10px 16px;
    border: 0px;
    width: 100%;
    outline: none;
    height: 50px;
    box-sizing: border-box;
    font-size: 17px;
    line-height: 24px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-shadow: none;
    text-align: start;
    appearance: auto;
    font-size: 17px;
    font-weight: 400;
    color: #101928;
    -webkit-rtl-ordering: logical;
    cursor: text;
    position: relative;
    display: flex;
    border-radius: 4px;
    border: 1px solid rgb(213, 215, 218);
    background-color: rgb(255, 255, 255);
    width: 100%;
    overflow: hidden;
    font: 400 13.3333px Arial;
    text-indent: 0px;
  }
  .form-link {
    margin: 0px 0px 4px;
    min-width: 0px;
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    display: block;
    line-height: 24px;
    transition: color 150ms ease-in-out 0s, box-shadow 150ms ease-in-out 0s;
    outline: none;
    font-family: Muli, sans-serif;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
  }
  .ant-input {
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 0px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    font-size: 14px;
    line-height: 50px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-top-color: rgb(217, 217, 217);
    border-right-color: rgb(217, 217, 217);
    border-right-width: 1px;
    border-bottom-color: rgb(217, 217, 217);
    border-left-color: rgb(217, 217, 217);
    border-radius: 2px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    transition: all 0.3s;
  }

  .form-links {
    letter-spacing: 0px;
    margin: 0px 0px 4px;
    min-width: 0px;
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    display: block;
    line-height: 24px;
    color: rgb(3, 122, 255);
    transition: color 150ms ease-in-out 0s, box-shadow 150ms ease-in-out 0s;
    outline: none;
    font-family: Muli, sans-serif;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 0px;
  }
  .btnGoogle {
    display: flex;
    font-size: 24px;
    font-weight: 600;
    color: #101928;
    border: 1px solid #00000136;
    align-items: center;
    justify-content: center;
    padding: 12px;
    height: 60px;
    box-shadow: 1px 1px 9px #b3b3b3;
    background: white;
  }
  .ant-input-password {
    margin: 0;
    padding: 0;
    line-height: 50px;
    position: relative;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-right-color: rgb(217, 217, 217);
    border-right-style: solid;
    border-right-width: 1px;
    border-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: all 0.3s;
  }
  .form-link {
    margin: 0px 0px 4px;
    min-width: 0px;
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    display: block;
    line-height: 24px;
    transition: color 150ms ease-in-out 0s, box-shadow 150ms ease-in-out 0s;
    outline: none;
    font-family: Muli, sans-serif;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
  }
`;
const CenterProfile = styled.div`
  .ant-upload.ant-upload-select-picture-card {
    width: 130px;
    height: 130px;
    margin: 0;
    display: flex;
    text-align: center;
    vertical-align: middle;
    background-color: #fafafa;
    border: none;
    border-radius: 2px;
    cursor: auto;
    transition: border-color 0.3s;
  }
  .ant-input {
    border: none;
    background-color: transparent;
    margin: 0px;
    padding: 3px;
    height: 48px;
    border-left: 1px solid rgb(213, 215, 218);
  }
  .form-Input {
    margin-top: 0px;
    margin-right: 10px;
    font-family: Muli, sans-serif;
    padding: 10px 16px;
    border: 0px;
    width: 100%;
    outline: none;
    height: 50px;
    box-sizing: border-box;
    font-size: 17px;
    line-height: 24px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-shadow: none;
    text-align: start;
    appearance: auto;
    font-size: 17px;
    font-weight: 400;
    color: #101928;
    -webkit-rtl-ordering: logical;
    cursor: text;
    position: relative;
    display: flex;
    border-radius: 4px;
    border: 1px solid rgb(213, 215, 218);
    background-color: rgb(255, 255, 255);
    width: 100%;
    overflow: hidden;
    font: 400 13.3333px Arial;
    text-indent: 0px;
  }
  .ant-input {
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 0px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    font-size: 14px;
    line-height: 50px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-top-color: rgb(217, 217, 217);
    border-right-color: rgb(217, 217, 217);
    border-right-width: 1px;
    border-bottom-color: rgb(217, 217, 217);
    border-left-color: rgb(217, 217, 217);
    border-radius: 2px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    transition: all 0.3s;
  }
  .form-button {
    letter-spacing: 0px;
    margin: 0px;
    width: 100%;
    min-width: 0px;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    padding: 11px 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    min-height: 48px;
    background: rgb(8 10 12);
    position: relative;
    color: white;
    transition: background 300ms ease 0s, border 300ms ease 0s,
      color 300ms ease 0s;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    width: 130px;
    height: 130px;
    margin: 0;
    display: flex;
    text-align: center;
    vertical-align: middle;
    background-color: #fafafa;
    border: none;
    border-radius: 2px;
    cursor: auto;
    transition: border-color 0.3s;
  }
  .ant-upload-list-picture-card .ant-upload-list-item,
  .ant-upload-list-picture .ant-upload-list-item {
    width: 130px;
    height: 130px;
    margin: 0;
    display: flex;
    text-align: center;
    vertical-align: middle;
    background-color: #fafafa;
    border: none;
    border-radius: 2px;
    cursor: default;
    transition: border-color 0.3s;
  }
  .ant-upload-list-picture-card .ant-upload-list-item-info:before {
    position: absolute;
    display: none;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    cursor: default;
    transition: all 0.3s;
    content: " ";
  }
  .forgot-passwordContainer {
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 1px 4px 8px 4px #e3e3e3;
    /* background: rgba(255, 255, 255, 0.4); */
    overflow: hidden;
    padding: 20px 35px;
    margin: 30px auto;
    max-width: 505px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Muli, sans-serif;
  }
  .profileDemo {
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 1px 4px 8px 4px #e3e3e3;
    /* background: rgba(255, 255, 255, 0.4); */
    overflow: hidden;
    padding: 20px 35px;
    margin: 30px auto 24px;
    max-width: 325px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Muli, sans-serif;
  }
  @media screen and (max-width: 600px) {
    .forgot-passwordContainer {
      border-radius: 8px;
      margin: 0;
      box-sizing: border-box;
      box-shadow: none;
      background-color: white;
      /* background: rgba(255, 255, 255, 0.4); */
      overflow: hidden;
      padding: 20px 35px;
      max-width: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Muli, sans-serif;
    }
    .profileDemo {
      border-radius: 8px;
      margin: 0;
      box-sizing: border-box;
      box-shadow: none;
      background-color: white;
      /* background: rgba(255, 255, 255, 0.4); */
      overflow: hidden;
      padding: 20px 35px;
      max-width: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Muli, sans-serif;
    }
    .demo {
      padding: 10px;
    }
  }
  .unameCss {
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
    padding-top: 20px;
    font-family: muli, sans-serif;
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .profileheight {
    height: 260px;
  }
  .dpArea {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .center-profile {
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-family: Muli, sans-serif;
  }
  .imgCss {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .editProfileIconDiv {
    width: 35px;
    height: 35px;
    margin-top: 98px;
    margin-left: -40px;
    z-index: 99;
    background-color: #037aff;
    color: red;
    border-radius: 50%;
    border: 2px solid white;
    color: blue;
    cursor: Pointer;
  }
  .profileIcon {
    width: 31px;
    height: 31px;
    padding: 5px;
    color: white;
  }
  .profiledetail {
    width: 100%;
    padding: 1px 0px;
    font-family: Muli, sans-serif;
    color: #333;
    text-transform: capitalize;
    font-size: 18px;
    border-radius: 4px;
    padding-bottom: 20px;
  }
  .addMob {
    background-color: transparent;
    padding: 1px 0px;
    color: #037aff;
    font-weight: 300;
    font-family: Muli, sans-serif;
    font-size: 14px;
    border: none;
  }
  .editDetails {
    background-color: transparent;
    width: 100%;
    color: #037aff;
    margin: auto;
    font-weight: 300;
    font-family: Muli, sans-serif;
    font-size: 14px;
    border: none;
  }
  .lableFont {
    font-family: Muli, sans-serif;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
  }
`;
const TestimonialStyle = styled.div`
  border-radius: 8px;
  margin: auto;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px 7px #ddd;
  background: rgba(255, 255, 255, 0.4);
  overflow: hidden;
  padding: 20px 35px;
  padding-top: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 100%;
  height: 500px;
  width: 85%;
  font-size: 23px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  font-family: Muli, sans-serif;
  .testimonialMessege {
    color: #333;
    font-size: 19px;
    text-align: center;
    padding: 30px 140px;
  }
`;

const FooterContainer = styled.div`
  .footerContainers {
    box-shadow: -2px 0px 10px #ddd;
    box-sizing: border-box;
    background: white;
    overflow: hidden;
    padding-top: 80px;
    padding-bottom: 10px;
    margin: 0px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: Muli, sans-serif;
  }
  .menuTitle {
    font-size: 15px;
  }
  .centerFooterText {
    /* display: flex;
    flex-wrap:nowrap;
    flex-direction:row;
    justify-content: center; */
    /* align-items: center; */
    text-align: center;
  }
  .footerCont {
    padding-right: 120px;
    padding-left: 120px;
  }
  .instaIcon {
    color: rgb(16, 25, 40);
    font-size: 30px;
    transition-duration: 0.3s;
    width: 40px;
  }
  .instaIcon:hover {
    color: rgb(16, 25, 40);
    font-size: 35px;
    margin-top: -10px;
  }
  .instaIcon:hover {
    color: red;
  }
  .menuHeading {
    cursor: default;
    letter-spacing: 1px;
    margin: 0px;
    min-width: 0px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: rgb(16, 25, 40);
    margin-bottom: 16px;
  }
  .demo {
    padding: 2px 100px;
  }
`;
export {
  CenterForm,
  RegisterForm,
  HeaderForm,
  CenterProfile,
  FooterContainer,
  TestimonialStyle,
};
