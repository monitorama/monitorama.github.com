var rawSpeakers = {
  "pdx": [
    {
      "name": "Sam Handler",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Sam Handler is a Staff Engineer at Shopify and a contributor to several OpenTelemetry repositories. Over the past 12 years, he’s worked on (almost!) every layer of the stack from CSS to iptables. He’s worked towards greater government transparency at the Sunlight Foundation, helped advance infrastructure as code at Hashicorp, and consulted with a wide variety of companies during that time.",
      "title": "OpenResty, My Bestie: Tracing NGINX With Lua",
      "abstract": "<p>Shopify served 75.98 million requests per minute during Black Friday/Cyber Monday 2022, and our OpenResty deployments handled each of these requests before they hit an application server (OpenResty is a technology that lets you embed arbitrary Lua scripts into NGINX configuration files). Until recently, our routing stack was completely untraced, which left a huge blind spot in our view of our infrastructure.</p><p>In 2022, we finally implemented tracing in our OpenResty deployments, and it wasn’t easy. In this talk, I’ll describe how we got a working tracing implementation. Along the way, I’ll explain the dangers of custom trace propagation formats, the joys of working in a well-specified open source project, the wonders (and challenges) of the OpenResty runtime, and the mental challenges that accompany the modification of NGINX, that famously performant HTTP server and reverse proxy.</p>",
      "video": "",
      "slides": "",
      "hash": "c21f4a4939e85f70998409b445e9db2b",
    },
    {
      "name": "Emily Nakashima",
      "pronouns": "She/Her",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Emily is VP of Engineering at observability startup Honeycomb. A developer tools nerd, she previously worked at Bugsnag and GitHub, and is passionate about building best-in-class, consumer-quality tools for engineers. She has a background in product engineering, performance optimization, client-side monitoring, and design. In her spare time, she advocates for affordable housing and thinks a lot about disaster preparedness.",
      "title": "Building a real-time cloud cost management program with observability",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "187b1d0ce8cbf89fe3391f6be6fa9799",
    },
    {
      "name": "Adriana Villela",
      "pronouns": "She/Her",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Adriana Villela is a Sr. Developer Advocate at Lightstep, in Toronto, Canada, with over 20 years of experience in technology. She focuses on helping companies achieve reliability greatness by leveraging Observability, SRE, and DevOps practices. Before Lightstep, she was a Sr. Manager at Tucows, running both a Platform Engineering team, and an Observability Practices team. Adriana has also worked at various large-scale enterprises, in both individual contributor and leadership roles, including Bank of Montreal, Ceridian, and Accenture. Adriana has a popular technical blog on Medium, is an OpenTelemetry contributor, HashiCorp Ambassador, and co-host of the On-Call Me Maybe Podcast.",
      "title": "Observability Anti-Patterns",
      "abstract": "<p>Many organizations claim to be all in on Observability, when in fact, they are not really following Observability practices. Over the last couple of years, I've observed a number of Observability anti-patterns, and in this talk, I will discuss the following anti-patterns:</p><p><ul><li>Traces not treated as a first-class citizen</li><li>The Wall ‘o Dashboards</li><li>Getting someone else to instrument your code</li><li>Belief that Observability Tooling == Observability</li><li>Observability theatre</li></ul></p><p>I will also discuss how to avoid these anti-patterns, in order for teams to unlock Observability’s superpowers.</p>",
      "video": "",
      "slides": "",
      "hash": "b039d11030d001023259eea68551eb8d",
    },
    {
      "name": "Leon Adato",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "In my sordid career, I've worked as an actor, bug exterminator, wild-animal remover, electrician, carpenter, stage-combat instructor, American Sign Language interpreter, and Sunday school teacher. Oh, and with computers. Since 1989 (when you got a free copy of Windows 286 on twelve 5¼” floppies when you bought a copy of Excel 1.0). In IT, I've had jobs as a classroom instructor, courseware designer, desktop support tech, server support engineer, and software distribution expert. Then about 20 years ago I got involved with monitoring, working with a wide range of tools: Tivoli, Nagios, Patrol, ZenOss, OpenView, SiteScope, SolarWinds, and New Relic. In the course of that work, I've designed solutions for companies that ranged in size from modest (~10 systems); to middle of the road (1,000 - 5,000 systems); to ludicrously large (250,000 systems in 5,000 locations).",
      "title": "Alerts Don't Suck. YOUR Alerts Suck!",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "8c2f10637f21718b0216aa597bdd19ef",
    },
    {
      "name": "Mandy Riso",
      "pronouns": "She/Her",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Mandy is a Reliability Engineering Manager at Stack Overflow.  She is neurodivergent and loves to learn more on how that impacts everyday situations.  She lives in the PNW with her family and loves the great outdoors.",
      "title": "Dyslexia - How I Fumbled My Way Through Tech (and What You Can Do To Help)",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "63d0e823f0df3b4d448c12c16f080807",
    },
    {
      "name": "Brooke Sargent",
      "pronouns": "She/Her",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Brooke is currently a software engineer at Honeycomb building APIs and integrations with other tools in the developer ecosystem. Her previous experience includes headless e-commerce, IoT, and engineering management. In her spare time, she can be found in the kitchen on a quest to master baking the perfect pie.",
      "title": "Foster a Culture of Learning Through Observability",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "57fe8712ac7c8097bbbe5ea719a76dc4",
    },
    {
      "name": "Dan Ravenstone",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Dan Ravenstone, the alter ego of Frank the Virtual Mechanic, aspired to be next great visual artist and skateboarder, but thanks to ADHD, quickly developed a passion for computing. Through that passion discovered the wonderful world of monitoring and more recently observability. For the last 20 years he has made it a priority in his career to enhance, improve, and evangelize monitoring and observability tools, processes, and best practices.",
      "title": "Thinking Critically About Alerting",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "093eec10332c0c0cc62cdae40718c6ff",
    },
    {
      "name": "Mike Cox",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Hallo! I'm an engineer based out of Seattle, WA with a keen interest in getting paged less. I've been shipping software at tech startups for over a decade and am still surprised (and intrigued) by the many novel ways our industry discovers to bring down Prod.  ",
      "title": "Stress, OnCall, and You",
      "abstract": "In this talk we'll cover:<ul><li>A light introduction into the history of stress, chronic stress, and stress related disease.</li><li>A deeper dive into stress research and its eery similarities with being on-call.</li><li>Data-driven takeaways from that research for reducing stress during incidents on-call rotations.</li></ul>",
      "video": "",
      "slides": "",
      "hash": "9753bd62f8d0d2110274058b6e500e2c",
    },
    {
      "name": "David Gildeh",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "David Gildeh leads the Telemetry Engineering team at Netflix, which is responsible for collecting, storing and querying all of Netflix's observability data (metrics, logs, traces). Previously he was founder/CEO of Outlyer (formerly Dataloop.IO), an observability company which was sold in 2019. He has written about time-series databases and OpenTelemetry on his blog: https://www.davidgildeh.com",
      "title": "How to Scale Observability Without Bankrupting the Company",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "5cac500d3d1f719bb1a8316dddf9ea3a",
    },
    {
      "name": "Ben Rockwood",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Ben Rockwood is the VP of Engineer & Operations at Mondoo, an Open Source Extended Posture Management Security company. He's been in the industry since the mid-90s and held positions Equinix, Packet, Chef, Joyent, Sun Microsystems and many more. One of the early DevOps thought leaders, he's a lover of systems thinking, LEAN principles, and building elegant solutions. When he's not operating, securing, developing, auditing, training, speaking, or managing he hides in the forest of Bainbridge Island, WA with his super awesome wife Tamarah and their 5 incredible children.",
      "title": "Custom End to End Monitoring Made Easy with Github Actions & Playwright",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "91bf00351d5885052a106f078d6c547a",
    },
    {
      "name": "Dave McAllister",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Currently providing technical  OSS evangelism for NGINX, Dave talks about the advantages of microservices and orchestration to solve distributed systems challenges, especially with open source. Dave has been a champion for open systems and open source from the early days of Linux to today's world of clouds and containers. He often speaks on topics associated with emerging software architectures and practices, on observability and on how open source innovations power today's world.",
      "title": "Know your data: The stats behind your alerts",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "fe11a540d3f4e92bd55503223fe46e17",
    },
    {
      "name": "Jack Neely",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Jack Neely is the Observability Architect for the Prisma Cloud division of Palo Alto Networks. He has spent more than 10 years doing monitoring and observability work at major universities, small start ups, and household name companies. With this experience, Jack leads the Observability team in Prisma Cloud in deploying a solution that includes both Open Source and proprietary solutions as a unified observability platform. He is also responsible for building up other teams to understand what Observability is, why the Four Golden Signals matter, and the math behind what makes a great SRE. Outside of work, Jack enjoys singing tenor with the NC Master Chorale and various other choirs around North Carolina.",
      "title": "Observability Data Engineering: A Story About Math, 4 Golden Signals, and Business Intelligence",
      "abstract": "<p>I find the data in Observability fascinating. In every aspect of an SRE I see problems to solve with data rather than brute force. In fact, all of us in the Observability space are really Data Engineers and Data Scientists in disguise. The only way to fully understand our complex systems is through math and visualizations. Let's explore the 4 Golden Signals and the math behind why they work well and some tricks to bridging Observability and Business Intelligence.</p><p>In this talk I'll cover each of the 4 Golden Signals and speak to the data engineering tools used for each to give folks a broad platform to discover new math and new techniques for solving their own data problems:</p><p><ul><li>Traffic: Counters and Calculus -- The Physics Behind why Counters Work.</li><li>Errors: Counting vs Sampling and the Nyquest-Shannon Theory. Your CPU metrics are wrong and I can prove it.</li><li>Latency: Timers and Distributions -- Why averages are horrible and Anscombe's Quartet. Understanding Gamma Distributions.</li><li>Saturation: Percentiles and Pipelines -- Visualizing percentiles of data, why we cannot combine percentiles, and the magic of histograms.</li></ul></p><p>Finally, all of us in Observability have been asked at some point to participate in managing the data behind Business Intelligence. Data about the product likely comes from the product itself directly through its telemetry. Often the requirements are high cardinality and high in volume making it difficult to store raw data for months on end to produce accurate BI. We'll work around the limits of percentiles and show some tricks for extracting events, storing those as summary data, and producing monthly percentile based reports with T-Digests.</p>",
      "video": "",
      "slides": "",
      "hash": "7679f4599cf47937990d7dc4b0b871af",
    },
    {
      "name": "Adrian Cockcroft",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Adrian is currently a technical advisor, analyst and consultant at OrionX.net - he’s advising Catchpoint, Harness, Ampt and Nubank, and having fun presenting at conferences when he feels like it. He retired from Amazon in 2022, where he was a VP working on open source, sustainability and cloud migrations. Previously at Battery Ventures, Netflix, eBay, Sun Microsystems and Cambridge Consultants Ltd.",
      "title": "A Tale of Two Histograms - it was the best of response times, it was the worst of response times...",
      "abstract": "<p>Response times for real world systems form complex long tail distributions. The structure and behavior of your system will be visible in the responses, yet the mean and percentile measurements hide this structure, This talk will show how the structure can be measured and analyzed so that you can figure out a useful model of your system, understand when it is working well or about to collapse, what is driving the long tail of latencies, and come up with better service level agreements. The talk introduces a statistical concept called Finite Mixed Models without getting into the greek equations, and shows how to explore this data using R. Looking at response times this way is a far, far better thing that I do, than I have ever done before.</p>",
      "video": "",
      "slides": "",
      "hash": "a9220dff7c6e48a125c747dd2eb74ffe",
    },
    {
      "name": "Ivan Merrill",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Ivan Merrill is Head of Solutions Engineering at Fiberplane, based in Amsterdam. Before joining Fiberplane Ivan spent 15 years in large financial enterprises helping teams understand the power of monitoring and observability, whilst leading large-scale deployments of monitoring tools on rather important banking systems.",
      "title": "If you look like a problem, developers will solve you",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "d9b085d3b827acb6b8010324f756bce9",
    },
    {
      "name": "Dylan Ratcliffe",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Dylan is the Founder & CEO of Overmind, building software that discovers changes in the infrastructure you didn't know you had. Before that he spent 6 years at Puppet, helping people eliminate toil and love their jobs again. He loves complex systems & the people that run them, pugs, motorcycles and beer among other things. If you see him in the halls please come and say hi!",
      "title": "Unknown unknowns and how to know them",
      "abstract": "<p>It feels like outages always happen in the worst possible place, and as soon as we understand them, they happen somewhere else. Turns out this is true. So how can we deal with something that seems to be actively working against us? By changing the way we build mental models.</p><p>The STELLA Report (Woods DD, Ohio State University) explains how our mental models of how a system works are constantly challenged by outages, and why it’s always the unknown unknowns that cause the biggest problems. We can’t possibly know about these things in advance (otherwise they’d be known unknowns), so instead we need to be able to develop mental models more quickly; in response to a specific outage, or as preparation for a given change. I'll talk about why this is so important, and why current tools really aren’t suited to job.</p>",
      "video": "",
      "slides": "",
      "hash": "d1ca6d0d949261822cfaaa33e7ad0075",
    },
    {
      "name": "Lerna Ekmekcioglu",
      "pronouns": "She/Her",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Lerna Ekmekcioglu is a Senior Solutions Architect with AWS where she helps Global Financial Services customers build secure, scalable and highly available workloads. She brings over 18 years of platform engineering experience including authentication systems, distributed caching, and multi region deployments using IaC and CI/CD to name a few. In her spare time, she enjoys hiking, sight seeing and backyard astronomy.",
      "title": "Have no fear: Just the math you need to know for monitoring",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "0ef0e61fbb875aaa9f6a1c2e516bb6b9",
    },
    {
      "name": "Cliff Moon",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Cliff Moon has been building monitoring and performance software for a long time. He's previously co-founded both Boundary and Opsee. He built one of the first open source NoSQL databases. Now he leads a data engineering team for performance at LinkedIn. When Cliff isn't herding computers, he's tending to his herd of goats in the woods of western Washington.",
      "title": "Performance Testing Experimentation At Scale",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "c8a7750a333cfb27a1c72aa61b73b763",
    },
    {
      "name": "Timothy Mahoney",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Timothy is a senior systems engineer in the Observability Pipeline team at Ingka Group Digital (IKEA). He is passionate about making complex systems observable and sharing knowledge. The skills he gained monitoring and troubleshooting satellite communications networks in his 16 years as a teleport operations manager led to a career pivot into log analytics and observability. He co-developed a large scale, composable Splunk environment in Google Cloud used at IKEA. Timothy volunteers as an arbiter for the RIPE NCC. Originally from Michigan, he lives in southern Sweden with his wife Linda, son Charlie and dog Piggy Pop.",
      "title": "What we talk about when we talk about Observability Frameworks",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "a6d78951ad991749581dd5df08ed8914",
    },
    {
      "name": "Tony Rippy",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Tony is an industry veteran who has worked at a wide variety of companies across finance, big tech and the startup scene. Over time he has built up expertise in the area of distributed systems, where he is always looking for ways to combat complexity. He is currently a keeper of the bits at Two Sigma, where he works on distributed storage systems.",
      "title": "Have you tried *not* storing all those metrics?",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "5c1fd14ce6e455647e6a6a73f452c5b5",
    },
    {
      "name": "Christian Kreibich",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Christian is the technical lead of the Zeek project. He works at Corelight, where he's a Principal Engineer and leads Open Source development. He previously spent 5 years heading the networking group at Lastline, and prior to that spent 5 years as a research scientist at the International Computer Science Institute in Berkeley. He has served on the advisory board of the Open Information Security Foundation, and holds a PhD from the University of Cambridge's Systems Research Group. He still rides skateboards, which recently earned him a busted rotator cuff.",
      "title": "Meet Zeek, the extensible, scriptable network monitor",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "41d4f1d6c03330175b0d35376945be05",
    },
    {
      "name": "Joseph Ruscio",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Joe is a General Partner at Heavybit, a leading early-stage investor in developer-first cloud infrastructure startups. He was previously a CS PhD dropout turned serial entrepreneur who founded Librato, one of the first cloud-native monitoring startups. He lives in Portland OR and loves talking all things monitoring, observability, and more.",
      "title": "A decade of monitoring. Where we started, how we got here, and where we're headed.",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "a27f3b3caf4dc1976bfe07221b33b332",
    },
    {
      "name": "Hazel Weakly",
      "pronouns": "She/Her",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Hazel spends her days working on building out teams of humans as well as the infrastructure, systems, automation, and tooling to make life better for others. She’s worked at a variety of companies, across a wide range of tech, and knows that the hardest problems to solve are the social ones. Hazel currently serves as a Director on the board of the Haskell Foundation and is fondly known as the Infrastructure Witch of Hachyderm (a popular Mastodon instance). She also created the official Haskell “setup” Github Action and helps maintain it. She enjoys traveling to speak at conferences and sharing what she’s learned with others. One of her favorite things is watching someone light up when they understand something for the first time, and a life goal of hers is to help as many people as possible experience that joy. She also loves swing dancing, both as a leader and a follower.",
      "title": "Monitoring Mastodons - A story about Hachyderm",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "4567258e01ce27f406deaa289dc2bd35",
    },
    {
      "name": "Alex Hidalgo",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Alex Hidalgo is the Principal Reliability Advocate at Nobl9 and author of &quot;Implementing Service Level Objectives&quot;. During his career he has developed a deep love for sustainable operations, proper observability, and using SLO data to drive discussions and make decisions. Alex's previous jobs have included IT support, network security, restaurant work, t-shirt design, and hosting game shows at bars. When not sharing his passion for technology with others, you can find him scuba diving or watching Premier League football. He lives in Brooklyn with his partner Jen and a rescue dog named Taco. Alex has a BA in philosophy from Virginia Commonwealth University.",
      "title": "Logs Are Good, Actually",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "5eaeee295206dd5e5005a5c90603b1d4",
    },
    {
      "name": "Richard Benwell",
      "pronouns": "He/Him",
      "github": "",
      "gitlab": "",
      "twitter": "",
      "bio": "Richard is founder and CEO of SquaredUp, a data visualization and analytics platform for engineering teams. Richard is passionate about making sense of our data, particularly focusing on how we mere humans visualize and use the mountains of data our systems create. Bootstrapped to a hundred employees and hundreds of enterprise customers, SquaredUp is applying to become one of the first B-Corps in our industry, demonstrating its commitment to both people and planet. Richard is also co-founder of A Good Thing, a non-profit connecting businesses with local charities. He is a Brit currently enjoying life in Boston along with his wife and three children.",
      "title": "Connecting the dots with OTel semantic conventions",
      "abstract": "",
      "video": "",
      "slides": "",
      "hash": "fcdd6325862a3ca717d861b7125444fd52deaebebe852789de928780ee385b00",
    }
  ],
  "baltimore": [
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
      "hash": "64ea38019d0ab54249b9c1d7fa429db1",
    }, */
  ]
}
