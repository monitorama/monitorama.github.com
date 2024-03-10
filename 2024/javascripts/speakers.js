var rawSpeakers = {
  pdx: [
    {
      name: "Virginia Diana Todea",
      pronouns: "She/Her",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Diana is a Site Reliability Engineer with a focus on Observability at Elastic. She is passionate about machine learning, DevOps and GenAI. She supports women in tech.",
      title: "Serverless Observability: a case study of SLOs",
      abstract:
        "<p>Fine tuning the Service Level Objectives is a golden rule for the industries adopting them. This talk explores the case study of migrating to Kubernetes and how SLOs and transforms can backfire if not managed correctly.</p><p>The talk starts by presenting the reasons why SLOs are important in the software development framework. We will then present our case study on how migrating to Kubernetes exposed our system to SLO definition and the challenges our system faced when trying to measure and adhere to our SLOs. We will deep dive in the main bottlenecks we encountered when trying to apply our SLOs across our multi cluster infrastructure, how we dealt with these challenges by correlating our SLOs with burn rates and transforms. We highlight that the observability system can backfire as a consequence if the metrics are not properly adjusted.</p><p>We wrap up our talk by drawing the main lessons from our case study and the benefits to the ecosystem: SLOs are paramount for the software development lifecycle and implementing them correctly should follow a process of continuous improvement alongside with adopting the right tools and metrics.</p>",
      video: "",
      slides: "",
      gravhash:
        "360c67af015ded8762cae7994ca2225ae642acef203400cc7e4de9df7cc05c27",
    },
    {
      name: "Dan Slimmon",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "An DevOp and SRE for 16 years, Dan has led observability and incident response programs for rapidly scaling companies like HashiCorp and Etsy. He's a tireless advocate for applying scientific inquiry and medical diagnostic techniques to the field of software operations.",
      title: "No observability without theory",
      abstract:
        "<p>When our system isn't observable enough, what do we do? We add telemetry. The more signals we can observe, the more knowledge we'll have. Or so the thinking goes. But observability requires more than just data: it requires a _theory_ about how our system works. Only within a theory can signals be interpreted and made useful.</p><p>In this talk we'll see that, often, the limiting factor of a system's observability is not the thoroughness of our measurements, but rather the strength and coherence of our theory. This fact carries major implications for how we must build dashboards, write alerts, and respond to incidents.</p>",
      video: "",
      slides: "",
      gravhash:
        "9e1aedd800c4580300eef746b1c7db9829b95ed4500fd086cbb79b757cfce136",
    },
    {
      name: "Dave McAllister",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Currently providing technical OSS insights for NGINX, Dave talks about the advantages of microservices and orchestration to solve distributed systems challenges, especially with open source. Dave has been a champion for open systems and open source from the early days of Linux to today's world of clouds and containers. He often speaks on topics associated with emerging software architectures and practices, observability, and how open source innovations power today's world.",
      title: "The subtle art of misleading with Statistics",
      abstract:
        "<p>&quot;Lies, damned lies and statistics.&quot; While true, only statistics allows you to lie to yourself.</p><p>Let's explore how statistics can sometimes trick us into believing something that's not true. This isn't always done on purpose; often, we mislead ourselves without realizing it. We'll look at how focusing too much on recent events, choosing specific data to look at, and making assumptions about the size of a group can lead us to the wrong conclusions. We'll dissect common practices like the misuse of graphical representations, the confusion between correlation and causation, and the manipulation of scale and averages. These practices, often overlooked or misunderstood, can result in false indicators, misleading correlations, and distracting information. Through real-world examples, we demonstrate how these statistical pitfalls can shape narratives, influence decisions, and impact public opinion. This presentation aims to teach you how to look at statistics more critically, understand their limits, and avoid fooling yourself with numbers.</p>",
      video: "",
      slides: "",
      gravhash: "fe11a540d3f4e92bd55503223fe46e17",
    },
    {
      name: "Austin Parker",
      pronouns: "He/They",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Austin Parker is Director of Open Source at Honeycomb.io, a co-founder of the OpenTelemetry project, and a member of the OpenTelemetry Governance Committee. With over two decades in the IT and software industry, Austin has built and operated cloud-native platforms for a variety of functions, including banking, healthcare, and telecommunications. In addition, Austin is a frequent writer, international speaker, and community builder around open source and observability topics. He’s an author of Learning OpenTelemetry (O'Reilly, 2024) and Distributed Tracing in Practice (O’Reilly, 2022), a co-chair and organizer of Observability Day NA and EMEA, and the founder of the world’s first (and only) virtual DevOps event in Animal Crossing, Deserted Island DevOps.",
      title: "The Hater's Guide To OpenTelemetry",
      abstract:
        "<p>&quot;If I have to watch one more talk that references xkcd 927, I'll drop our logging db myself.&quot;</p><p>&quot;The only thing I need to trace is my path out of this building at five o'clock each day.&quot;</p><p>Hacker News comments or your personal thoughts on everyone's favorite observability project, OpenTelemetry? The answer may surprise you! In this talk, levity will be enforced and the takes will be piping hot, as you learn about the many ways that OpenTelemetry has been completely abused by the commercial 'observability community', why it didn't have to be this way, and how in spite of the best efforts of many millions of dollars in marketing pablum it's still a pretty good project.</p>",
      video: "",
      slides: "",
      gravhash:
        "5bf8c0bd5b081e4a47c7db87e5baf5c554c556654a88a37a003189d18e18cd4f",
    },
    {
      name: "Alex Hidalgo",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Alex Hidalgo is the Principal Reliability Advocate at Nobl9 and author of &quot;Implementing Service Level Objectives.&quot; During his career he has developed a deep love for sustainable operations, proper observability, and using SLO data to drive discussions and make decisions. Alex's previous jobs have included IT support, network security, restaurant work, t-shirt design, and hosting game shows at bars. When not sharing his passion for technology with others, you can find him scuba diving or watching Premier League football. He lives in Brooklyn with his partner Jen and a rescue dog named Taco. Alex has a BA in philosophy from Virginia Commonwealth University.",
      title: "Logs Are Good, Actually",
      abstract:
        "<p>The monitoring and observability space has moved at an extremely rapid pace over the last few years. Part of this is due to legitimate technological improvements in terms of standards, tooling, and advanced vendor solutions. But a large part of why it feels like the space is moving at such a frenetic pace if due to marketing departments and talking heads just like me. While it might feel like there is intense pressure to adopt all of the newest and most advanced concepts that fall into the category of &quot;monitoring&quot; or &quot;observability&quot;. I'd like to make an argument for the continued importance of our oldest, and perhaps most important, source of telemetry: the humble log line.</p>",
      video: "",
      slides: "",
      gravhash: "5eaeee295206dd5e5005a5c90603b1d4",
    },
    {
      name: "Colin Douch",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Colin currently Tech Leads the Observability Platform Team at Cloudflare, orchestrating and inventing solutions to better serve Cloudflare's increasingly large global footprint of services around the world. Starting in Mining, he has been working, advising, and researching in the Monitoring and Observability space for close to 10 years and has gained a wide perspective into the difficulties that modern companies, big and small, deal with in properly introspecting their systems, both physical and computerised. Originally from New Zealand, he now lives in Melbourne, Australia where he frequently runs talks on Observability developments, introducing new graduates to the world of Observability, and usually teaching some of the old timers something new too.",
      title: "Experiments in Backing Prometheus with Clickhouse",
      abstract:
        "<p>Columnar datastores like Clickhouse are becoming increasingly popular when it comes to bulk storage of Observability data. This is due to their efficient enabling of high cardinality and high dimensionality datasets that appear natively in Observability workloads. At the same time, one of the chief complaints about Prometheus is its seeming inability to handle these workloads, with common advice being to reduce labelsets as much as possible to reduce the load on Prometheus. With the invention of Prometheus Remote Write and Read however, we are empowered to experiment with alternative backing stores for Prometheus. In this talk, I will introduce a methodology for offloading Prometheus storage and retrieval to Clickhouse. Using that method, I will cover the ups and downs of using Clickhouse as an external Prometheus storage, including storage usage, query efficiency, and operational overhead, and opine on how parts of Clickhouses design might help inform Prometheus improvements in the future</p>",
      video: "",
      slides: "",
      gravhash:
        "79e9f7e7466109714db0f266000c221ee5c1768903e5737058f4a88939e302c7",
    },
    {
      name: "Sudeep Kumar",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Sudeep, a Principal Engineer at Salesforce, brings over 18 years of expertise in creating scalable and robust distributed systems that handle petabytes of unstructured data daily. He has led the architecture and design of various cloud-native SaaS solutions. His diverse industry exposure encompasses E-commerce, Embedded systems, and Telecom sector. He has taken the stage at several international conferences in different countries. He is the primary author of multiple technical publications featured in IEEE and other well-known forums. He also holds various patents in the realms of payments, e-commerce, and distributed systems. Sudeep's technical forte lies in addressing Big data challenges, Monitoring/Telemetry, developing cloud-native platforms and frameworks, client-side programming, and creating scalable server-side backends. When Sudeep isn't glued to his computer,  you can find him playing referee to his two lively kids.",
      title: "Tracing Service Dependencies at Salesforce",
      abstract:
        "<p>This talk will focus on our strategic choice to utilize a streaming pipeline for inferring service dependencies using Trace telemetry data. We'll also delve into a key use case that showcases how service dependencies are visualized and managed through the streaming pipeline on our distributed tracing platform. These service dependency views are crucial for monitoring the deployment status of services and the health of related services. Moreover, by providing a clear overview of service interactions, we also facilitate risk assessment for new feature rollouts, enhancing both product development and operational stability. Additionally, discuss the role of integrating service mesh onto Kubernetes led to comprehensive coverage and completeness of our service dependency data.</p><p>Also In our talk, we'll will explore how a Flink based streaming platform and Druid backend is utilized to gather all trace telemetry data, enabling us to process 100% of trace data (from 300 millions spans collected per minute) and deduce complete trace contexts. By establishing unique trace contexts, we create a trace state that represents every request occurring within the system. This state (Dependency edges) contains vital information required to map out the path of transactions as they move through different services and components within Salesforce.</p><p>Our proposed talk will delve into the transformative process of converting individual trace states into service dependency edge records through Flink and Druid, revealing the complex web of interactions between services. Attendees will be equipped with methods to uncover key interactions, such as identifying the services or operations that most frequently initiate contact with other services. Furthermore, we will explore strategies for utilizing service dependency topology to achieve a thorough grasp of the relationships and dependencies among services and components in a distributed system.</p><p>Adding to the benefits, the audience will learn how having service mesh coverage on any Kubernetes infrastructure can be leveraged effectively for accurately deducing service dependencies. This aspect underscores the importance of infrastructure design in enhancing traceability and reliability within distributed systems.</p><p>Armed with this understanding, participants will be better positioned to enhance system performance and reliability. The session aims to provide attendees with actionable insights and methodologies for effectively managing and navigating the intricate service dependencies that characterize modern distributed systems.</p>",
      video: "",
      slides: "",
      gravhash:
        "06eaf95df6c09e48018145e45fcceadd79a1125384ba11d66734a542a16a34d1",
    },
    {
      name: "Matt Macdonald-Wallace",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Matt lives in Wales, UK with his family and dog.  Unashamedly geeky, he can be found tinkering with his home automation setup, using Grafana to monitor the temperature of his BBQ, and running the local hackspace. Currently working as a Senior Solutions Architect for Grafana, Matt fills his days helping customers understand what it means to observe their applications, infrastructure, and business metrics and convert the raw data into useful information.",
      title: "Welcome to the OTEL California",
      abstract:
        "<p>What kinds of surprises await you when implementing Open Telemetry, and will OTEL help you hold a mirror to your code?</p><p>In this 30 minute talk, Matt Wallace will take you through his journey so far, including the pitfalls and prizes he's found along the way.</p><p>Focusing on Python, and without any apologies for the title of the talk, Matt will answer such questions as:<ul><li>Can I use OTEL to avoid vendor lock-in? (Yes!)</li></ul><ul><li>Should I be using OTEL? (Also yes!)</li></ul><ul><li>Is auto-instrumentation enough? (Maybe?)</li></ul><ul><li>Should I get disheartened if my application service maps don't show the right connections straight away? (No!)</li></ul></p><p>If you're new to OTEL or trying to work out how you escape vendor lock-in with application observability for the future, this session will guide you through everything you need to know to make the most from this free, open, and rapidly developing framework.</p>",
      video: "",
      slides: "",
      gravhash:
        "8d012db1484fc625aa81a556e072ab99c695eafa536ee26fb6eb9b20e3cbe728",
    },
    {
      name: "Johannes Tax",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "I’m a Principal Software Engineer at Grafana Labs, I help Grafana users be successful with OpenTelemetry instrumentation. I'm an approver for OpenTelemetry semantic conventions, and I lead a group dedicated to improving and stabilizing OpenTelemetry messaging semantic conventions.",
      title:
        "Disintegrated telemetry: The pains of monitoring asynchronous workflows",
      abstract:
        "<p>Many tools and best practices around instrumentation and observability are tailored to synchronous request/response workflows, HTTP and RESTful APIs being the most prominent examples. However, if you have to instrument and monitor a system that relies on asynchronous communication based on events or messages, you'll soon find out that established concepts and practices don't work so well. Observing loosely coupled processing steps often leads to disintegrated telemetry, which makes it hard to derive actionable insights.</p><p>In this talk, I focus on the challenge of correlating the disintegrated telemetry pieces (metrics and traces) that are emitted during the lifetime of a message or an event. I describe the problem and present possible solution approaches. I show how each solution approach is broken in its own way, and provide insights that help you to choose the least broken solution for your scenario.</p><p>Finally, to show some light at the end of the tunnel, I give an overview of standardization efforts in this space, including W3C context propagation drafts for messaging protocols, and the messaging semantic conventions created by the OpenTelemetry messaging workgroup, which I'm leading.</p>",
      video: "",
      slides: "",
      gravhash:
        "a3ac746ed885fabecc1b28e2ae469b0883d27316fea04e15e35e4d6b6154f485",
    },
    {
      name: "David Caudill",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "David is an SRE and recovering engineering manager. He has wide ranging experience in distributed datastores, healthcare, adtech, biotech, education, ophthalmology, logistics, and most recently, fintech. In his spare time he makes strange sounds with synthesizers and is an avid collector of folk and ethnic art.",
      title: "The Ticking Timebomb of Observability Expectations",
      abstract:
        "<p>It’s very easy to convince Engineers and Managers to “monitor everything” — who doesn’t want as much information as they can possibly have about what’s happening in their system? At surface level, this sounds like a great plan. This has become the dominant approach by engineering teams: simply install an agent, sidecar, or SDK, and everything 🌈 will be monitored for you. Want to know how your Kubernetes cluster is doing? Here’s 10k “turnkey” metrics! The numbers become gigantic as architectures continue to fragment from monoliths to rocks(SOA) to pebbles (microservices) to…a gaseous cloud of lambdas? Doesn’t matter, add this line and ship dozens of metrics from every single lambda execution. Ship it all, monitor everything, and sort it out later. After all, we can’t possibly know what the cause of an incident in the future might be! Every second of outage costs us money! For every single interaction we capture scientific levels of data, constantly vigilant, expecting at any moment we might need to comb through it to understand a complex outage.</p><p>The trouble is, this is extraordinarily expensive computationally, cognitively, and financially. The financial and computational cost of this has been subsidized by VC investment in the past, which were in turn subsidized by the historically low interest rates of the 2010s. As you’ve probably noticed, that party is over. The cognitive costs are still subsidized by simply putting on the confident “Serious Senior Engineer” face and pretending we know what all this stuff means.</p><p>In this talk, we'll cover a little bit of how we got here, the cognitive biases that keep us here, and some specific guidance on better ways to approach these problems in a cost effective way.</p>",
      video: "",
      slides: "",
      gravhash:
        "29e9854d8c9fbd7299dd43549ff78caa9d82db2af2aca86bb225c9942845ee80",
    },
    {
      name: "Thai Wood",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Thai helps teams build better systems and improve their ability to effectively respond to incidents. A former EMT, he applies his experience managing emergency situations to the software industry. He writes about resilience engineering at ResilienceRoundup.com",
      title:
        "The complexity of success and failure: the story of the Gimli Glider",
      abstract:
        "<p>A look at monitoring, attention, incidents, and complexity through the lens of the story of the Gimli Glider, a plane that ran out of fuel mid-flight, but was able to be landed successfully on the ground anyways.</p><p>I'll cover things like:</p><p><ul><li>How dashboards and gauges can mislead, especially depending on the context around their usage and viewing</li><li>How expertise contributes to interpretation of monitoring and responding to incidents.</li><li>The negotiable, changing definitions of failure in an incident, that also mean some traditional forms of monitoring are insufficient.</li><li>How we, as an industry, can help make sure we have the right monitoring and resources in place to make a safe landing even when things go wrong.</li></ul></p>",
      video: "",
      slides: "",
      gravhash:
        "54b637e8d400d13072096279b181e869873a5519f7b6fc8df53eae4241442739",
    },
    {
      name: "Pete Fritchman",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "SRE/Infrastructure engineer with a passion for all things Observability.",
      title:
        "The shoemaker’s children have no shoes - why SRE teams must help themselves",
      abstract:
        "<p>There’s an old proverb that says ‘the shoemaker’s children have no shoes.’ In other words, people with specific skills or who offer in-demand services are often so busy providing their expertise and service to others that they aren’t able or don’t have the time to provide it to themselves.</p><p>The same could be said of SRE teams and internal services, and has never been more true for developer tooling and workflows. SREs are laser-focused on ensuring a great experience for customer facing applications but their own internal services, and their internal users, can sometimes go neglected.</p><p>It’s time for the shoemaker to give their children shoes! In this 30-minute talk, Pete Fritchman, staff infrastructure engineer at Observe, will offer guiding principles and practical examples to get SRE team members thinking about how they handle internal services and customers. Fritchman will also explore how organizations are putting themselves at risk as well as outline best practices that must be taken to adequately support internal services.</p>",
      video: "",
      slides: "",
      gravhash:
        "749ba41e22a3f78f8fd057e1fe211745c5d4ab304daf88520b5b6115336be7cf",
    },
    {
      name: "Tushar Gupta",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Tushar is a Network Engineer at Google with a passion for network orchestration and automation. He is enthusiastic about cloud modernization and plays a key role in managing essential technologies and spearheading automation in networking. He thrives on challenges and loves working on enterprise cloud solutions and software-defined networking technologies",
      title:
        "From Polling to Streaming: Advancing Network Monitoring with Real-Time Telemetry",
      abstract:
        "<p>In this talk, attendees will dive into the world of streaming telemetry, learning its basics and how it's better than old-school monitoring for watching over networks in real time. We'll walk through essentials of integrating streaming telemetry into network deployments, from setting up data sources and choosing the right transport protocols to interpreting the rich data streams to make informed decisions that can optimize network performance and reliability. This segment will also cover the best practices, based on insights from real-world implementations, needed to design and deploy robust telemetry solutions that enhance observability and drive operational excellence.</p><p>The latter part of the talk will will touch on some of the considerations and common hurdles that come with implementing streaming telemetry, such as managing large amounts of data generated, its storage and prioritization. The talk will then delve into practical tips on how to handle the data effectively, aiming to equip attendees with the know-how to smoothly integrate streaming telemetry into their systems. The end goal of the session is for attendees to be able to assess whether streaming telemetry aligns with their needs and, if so, be able to implement it to leverage its advantages while sidestepping potential pitfalls.</p>",
      video: "",
      slides: "",
      gravhash:
        "9277219e990829a97ec2d53ac2b2fec9cb74bdb6c5d46d2d19904adc3e5f7133",
    },
    {
      name: "David Josephsen",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Dave Josephsen is an engineer on Fastly's Network Control and Optimization squad, focused on feeding telemetry to the autonomous routing engines powering the world's fastest software-defined network. He likes campfires, road trips, big dogs, and old Toyota Landcruisers.",
      title:
        "Pugs, Poe's and pipelines; An engineering perspective on big-data streams for operational telemetry",
      abstract:
        "<p>At scale, all Observability projects are data-engineering problems, which require big-data tools and techniques to solve. But many of these tools -- particularly general-purpose streaming frameworks -- often make less than ideal trade-offs which negatively impact latency, or make troubleshooting difficult. Meanwhile, a lot of purpose-built monitoring tool-chain either doesn't scale as well as it claims, or requires nefarious hacks to reach your target ingestion rate. In either case, these systems invariably wind up costing more than you intended.</p><p>Whether you're designing a high-volume telemetry pipeline from scratch, or shoring up an existing system that's having trouble scaling, I want to share with you a powerful, reductive thought-pattern that has helped me build and maintain 5 different massive-scale telemetry pipelines in as many years. In this talk, I'll introduce you to my friends, Poe (point of enrichment) and Pug (Point uf aGGregation), and together we'll learn about how they can help you define your tooling requirements, reduce your end-to-end latency, and perhaps most importantly, control spend.</p>",
      video: "",
      slides: "",
      gravhash:
        "823c2ba1ed2c128d91b6c70079255ae75b60738f8f97005e8a6d9ed1b0018a7d",
    },
    {
      name: "Akhil Malik",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Akhil is currently a Sr Staff Engineer in Flipkart based out of Bangalore in India. He is usually found talking about Observability and SRE but also tends to obsess over Software Engineering practices, developer tooling and engineering excellence. He specialises in frankenstein projects and like to break and then fix things. In his spare time, he usually reads about economics and researches coffees - brewing methods, varieties and so on.",
      title: "Open Standards for Engineering Agility",
      abstract:
        "<p>Emergence of Open Standards like Prometheus and OpenTelemetry was supposed to herald vendor agnostic observability in organizations. And while that came true, one of the less talked about effects these standards had was increased engineering agility and cost efficiencies.</p><p>We (Flipkart) want to talk about how open standards not only allowed us to build a massive scale, multi-tenanted and cost effective metrics and a general purpose event platform (for logs, traces and RUM) at extremely fast pace with a very lean team, but these standards allowed us to solve the problem of working with partner engineering teams. For example, Flipkart was able to build application instrumentation and the observability platform almost one year apart, trusting that open-standards will take care of meeting in the middle.</p><p>This will be a case study on replacing an aging monitoring platform by building an observability platform that relies on open-standards, is vendor agnostic, uses only open source, decouples multiple engineering teams to improve agility and alignment, costs a fraction of what observability companies charge, and is built for extreme multi-tenancy from Day 1.</p>",
      video: "",
      slides: "",
      gravhash:
        "ad6a2ff426c9b7ac18cc202de5ef4a5dc2c5e2fe899d65b2d1f73001412923bf",
    },
    {
      name: "Vijay Samuel",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Vijay Samuel works with eBay's observability platform as its architect. During his time at eBay Vijay has transformed eBay's observability platform into a cloud native offering that is primarily built on top of open source technologies. He loves to code in Go and play video games.",
      title: "Distributed Tracing - All The Warning Signs Were Out There!",
      abstract:
        "<p>We've all heard it time and time again - &quot;distributed tracing is hard&quot;. The sad reality is that there is a lot of truth to this statement. All too often we keep hearing buzz words and statements around how magical distributed tracing is and how it can easily cut down time to triage. However, when we talk about tracing at scale with ~5000 micro services and 100s of databases, the nuances of tracing start bubbling up pretty fast. Some of which include:</p><p><ul><li>infinitely large trace waterfalls that become hard to grasp</li><li>A handful of mis-instrumented applications that lead to lost confidence in the system</li></ul></p><p>Many early adopters told us that it would be hard and we tried different techniques to mitigate some of those issues early but we ultimately hit the wall of pain.</p><p>This talk describes how these real problems affect the Observability team at eBay and how we are approaching these problems to hopefully make tracing work in the future.</p>",
      video: "",
      slides: "",
      gravhash:
        "18b2dc93af65f8dc6bca05c8d9654fd14992438a2c4b072b6ac7e2971edf46a7",
    },
    {
      name: "Krzysztof Kwapisiewicz",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "I am a Software Engineer at CodiLime. During more than a decade in the IT industry, I've built different solutions circling around Kubernetes, security, cloud and other buzz-words. In the past 3 years I was responsible for creating a pipeline to ingest a lot of customers' data (logs and metrics mostly). To achieve that I've (ab)used a lot of OpenTelemetry collectors.",
      title: "Unleashing Audio Processing with OpenTelemetry",
      abstract:
        "<p>Our session aims to showcase something that deviates from the conventional uses of OpenTelemetry, presenting an intriguing perspective on its application in the world of sound processing. The presentation will delve into the following key points:</p><p><ul><li>We will demonstrate how the OpenTelemetry collector serves as a powerful tool for the processing of sound.</li><li>We have developed a custom receiver and exporter for the processing *.WAV files, highlighting the flexibility of OpenTelemetry in adapting to unique use cases.</li><li>A discussion on the metrics we have implemented to measure processing efficiency. We will showcase how these metrics provide valuable insights, such as the effectiveness of noise removal in a track.</li><li>A custom processor we developed within OpenTelemetry, allowing for real-time modification of audio files. This capability opens up new avenues for creative audio processing.</li></ul></p><p>By participating in this session, attendees will gain valuable insights into the practical application of OpenTelemetry beyond traditional observability scenarios, particularly in the realm of audio processing.</p>",
      video: "",
      slides: "",
      gravhash:
        "4c99f08e3271427c6fb4c2cb0da58d26805581be023d39718f848908329ebfb9",
    },
    {
      name: "Ferris Ellis",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Ferris Ellis is the founder & CEO of Urban Dynamics where he and team have been delivering custom enterprise software and solutions for the strange and complex problems their clients face since 2020. With over a decade of experience in “building & running the things that can’t go down”, he has previously had the keys to production at Apple, Brocade Networks, Rackspace, and InfraPrime. He’s been a conference speaker since 2017 and received Infrastructure Mason’s “Emerging Talent” award in 2022. When not working, you are likely to find him reading a Le Guin book or thinking about efficiency, intention, and utopias.",
      title:
        "Is Your Kernel Being Honest? Understanding & measuring low level bottlenecks",
      abstract:
        "<p>User-space is a pleasant and happy place. It is full of simple numbers like CPU utilization and memory usage. Numbers that the Linux kernel tells you and swears are true. But beneath user-space lies a deep and dark land that is full of strange caches, queues, clocks, and counters. Are you prepared to observe this hidden land and find secrets the kernel keeps from us all?</p><p>Presented as a guided exploration, this talk will focus on observing and understanding low level CPU performance. Starting from a common user-space program and working our way down we will demystify memory pages, CPU caches, instructions-per-cycle, and more. Along the way we will pull in Linux tooling to see these in a live system — catching the kernel in its lies. Finally, we will discuss how we can instrument production systems to measure low level performance and know when the kernel is telling us the truth and when we are silently leaving CPU cycles unused.</p>",
      video: "",
      slides: "",
      gravhash:
        "7a7c673ae7a9ff12a2b3840ce26a48346dd6bed05a2221dbe1673e73b3f4af03",
    },
    {
      name: "David Gildeh",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "David Gildeh leads the Telemetry Engineering team at Netflix, which is responsible for collecting, storing and querying all of Netflix's observability data (metrics, logs, traces). Previously he was founder/CEO of Outlyer (formerly Dataloop.IO), an observability company which was sold in 2019. He has written about time-series databases and OpenTelemetry in the past.",
      title: "The Observability Data Lake - 1 year on",
      abstract:
        "<p>Last year, we spoke about our vision for the Observability data lake in my talk &quot;How to Scale Observability without Bankrupting the Company&quot;. This year we have the system running in production with all of our trace data. This update will discuss some of our learnings, challenges and results putting all of our trace data into the system for Netflix.</p><p>By June we'll have a lot more to share, so keeping the abstract high level now, we're still considering open-sourcing this so may even use Monitorama to announce that, but no promises as the cost of running an open-source project is quite high so maybe later in the year if June is too soon.</p>",
      video: "",
      slides: "",
      gravhash:
        "cfd07a2c2368c1f775176bf63d86a7eb766b0ed7a14a4e460a048f65320f453c",
    },
    {
      name: "Noa Levi",
      pronouns: "She/Her",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Noa is a senior software engineer on the Foundation team at Strava. She has enjoyed working on projects that span across many areas of Strava’s tech stack from updating routing infrastructure, to working on a migration from Mesos to Kubernetes, to upgrading Strava’s distributed tracing infrastructure. Noa used to be a swimming instructor and spent much of her free time in college working as a teaching assistant. Part of why she enjoys being on a foundation team is that she gets to continue investing in her love for teaching while supporting engineers across the organization. Beyond work, Noa is a serial hobbyist. You can find her swimming, doing yoga, cooking (not baking), knitting, or learning about beginner mushroom foraging. She has also recently discovered that she has a hidden talent for ax throwing. ",
      title: "How we tricked engineers into utilizing distributed tracing",
      abstract:
        "<p>Strava implemented distributed tracing over 4 years ago, yet the tool has been historically underutilized. We’ve improved documentation, presented tech talks, and created training modules to increase the adoption of the tool, yet there was little to no change in tracing usage. Though underutilized, we’ve chosen to continue using and investing in improving our distributed tracing tooling given how impactful the tool is to those that do use it.</p><p>This talk will explain how we inadvertently increased adoption and improved our distributed tracing tooling while migrating from OpenTracing to OpenTelemetry. The migration involved updating configuration, redeploying, and testing over 100 microservices. Strava’s platform team did not have the context to safely deploy and test those services, so that work was assigned out to each team at Strava. Practically what this meant was that every team ended up poking around our trace visualization tooling, many of them for the first time. Engineers were able to learn about tracing within the context of a service they were familiar with. Almost immediately, we noticed more engineers using the tooling and even making suggestions for improvements to enhance their data. While our intention of asking teams to migrate their own services was to prevent production downtime, there was a happy accident of increasing adoption.</p>",
      video: "",
      slides: "",
      gravhash:
        "24c0ef02dbf3c67b926bfb4806f54499a6514635e62d8b36d49547e98072440e",
    },
    {
      name: "Logan Rosen",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Logan is a Senior Staff Software Engineer at LinkedIn who is currently building triage tooling to help engineers solve their alerts more quickly. He started as a Site Reliability Engineer and has now spent over five years building observability software, including real user monitoring in client applications and stream processing data to provide insights. He lives in New York City with his fiancé and tuxedo cat, and when not coding he enjoys photography and travel.",
      title:
        "From Alerts to Insights: Performing Trace-Based Causation at Scale",
      abstract:
        "<p>Our team focuses on improving the observability experience for engineers at our company, specifically in triaging/performing causal analysis for alerts. Previously, we have taken a time-based correlation approach, which can yield success but is not always point to the right problem. Especially in a multi-layered stack of many microservices, we would often end up with red herrings when comparing metrics that seemed to match up in shape but didn't end up being related. It is important that we point engineers in the right direction, and quickly, in order to reduce the amount of time it takes to resolve site impact.</p><p>To remedy this, we focused on leveraging distributed tracing for determining causation – by stream processing the events emitted at each hop of a request, we could deterministically point to the problems that led to the alerts very soon after they arise. Specifically, we could look at chains of errors and/or latency on a per-trace basis and use aggregate counts over time to provide a causal graph to engineers debugging site issues.</p><p>We were able to build this by leveraging Go and Kafka, and it required significant amounts of performance tuning and careful coding to make it efficient as possible, given the immense scale of trace events being processed. The data coming out of this pipeline has shown tremendous promise, and we aim to surface it to our users by the end of this year/early 2024.</p><p>This will be a structured talk that walks audience members through our journey of maturing our triage/RCA approaches and building this pipeline, as well as through the technical challenges we encountered/how we surmounted them. It is targeted at engineers looking to improve their observability tooling within their own organizations.</p>",
      video: "",
      slides: "",
      gravhash:
        "7add8b29096bd6a37e124aa93c7a0f87ab812b352a2b4dad1166beb74c6fd48f",
    },
    {
      name: "Sophia Russell",
      pronouns: "She/Her",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Sophia Russell is a seasoned engineer with a passion for observability, coding excellence,  and balancing a life of computers with living in the Big Apple with a toddler. She has been most recently a Senior Staff Engineer at Betterment, and joined Datadog this spring as a Staff Engineer. After spending many sleepy mornings slinging pastry dough down south, she made her way to the big city and started slinging code. She cares deeply about code quality, naming things, and designing software with empathy. ",
      title:
        "The Future Sucks: Long live the future (Musings on AI and how it won’t solve your observability problem or help you cook dinner)",
      abstract:
        "<p>Hot take from a luddite: AI won’t solve your problem-solving problem. AI won’t solve your observability problem. And just like the internet as an external memory store has made all our memories worse, AI has the potential to destroy our ability to think and to reflect. Before you think I’m catastrophizing, hear me out: Outsourcing our thinking, outsourcing our memory, outsourcing our ability to analyze, diagnose and understand, will ultimately serve as a bigger impediment than anything else. And it’s already making us lazier.</p><p>From the perspective of an SRE and application developer intent on making the developer experience the best by automating and abstracting away as much as possible, I love code, I love automation, I love good healthy abstractions that reduce complexity. But if you’ve ever worked in a kitchen, professional or otherwise, you’ll realize that too many cooks working in a tight space can result in burnt broccoli, overcooked noodles, and wine with bits of cork in it. Observing AI is like enlisting four toddlers to help with dinner. Not only is it impossible to keep up with their swift and erratic actions, but when you ask them to do one simple thing like stir the noodles, they say “no” and dump the whole container of cayenne pepper into the pot.</p><p>Come to my talk to hear hot takes on the cultural shift that’s happened with the onset of AI-driven workflows, and how, no matter what happens with AI, you still actually have to care about what your code does and how it works in production. If AI’s code samples are any indicator, its hallucination of logic and language make a future of catastrophic code running in production almost guaranteed. While that works for poetry and occasionally even a good meal, it’s not very good for reliability.</p>",
      video: "",
      slides: "",
      gravhash: "9e26b25f745138e3e025182365437a34",
    },
    {
      name: "Suman Karumuri",
      pronouns: "He/Him",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "",
      title:
        "Things I wish I knew before we decided to migrate away from [redacted]",
      abstract:
        "<p>In this talk, I will delve into the key considerations and valuable lessons learned from transitioning some use cases from a proprietary metrics system to an in-house metrics platform utilizing open-source components. The allure of open-source systems—characterized by their transparency, adaptability, community support, and cost-efficiency—prompted this significant shift. Although theoretically straightforward, the practical implementation of this migration proved to be immensely complex. We initially underestimated the multifaceted nature of the transition, which entailed several simultaneous changes: migrating from StatsD to OTel, mastering the operation of our own metrics store, transitioning from a vendor-specific UI to Grafana, and adopting a new query language, among other significant changes.</p><p>Beyond the technical hurdles, our team faced cultural and operational challenges. Running a large-scale metrics store was not within our initial expertise, so we had to quickly acquire the necessary operational knowledge. Open source solutions, though powerful, often required extensive tuning to ensure reliability. As our metrics workload grew, we adopted a multi-cluster strategy, which, while scaling our operations, introduced complexities for our developers. To address this, we implemented an additional layer of abstraction, providing multiple clusters as a single cluster to our customers, enhancing usability.</p><p>Moreover, we encountered challenges related to aggregation, deploying newer open source components, resolving circular dependencies in our in-house Kubernetes and service mesh infrastructure, migrating dashboards and alerts, and ensuring the correctness of tens of thousands of dashboards and hundreds of thousands of alerts. Additionally, it was a significant effort to retrain our engineers on a new query language, adapt to a new UI, and integrate with a new alerting infrastructure, all of which added complexity to our migration journey. Attendees of this talk will gain a deep understanding of the intricacies involved in such a migration, enabling them to better navigate their own journeys when faced with similar challenges.</p>",
      video: "",
      slides: "",
      gravhash: "0580d500edfdb2e5e80e4732ac8df1ea",
    },
    {
      name: "Julia Thoreson",
      pronouns: "She/Her",
      github: "",
      gitlab: "",
      twitter: "",
      bio: "Julia Thoreson is a Software Engineer at Bloomberg, where she works on the Bloomberg Second Measure infrastructure for Alternative Data. She also co-leads the San Francisco chapter of the Bloomberg Women in Tech (BWIT) community. When she’s not working, she has a &quot;high stakes hobby&quot; - volunteering as a Lieutenant with the Alameda County Search and Rescue!",
      title: "Incident Management: Lessons from Emergency Services",
      abstract:
        "<p>What do missing people, production outages, and natural disasters all have in common? They are all different types of incidents! Although these may seem like completely unique situations, similar principles and processes can be applied in all kinds of challenging circumstances. Drawing on my experience as both a software engineer at Bloomberg and a Lieutenant on the Alameda County Search and Rescue Team, we will discuss pre-planning, alerting, responding and debriefing for all sorts of incidents.</p>",
      video: "",
      slides: "",
      gravhash:
        "8049827900339a18e12799ac0656bf6ea9b5e7806accd9b2a4cefb1daf9e2fd1",
    },
  ],
  baltimore: [
    /* {
      "name": "Riley Berton",
      "pronouns": "",
      "github": "rileyberton",
      "gitlab": "",
      "twitter": "rileyberton",
      "bio": "Riley is a Principal SRE at Major League Baseball with over 20 years experience in building complex systems. He has worked on time series databases @circonus, real time streaming data @AppNexus, audio and video recognition systems @viggle, and audio/video call logging systems @eventide before finding a home at baseball. In his spare time you can find him on the baseball field playing or at the baseball field watching.",
      "title": "What’s Your Service’s Batting Average?",
      "abstract": "",
      "video": "",
      "slides": "",
      "gravhash": "64ea38019d0ab54249b9c1d7fa429db1",
    }, */
  ],
};
