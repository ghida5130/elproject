// ! 스크롤 유도 버튼

"use client";
import React from "react";
import styles from "./main2.module.scss";
import mainLogo from "@/public/main/main-logo-text.png";
import Image from "next/image";

export default function Page() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <a className={styles.logo}>
                    <Image src={mainLogo} width={160} alt="코끼리 공장 로고" />
                    <div className={styles.line}></div>
                    <p className={styles.mainText}>파트너십 사이트</p>
                </a>
            </div>

            <div className={styles.container}>내용</div>

            <div className={styles.footer}>코끼리공장 | 대표: 이채진</div>
        </div>
    );
}
