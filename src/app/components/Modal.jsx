"use client";
import "./modal.css";
import Image from "next/image";
import paypal from "../Assist/PayPal.svg.png";

export default function Modal({ visible, heddin }) {
  if (visible) {
    window.scrollTo(0, 0);
    return (
      <div className="modal  ">
        <div
          className="modal-contain    mx-10 rounded-md "
          onClick={() => {
            return visible;
          }}>
          <div
            style={{
              backgroundColor: "#bbf7d0",
              height: "30px",
              padding: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <h4>Paypal</h4>
            <button style={{ fontSize: "25px" }} onClick={heddin}>
              x
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Image style={{ width: "120px" }} src={paypal} alt="logo" />
            <div
              className="flex  rounded-md m-5 mx-5"
              style={{ width: "100%", justifyContent: "center" }}>
              <button
                className="border-2"
                style={{ width: "45%", height: "35px" }}>
                نبذة
              </button>
              <button
                className="border-2"
                style={{
                  width: "45%",
                  height: "35px",
                  backgroundColor: "#bbf7d0",
                }}>
                الربط و الأعدادات
              </button>
            </div>
          </div>
          <div className="p-2 ">
            <h5>معلومات الربط</h5>
            <p style={{ fontSize: "15px", color: "gray" }}> رمز تعريف التاجر</p>
            <input
              type="text"
              placeholder="Merchant Id"
              className="border-2 rounded-md mx-2"
              style={{ width: "90%", fontSize: "15px" }}
            />
            <div className="flex gap-3">
              <input type="checkbox" />
              <p style={{ fontSize: "15px" }}>
                الموافقة علي سياسة البيع في منصة سلة
              </p>
            </div>
          </div>
          <footer style={{ backgroundColor: "#f1f5f9" }}>
            <div
              style={{ justifyContent: "space-between" }}
              className="flex p-5">
              <button
                className="border-2 p-2 rounded-md "
                style={{ backgroundColor: "#bbf7d0" }}>
                حفظ
              </button>
              <button
                onClick={heddin}
                className="border-2 p-2 rounded-md "
                style={{ backgroundColor: "#cbd5e1" }}>
                إلغاء
              </button>
            </div>
          </footer>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
