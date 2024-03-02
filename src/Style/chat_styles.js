import styled from "styled-components";
import keyframes from "styled-components";

const ChartForm = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 1px 4px 8px 4px lightGray;
  background: white;
  overflow: hidden;
  padding: 40px 0px 24px;
  margin: 0px auto 24px;
  padding: 24px 40px;
  max-width: 590px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Muli, sans-serif;
  margin-top: 5%;

  .form-button {
    letter-spacing: 0px;
    margin: 0px;
    width: 100%;
    min-width: 0px;
    font-size: 17px;
    font-weight: 700;
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
  .form-button:hover {
    letter-spacing: 0px;
    margin: 0px;
    width: 100%;
    min-width: 0px;
    font-size: 17px;
    font-weight: 700;
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
    background: rgb(43 51 59);
    position: relative;
    color: white;
    transition: background 300ms ease 0s, border 300ms ease 0s,
      color 300ms ease 0s;
  }
  .form-heading {
    letter-spacing: 0px;
    margin: 0px;
    min-width: 0px;
    font-size: 32px;
    font-weight: 800;
    line-height: 40px;
    color: rgb(16, 25, 40);
    padding: 0px 0px 24px;
  }
  .form-Lable {
    font-size: 15px;
    font-weight: 700;
    line-height: 21px;
    text-align: left;
    flex-grow: 1;
    color: #101928;
  }
  .form-Input {
    margin-top: -35px;
    margin-right: 10px;
    font-family: Muli, sans-serif;
    background-color: rgb(255, 255, 255);
    padding: 0px 16px;
    border: 0px;
    outline: none;
    height: 46px;

    font-size: 17px;
    line-height: 24px;
    color: rgb(16, 25, 40);
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    font-size: 17px;
    font-weight: 400;
    color: #101928;
    cursor: default;
    -webkit-rtl-ordering: logical;
    cursor: text;
    position: relative;
    display: flex;
    border-radius: 4px;
    border: 1px solid rgb(213, 215, 218);
    background-color: rgb(255, 255, 255);
    width: 95%;
    overflow: hidden;
    font: 400 13.3333px Arial;
  }
  .form-numberselector {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: inherit;
    position: relative;
    min-width: 65px;
    width: 80px;
    transition: width 200ms ease-in-out 0s;
  }
  .form-phonecolumn {
    margin-top: -25px;
    font-family: Muli, sans-serif;
    background-color: rgb(255, 255, 255);
    padding: 0px 16px;

    outline: none;
    height: 46px;
    width: 100%;
    font-size: 17px;
    line-height: 24px;
    color: rgb(16, 25, 40);
  }
  .form-label {
    letter-spacing: 0px;
    margin: 0px 0px 4px;
    min-width: 0px;
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    display: block;
    line-height: 24px;
    color: rgb(135, 140, 147);
  }
  .form-link {
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
  }

  .form-agreelable {
    letter-spacing: 0px;
    margin-left: 0px;
    min-width: 0px;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(16, 25, 40);
    display: block;
    cursor: default;
    margin-left: calc(39px);
    font-family: Muli, sans-serif;
  }

  .form-links {
    text-decoration: none;
    letter-spacing: 0px;
    margin: 0px;
    display: inline;
    color: rgb(3, 122, 255);
    transition: color 150ms ease-in-out 0s, box-shadow 150ms ease-in-out 0s;
    outline: none;
    cursor: pointer;
  }
  .check {
    float: left;
  }

  .forgot-lable {
    display: block;
    padding: 0px 16px 16px;
    letter-spacing: 0px;
    margin: 0px;
    min-width: 0px;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(135, 140, 147);
    padding: 0px 16px 16px;
  }
`;

export { ChartForm };
