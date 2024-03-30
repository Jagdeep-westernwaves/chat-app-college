import React from "react";
import useAPIClient from "./api-Client";
const apiClient = useAPIClient();

export const getProfile = async (uname = localStorage.getItem("demo")) => {
  return await apiClient.post("/profile", {
    id: localStorage.getItem("lid"),
    uname,
  });
};
export const loginHandler = (body = {}) =>
  new Promise(function (myResolve, myReject) {
    try {
      myResolve(apiClient.post("/log", body));
    } catch (error) {
      myReject({ status: false, message });
    }
  });
export const registerHandler = (body = {}) =>
  new Promise(function (myResolve, myReject) {
    try {
      myResolve(apiClient.post("/reg", body));
    } catch (error) {
      myReject(error);
    }
  });
export const callRemovereq = (body = {}) =>
  new Promise(function (myResolve, myReject) {
    try {
      myResolve(apiClient.post("/removereq", body));
    } catch (error) {
      myReject(error);
    }
  });
export const callAcceptreq = (body = {}) =>
  new Promise(function (myResolve, myReject) {
    try {
      myResolve(apiClient.post("/confirmfrnd", body));
    } catch (error) {
      myReject(error);
    }
  });
export const callSendreq = (body = {}) =>
  new Promise(function (myResolve, myReject) {
    try {
      myResolve(apiClient.post("/addfrnd", body));
    } catch (error) {
      myReject(error);
    }
  });
