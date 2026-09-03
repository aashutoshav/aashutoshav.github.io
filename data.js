/* ============================================================
   Shared content for index.html and research.html.
   Edit this file to update news / publications everywhere.
   ============================================================ */

const publications = [
    {
        title: "Measuring Active Cognition through Uptake in AI-Mediated Socratic Dialogue",
        venue: "AERA 2027",
        note: "Under review",
        desc: "ICAP-based, retrieval-assisted dialogue coding showing that interactive uptake with an AI tutor tracks exchange-level reasoning better than raw behavioral volume.",
        links: []
    },
    {
        title: "SCLARO: A Dataset for Grounded Scenario-Level Scene Understanding and ScenarioCLIP for Benchmarking",
        venue: "WACV 2027",
        note: "Under review",
        desc: "A relation-aware vision-language model with disentangled encoders and EMA-based intra-modal distillation, trained on a curated 1.8M-pair Action-Genome dataset.",
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2511.20274" }]
    },
    {
        title: "Analyzing and Optimizing NoSQL Workloads for Cosmos DB",
        venue: "PVLDB Vol. 19",
        note: "VLDB 2026",
        desc: "Workload characterization, tail-error prediction and replica placement optimization for Azure Cosmos DB at datacenter scale.",
        links: [{ label: "paper", href: "https://arxiv.org/pdf/2608.09173" }]
    },
    {
        title: "Narrating For You: Audio-visual Narrating Face Generation",
        venue: "WACV 2026",
        note: "",
        desc: "A multi-entangled latent space for synchronized joint audio-video talking-face generation from a text prompt, a voice profile and a single identity image.",
        links: [{ label: "paper", href: "https://arxiv.org/pdf/2602.18618" }]
    },
    {
        title: "Latent Flow Diffusion for Deepfake Video Generation",
        venue: "CVPR Workshop",
        note: "2024",
        desc: "A three-stage pipeline combining latent optical-flow prediction, dual Vision Transformer encoding and flow-conditioned diffusion to disentangle identity from motion.",
        links: [{ label: "paper", href: "https://openaccess.thecvf.com/content/CVPR2024W/DFAD/papers/K_Latent_Flow_Diffusion_for_Deepfake_Video_Generation_CVPRW_2024_paper.pdf" }]
    }
];

const newsData = [
    {
        date: "Aug 2026",
        content: "Submitted <em>Measuring Active Cognition through Uptake in AI-Mediated Socratic Dialogue</em> to <em>AERA 2027</em>."
    },
    {
        date: "Mar 2026",
        content: "Started building <em>NVS-Bench</em>, a sparse-view Novel View Synthesis benchmark for diffusion and feedforward models."
    },
    {
        date: "Jan 2026",
        content: "Joined <em>C21U at Georgia Tech</em> as a Graduate Research Assistant, building LLM teaching agents for <em>Socratic Minds</em>."
    },
    {
        date: "Jan 2026",
        content: "Joined <em>Dr. James Hays' Lab</em> as a Graduate Researcher, working on Novel View Synthesis evaluation."
    },
    {
        date: "Jan 2026",
        content: "Our work <em>Analyzing and Optimizing NoSQL Workloads for Cosmos DB</em> was accepted to <em>PVLDB Vol. 19 / VLDB 2026</em>."
    },
    {
        date: "Nov 2025",
        content: "Released the <em>SCLARO</em> preprint on arXiv; the paper is under review at <em>WACV 2027</em>."
    },
    {
        date: "Sep 2025",
        content: "Our work <em>Narrating For You</em> was accepted to <em>WACV 2026</em>."
    },
    {
        date: "Aug 2025",
        content: "Started my MS in Computer Science at <em>Georgia Tech</em>, and received the Institutional Scholarship for Research."
    },
    {
        date: "Jul 2025",
        content: "Co-invented and filed a U.S. patent for workload distribution based on projected error counts."
    },
    {
        date: "Jul 2025",
        content: "Concluded my research internship at <em>Microsoft Research</em>."
    },
    {
        date: "Jun 2025",
        content: "Graduated from <em>BITS Pilani</em> with First Class distinction."
    },
    {
        date: "Jan 2025",
        content: "Started as a Research Intern at <em>Microsoft Research</em>, working on ML for Azure Cosmos DB workload optimization."
    },
    {
        date: "Dec 2024",
        content: "Concluded my undergraduate thesis on learning representations for vision-language models."
    },
    {
        date: "May 2024",
        content: "Our work <em>Latent Flow Diffusion for Deepfake Video Generation</em> was accepted at <em>CVPRW 2024</em>."
    },
    {
        date: "Jun 2023",
        content: "Started my undergraduate research assistantship at the Machine Intelligence Group, BITS Pilani."
    },
    {
        date: "Aug 2021",
        content: "Started my Bachelors in Computer Science at <em>BITS Pilani</em>."
    }
];
