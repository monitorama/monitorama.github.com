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
    "name": "librato",
    "enabled": true,
    "url": "https://www.librato.com/?utm_campaign=2016-monitorama&utm_content=logo&utm_medium=sponsor-page&utm_source=monitorama",
    "bio": "<p>Librato is a scalable cloud monitoring platform that provides visibility into the metrics that matter to your applications and infrastructure. From the container and operating system, through the data tier, components and services, Librato gives you out-of-the-box integrations for popular technologies such as AWS, Heroku, Docker, Redis, Nginx, Ruby on Rails, and more. Librato accepts time-series data from any source for real-time aggregation and transformation, easy dashboard creation, visual analysis and correlation, alerting, and storage. Loved by thousands of engineering teams at companies including Heroku, Nextdoor, Moz, Instacart, Slack, and Stitchfix. For more information visit our <a href=\"https://www.librato.com/\">website</a>, read our <a href=\"http://blog.librato.com/\">blog</a>, or follow <a href=\"https://twitter.com/Librato\">@Librato</a> on Twitter.</p>",
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
    "enabled": false,
    "url": "https://www.wavefront.com/",
    "bio": "<p>Metrics are rapidly overtaking log-based approaches as the most powerful way to manage and understand the overall health and functioning of a service platform. One of the key use cases in the world of metrics is anomaly detection -- understanding what systems, applications, and services are acting in an unusual manner across (potentially) millions of independent data streams, all within an operationally useful time window. Wavefront is the platform that enables true unified real-time analytics and anomaly detection at scale.</p>"
  },
  {
    "name": "moogsoft",
    "enabled": false,
    "url": "http://moogsoft.com/",
    "width": "175",
    "bio": "<p>Moogsoft provides cloud-based and on-premise software that automates incident early warning and collaborative remediation, used by IT Ops, DevOps and Dev/QA teams. An agile approach to operational analytics and management, we help businesses achieve continuous availability of applications and services at scale.</p><p>Providing visibility across the entire stack – from applications down to the underlying infrastructure – Moogsoft automates the detection and prediction of complex service failures as they happen, helping support teams to move faster. Using breakthrough machine learning and social collaboration technologies across silo-ed domains, we turn the volumes of event and alert data produced by applications, tools and infrastructures into actionable insight. Moogsoft is used by leading SaaS providers, global enterprises, and cloud service providers to reduce alert fatigue, finding and resolving incidents well before customers call to complain. Learn more at <a href=\"http://www.moogsoft.com/\">www.moogsoft.com</a>.</p>"
  },
  {
    "name": "signifai",
    "enabled": false,
    "url": "https://www.signifai.io/",
    "width": "225",
    "bio": "<p>We believe in people first and foremost. Our technology harnesses machine intelligence to help your team solve problems faster, more effectively, and more accurately than ever before, resulting in more uptime for your infrastructure and more happy-time for your team.</p>"
  },
  {
    "name": "bugsnag",
    "enabled": false,
    "url": "https://bugsnag.com/?utm_source=conference_website&utm_medium=logo&utm_campaign=monitorama2017",
    "bio": "<p>Bugsnag gives engineering teams the tools and workflow they need to spend more time shipping and less time fixing. We help you take a proactive approach to software quality, translating errors into action. With Bugsnag, developers are free to innovate and build applications that can evolve with the pace of modern business.</p>"
  },
  {
    "name": "sensu",
    "enabled": false,
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
    "enabled": false,
    "url": "http://www.raintank.io/",
    "width": 250,
    "bio": "<p>Grafana Labs is the company behind Grafana, the defacto standard for visualizing time series data. We also run <a href=\"http://grafana.net/\">GRAFANA.NET</a>: an OpenSaaS platform that helps you get the most out of your Grafana, and get the most out of your open source monitoring stack.</p>"
  },
  {
    "name": "nsone",
    "enabled": false,
    "url": "https://ns1.com/",
    "width": 125,
    "bio": "<p>NS1's intelligent DNS and traffic management platform, with its data driven architecture and unique Filter Chain routing engine, is purpose-built for the most demanding, mission-critical applications on the Internet. NS1's comprehensive platform technology leverages infrastructure, application, and network data to make intelligent routing decisions in real time, ensuring optimal application performance and reliability. NS1's platform is delivered through its world class Managed DNS Network for customers including Imgur, MaxCDN, Collective Media, OpenX and many more.</p>"
  },
  {
    "name": "dataloopio",
    "enabled": false,
    "url": "https://www.dataloop.io/",
    "bio": "<p>Dataloop.IO is a monitoring service for DevOps & Operations teams running Cloud, SaaS, Microservices and IoT services. It is designed to be totally self-service, so teams outside Operations can setup their own monitoring, with custom checks and metrics, using our unique delegated remote setup technology, while still providing your Operations team the visibility and control they need across the entire service.</p><p>Delegate setup to teams running your different products & Micro-Services using our unique account model, let them install the monitoring they need in just a few clicks using our unique Open-Source monitoring packs, create internal packs for all your teams to install with your specific plugins, dashboards and alerts, and finally let developers stream in their Graphite/StatsD metrics alongside their service checks for easily correlation.</p><p>If you're running at scale, and want to offload the burden of setting up monitoring to all your teams, then Dataloop.IO is for you! You can <a href=\"https://www.dataloop.io/\">signup now</a> for a free trial today!</p>"
  },
  {
    "name": "threatstack",
    "enabled": false,
    "url": "https://www.threatstack.com/",
    "width": 225,
    "bio": "<p>Building a complete security solution doesn’t have to be an expensive, complex and time-consuming endeavor. At Threat Stack we set out to create the world’s ﬁrst cloud-native, platform independent, comprehensive security service that is cost-eﬀective and easy-to-use.</p><p>Threat Stack enables growth-driven companies to scale with confidence by identifying and verifying insider threats, external attacks and data loss in real-time. The only cloud-native continuous monitoring solution that gives customers instant visibility and automatically responds to changes in their environment, Threat Stack provides the coverage needed to run secure and compliant, in all environments, without sacrificing speed and efficiency.</p><p>For more information, or to start a free trial, visit <a href=\"https://www.threatstack.com/\">threatstack.com</a>.</p>"
  },
]
