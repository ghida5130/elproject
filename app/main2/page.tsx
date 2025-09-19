// ! 스크롤 유도 버튼

"use client";
import React from "react";
import styles from "./main2.module.scss";
import mainLogo from "@/public/main/main-logo-text.png";
import Image from "next/image";
import coImage from "@/public/main/co.png";
import dongseoImage from "@/public/main/dongseo.svg";

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

            <div className={styles.container}>
                {/* 3단 정보 배너 */}
                {/* 기능 버튼 */}
                <section className={styles.mainServices}>
                    <div className={styles.mainContainer}>
                        <div className={styles.servicesContainer}>
                            <a
                                href="https://script.google.com/macros/s/AKfycbx1zJ6-rJWG33muq8qJVY9UN7nc2PHlRw55cS7SKwdBwm--tmtmaemY_H4YXZHi2_0APg/exec"
                                className={styles.serviceButton}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={styles.serviceNumber}>01</div>
                                <div className={styles.serviceInfo}>
                                    <h3>소개 자료 조회</h3>
                                    <p>기업의 핵심 역량을 확인하세요</p>
                                </div>
                                <div className={styles.serviceArrow}>→</div>
                            </a>

                            <div className={styles.serviceButton}>
                                <div className={styles.serviceNumber}>02</div>
                                <div className={styles.serviceInfo}>
                                    <h3>서류 발급</h3>
                                    <p>필요한 서류를 빠르게 발급받으세요</p>
                                </div>
                                <div className={styles.serviceArrow}>→</div>
                            </div>

                            <a
                                href="https://script.google.com/macros/s/AKfycbwL79CJEbn1tNO8RIgIDGclLwH9A2FPMUMDGdT_475x_NrrRx2oxOfxwoqmqrI4GPikVA/exec"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.serviceButton}
                            >
                                <div className={styles.serviceNumber}>03</div>
                                <div className={styles.serviceInfo}>
                                    <h3>모의 견적</h3>
                                    <p>프로젝트 견적을 자동으로 산출해드립니다</p>
                                </div>
                                <div className={styles.serviceArrow}>→</div>
                            </a>
                        </div>
                    </div>
                </section>
                <div className={styles.infoBackground}>
                    <div className={styles.infoBanner} aria-label="협업 정보 요약">
                        {/* 협업 기업 */}
                        <div className={styles.infoCard}>
                            <h3>협업 기업</h3>
                            <p>코끼리공장은 여러 기업과 협업을 진행중입니다.</p>
                            <div className={styles.coImage}>
                                <Image src={coImage} alt="" width={300} />
                            </div>
                            {/* <p>코끼리공장은 다양한 기업들과 협업을 통해 지속 가능한 미래를 만들어 갑니다.</p> */}
                        </div>
                        {/* 장기 협업 */}
                        <div className={styles.infoCard}>
                            <h3>장기 협업</h3>
                            <p>신뢰도를 통해 지속적인 협업을 이어가고 있습니다.</p>
                            {/* 협업 파트너 */}
                            <div className={styles.partnerBox}>
                                <div className={styles.partnerLogo}>
                                    {/* 로고 이미지 자리 */}
                                    <Image src={dongseoImage} alt="동서발전 로고" />
                                </div>
                                <div className={styles.partnerInfo}>
                                    <strong>동서발전</strong>
                                    <p>4년간 협업 중</p>
                                </div>
                            </div>
                        </div>

                        {/* 인증 현황 */}
                        <div className={styles.infoCard}>
                            <h3>인증 현황</h3>

                            <ul className={styles.certList} role="list" aria-label="보유 인증">
                                <li className={styles.certItem}>
                                    <div className={styles.certHead}>
                                        <span className={styles.certName}>사회적기업 인증</span>
                                        <span className={`${styles.status} ${styles.valid}`}>유효</span>
                                    </div>
                                    <div className={styles.certMeta}>
                                        <span className={styles.issuer}>고용노동부</span>
                                        <span className={styles.until}>유효기간 ~ 2026-12</span>
                                    </div>
                                </li>

                                <li className={styles.certItem}>
                                    <div className={styles.certHead}>
                                        <span className={styles.certName}>KC 인증 (전자·안전)</span>
                                        <span className={`${styles.status} ${styles.valid}`}>유효</span>
                                    </div>
                                    <div className={styles.certMeta}>
                                        <span className={styles.issuer}>국가기술표준원</span>
                                        <span className={styles.until}>모델별 상이</span>
                                    </div>
                                </li>

                                <li className={styles.certItem}>
                                    <div className={styles.certHead}>
                                        <span className={styles.certName}>ISO 9001 (품질경영)</span>
                                        <span className={`${styles.status} ${styles.valid}`}>유효</span>
                                    </div>
                                    <div className={styles.certMeta}>
                                        <span className={styles.issuer}>KAB</span>
                                        <span className={styles.until}>유효기간 ~ 2027-05</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className={styles.companyIntro}>
                    <div className={styles.introLayout}>
                        <div className={styles.introVisual}>
                            <div className={styles.visualShape}>
                                <div className={styles.shapeInner}>
                                    <span className={styles.visualText}>20+</span>
                                    <span className={styles.visualLabel}>Years</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.introContent}>
                            <h2>코끼리공장과 함께하는 성공적인 비즈니스</h2>
                            <p className={styles.introDescription}>
                                코끼리공장은 20년 이상의 경험과 노하우를 바탕으로 고객사의 비즈니스 성공을 위한 최적의
                                솔루션을 제공합니다.
                            </p>
                            <p className={styles.introDescription}>
                                우리는 단순한 서비스 제공을 넘어서, 고객과의 진정한 파트너십을 구축하여 함께 성장하는
                                것을 목표로 합니다.
                            </p>

                            <div className={styles.introHighlights}>
                                <div className={styles.highlightItem}>
                                    <div className={styles.highlightNumber}>500+</div>
                                    <div className={styles.highlightText}>협력 기업</div>
                                </div>
                                <div className={styles.highlightItem}>
                                    <div className={styles.highlightNumber}>99%</div>
                                    <div className={styles.highlightText}>고객 만족도</div>
                                </div>
                                <div className={styles.highlightItem}>
                                    <div className={styles.highlightNumber}>24/7</div>
                                    <div className={styles.highlightText}>고객 지원</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.companyVision}>
                    <div className={styles.visionLayout}>
                        <div className={styles.visionContent}>
                            <h2>지속 가능한 미래를 향한 코끼리공장의 비전</h2>
                            <p className={styles.visionDescription}>
                                우리는 단순한 제조 기업이 아닌, 사회와 환경에 기여하는 혁신적인 파트너가 되고자 합니다.
                                코끼리공장은 친환경적 공정과 책임 있는 경영을 통해 고객과 함께 미래 가치를 창조합니다.
                            </p>
                            <div className={styles.visionValues}>
                                <div className={styles.valueItem}>
                                    <div className={styles.valueIcon}>🌱</div>
                                    <div>
                                        <h3>지속 가능성</h3>
                                        <p>친환경 소재와 공정으로 탄소 발자국 절감</p>
                                    </div>
                                </div>
                                <div className={styles.valueItem}>
                                    <div className={styles.valueIcon}>🤝</div>
                                    <div>
                                        <h3>파트너십</h3>
                                        <p>고객과 함께 성장하는 진정한 협력 관계</p>
                                    </div>
                                </div>
                                <div className={styles.valueItem}>
                                    <div className={styles.valueIcon}>🚀</div>
                                    <div>
                                        <h3>혁신</h3>
                                        <p>최신 기술과 노하우로 효율적이고 안정적인 솔루션 제공</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className={styles.footer}>코끼리공장 | 대표: 이채진</div>
        </div>
    );
}
