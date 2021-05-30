/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Technical Consultancy",
    Svg: require("../../static/img/consulting.svg").default,
    description: (
      <>
        For us, AI = Data + Codes (Model + Algorithm). We provide in-depth
        consultancy service to help customers on understanding data, perform
        exploratory analysis and select proper ML/DL model and algorithm.
      </>
    ),
  },
  {
    title: "Advance Training Services",
    Svg: require("../../static/img/lecture.svg").default,
    description: (
      <>
        Based on customer requirements, we provide advanced technical training
        to learn specific ML/DL models. We review the latest SOTA models for the
        required use cases, conceptualize, reproduce and deliver in-class
        training.
      </>
    ),
  },
  {
    title: "AI Model Development Service",
    Svg: require("../../static/img/development.svg").default,
    description: (
      <>
        Once data and AI models are identified, we provide professional service
        to develop code assets as baseline for future improvement. Our standard
        codes are reusable and easy to understand. We also provide guidance to
        deploy ML/DL models as cloud API, both for on-premises and on-cloud
        infrastructures.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Professional Services</h1>
        <br></br>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
