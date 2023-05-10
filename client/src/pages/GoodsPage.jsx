import React from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
import Chart from "../components/chart";
import "../css/goods.css";
import Footer from "../components/footer";

const GoodsPage = () => {
  return (
    <div>
      <div className="goodstype">
        <div className="diet">
          <a href="http://localhost:3000/goods" className="myDiet">
            增肌減脂餐盒
          </a>
        </div>
        <div className="drink">
          <a href="http://localhost:3000/goods" className="myDrink">
            乳清蛋白
          </a>
        </div>
      </div>

      <div className="goodsCard myGoodscontain">
        <div className="goodsImage">
          <div className="bigGroup">
            <button className="prevBtn">＜</button>
            <img
              src="./image/store/good1.png"
              className="bigImage"
              alt="大圖"
            />
            <button className="nextBtn">＞</button>
          </div>
          <div className="smallGroup">
            <img
              src="./image/store/good1.png"
              className="smallImage active"
              data-target="./image/store/good1.png"
              alt="小圖"
            />
            <img
              src="./image/store/good2.png"
              className="smallImage"
              data-target="./image/store/good2.png"
              alt="小圖"
            />
            <img
              src="./image/goods/chicken.png"
              className="smallImage"
              data-target="./image/goods/chicken.png"
              alt="小圖"
            />
          </div>
        </div>
        <div className="goodsText">
          <div className="gGroup">
            <h2 className="goodsName">建議售價</h2>
            <p className="goodsPrice">NTD1200</p>
          </div>
          <button id="deBtn" className="increaseBtn">
            一
          </button>
          <div className="addingQty">
            <input type="text" id="addGoods" value="1" />
          </div>
          <button id="inBtn" className="increaseBtn">
            十
          </button>
          <br />
          <br />
          <div className="addingGroup">
            <button className="cartIn">加入購物車</button>
            <button className="buyIn">立即購買</button>
          </div>
          <br />
          <br />
          <button className="joinFollow">
            <img src="./image/goods/heart.png" alt="最愛" /> 加入最愛
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="myGoodscontain mygoodsExplain">
        <div className="mygoodsIntro">商品介紹</div>
        <div className="mygoodsSave">保存方式</div>
      </div>
      <br />
      <br />
      <br />
      <div className="myGoodscontain">
        <div className="gIntro">
          <p className="sTopic">商品介紹</p>
        </div>
        <div>
          <p className="sParagraph">
            內容物： 白酒菲力鬼頭刀：鬼頭刀,白酒,柳丁,鹽,黑胡椒粉
            日式煮物：白蘿蔔,紅蘿蔔,蓮藕,牛蒡,醬油,味醂
            義式番茄藜麥飯：白米,紅藜麥,番茄糊
            綠咖哩烤雞腿：雞腿肉,綠咖哩,椰奶,水,芥花油
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="myGoodscontain nutriChart">
        <div>
          <div className="App">
            <Chart />
          </div>
          {/* <div> */}
          {/* <canvas id="chartCanvas"></canvas> */}
          {/* <Doughnut data={data} options={options} /> */}
          {/* </div> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="myGoodscontain">
        <div className="gIntro">
          <p className="sTopic">保存方式</p>
        </div>
        <div>
          <p className="sParagraph">
            微波：撕開保護膜的一角，放入微波爐加熱2-3分鐘（退冰）、加熱6-8分鐘（未退冰），加熱時間可能因微波爐不同而異。
            電鍋：將包裝拆除移到盤中，放入1/2杯水（150ml），待電鍋跳起。
            烤箱：將包裝拆除移到盤中，170度加熱7分鐘或到達食用溫度。
            平底鍋：將包裝拆除放到鍋中，加熱至所需溫度。
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="recommendBar">
        <div className="myGoodscontain recomGoods">
          <a
            href="http://localhost:3000/goods"
            className="jumpPage"
            target="_blank"
            rel="noreferrer"
          >
            <img id="myGoodCard" src="./image/store/good1.png" alt="推播圖1" />
            <p className="fw-semibold cardTopic">迷迭香雞胸香菜糙米飯</p>
            <span className="mycardPrice">NTD1600</span>
          </a>
          <a
            href="http://localhost:3000/goods"
            className="jumpPage"
            target="_blank"
            rel="noreferrer"
          >
            <img id="myGoodCard" src="./image/store/good2.png" alt="推播圖2" />
            <p className="fw-semibold cardTopic">迷迭香雞胸香菜糙米飯</p>
            <span className="mycardPrice">NTD1600</span>
          </a>
          <a
            href="http://localhost:3000/goods"
            className="jumpPage"
            target="_blank"
            rel="noreferrer"
          >
            <img id="myGoodCard" src="./image/store/good1.png" alt="推播圖3" />
            <p className="fw-semibold cardTopic">迷迭香雞胸香菜糙米飯</p>
            <span className="mycardPrice">NTD1600</span>
          </a>
          <a
            href="http://localhost:3000/goods"
            className="jumpPage"
            target="_blank"
            rel="noreferrer"
          >
            <img id="myGoodCard" src="./image/store/good2.png" alt="推播圖4" />
            <p className="fw-semibold cardTopic">迷迭香雞胸香菜糙米飯</p>
            <span className="mycardPrice">NTD1600</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GoodsPage;
