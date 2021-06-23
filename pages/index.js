import Head from "next/head";
import Image from "next/image";
import WhyChooseUs from "../components/General/WhyChooseUs";
import MakeInIndia from "../components/MainPage/MakeInIndia";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <WhyChooseUs />
      <MakeInIndia />
    </div>
  );
}
