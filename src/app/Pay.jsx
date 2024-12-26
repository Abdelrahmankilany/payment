"use client";
import { useState } from "react";
import Image from "next/image";
import PayPal from "./Assist/PayPal.svg.png";
import wallet from "./Assist/wallet.png";
import bascet from "./Assist/basket.png";
import tabby from "./Assist/tabby.png";
import tamara from "./Assist/tamara.png";
import mispay from "./Assist/mispay.png";
import madfou from "./Assist/madfou.png";
import Modal from "./components/Modal";

export default function pay() {
  const [visible, setVisible] = useState(false);
  function handelClick() {
    setVisible(true);
  }
  function handelHeddin() {
    setVisible(false);
  }

  function handelDiv() {
    if (visible) {
      setVisible(false);
    }
  }
  return (
    <>
      <div
        className="card border-2  mt-7 mx-10 rounded-md "
        onClick={handelDiv}>
        <div>
          <div
            className="flex"
            style={{ backgroundColor: "#e2e8f0", height: "25px" }}>
            <Image
              style={{ width: "30px", paddingLeft: "5px" }}
              src={wallet}
              alt="wallet"
            />
            <h4>المحافظ الرقمية </h4>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "120px" }} src={PayPal} alt="logo" />
            </div>
            <button
              onClick={handelClick}
              className="border-2 m-4  px-3 rounded-md "
              style={{ borderColor: "#bbf7d0" }}>
              تفعيل
            </button>
          </div>
        </div>
      </div>
      <div className="card border-2  mt-7 mx-10 rounded-md ">
        <div>
          <div
            className="flex"
            style={{ backgroundColor: "#e2e8f0", height: "25px" }}>
            <Image
              style={{ width: "30px", paddingLeft: "5px" }}
              src={bascet}
              alt="wallet"
            />
            <h4>اشتري الآن وادفع لاحقا</h4>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "100px" }} src={tabby} alt="logo" />
            </div>
            <button
              onClick={handelClick}
              className="border-2 m-4  px-3 rounded-md  "
              style={{ borderColor: "#bbf7d0" }}>
              تفعيل
            </button>
          </div>
          <div
            className="border-t-2"
            style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "100px" }} src={tamara} alt="logo" />
            </div>
            <button
              onClick={handelClick}
              className="border-2 m-4  px-3 rounded-md  "
              style={{ borderColor: "#bbf7d0" }}>
              تفعيل
            </button>
          </div>
          <div
            className="border-t-2"
            style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "100px" }} src={mispay} alt="logo" />
            </div>
            <button
              onClick={handelClick}
              className="border-2 m-4  px-3 rounded-md "
              style={{ borderColor: "#bbf7d0" }}>
              تفعيل
            </button>
          </div>
          <div
            className="border-t-2"
            style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "100px" }} src={madfou} alt="logo" />
            </div>
            <button
              onClick={handelClick}
              className="border-2 m-4  px-3 rounded-md  "
              style={{ borderColor: "#bbf7d0" }}>
              تفعيل
            </button>
          </div>
        </div>
      </div>
      <Modal visible={visible} heddin={handelHeddin} />
    </>
  );
}
