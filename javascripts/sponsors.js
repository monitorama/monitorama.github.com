var sponsors = [
  {
    "name": "signalfx",
    "enabled": true,
    "url": "https://signalfx.com/",
    "bio": "<p>SignalFx is the most advanced monitoring solution for modern infrastructure. Our mission is to help teams building and operating services on platforms like AWS, Kafka, Elasticsearch, Zookeeper, Cassandra and more drive high levels of availability.</p><p>SignalFx provides development and operations self-service access to creating, exploring, monitoring, and alerting on real-time infrastructure and application metrics. Using SignalFlow, anyone can easily create analytics pipelines on to create meaningful aggregations -- such as percentiles, moving averages and growth rates -- to reduce the noise, at any scale.</p>"
  },
  {
    "name": "datadog",
    "enabled": true,
    "url": "http://www.datadoghq.com/",
    "width": 150,
    "bio": "<p>Datadog is a monitoring and analytics platform for large-scale application infrastructure. Combining metrics from servers, databases, and applications, Datadog delivers sophisticated, actionable alerts, and provides real-time visibility of your entire infrastructure. Datadog includes 120+ vendor-supported, prebuilt integrations and monitors hundreds of thousands of hosts.</p>"
  },
  {
    "name": "bigpanda",
    "enabled": true,
    "url": "http://bigpanda.io/",
    "width": 225,
    "bio": "<p>BigPanda is the next generation in Intelligent Incident Management for IT, NOC and DevOps teams. BigPanda's data science platform brings order to the alert chaos that plagues IT Operations in complex cloud and on-premise operating environments.  BigPanda aggregates, consolidates, and correlates massive amounts of IT alerts, deployments and communications, thus turning them into actionable insights. For more information, visit: <a href=\"http://www.bigpanda.io\">http://www.bigpanda.io</a>.</p>"
  },
  {
    "name": "netuitive",
    "enabled": true,
    "url": "http://www.netuitive.com/",
    "width": 225,
    "bio": "<p>Netuitive provides a SaaS-based, adaptive monitoring and analytics solution for cloud infrastructure, applications, and services. By ingesting data from multiple sources, Netuitive learns systems behaviors and applies dynamic policies that reduce the manual effort and human-guesswork other monitoring tools typically require. Netuitive’s patented technology enables development and operations teams to visualize the entire stack, automate performance analysis, detect relevant anomalies, and determine efficient capacity utilization. Sign up for your free trial at <a href=\"http://www.netuitive.com/\">www.netuitive.com</a>.</p>"
  },
  {
    "name": "operable",
    "enabled": true,
    "url": "http://operable.io/",
    "width": 250,
    "bio": "<p>Operable helps your teams work together, learn, and improve every day. Cog, our open source ChatOps platform, gives you all of the power of the command line in the place you already collaborate with your team: your chat window. WIth powerful access control features, you can confidently automate even the most sensitive tasks in chat. Unparalleled adaptability unlocks your creativity so you can combine commands in new ways to rapidly deal with unexpected problems, with your team there backing you up. And when you do want to build a new workflow, Cog lets you use your favorite language while it takes care of the details like access control and logging.</p>"
  },
  {
    "name": "librato",
    "enabled": true,
    "url": "https://www.librato.com/?utm_campaign=2016-monitorama&utm_content=logo&utm_medium=sponsor-page&utm_source=monitorama",
    "bio": "<p>Librato is a scalable cloud monitoring platform that provides visibility into the metrics that matter to your applications and infrastructure. From the container and operating system, through the data tier, components and services, Librato gives you out-of-the-box integrations for popular technologies such as AWS, Heroku, Docker, Redis, Nginx, Ruby on Rails, and more. Librato accepts time-series data from any source for real-time aggregation and transformation, easy dashboard creation, visual analysis and correlation, alerting, and storage. Loved by thousands of engineering teams at companies including Heroku, Nextdoor, Moz, Instacart, Slack, and Stitchfix. For more information visit our <a href=\"https://www.librato.com/\">website</a>, read our <a href=\"http://blog.librato.com/\">blog</a>, or follow <a href=\"https://twitter.com/Librato\">@Librato</a> on Twitter.</p>",
  },
  {
    "name": "raintank",
    "enabled": true,
    "url": "http://www.raintank.io/",
    "bio": "<p>raintank is the company behind Grafana, the defacto standard for visualizing time series data. We also run <a href=\"http://grafana.net/\">GRAFANA.NET</a>: an OpenSaaS platform that helps you get the most out of your Grafana, and get the most out of your open source monitoring stack.</p>"
  },
  {
    "name": "pagerduty",
    "enabled": true,
    "url": "http://www.pagerduty.com/",
    "bio": "<p>PagerDuty is an agile incident management solution that integrates with IT Ops and DevOps monitoring stacks to improve operational reliability and agility. From enriching and aggregating events to correlating them into actionable alerts, PagerDuty streamlines the incident management lifecycle by reducing noise and resolution times. With hundreds of native integrations with operations tools, automated scheduling, advance reporting and guaranteed reliability, PagerDuty is trusted by over 7,000 organizations globally to increase business and employee efficiency. The company is headquartered in San Francisco and backed by leading venture capital firms Andreessen Horowitz, Bessemer Venture Partners, Baseline Ventures, and Ignition Partners. Try PagerDuty for free at <a href=\"https://www.pagerduty.com/\">www.pagerduty.com</a>.</p>"
  },
  {
    "name": "serverdensity",
    "enabled": true,
    "url": "https://www.serverdensity.com/",
    "width": 250,
    "bio": "<p>Server Density is a SaaS tool which helps you run your infrastructure. It syncs with the major cloud providers and and allows you to monitor your websites and servers from a single console, API and mobile app so you can diagnose problems, maintain uptime and maximise performance.</p>"
  },
  {
    "name": "bmc",
    "enabled": true,
    "url": "http://www.bmc.com/",
    "width": 150,
    "bio": "<p>BMC is a global leader in software solutions that help IT transform traditional businesses into digital enterprises for the ultimate competitive advantage. Our Digital Enterprise Management set of IT solutions is designed to make digital business fast, seamless, and optimized. From mainframe to mobile to cloud and beyond, we pair high-speed digital innovation with robust IT industrialization—allowing our customers to provide intuitive user experiences with optimized performance, cost, compliance, and productivity. BMC solutions serve more than 15,000 customers worldwide including 82 percent of the Fortune 500®. BMC – Bring IT to Life</p>"
  },
  {
    "name": "salesforce",
    "enabled": true,
    "url": "http://www.salesforce.com/",
    "width": 150,
    "bio": "<p>Salesforce.com is the enterprise cloud computing leader. Our social and mobile cloud technologies—including our flagship sales and CRM applications—help companies connect with customers, partners, and employees in entirely new ways.</p>"
  },
  {
    "name": "catchpoint",
    "enabled": true,
    "url": "http://catchpoint.com/",
    "width": 240,
    "bio": "<p>Catchpoint is a leading Digital Performance Analytics company that provides unparalleled insight into your customer-critical services to help you consistently deliver an amazing customer experience. Designed for digital business, Catchpoint is the only end-user experience monitoring (EUM) platform that can simultaneously capture, index and analyze object level performance data inline across the most extensive monitor types and node coverage, enabling a smarter and faster way to preempt issues and optimize service delivery. More that 350 customers in over 30 countries trust Catchpoint to strengthen their brand and grow their business.</p>"
  },
  {
    "name": "dyn",
    "enabled": true,
    "url": "http://dyn.com/",
    "width": 175,
    "bio": "<p>Dyn is a cloud-based Internet Performance Management company. Dyn helps companies monitor, control, and optimize online infrastructure for an exceptional end-user experience. Through a world-class network and unrivaled, objective intelligence into Internet conditions, Dyn ensures traffic gets delivered faster, safer, and more reliably than ever.</p><p>Dyn is the leading Internet Performance Management provider to the most visited web properties in the world, as measured by the Alexa 500. Dyn delivers more brand loyalty, customer satisfaction, and increased sales from startups to Global 2000 companies and businesses in between. Dyn is Internet Performance. Delivered. Visit <a href=\"http://dyn.com/\">dyn.com</a> for more info on how Dyn delivers.</p>"
  },
  {
    "name": "nsone",
    "enabled": true,
    "url": "https://ns1.com/",
    "width": 125,
    "bio": "<p>NS1's intelligent DNS and traffic management platform, with its data driven architecture and unique Filter Chain routing engine, is purpose-built for the most demanding, mission-critical applications on the Internet. NS1's comprehensive platform technology leverages infrastructure, application, and network data to make intelligent routing decisions in real time, ensuring optimal application performance and reliability. NS1's platform is delivered through its world class Managed DNS Network for customers including Imgur, MaxCDN, Collective Media, OneLogin and many more.</p>"
  },
  {
    "name": "sumologic",
    "enabled": true,
    "url": "http://www.sumologic.com/",
    "bio": "<p>Sumo Logic is a secure, cloud-native, machine data analytics service, delivering real-time, continuous intelligence across the entire application lifecycle and stack. More than 1,000 customers around the globe rely on Sumo Logic for the analytics and insights to build, run and secure their modern applications and cloud infrastructures.</p>"
  },
  {
    "name": "google",
    "enabled": true,
    "url": "https://cloud.google.com/",
    "width": 275,
    "bio": "<p>Google Cloud Platform enables developers to build, test and deploy applications on Google's highly-scalable and reliable infrastructure. Computing, storage and application services for your web, mobile and backend solutions.</p><p>Build on the same infrastructure that allows Google to return search results in milliseconds, serve 6 billion hours of YouTube video per month and provide storage for Gmail users. Visit <a href=\"https://cloud.google.com/\">https://cloud.google.com</a> and get started today.</p>"
  },
  {
    "name": "chef",
    "enabled": true,
    "url": "https://www.chef.io/",
    "width": 150,
    "bio": "<p><b>We are Chef.</b> Chef is the platform for the DevOps workflow. Use Chef to automate and manage it all--infrastructure, run-time environments and applications. The Chef community is tens of thousands strong. The most enduring and transformative companies use Chef to become fast, efficient, and innovative software-driven organizations. Join us today. <a href=\"https://www.chef.io/\">www.chef.io</a></p>"
  },
  {
    "name": "packet",
    "enabled": false,
    "url": "https://www.packet.net/",
    "width": 175,
    "bio": "<p>At Packet, our mission is to bring the automation experience of virtual public clouds to bare metal servers and physical networks.</p><p>What does this mean?  It means you can program against dedicated servers (and a zippy dual stack network) using the modern developer's toolset.  In addition to an elegant API, we offer full meta data support and integrate with tools like Terraform, Docker Cloud, Rancher, and more.</p><p>A single machine for your API builds?  A cluster for your Grafana stack? 150 nodes for crunching that big data backlog at 2am?  No sweat!  Since 99.9% of our installs deploy in under 10 minutes, you can tap into powerful bare metal servers just like you would the public cloud.</p><p>We have three locations (NYC, San Jose, Amsterdam); support CoreOs, Debian, Ubuntu, Windows, ESXi, FreeBSD and Rancher; and have hourly pricing from $.05 - $1.75 / hr.</p><p>Learn more at <a href=\"http://www.packet.net/\">www.packet.net</a>.</p>"
  },
  {
    "name": "sentry",
    "enabled": true,
    "url": "https://getsentry.com/",
    "bio": "<p>Sentry is modern error logging. Get the full stacktrace, request info, and user context of every error. Sentry is completely open source (client and server), supports over two dozen languages and frameworks, has hundreds of contributors, and is deployed in tens of thousands of organizations. Don’t just log errors, resolve them.</p>"
  },
  {
    "name": "opsclarity",
    "enabled": true,
    "url": "http://www.opsclarity.com/",
    "bio": "<p>OpsClarity is a purpose-built monitoring solution for data-first applications that provides end-to-end performance monitoring for complex data processing pipelines along with deep visibility into the individual data frameworks like Kafka, Spark, Elasticsearch, Storm, Solr, Cassandra etc. OpsClarity completely automates metric and metadata collection, and leverages its deep domain expertise about the individual data frameworks to apply data science constructs such as anomaly detection and event correlation to rapidly troubleshoot issues. The system provides a visual topology of the entire data-pipeline, overlaid with synthesized health of each service and cluster, enabling early identification and quick resolution of common concerns such as throughput, latency, error rate, back pressure etc.</p>"
  },
  {
    "name": "statuspage",
    "enabled": true,
    "url": "https://www.statuspage.io/",
    "width": 250,
    "bio": "<p>StatusPage.io was created to help companies be more transparent with their customers and employees during unplanned outages and scheduled maintenance, and to communicate critical system performance metrics. Our product lets any company go from zero to hi-there-sexy-status-page in just a few minutes. Customers like Dyn, New Relic, and Atlassian are already using StatusPage to build trust and cut inbound support costs. Come see why over 2,000 others have settled down with us - on the web at <a href=\"http://statuspage.io/\">statuspage.io</a> or on Twitter at <a href=\"https://twitter.com/StatusPageIO\">@StatusPageIO</a>.</p>"
  },
  {
    "name": "bugsnag",
    "enabled": true,
    "url": "https://bugsnag.com/?utm_source=conference_website&utm_medium=logo&utm_campaign=monitorama2016",
    "bio": "<p>Bugsnag gives engineering teams the tools and workflow they need to spend more time shipping and less time fixing. We help you take a proactive approach to software quality, translating errors into action. With Bugsnag, developers are free to innovate and build applications that can evolve with the pace of modern business.</p>"
  },
  {
    "name": "victorops",
    "enabled": true,
    "url": "https://victorops.com/",
    "width": 250,
    "bio": "<p>VictorOps is the real-time incident management platform focusing on incident lifecycle management and collaboration for IT and DevOps teams. The solution combines the power of people and data to solve IT problems in real-time. The VictorOps platform seamlessly orchestrates team situational awareness, incident creation, escalation, notification, and remediation with team members regardless of physical location or time of day.</p>"
  },
  {
    "name": "threatstack",
    "enabled": true,
    "url": "https://www.threatstack.com/",
    "width": 225,
    "bio": "<p>Building a complete security solution doesn’t have to be an expensive, complex and time-consuming endeavor. At Threat Stack we set out to create the world’s ﬁrst cloud-native, platform independent, comprehensive security service that is cost-eﬀective and easy-to-use.</p><p>Threat Stack enables growth-driven companies to scale with confidence by identifying and verifying insider threats, external attacks and data loss in real-time. The only cloud-native continuous monitoring solution that gives customers instant visibility and automatically responds to changes in their environment, Threat Stack provides the coverage needed to run secure and compliant, in all environments, without sacrificing speed and efficiency.</p><p>For more information, or to start a free trial, visit <a href=\"https://www.threatstack.com/\">threatstack.com</a>.</p>"
  },
  {
    "name": "elastic",
    "enabled": true,
    "url": "https://www.elastic.co/",
    "bio": "<p>Elastic believes getting immediate, actionable insight from data matters. As the company behind the four open source projects — Elasticsearch, Logstash, Kibana, and Beats (the Elastic stack) — designed to take data from any source and search, analyze, and visualize it in real time, Elastic is helping people make sense of data. From stock quotes to Twitter streams, Apache logs to WordPress blogs, our products are extending what's possible with data, delivering on the promise that good things come from connecting the dots.</p>"
  },
  /* {
    "name": "",
    "enabled": false,
    "url": "",
    "width": 275,
    "bio": "<p></p>"
  } */
]
