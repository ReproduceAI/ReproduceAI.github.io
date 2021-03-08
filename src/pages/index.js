/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React from 'react';
 import Link from '@docusaurus/Link';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 
 import Layout from '@theme/Layout';
 import CodeBlock from '@theme/CodeBlock';
 
 import clsx from 'clsx';
 
 import styles from './styles.module.css';
 
 const features = [
   {
     title: 'Discriminative Models',
     content:
       "Class of AI models used for classification and regression which work to distinguish decision boundaries through observed data. A discriminative model learns conditional probability distribution to predict output from a given input.",
   },
   {
     title: 'Generative Models',
     content:
       "Class of AI models used for generating new data from observed data. Given observable variables and a target variable, generative models learn the joint probability distribution between observable and target variables.",
   },
   {
    title: 'Reinforcement Learning',
    content:
      "Class of AI models concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward.",
  },
 ];
 
 function Home() {
   const context = useDocusaurusContext();
   const { siteConfig = {} } = context;
 
   return (
     <Layout
       permalink={'/'}
       description={'Set up a modern web app by running one command.'}>
       <div className={clsx('hero hero--dark', styles.heroBanner)}>
         <div className="container">
           <img
             className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
             alt="Create React App logo"
             src={useBaseUrl('img/logo-dark.svg')}/>
           <h1 className="hero__title">{siteConfig.title}</h1>
           <p className="hero__subtitle">{siteConfig.tagline}</p>
           <div className="subtitle">
            ReproduceAI is an open community for AI engineers around the globe who aim to democratize and cool down AI hypes.
            <br /> 
            We focus to help more AI engineers and scientists to understand and reproduce the state of the art AI achievements, and cut down their efforts from months to minutes.
            </div>
            <br />
           <div className={styles.getStarted}>
             <Link
               className="button button--outline button--primary button--lg"
               to="https://forms.gle/FubPLyT6EUqpV7KcA">
               Get Started
             </Link>
           </div>
         </div>
       </div>
       <div className={styles.gettingStartedSection}>
         <div className="container padding-vert--xl text--left">
           <div className="row">
             <div className="col col--4 col--offset-1">
               <h2>Custom Training Services</h2>
               <p>
               We can provide custom training to learn specific AI models.
               <br/> 
               We will find the right experts who can deliver requested training based on our standards.
               </p>
             </div>
             
             <div className="col col--4 col--offset-1">
               <h2>Reproduce AI Papers</h2>
               <p>
               Put your request here to reproduce specific AI papers or models. 
               <br />
               We will let you know if the requests are included in our roadmap, if not, we can discuss commercial engagement with ReproduceAI directly
               </p>
             </div>
           </div>
         </div>
       </div>
       
       {features && features.length && (
         <div className={styles.features}>
           <div className="container">
           <h1>What we can do?</h1>
            <br/>
             <div className="row">
               {features.map(({ title, content }, idx) => (
                 <div
                   key={idx}
                   className={clsx('col col--4', styles.feature)}>
                   <h2>{title}</h2>
                   <p>{content}</p>
                 </div>
               ))}
             </div>
           </div>
         </div>
       )}
     </Layout>
   );
 }
 
 export default Home;