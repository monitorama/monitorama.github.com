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
    "enabled": false,
    "url": "https://www.influxdata.com/",
    "bio": "<p>InfluxData is the premier real-time monitoring and analytics platform provider. Customers trust InfluxData’s products to deliver the visibility and insight into log, metric, IoT, and sensor data to provide an always-on single consolidated view of their information. InfluxData provides a comprehensive set of products that supports the collection, storage, visualization and alerting of time-series data. InfluxData is an active contributor to the open source Telegraf, InfluxDB, Chronograf and Kapacitor (TICK) projects. For more information visit: <a href=\"http://influxdata.com/\">influxdata.com</a> or follow InfluxData on Twitter <a href=\"https://twitter.com/influxdb\">@influxdb</a>.</p>"
  },
  {
    "name": "nsone",
    "enabled": false,
    "url": "https://ns1.com/",
    "width": 125,
    "bio": "<p>NS1's intelligent DNS and traffic management platform, with its data driven architecture and unique Filter Chain routing engine, is purpose-built for the most demanding, mission-critical applications on the Internet. NS1's comprehensive platform technology leverages infrastructure, application, and network data to make intelligent routing decisions in real time, ensuring optimal application performance and reliability. NS1's platform is delivered through its world class Managed DNS Network for customers including Imgur, LinkedIn, Wayfair, Collective Media and other top-tier organizations.</p>"
  },
  {
    "name": "opsview",
    "enabled": false,
    "url": "https://www.opsview.com/",
    "bio": "<p>Monitoring should be easy, modern and future-ready. First released in 2004, Opsview Monitor has evolved into a cloud-scale platform that connects the status of what you monitor with its impact on your business services. We provide true insight into the performance of your IT operations, enabling faster and more informed decision-making that delivers improved service levels and greater team efficiency.</p><p>However complex your IT environment, you can rapidly deploy Opsview Monitor and integrate it with your existing business systems with help from our world-class customer success team. More than any other IT monitoring company, we put you first.</p><p>So, if you’re looking for automation from your monitoring solution; to reduce the high costs and potentially poor service of legacy tools; and need a single, unified view of your entire IT infrastructure and apps <a href=\"https://www.opsview.com/products/downloads\">get started with our Free Trial today<a/>.</p>"
  },
  {
    "name": "squarespace",
    "enabled": false,
    "url": "https://www.squarespace.com/",
    "width": 225,
    "bio": "<p>Squarespace provides creative tools and services to help anyone build and manage their brand online. For more than a decade, we’ve empowered millions of people — from individuals and local artists to entrepreneurs building the world’s most iconic businesses — to take control of their online presence like never before. By blending elegant design and sophisticated engineering, Squarespace sets the new standard for modern publishing.</p><p>Since 2004, Squarespace has offered a fully-hosted environment for creating and maintaining a website. Known for its sophisticated yet easy-to-use interfaces, Squarespace's do-it-yourself tools allow its increasingly diverse user base to quickly and easily create and maintain professional, high-quality websites and e-commerce stores.</p><p>Squarespace’s team of more than 500+ is headquartered in downtown New York City, with offices in Dublin and Portland.</p>"
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
    "enabled": false,
    "url": "https://sematext.com/",
    "bio": "<p>Sematext is a globally distributed organization that builds innovative Cloud and On Premise solutions for performance monitoring, alerting and anomaly detection (SPM), log management and analytics (Logsene), search analytics (SSA). We also provide Search and Big Data consulting services and offer 24/7 production support and training for Solr and Elasticsearch to clients worldwide.</p><p>Unlike other vendors who typically offer only performance monitoring tools, or only logging tools, or only Big Data consulting services, etc., Sematext pulls together all of these related core competencies that organizations need to make informed decisions from their data into one solution suite of products and services.</p>"
  },
  {
    "name": "humio",
    "enabled": false,
    "url": "http://humio.com/",
    "bio": "Coming Soon"
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
    "name": "covermymeds",
    "enabled": false,
    "url": "https://www.covermymeds.com/",
    "width": "225",
    "bio": "<p>CoverMyMeds provides physician offices and pharmacies a one-stop, all-drug, all-payer Software as a Service solution to efficiently manage the more than 170 million medication prescriptions annually rejected by payers due to Prior Authorization (PA) requirements. Their products help make it easier for patients to get their medication faster. CoverMyMeds supports the technology community through publishing code, articles, and presenting about how they’re innovating with technology. <a href=\"https://techblog.covermymeds.com/\">Learn more</a> about their technology team and platform on their tech blog.</p>"
  },
]
