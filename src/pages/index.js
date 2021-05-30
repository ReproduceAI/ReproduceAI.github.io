/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageCompetencies from "../components/HomepageCompetencies";

import Layout from "@theme/Layout";

import clsx from "clsx";

import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={"/"}
      description={"Set up a modern web app by running one command."}
    >
      <div className={clsx("hero hero--dark", styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, "margin-vert--md")}
            alt="Create React App logo"
            src={useBaseUrl("img/logo-dark.svg")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="subtitle">
            Consultancy and professional service to help people in adopting the latest state of the art AI technologies.
            <br />
            <br />
          </div>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to="https://forms.gle/BJRhJvjbmjjt2FkL7"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <HomepageFeatures />
      <HomepageCompetencies />
    </Layout>
  );
}

export default Home;
