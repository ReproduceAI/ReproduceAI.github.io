/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageCompetencies.module.css";

const FeatureList = [
  {
    title: "Discriminative Models",
    Svg: require("../../static/img/hierarchical-structure.svg").default,
    description: (
      <>
        Class of AI models used for classification and regression which work to
        distinguish decision boundaries through observed data. A discriminative
        model learns conditional probability distribution to predict output from
        a given input.
      </>
    ),
  },
  {
    title: "Generative Models",
    Svg: require("../../static/img/magic-wand.svg").default,
    description: (
      <>
        Class of AI models used for generating new data from observed data.
        Given observable variables and a target variable, generative models
        learn the joint probability distribution between observable and target
        variables.
      </>
    ),
  },
  {
    title: "Reinforcement Learning",
    Svg: require("../../static/img/robot.svg").default,
    description: (
      <>
        Class of AI models concerned with how intelligent agents ought to take
        actions in an environment in order to maximize the notion of cumulative
        reward.
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

export default function HomepageCompetencies() {
  return (
    <section className={styles.CompetenciesSection}>
      <div className="container">
        <h1>Core Competencies</h1>
        <p>
          We continuously build and improve our core competencies in
          cutting-edge ML/DL modeling within the following paradigms:
        </p>
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
