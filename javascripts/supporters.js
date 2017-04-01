var sponsors = [
  /* {
    "name": "",
    "enabled": false,
    "url": "",
    "width": 275,
    "bio": "<p></p>"
  } */
  {
    "name": "datadog",
    "enabled": true,
    "url": "http://www.datadoghq.com/",
    "width": 150,
    "bio": "<p>Datadog is a monitoring and analytics platform for large-scale application infrastructure. Combining metrics from servers, databases, and applications, Datadog delivers sophisticated, actionable alerts, and provides real-time visibility of your entire infrastructure. Datadog includes 120+ vendor-supported, prebuilt integrations and monitors hundreds of thousands of hosts.</p>"
  },
  {
    "name": "solarwinds",
    "enabled": true,
    "url": "http://www.solarwinds.com/cloud-monitoring?cmp=lec-x-monitorama-2017_monitorama-x-x-logo",
    "bio": "<p>SolarWinds is a leading provider of powerful and affordable IT management software to customers worldwide. SolarWinds® Monitoring Cloud is the next evolution of the company’s Software as a Service (SaaS) portfolio for monitoring cloud infrastructure and applications. Combined, Pingdom®, Librato™, Papertrail™, TraceView™ offer a full stack performance monitoring solution to manage, optimize, and troubleshoot at every layer, from the infrastructure to the end user experience. Nearly 1 million users now rely on SolarWinds Monitoring Cloud solutions for intuitive and affordable tools.</p>"
  },
  {
    "name": "netsil",
    "enabled": true,
    "url": "http://netsil.com/",
    "width": 150,
    "bio": "<p>Netsil is the observability and analytics company for modern cloud applications. The Netsil Application Operations Center (AOC) helps SREs and DevOps improve the reliability and performance of API and microservices driven production applications. At the heart of AOC is an auto-discovered service topology, which is rendered from live service interaction analysis. This enables effective application monitoring, incident response, capacity planning, and deploy management.</p>"
  },
  {
    "name": "netuitive",
    "enabled": true,
    "url": "http://www.netuitive.com/",
    "width": 225,
    "bio": "<p>Netuitive is a full stack monitoring and machine learning platform designed with DevOps teams and modern application environments in mind. Our SaaS-based platform learns the normal behavior of customer infrastructure and application environments to accurately detect anomalies and isolate performance problems early. Netuitive also provides capacity and cost analysis to reduce public cloud spend, which can provide immediate savings opportunities. Sign up for a free trial at <a href=\"http://www.netuitive.com/\">www.netuitive.com</a>.</p>"
  },
  {
    "name": "wavefront",
    "enabled": true,
    "url": "https://www.wavefront.com/",
    "bio": "<p>Wavefront is analytics-driven, metrics monitoring, alerting and anomaly detection platform for cloud-native, microservices environments. Metrics go far beyond log-based approaches as the most powerful way to understand and manage an overall system’s function. At massive scale and reliability, Wavefront processes metrics from all corners of your cloud estate and enables every engineer and developer in your organization to self-service alerts, dashboards and drill-down visualizations &#8212; also with a complete API. This includes sub-second metrics and aggregated percentiles. SaaS leaders like Workday, Box, Lyft, Okta, Intuit, Groupon, and Yammer depend on Wavefront every day.</p> "
  },
  {
    "name": "moogsoft",
    "enabled": true,
    "url": "http://moogsoft.com/",
    "width": "175",
    "bio": "<p>Moogsoft is a leading provider of Algorithmic IT Operations (AIOps) software for modern private, public cloud and hybrid IT environments. The company delivers machine learning-based incident management solutions for large, dynamic and heterogeneous environments, helping companies such as Cisco, Royal Bank of Canada, Yahoo, and GoDaddy to detect, triage and resolve incidents inside their production environments and improve service quality. To learn more visit: <a href=\"http://www.moogsoft.com/\">www.moogsoft.com</a></p>"
  },
  {
    "name": "signifai",
    "enabled": true,
    "url": "https://www.signifai.io/",
    "width": "225",
    "bio": "<p>We believe in people first and foremost. Our technology harnesses machine intelligence to help your team solve problems faster, more effectively, and more accurately than ever before, resulting in more uptime for your infrastructure and more happy-time for your team.</p>"
  },
  {
    "name": "bugsnag",
    "enabled": true,
    "url": "https://www.bugsnag.com/?utm_source=monitorama&utm_medium=referral&utm_content=blurb&utm_campaign=monitorama-2017",
    "bio": "<p>Monitor application errors and improve customer experiences and code quality with Bugsnag. Quickly filter errors by occurrences or users impacted so you can decide if an error needs to be fixed now or snoozed for later. Troubleshooting and reproducing errors become easier as Bugsnag automatically collects all the related diagnostic data to save you time in scouring log files. Over 3,500 of the world best engineering teams from organizations such as Yelp, Comcast, Pandora and others use Bugsnag to build better software. Get started for free at <a href=\"https://www.bugsnag.com/\">www.bugsnag.com</a>.</p>"
  },
  {
    "name": "logzio",
    "enabled": true,
    "url": "http://logz.io/",
    "bio": "<p><a href=\"http://logz.io/\">Logz.io</a> provides the world's most popular open-source log analysis platform, ELK (Elasticsearch, Logstash and Kibana), as a simple, secure, and scalable service on the cloud. Logz.io also provides advanced enterprise-grade enhancements and features on top of the ELK Stack such as alerting, user control, archiving and pre-made Kibana visualizations tailored for specific log types. Extremely easy to set up, Logz.io allows you to ship as many logs as you like while securing the data and providing high-availability and accessibility.</p>"
  },
  {
    "name": "circonus",
    "enabled": true,
    "url": "https://www.circonus.com/",
    "width": 225,
    "bio": "<p>Circonus provides Big Data analytics and monitoring for Web-Scale IT. Developed specifically for the requirements of DevOps, the Circonus platform combines alerts, graphs, dashboards and machine-learning intelligence. Proprietary IT Operations Analytics tools enable customers to produce forensic, predictive, and automated analyses that help optimize operations and the business.</p>"
  },
  {
    "name": "sensu",
    "enabled": true,
    "url": "https://sensuapp.org/enterprise",
    "width": 150,
    "bio": "<p><b>Sensu Enterprise: On-site monitoring for mission-critical applications.</b></p><p>Finally, a deployable monitoring solution designed for cloud-based applications, capable of operating at web-scale. Monitor servers, services and application health, collect and analyze custom metrics, and get notified about system failures faster. Give your IT operations team the competitive advantage they deserve.</p><p>Learn more about Sensu Enterprise and Sensu Core (<em>the</em> open source monitoring framework) at <a href=\"http://sensuapp.org/\">http://sensuapp.org/</a>.</p>",
  },
  {
    "name": "bigpanda",
    "enabled": true,
    "url": "http://bigpanda.io/",
    "width": 225,
    "bio": "<p>BigPanda is the next generation in Intelligent Incident Management for IT, NOC and DevOps teams. BigPanda's data science platform brings order to the alert chaos that plagues IT Operations in complex cloud and on-premise operating environments.  BigPanda aggregates, consolidates, and correlates massive amounts of IT alerts, deployments and communications, thus turning them into actionable insights. For more information, visit: <a href=\"http://www.bigpanda.io\">http://www.bigpanda.io</a>.</p>"
  },
  {
    "name": "elastic",
    "enabled": true,
    "url": "https://www.elastic.co/",
    "bio": "<p>Elastic believes getting immediate, actionable insight from data matters. As the company behind the four open source projects — Elasticsearch, Logstash, Kibana, and Beats (the Elastic stack) — designed to take data from any source and search, analyze, and visualize it in real time, Elastic is helping people make sense of data. From stock quotes to Twitter streams, Apache logs to WordPress blogs, our products are extending what's possible with data, delivering on the promise that good things come from connecting the dots.</p>"
  },
  {
    "name": "grafanalabs",
    "enabled": true,
    "url": "http://www.raintank.io/",
    "width": 250,
    "bio": "<p>Grafana Labs is the company behind Grafana, the defacto standard for visualizing time series data. We also run <a href=\"http://grafana.net/\">GRAFANA.NET</a>: an OpenSaaS platform that helps you get the most out of your Grafana, and get the most out of your open source monitoring stack.</p>"
  },
  {
    "name": "nsone",
    "enabled": true,
    "url": "https://ns1.com/",
    "width": 125,
    "bio": "<p>NS1's intelligent DNS and traffic management platform, with its data driven architecture and unique Filter Chain routing engine, is purpose-built for the most demanding, mission-critical applications on the Internet. NS1's comprehensive platform technology leverages infrastructure, application, and network data to make intelligent routing decisions in real time, ensuring optimal application performance and reliability. NS1's platform is delivered through its world class Managed DNS Network for customers including Imgur, LinkedIn, Wayfair, Collective Media and other top-tier organizations.</p>"
  },
  {
    "name": "outlyer",
    "enabled": true,
    "url": "https://www.outlyer.com/",
    "width": 175,
    "bio": "<p>Outlyer is an infrastructure monitoring platform made for DevOps and microservices.</p><p>We monitor your full stack—from servers and cloud providers to databases, containers and custom metrics. We give you dashboards, analytics and alerts that are easy to set up and customize for both developer and operations teams.</p><p>Outlyer means monitoring, done differently. Whether you’re monitoring one or a thousand servers, our GitHub-style account model provides a self-service monitoring platform that gives all your teams quick setup with integration packs, open source compatibility, and more customization than any other monitoring tool.</p>"
  },
  {
    "name": "threatstack",
    "enabled": true,
    "url": "https://www.threatstack.com/",
    "width": 225,
    "bio": "<p>Building a complete security solution doesn’t have to be an expensive, complex and time-consuming endeavor. At Threat Stack we set out to create the world’s ﬁrst cloud-native, platform independent, comprehensive security service that is cost-eﬀective and easy-to-use.</p><p>Threat Stack enables growth-driven companies to scale with confidence by identifying and verifying insider threats, external attacks and data loss in real-time. The only cloud-native continuous monitoring solution that gives customers instant visibility and automatically responds to changes in their environment, Threat Stack provides the coverage needed to run secure and compliant, in all environments, without sacrificing speed and efficiency.</p><p>For more information, or to start a free trial, visit <a href=\"https://www.threatstack.com/\">threatstack.com</a>.</p>"
  },
  {
    "name": "catchpoint",
    "enabled": true,
    "url": "http://catchpoint.com/",
    "width": 240,
    "bio": "<p>Catchpoint is a leading digital experience intelligence company that provides unparalleled insight into customer-critical services to help businesses consistently deliver amazing digital experiences. Catchpoint is the only performance digital experience monitoring platform that provides integrated synthetic and real user monitoring, comprehensive test types, real-time analytics, and a diverse node network to help you continuously preempt performance issues and optimize service delivery. More than 350 customers in over 30 countries trust Catchpoint to strengthen their brands and grow their businesses.</p>"
  },
  {
    "name": "packet",
    "enabled": true,
    "url": "https://www.packet.net/",
    "width": 175,
    "bio": "<p>At Packet, our mission is to bring the experience of the public cloud to bare metal servers.</p><p>What does this mean? It means you can program against dedicated servers using the modern developer's toolset. In addition to an elegant API, we offer full meta data support and integrate with tools like Terraform, Ansible, and Docker Cloud.</p><p>A single machine for your API builds? Some NVMe drives to juice Graphite? 150 nodes for crunching that big data backlog at 2am? No sweat! Since 99.9% of our installs deploy in under 10 minutes, you get the convenience of VM's but the power of single tenant bare metal.</p><p>We have four low latency locations (NYC, Silicon Valley, Amsterdam, Tokyo); support OS's from Debian/Ubuntu/FreeBSD to Windows/ESXi/RHEL to ContainerLinux/RancherOS; and have hourly pricing from $.05 - $1.75 / hr. Learn more at <a href=\"http://www.packet.net/\">www.packet.net</a>.</p>"
  },
  {
    "name": "braintree",
    "enabled": true,
    "url": "https://www.braintreepayments.com/",
    "bio": "<p>Braintree provides the easiest way to pay and get paid across any device. With one integration, merchants can start accepting credit and debit cards, PayPal, Apple Pay, Android Pay, Venmo, and whatever comes next. Thousands of online and mobile companies including Uber, Airbnb, and GithHub use Braintree in more than 45 countries. To learn more, visit <a href=\"https://www.braintreepayments.com/\">www.braintreepayments.com</a> or <a href=\"https://twitter.com/braintree\">@braintree</a>.</p>"
  },
  {
    "name": "selectstar",
    "enabled": true,
    "url": "https://selectstar.io/",
    "bio": "<p>SelectStar, powered by Blue Medora, provides unified monitoring of databases for organizations struggling to manage their increasingly diverse database estates. SelectStar, a SaaS-based database performance monitoring platform, is the best way to monitor, manage, and optimize database performance for every database type, wherever it resides. Learn more at <a href=\"https://selectstar.io/\">SelectStar.io</a></p>"
  },
  {
    "name": "sysdig",
    "enabled": true,
    "url": "https://sysdig.com/",
    "bio": "<p>Sysdig (Twitter: <a href=\"https://twitter.com/sysdig\">@sysdig</a>), the container-native visibility company, is creating a new generation of performance management solutions to deliver monitoring, alerting, and troubleshooting in a microservices-friendly architecture. The company’s open source sysdig technology has attracted a community of hundreds of thousands of developers, administrators and other IT professionals looking for deep visibility into systems and containers. Sysdig is the first and only comprehensive, container-native monitoring solution for applications and infrastructures.</p>"
  },
  {
    "name": "influxdata",
    "enabled": true,
    "url": "https://www.influxdata.com/",
    "bio": "<p>InfluxData is the premier real-time monitoring and analytics platform provider. Customers trust InfluxData’s products to deliver the visibility and insight into log, metric, IoT, and sensor data to provide an always-on single consolidated view of their information. InfluxData provides a comprehensive set of products that supports the collection, storage, visualization and alerting of time-series data. InfluxData is an active contributor to the open source Telegraf, InfluxDB, Chronograf and Kapacitor (TICK) projects. For more information visit: <a href=\"http://influxdata.com/\">influxdata.com</a> or follow InfluxData on Twitter <a href=\"https://twitter.com/influxdb\">@influxdb</a>.</p>"
  },
  {
    "name": "perspica",
    "enabled": true,
    "url": "https://perspica.io/",
    "bio": "<p>Many of today’s businesses are supported by &quot;hyper-scale&quot; architectures that generate millions of data points per second across millions of metrics. With this volume of data, production ops teams are no longer able to keep up with what alarms are valid, much less how to fix them. Perspica utilizes artificial intelligence to analyze high volumes of application and infrastructure data in real time, using behavior profiling to understand what is normal behavior while leveraging anomaly detection to reduce alarm storms.</p><p>Perspica consumes a company’s entire time series data stream and applies machine learning algorithms to automatically baseline system performance to identify what is normal. Using these baselines, customers have visibility into their anomalous data in real-time using Perspica’s unique heuristic anomaly detection. By using AI to implement an advanced alarming strategy, Perspica generates only actionable alarms for the metrics which actually represent a problem, dramatically reducing alert fatigue.</p><p>Try Perspica for free at <a href=\"https://www.perspica.io\">www.perspica.io</a>.</p>"
  },
  {
    "name": "squarespace",
    "enabled": true,
    "url": "https://www.squarespace.com/",
    "width": 225,
    "bio": "<p>Squarespace provides creative tools and services to help anyone build and manage their brand online. For more than a decade, we’ve empowered millions of people — from individuals and local artists to entrepreneurs building the world’s most iconic businesses — to take control of their online presence like never before. By blending elegant design and sophisticated engineering, Squarespace sets the new standard for modern publishing.</p><p>Since 2004, Squarespace has offered a fully-hosted environment for creating and maintaining a website. Known for its sophisticated yet easy-to-use interfaces, Squarespace's do-it-yourself tools allow its increasingly diverse user base to quickly and easily create and maintain professional, high-quality websites and e-commerce stores.</p><p>Squarespace’s team of more than 500+ is headquartered in downtown New York City, with offices in Dublin and Portland.</p>"
  },
  {
    "name": "stripe",
    "enabled": true,
    "url": "https://stripe.com/",
    "width": 150,
    "bio": "<p>Stripe is a software platform for starting and running internet businesses. Hundreds of thousands of businesses -- from startups to Fortune 500 companies -- rely on Stripe’s software tools to accept payments, expand globally, and create new revenue streams. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. Stripe users include Lyft, Kickstarter, Salesforce, Shopify, Facebook, Slack, UNICEF and <a href=\"https://stripe.com/us/customers\">many more</a>.</p><p>At Stripe, we believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure -- from designing highly reliable global systems to developing advanced machine learning algorithms to prevent fraud. <a href=\"http://www.stripe.com/jobs\">Join us!</a></p>"
  },
  {
    "name": "tesm",
    "enabled": true,
    "url": "http://www.tesm.com/opsdirector/",
    "bio": "<p>OpsDirector is an intelligent solution for IT Operations and Event Management that has Big Data analytics and machine learning at its core.</p><p>Combining and analysing event data from monitoring systems with data from ITSM platforms and DevOps tooling, OpsDirector provides real-time and intelligent insights into how to effectively manage business services in today’s complex and distributed IT environments.</p>"
  },
  {
    "name": "vividcortex",
    "enabled": true,
    "url": "https://www.vividcortex.com/",
    "bio": "<p>VividCortex is the best way to improve your database performance, efficiency, and uptime. It's a secure, cloud-hosted platform that eliminates your most critical APM visibility gap, providing deep insights into production database workload and query performance. Unlike traditional monitoring that focuses on vanity metrics or only captures a superficial app-centric view, VividCortex measures the performance and resource consumption of every statement and transaction, then uses patented algorithms to analyze and surface relevant insights, so you can proactively fix future performance problems before they impact customers. VividCortex shows intuitive visualizations of database performance to your entire engineering and development teams, with deep drilldown into fine detail. This enables you to delight your customers with a consistent, high-performance experience, while shipping better code to production faster and more safely.</p>"
  },
  {
    "name": "anodot",
    "enabled": true,
    "url": "https://www.anodot.com/",
    "bio": "<p>Anodot is disrupting the static nature of Business Intelligence (BI) with unique real-time business incident detection, anomaly detection and analytics for big data. Using patented machine learning algorithms, Anodot automates the discovery of outliers in vast amounts of data, isolates issues and correlates them across multiple parameters. Operating in real time, Anodot delivers business insights immediately, predicts events before they happen and supports rapid business decisions that help maximize revenues and production for Web-based, e-commerce, ad tech, IoT and manufacturing businesses. The company is based in Sunnyvale, CA and Ra’anana, Israel. Contact us for a free trial.</p>"
  },
  {
    "name": "opsgenie",
    "enabled": true,
    "url": "https://www.opsgenie.com/?utm_source=Events&utm_campaign=Monitorama_Portland_%20May&utm_medium=banner",
    "width": 150,
    "bio": "<p>OpsGenie is an alerting and on-call management solution for dev & ops teams. We provide the tools needed to design actionable alerts, manage on-call schedules & escalations, and ensure that the right people are notified at the right time, using multiple notification methods.</p>"
  },
  {
    "name": "salesforce",
    "enabled": false,
    "url": "https://www.salesforce.com/",
    "width": 150,
    "bio": "<p>Salesforce.com is the enterprise cloud computing leader. Our social and mobile cloud technologies—including our flagship sales and CRM applications—help companies connect with customers, partners, and employees in entirely new ways.</p>"
  },
  {
    "name": "signalsciences",
    "enabled": true,
    "url": "https://www.signalsciences.com/",
    "width": 225,
    "bio": "<p>Signal Sciences is a protection platform for the modern web. It’s designed with collaboration at its core, so your operations, development and security teams can work toward a common goal. It’s also accurate and efficient. Unlike other security solutions, Signal Sciences Web Protection Platform is up and running in minutes--there’s no hardware to deal with. It offers a flexibility that allows you to ship new web features, or push new code into development at the rate you want to, without breaking your app.</p><p>Signal Sciences is the industry’s first Web Protection Platform that works in any cloud, any container, any PaaS, and any modern application architecture. The Signal Sciences Web Protection Platform can be deployed in Next Generation Web Application Firewall (WAF), RASP, or Reverse Proxy modes giving customers the ultimate flexibility and coverage.</p>"
  },
  {
    "name": "brocade",
    "enabled": false,
    "url": "https://stackstorm.com/",
    "bio": "<p>StackStorm is a powerful open-source automation platform that wires together all of your apps, services and workflows. It’s extendable, flexible, and built with love for DevOps and ChatOps.</p>"
  },
]
