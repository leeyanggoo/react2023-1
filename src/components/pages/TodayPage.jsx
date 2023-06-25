import React from "react";
import Contents from "../layout/Contents";
import Today from "../today/Today";
import TodayTitle from "../today/TodayTitle";

const TodayPage = () => {
  return (
    <>
      <Contents title="오늘의 시">
        <TodayTitle />
        <Today />
      </Contents>
    </>
  );
};

export default TodayPage;
