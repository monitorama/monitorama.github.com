var sponsors = [
  /* {
    "name": "",
    "enabled": false,
    "url": "",
    "width": 275,
    "bio": "<p></p>"
  } */
  {
    "name": "solarwinds",
    "enabled": true,
    "url": "http://www.solarwinds.com/cloud-monitoring?cmp=lec-x-monitorama-2017_monitorama-x-x-logo",
    "bio": "<p>SolarWinds is a leading provider of powerful and affordable IT management software to customers worldwide. SolarWinds® Monitoring Cloud is the next evolution of the company’s Software as a Service (SaaS) portfolio for monitoring cloud infrastructure and applications. Combined, Pingdom®, Librato™, Papertrail™, TraceView™ offer a full stack performance monitoring solution to manage, optimize, and troubleshoot at every layer, from the infrastructure to the end user experience. Nearly 1 million users now rely on SolarWinds Monitoring Cloud solutions for intuitive and affordable tools.</p>"
  },
  {
    "name": "wavefront",
    "enabled": false,
    "url": "https://www.wavefront.com/",
    "bio": "<p>Wavefront is analytics-driven, metrics monitoring, alerting and anomaly detection platform for cloud-native, microservices environments. Metrics go far beyond log-based approaches as the most powerful way to understand and manage an overall system’s function. At massive scale and reliability, Wavefront processes metrics from all corners of your cloud estate and enables every engineer and developer in your organization to self-service alerts, dashboards and drill-down visualizations &#8212; also with a complete API. This includes sub-second metrics and aggregated percentiles. SaaS leaders like Workday, Box, Lyft, Okta, Intuit, Groupon, and Yammer depend on Wavefront every day.</p> "
  },
  {
    "name": "datadog",
    "enabled": false,
    "url": "http://www.datadoghq.com/",
    "width": 150,
    "bio": "<p>Datadog is a monitoring and analytics platform for large-scale application infrastructure. Combining metrics from servers, databases, and applications, Datadog delivers sophisticated, actionable alerts, and provides real-time visibility of your entire infrastructure. Datadog includes 120+ vendor-supported, prebuilt integrations and monitors hundreds of thousands of hosts.</p>"
  },
  {
    "name": "circonus",
    "enabled": false,
    "url": "https://www.circonus.com/",
    "width": 225,
    "bio": "<p>Circonus provides Big Data analytics and monitoring for Web-Scale IT. Developed specifically for the requirements of DevOps, the Circonus platform combines alerts, graphs, dashboards and machine-learning intelligence. Proprietary IT Operations Analytics tools enable customers to produce forensic, predictive, and automated analyses that help optimize operations and the business.</p>"
  },
  {
    "name": "influxdata",
    "enabled": true,
    "url": "https://www.influxdata.com/",
    "bio": "<p><a href=\"https://www.influxdata.com/\">InfluxData</a>, the creators of InfluxDB, delivers a modern open source platform built from the ground up for metrics and events (time series data). Whether the data comes from humans, sensors, or machines, InfluxData empowers developers to build next-generation monitoring, analytics, and IoT applications faster, easier, and to scale delivering real business value quickly. Based in San Francisco, InfluxData customers include Autodesk, Cisco, eBay, and SolarCity. Visit <a href=\"https://www.influxdata.com/\">influxdata.com</a>. Twitter: <a href=\"https://twitter.com/influxdb\">@influxdb</a>.</p>",
  },
  {
    "name": "nsone",
    "enabled": true,
    "url": "https://ns1.com/",
    "width": 125,
    "bio": "<p>NS1's intelligent DNS and traffic management platform, with its data driven architecture and unique Filter Chain routing engine, is purpose-built for the most demanding, mission-critical applications on the Internet. NS1's comprehensive platform technology leverages infrastructure, application, and network data to make intelligent routing decisions in real time, ensuring optimal application performance and reliability. NS1's platform is delivered through its world class Managed DNS Network for customers including Imgur, LinkedIn, Wayfair, Collective Media and other top-tier organizations.</p>"
  },
  {
    "name": "opsview",
    "enabled": true,
    "url": "https://www.opsview.com/",
    "bio": "<p>Monitoring should be easy, modern and future-ready. First released in 2004, Opsview Monitor has evolved into a cloud-scale platform that connects the status of what you monitor with its impact on your business services. We provide true insight into the performance of your IT operations, enabling faster and more informed decision-making that delivers improved service levels and greater team efficiency.</p><p>However complex your IT environment, you can rapidly deploy Opsview Monitor and integrate it with your existing business systems with help from our world-class customer success team. More than any other IT monitoring company, we put you first.</p><p>So, if you’re looking for automation from your monitoring solution; to reduce the high costs and potentially poor service of legacy tools; and need a single, unified view of your entire IT infrastructure and apps <a href=\"https://www.opsview.com/products/downloads\">get started with our Free Trial today<a/>.</p>"
  },
  {
    "name": "squarespace",
    "enabled": false,
    "url": "https://www.squarespace.com/",
    "width": 225,
    "bio": "<p>Squarespace makes beautiful products to help people with creative ideas succeed. Our platform empowers millions of people — from individuals and local artists to entrepreneurs shaping the world’s most iconic businesses — to share their stories and create an impactful, stylish, and easy-to-manage online presence. We’re looking for people to join the team who are as excited as we are to help build the platform that empowers the future generation of creators to be successful online. Our competitive benefits package includes premium health care coverage, daily gourmet lunches, unlimited vacation, tuition reimbursement, retirement and donation matching, rich parental leave benefits, and so many snacks. Please check out our <a href=\"https://www.squarespace.com/about/careers/\">Careers page</a> to see all our current openings.</p>"
  },
  {
    "name": "serverdensity",
    "enabled": false,
    "url": "https://www.serverdensity.com/",
    "width": 250,
    "bio": "<p>Server Density is a SaaS tool which helps you run your infrastructure. It syncs with the major cloud providers and and allows you to monitor your websites and servers from a single console, API and mobile app so you can diagnose problems, maintain uptime and maximise performance.</p>"
  },
  {
    "name": "sematext",
    "enabled": true,
    "url": "https://sematext.com/",
    "bio": "<p><a href=\"https://sematext.com/\">Sematext Group</a>, a global products and services company, offers <a href=\"https://sematext.com/infrastructure-monitoring/\">infrastructure monitoring</a>, <a href=\"https://sematext.com/application-monitoring/\">application performance monitoring</a>, and <a href=\"https://sematext.com/log-management/\">log management</a> solutions - <a href=\"https://sematext.com/cloud\">Sematext Cloud</a> and Sematext Enterprise. Sematext enables businesses to easily collect application and server logs, metrics, traces, and events, thus delivering full-stack visibility through a single access point. The Sematext platform helps businesses extract value from logs and metrics and turn it into real-time actionable insights.</p><p>Sematext also provides professional services for Elasticsearch, the ELK / Elastic Stack, and Apache Solr – consulting, training, and production support.</p>"
  },
  {
    "name": "humio",
    "enabled": false,
    "url": "http://humio.com/",
    "width": 150,
    "bio": "<p>Humio is a log aggregation and analysis tool for developers and DevOps teams. Supporting fast, ad-hoc, and real-time queries, Humio handles 1TB/day of raw logs ingest per day on a single node. With on demand dashboards, users can easily visualize and monitor the right metrics when it is most relevant. Available as an on-premise and hosted solution.</p>"
  },
  {
    "name": "bigpanda",
    "enabled": false,
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
    "url": "https://grafana.com/",
    "width": 250,
    "bio": "<p>Grafana Labs is the company behind Grafana, the defacto standard for visualizing time series data. We also run <a href=\"http://grafana.net/\">GRAFANA.NET</a>: an OpenSaaS platform that helps you get the most out of your Grafana, and get the most out of your open source monitoring stack.</p>"
  },
  {
    "name": "covermymeds",
    "enabled": true,
    "url": "https://www.covermymeds.com/",
    "width": "225",
    "bio": "<p>CoverMyMeds is one of the fastest growing healthcare technology companies in the US.  We help prescribers and pharmacies submit Prior Authorization requests for any drug and nearly all health plans - 100% free - to get millions of patients on their medications every single year.  Our team of highly-productive healthcare enthusiasts, startup junkies and everything in between is the best thing about working here.  On-site chef, flexible hours and paid benefits? Yeah, we have those too.  But don’t take our word for it.  We’ve been named to Glassdoor's top 50 places to work in the nation, Inc. 500’s list three times, were awarded one of the top places to work by Modern Healthcare and three times won best places to work in Columbus, Ohio.</p>"
  },
]
