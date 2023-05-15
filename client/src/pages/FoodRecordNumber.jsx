import React, { Fragment, useState, useEffect } from "react";
import "../styles/userFoodRecord.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AddFoodList from "../components/AddFoodList";
import axios from "axios";
// 圖片區
import target from "../image/target.png";
import fork from "../image/fork.png";
import plus from "../image/plus.png";
import rightArrow from "../image/right-arrow.png";
import sunset from "../image/sunset.png";
import sun from "../image/sun.png";
import moon from "../image/moon.png";
import sunrise from "../image/sunrise.png";
import circleShape from "../image/circle-shape.png";

// 帶會員驗證token;
axios.defaults.headers.common["Authorization"] =
  "JWT " +
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0MTUyNjA3ODcyIiwiZW1haWwiOiJBQUFBQUFrYWthQHRlc3QuY29tIiwiZXhwIjoxNjkyNDMwNjQxNTg2LCJpYXQiOjE2ODM3OTA2NDF9.u2OHIdFXKuYtXzhbib35iLVwarUZa39zMcEFCBJ82pg";

function FoodRecordNumber() {
  const [resMemberData, setResMemberData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("FoodRecordNumber 被渲染了");
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${date}`;
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/user/meal_records?start_date=${formattedDate}&end_date=${formattedDate}`
      )
      .then((response) => {
        setResMemberData(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setResMemberData]);

  // 早餐區;
  const [breakfastRow, setBreakfastRow] = useState([]);
  const [brTotalCalories, setBrTotalCalories] = useState(0);
  const [brCarbohydrate, setBrTotalCarbohydrate] = useState(0);
  const [brProtein, setBrTotalProtein] = useState(0);
  const [brSaturatedFat, setBrTotalSaturatedFat] = useState(0);
  const [brSodium, setBrTotalSodium] = useState(0);

  // 計算早餐項目
  useEffect(() => {
    if (!loading) {
      // console.log(resMemberData);
      const memberData = resMemberData.data.records;
      const memberBreakfasts = memberData.filter(
        (meal) => meal.meal_type === "breakfast"
      );

      let brCalories = 0;
      let brCarbohydrate = 0;
      let brProtein = 0;
      let brSaturatedFat = 0;
      let brSodium = 0;
      let brkey = 0;

      const breakfastRow = memberBreakfasts.map((memberBreakfast) => {
        brkey++;
        const { name, calories, carbohydrate, protein, saturated_fat, sodium } =
          memberBreakfast.food_info;
        const qty = parseFloat(memberBreakfast.food_qty).toFixed(2);

        // 更新總計變數
        brCalories += Math.floor(calories * qty);
        brCarbohydrate += carbohydrate * qty;
        brProtein += protein * qty;
        brSaturatedFat += saturated_fat * qty;
        brSodium += sodium * qty;
        setBrTotalCalories(brCalories);
        setBrTotalCarbohydrate(brCarbohydrate);
        setBrTotalProtein(brProtein);
        setBrTotalSaturatedFat(brSaturatedFat);
        setBrTotalSodium(brSodium);

        return (
          <Fragment key={brkey}>
            <tr>
              <td className="foodName">{name}</td>
              <td />
              <td />
              <td />
              <td
                style={{ fontSize: 20, fontWeight: "bolder", paddingLeft: 28 }}
              >
                {Math.floor(calories * qty)}
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid black" }}>
              <td>{carbohydrate * qty}</td>
              <td>{protein * qty}</td>
              <td>{saturated_fat * qty}</td>
              <td>{sodium * qty}</td>
            </tr>
          </Fragment>
        );
      });
      setBreakfastRow(breakfastRow);
    }
  }, [loading, resMemberData]);

  //午餐區:
  const [lunchRow, setLunchRow] = useState([]);
  const [luTotalCalories, setLuTotalCalories] = useState(0);
  const [luCarbohydrate, setLuTotalCarbohydrate] = useState(0);
  const [luProtein, setLuTotalProtein] = useState(0);
  const [luSaturatedFat, setLuTotalSaturatedFat] = useState(0);
  const [luSodium, setLuTotalSodium] = useState(0);

  // 計算午餐項目
  useEffect(() => {
    if (!loading) {
      // console.log(resMemberData);
      const memberData = resMemberData.data.records;
      const memberlunchs = memberData.filter(
        (meal) => meal.meal_type === "lunch"
      );

      let luCalories = 0;
      let luCarbohydrate = 0;
      let luProtein = 0;
      let luSaturatedFat = 0;
      let luSodium = 0;
      let lukey = 0;

      const lunchRow = memberlunchs.map((memberlunch) => {
        lukey++;
        const { name, calories, carbohydrate, protein, saturated_fat, sodium } =
          memberlunch.food_info;
        const qty = parseFloat(memberlunch.food_qty).toFixed(2);

        // 更新總計變數
        luCalories += Math.floor(calories * qty);
        luCarbohydrate += carbohydrate * qty;
        luProtein += protein * qty;
        luSaturatedFat += saturated_fat * qty;
        luSodium += sodium * qty;
        setLuTotalCalories(luCalories);
        setLuTotalCarbohydrate(luCarbohydrate);
        setLuTotalProtein(luProtein);
        setLuTotalSaturatedFat(luSaturatedFat);
        setLuTotalSodium(luSodium);
        return (
          <Fragment key={lukey}>
            <tr>
              <td className="foodName">{name}</td>
              <td />
              <td />
              <td />
              <td
                style={{ fontSize: 20, fontWeight: "bolder", paddingLeft: 28 }}
              >
                {Math.floor(calories * qty)}
              </td>
            </tr>

            <tr style={{ borderBottom: "1px solid black" }}>
              <td>{carbohydrate * qty}</td>
              <td>{protein * qty}</td>
              <td>{saturated_fat * qty}</td>
              <td>{sodium * qty}</td>
            </tr>
          </Fragment>
        );
      });
      setLunchRow(lunchRow);
    }
  }, [loading, resMemberData]);

  // 晚餐區;
  const [dinnerRow, setDinnerRow] = useState([]);
  const [diTotalCalories, setDiTotalCalories] = useState(0);
  const [diCarbohydrate, setDiTotalCarbohydrate] = useState(0);
  const [diProtein, setDiTotalProtein] = useState(0);
  const [diSaturatedFat, setDiTotalSaturatedFat] = useState(0);
  const [diSodium, setDiTotalSodium] = useState(0);

  // 計算晚餐項目
  useEffect(() => {
    if (!loading) {
      // console.log(resMemberData);
      const memberData = resMemberData.data.records;
      const memberDinners = memberData.filter(
        (meal) => meal.meal_type === "dinner"
      );

      let diCalories = 0;
      let diCarbohydrate = 0;
      let diProtein = 0;
      let diSaturatedFat = 0;
      let diSodium = 0;
      let dikey = 0;

      const dinnerRow = memberDinners.map((memberDinner) => {
        dikey++;
        const { name, calories, carbohydrate, protein, saturated_fat, sodium } =
          memberDinner.food_info;
        const qty = parseFloat(memberDinner.food_qty).toFixed(2);

        // 更新總計變數
        diCalories += Math.floor(calories * qty);
        diCarbohydrate += carbohydrate * qty;
        diProtein += protein * qty;
        diSaturatedFat += saturated_fat * qty;
        diSodium += sodium * qty;
        setDiTotalCalories(diCalories);
        setDiTotalCarbohydrate(diCarbohydrate);
        setDiTotalProtein(diProtein);
        setDiTotalSaturatedFat(diSaturatedFat);
        setDiTotalSodium(diSodium);

        return (
          <Fragment key={dikey}>
            <tr>
              <td className="foodName">{name}</td>
              <td />
              <td />
              <td />
              <td
                style={{ fontSize: 20, fontWeight: "bolder", paddingLeft: 28 }}
              >
                {Math.floor(calories * qty)}
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid black" }}>
              <td>{carbohydrate * qty}</td>
              <td>{protein * qty}</td>
              <td>{saturated_fat * qty}</td>
              <td>{sodium * qty}</td>
            </tr>
          </Fragment>
        );
      });
      setDinnerRow(dinnerRow);
    }
  }, [loading, resMemberData]);

  // 零食區;
  const [snackRow, setSnackRow] = useState([]);
  const [snTotalCalories, setSnTotalCalories] = useState(0);
  const [snCarbohydrate, setSnTotalCarbohydrate] = useState(0);
  const [snProtein, setSnTotalProtein] = useState(0);
  const [snSaturatedFat, setSnTotalSaturatedFat] = useState(0);
  const [snSodium, setSnTotalSodium] = useState(0);

  // 計算零食項目
  useEffect(() => {
    if (!loading) {
      console.log(resMemberData);
      const memberData = resMemberData.data.records;
      const memberSnacks = memberData.filter(
        (meal) => meal.meal_type === "snack"
      );

      let snCalories = 0;
      let snCarbohydrate = 0;
      let snProtein = 0;
      let snSaturatedFat = 0;
      let snSodium = 0;
      let snkey = 0;

      const snackRow = memberSnacks.map((memberSnack) => {
        snkey++;
        const { name, calories, carbohydrate, protein, saturated_fat, sodium } =
          memberSnack.food_info;
        const qty = parseFloat(memberSnack.food_qty).toFixed(2);

        // 更新總計變數
        snCalories += Math.floor(calories * qty);
        snCarbohydrate += carbohydrate * qty;
        snProtein += protein * qty;
        snSaturatedFat += saturated_fat * qty;
        snSodium += sodium * qty;
        setSnTotalCalories(snCalories);
        setSnTotalCarbohydrate(snCarbohydrate);
        setSnTotalProtein(snProtein);
        setSnTotalSaturatedFat(snSaturatedFat);
        setSnTotalSodium(snSodium);

        return (
          <Fragment key={snkey}>
            <tr>
              <td className="foodName">{name}</td>
              <td />
              <td />
              <td />
              <td
                style={{ fontSize: 20, fontWeight: "bolder", paddingLeft: 28 }}
              >
                {Math.floor(calories * qty)}
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid black" }}>
              <td>{carbohydrate * qty}</td>
              <td>{protein * qty}</td>
              <td>{saturated_fat * qty}</td>
              <td>{sodium * qty}</td>
            </tr>
          </Fragment>
        );
      });
      setSnackRow(snackRow);
    }
  }, [loading, resMemberData]);

  // 總卡路里數值加總
  const [AllNumberCaloriesPlus, setAllNumberCaloriesPlus] = useState();

  useEffect(() => {
    if (!loading) {
      let totalCal =
        snTotalCalories + diTotalCalories + luTotalCalories + brTotalCalories;
      setAllNumberCaloriesPlus(totalCal);
    }
  });

  // 總碳水化合物數值加總
  const [AllNumberCarbohydratePlus, setAllNumberCarbohydratePlus] = useState();

  useEffect(() => {
    if (!loading) {
      let totalCar =
        snCarbohydrate + diCarbohydrate + luCarbohydrate + brCarbohydrate;
      setAllNumberCarbohydratePlus(totalCar);
    }
  });

  // 總蛋白質數值加總
  const [AllNumberProteinPlus, setAllNumberProteinPlus] = useState();

  useEffect(() => {
    if (!loading) {
      let totalPro = snProtein + diProtein + luProtein + brProtein;
      setAllNumberProteinPlus(totalPro);
    }
  });

  // 總脂肪數值加總
  const [AllNumberSaturatedFatPlus, setAllNumberSaturatedFatPlus] = useState();

  useEffect(() => {
    if (!loading) {
      let totalFat =
        snSaturatedFat + diSaturatedFat + luSaturatedFat + brSaturatedFat;
      setAllNumberSaturatedFatPlus(totalFat);
    }
  });

  // 總鈉數值加總
  const [AllNumberSodiumPlus, setAllNumberSodiumPlus] = useState();

  useEffect(() => {
    if (!loading) {
      let totalSod = snSodium + diSodium + luSodium + brSodium;
      setAllNumberSodiumPlus(totalSod);
    }
  });

  // 會員還有多少卡路里可以吃
  const [caloriesCanEat, setCaloriesCanEat] = useState();

  useEffect(() => {
    if (!loading) {
      let caloriesReduce = 1313;
      setCaloriesCanEat(caloriesReduce);
    }
  });

  // 早餐的細項隱藏增加 新版
  const [brFoodRecordListIsHidden, setBrFoodRecordListIsHidden] =
    useState(true);

  function showBrFoodRecordList() {
    setBrFoodRecordListIsHidden(!brFoodRecordListIsHidden);
  }

  // 午餐的細項隱藏增加 新版
  const [luFoodRecordListIsHidden, setLuFoodRecordListIsHidden] =
    useState(true);

  function showLuFoodRecordList() {
    setLuFoodRecordListIsHidden(!luFoodRecordListIsHidden);
  }

  // 晚餐的細項隱藏增加
  const [DiFoodRecordListIsHidden, setDiFoodRecordListIsHidden] =
    useState(true);

  function showDiFoodRecordList() {
    setDiFoodRecordListIsHidden(!DiFoodRecordListIsHidden);
  }

  // 零食的細項隱藏增加
  const [nsFoodRecordListIsHidden, setNsFoodRecordListIsHidden] =
    useState(true);

  function showNsFoodRecordList() {
    setNsFoodRecordListIsHidden(!nsFoodRecordListIsHidden);
  }

  // 跳出新增食品的視窗
  const [showAddFoodList, setShowAddFoodList] = useState(false);
  const [foodSection, setFoodSection] = useState("");
  function handleAddFoodListClick(event) {
    const section = event.target.className;
    let foodchooseSection = "";
    if (section.includes("breakfastSection")) {
      foodchooseSection = "breakfast";
    } else if (section.includes("lunchSection")) {
      foodchooseSection = "lunch";
    } else if (section.includes("dinnerSection")) {
      foodchooseSection = "dinner";
    } else {
      foodchooseSection = "snack";
    }
    setShowAddFoodList(true);
    document.body.classList.add("modal-open");
    setFoodSection(foodchooseSection);
  }

  function handleCancelButtonClick() {
    setShowAddFoodList(false);
    document.body.classList.remove("modal-open");
  }

  return (
    <Fragment>
      <Header />
      <div className="foodRecordBgDiv">
        <div className="row foodRecordBg shadow p-3 mb-2 bg-body rounded">
          <div className="oneAndTwoAreaBg d-flex">
            {/* 第一區 - 目標值與已攝取區 */}
            <div className="w-50 position-relative">
              <div> 4月15日 週六 </div>
              {/* 目標量的Icon */}
              <div className="oneAreaTarget">
                <div>
                  <img src={target} alt="目標值" />
                </div>
                <div>目標值</div>
              </div>
              {/* 目標值 */}
              <div className="oneAreaTargetValue">
                <div>待填</div>
                <div>卡路里</div>
              </div>
              {/* 已攝取量的Icon */}
              <div className="oneAreaAlreadyEat">
                <div>
                  <img src={fork} alt="刀叉圖片" />
                </div>
                <div>已攝取</div>
              </div>
              {/* 已攝取量 */}
              <div className="oneAreaAlreadyEatValue">
                <div>{AllNumberCaloriesPlus}</div>
                <div>卡路里</div>
              </div>
            </div>
            {/* 第二區 - 還可以吃多少量 */}
            <div className="howMuchLeftBgDiv w-50">
              <img src={circleShape} alt="" />
              <div className="howMuchLeftValue">
                <div>還可以吃</div>
                <div className="calories">{caloriesCanEat}</div>
                <div>卡路里</div>
              </div>
            </div>
          </div>
          {/* 第三區 - 攝取營養量專區 */}
          <div className="ThreeAreaBg d-flex justify-content-around">
            <div>
              碳水化合物
              <hr />
              <div>{AllNumberCarbohydratePlus}</div>
            </div>
            <div>
              蛋白質
              <hr />
              <div>{AllNumberProteinPlus}</div>
            </div>
            <div>
              脂肪
              <hr />
              <div>{AllNumberSaturatedFatPlus}</div>
            </div>
            <div>
              鈉
              <hr />
              <div>{AllNumberSodiumPlus}</div>
            </div>
          </div>
        </div>
      </div>
      {/* 紀錄區三餐區 */}
      <div className="foodRecordBgDiv">
        {/* 早餐區*/}
        <div className="row foodRecordBg shadow p-3 mb-2 bg-body rounded">
          <div className="optionBreakfirstTitleBg col-9">
            <img className="optionTitleIcon" src={sunrise} alt="" />
            <span className="optionBreakfirstTitle">早餐</span>
          </div>
          <div
            className="col-2 text-end"
            style={{ fontWeight: "bolder", fontSize: 20 }}
          >
            {brTotalCalories}
            <br />
            卡路里
          </div>
          <div className="col-1 optionBreakfirstPlus">
            <img
              className="showAddFoodDiv breakfastSection"
              src={plus}
              alt=""
              onClick={handleAddFoodListClick}
            />
          </div>
          {/* 營養素加總標題 */}
          <table>
            <thead>
              <tr>
                <th>
                  碳水
                  <br />
                  {brCarbohydrate}
                </th>
                <th>
                  蛋白質
                  <br />
                  {brProtein}
                </th>
                <th>
                  脂肪
                  <br />
                  {brSaturatedFat}
                </th>
                <th>
                  鈉<br />
                  {brSodium}
                </th>
                <th style={{ textAlign: "end" }}>
                  <img
                    onClick={showBrFoodRecordList}
                    // className="addBrOptionIcon"
                    className={`addBrOptionIcon ${
                      brFoodRecordListIsHidden ? "" : "active"
                    }`}
                    src={rightArrow}
                    alt=""
                  />
                </th>
              </tr>
            </thead>
            {/* 第一行 */}
            {/* 食物種類 */}
            <tbody
              className={`foodBrRecordList ${
                brFoodRecordListIsHidden ? "" : "active"
              }`}
            >
              {/* 插入動態生成的資料 */}
              {breakfastRow}
            </tbody>
          </table>
        </div>
        {/* 午餐區 */}
        <div className="row foodRecordBg shadow p-3 mb-2 bg-body rounded">
          <div className="optionBreakfirstTitleBg col-9">
            <img className="optionTitleIcon" src={sun} alt="" />
            <span className="optionBreakfirstTitle">午餐</span>
          </div>
          <div
            className="col-2 text-end"
            style={{ fontWeight: "bolder", fontSize: 20 }}
          >
            {luTotalCalories}
            <br />
            卡路里
          </div>
          <div className="col-1 optionBreakfirstPlus">
            <img
              className="showAddFoodDiv  lunchSection"
              src={plus}
              alt=""
              onClick={handleAddFoodListClick}
            />
          </div>
          {/* 營養素加總標題 */}
          <table>
            <thead>
              <tr>
                <th>
                  碳水
                  <br />
                  {luCarbohydrate}
                </th>
                <th>
                  蛋白質
                  <br />
                  {luProtein}
                </th>
                <th>
                  脂肪
                  <br />
                  {luSaturatedFat}
                </th>
                <th>
                  鈉<br />
                  {luSodium}
                </th>
                <th style={{ textAlign: "end" }}>
                  <img
                    onClick={showLuFoodRecordList}
                    className={`addLuOptionIcon ${
                      luFoodRecordListIsHidden ? "" : "active"
                    }`}
                    src={rightArrow}
                    alt=""
                  />
                </th>
              </tr>
            </thead>
            <tbody
              className={`foodLuRecordList${
                luFoodRecordListIsHidden ? "" : "active"
              }`}
            >
              {lunchRow}
            </tbody>
          </table>
        </div>
        {/* 晚餐區 */}
        <div className="row foodRecordBg shadow p-3 mb-2 bg-body rounded">
          <div className="optionBreakfirstTitleBg col-9">
            <img className="optionTitleIcon" src={sunset} alt="" />
            <span className="optionBreakfirstTitle">晚餐</span>
          </div>
          <div
            className="col-2 text-end"
            style={{ fontWeight: "bolder", fontSize: 20 }}
          >
            {diTotalCalories}
            <br />
            卡路里
          </div>
          <div className="col-1 optionBreakfirstPlus">
            {/* 跳到新增食品的頁面 */}
            <img
              className="showAddFoodDiv dinnerSection"
              src={plus}
              alt=""
              onClick={handleAddFoodListClick}
            />
          </div>
          {/* 營養素加總標題 */}
          <table>
            <thead>
              <tr>
                <th>
                  碳水
                  <br />
                  {diCarbohydrate}
                </th>
                <th>
                  蛋白質
                  <br />
                  {diProtein}
                </th>
                <th>
                  脂肪
                  <br />
                  {diSaturatedFat}
                </th>
                <th>
                  鈉<br />
                  {diSodium}
                </th>
                <th style={{ textAlign: "end" }}>
                  <img
                    onClick={showDiFoodRecordList}
                    className={`addDiOptionIcon ${
                      DiFoodRecordListIsHidden ? "" : "active"
                    }`}
                    src={rightArrow}
                    alt=""
                  />
                </th>
              </tr>
            </thead>
            <tbody
              className={`foodDiRecordList ${
                DiFoodRecordListIsHidden ? "" : "active"
              }`}
            >
              {dinnerRow}
            </tbody>
          </table>
        </div>
        {/* 零食區 */}
        <div className="row foodRecordBg shadow p-3 mb-2 bg-body rounded">
          <div className="optionBreakfirstTitleBg col-9">
            <img className="optionTitleIcon" src={moon} alt="" />
            <span className="optionBreakfirstTitle">零食</span>
          </div>
          <div
            className="col-2 text-end"
            style={{ fontWeight: "bolder", fontSize: 20 }}
          >
            {snTotalCalories}
            <br />
            卡路里
          </div>
          <div className="col-1 optionBreakfirstPlus">
            <img
              className="showAddFoodDiv snackSection"
              src={plus}
              alt=""
              onClick={handleAddFoodListClick}
            />
          </div>
          {/* 營養素加總標題 */}
          <table>
            <thead>
              <tr>
                <th>
                  碳水
                  <br />
                  {snCarbohydrate}
                </th>
                <th>
                  蛋白質
                  <br />
                  {snProtein}
                </th>
                <th>
                  脂肪
                  <br />
                  {snSaturatedFat}
                </th>
                <th>
                  鈉<br />
                  {snSodium}
                </th>
                <th style={{ textAlign: "end" }}>
                  <img
                    onClick={showNsFoodRecordList}
                    className={`addNsOptionIcon ${
                      nsFoodRecordListIsHidden ? "" : "active"
                    }`}
                    src={rightArrow}
                    alt=""
                  />
                </th>
              </tr>
            </thead>
            <tbody
              className={`foodNsRecordList ${
                nsFoodRecordListIsHidden ? "" : "active"
              }`}
            >
              {snackRow}
            </tbody>
          </table>
        </div>
      </div>
      {/* 搜尋食品區 */}
      {showAddFoodList && (
        <AddFoodList
          onCancelButtonClick={handleCancelButtonClick}
          foodSection={foodSection}
        />
      )}
      <Footer />
    </Fragment>
  );
}

export default FoodRecordNumber;
