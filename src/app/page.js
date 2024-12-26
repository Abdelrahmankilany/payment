import "./page.css";
import Image from "next/image";
import chick from "./Assist/shield-check.svg";
import arrow from "./Assist/left-arrow.svg";
import logo from "./Assist/logo.svg";
import towArrow from "./Assist/76e89177f30da49cf83f69731cf30979.jpg";
import cardPay from "./Assist/images.png";
import shieldPay from "./Assist/shield Pay.svg";
import coin from "./Assist/coin.jpg";
import calc from "./Assist/calc.svg";
import Pay from "./Pay";

export default function Home() {
  return (
    <div className=" text-sm">
      <div className="payment_div flex  flex-col px-2 ">
        <a
          style={{ display: "flex", justifyContent: "space-between" }}
          href="#"
          className="border-2 px-2 rounded-md flex flex-row items-center mx-10 ">
          <div
            style={{
              width: "50px",
              height: "50px",
              margin: "5px",
              backgroundColor: "#bbf7d0",
              borderRadius: "50%",
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
            }}>
            <Image style={{ width: "20px" }} src={chick} alt="chick" />
          </div>
          <div>
            <h5>
              توثيق المتجر <span>(مكتمل)</span>
            </h5>
            <p style={{ color: "gray" }}>
              يمكنك الآن الإستفادة الكاملة من إمكانيات المنصة{" "}
              <span className="block" style={{ color: "#f55157" }}>
                فقط مالك المتجر يستطيع الدخول لتوثيق المتجر
              </span>
            </p>
          </div>
          <div style={{ width: "20px", height: "20px" }}>
            <Image src={arrow} alt="chick" />
          </div>
        </a>
        <div className="border-2  mt-7 mx-10 rounded-md px-5">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "40px" }} src={logo} alt="logo" />
              <div style={{ paddingRight: "20px" }}>
                <h5 id="h">المدفوعات الإلكترونية</h5>
                <p style={{ color: "gray" }}>
                  فعّل المدفوعات الإلكترونية بسهولة، واستقبلها بأمان
                </p>
              </div>
            </div>
            <button
              className="border-2 m-4 p-1 "
              style={{ borderColor: "#f55157", color: "#f55157" }}>
              تعطيل
            </button>
          </div>
          <div
            className="card"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
              cursor: "pointer",
            }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "40px" }} src={towArrow} alt="logo" />
              <div style={{ paddingRight: "20px" }}>
                <h5>دورة التحويل</h5>
                <p style={{ color: "gray" }}>
                  تحويل المدفوعات الإلكترونية أسبوعيا
                </p>
              </div>
            </div>
            <div style={{ width: "20px", height: "20px" }}>
              <Image src={arrow} alt="chick" />
            </div>
          </div>
          <div
            className="card border-t-2 mt-2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
              cursor: "pointer",
            }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "40px" }} src={cardPay} alt="logo" />
              <div style={{ paddingRight: "20px" }}>
                <h5>وسائل الدفع المفعلة</h5>
                <p style={{ color: "gray" }}>
                  مدى ، البطاقة الإئتمانية ، Apple Pay ، Google Pay
                </p>
              </div>
            </div>
            <div style={{ width: "20px", height: "20px" }}>
              <Image src={arrow} alt="chick" />
            </div>
          </div>
          <div
            className="card border-t-2 mt-2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
              cursor: "pointer",
            }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "40px" }} src={shieldPay} alt="logo" />
              <div style={{ paddingRight: "20px" }}>
                <h5>قيود الدفع</h5>
                <p style={{ color: "gray" }}>
                  خصص عمليات الدفع المتاحة وفق شروط محددة{" "}
                </p>
              </div>
            </div>
            <div style={{ width: "20px", height: "20px" }}>
              <Image src={arrow} alt="chick" />
            </div>
          </div>
          <div
            className="card border-t-2 mt-2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
              cursor: "pointer",
            }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "40px" }} src={coin} alt="logo" />
              <div style={{ paddingRight: "20px" }}>
                <h5>الشراء السريع</h5>
                <p style={{ color: "gray" }}>فعل شراء المنتجات بضغطة زر</p>
              </div>
            </div>
            <div style={{ width: "20px", height: "20px" }}>
              <Image src={arrow} alt="chick" />
            </div>
          </div>
          <div
            className="card border-t-2 mt-2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "20px",
              cursor: "pointer",
            }}>
            <div style={{ display: "flex", paddingRight: "5px" }}>
              <Image style={{ width: "40px" }} src={calc} alt="logo" />
              <div style={{ paddingRight: "20px" }}>
                <h5>حاسبة الرسوم</h5>
                <p style={{ color: "gray" }}>احسب رسوم العمليات المالية</p>
              </div>
            </div>
            <div style={{ width: "20px", height: "20px" }}>
              <Image src={arrow} alt="chick" />
            </div>
          </div>
        </div>
        <Pay />
      </div>
    </div>
  );
}
