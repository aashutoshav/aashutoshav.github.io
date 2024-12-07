import deepfake from "../assets/deepfake.png";
import eeg from "../assets/EEG.png";
import clip from "../assets/clip.png";
import dcgan from '../assets/dcgan.png';
import alveoli from '../assets/alveoli.png';
import nlp from '../assets/nlp.png';
import iclr from '../assets/iclr.png';

export const BGCONTENT = `
`;

export const ABOUT_TEXT = `
    Hello, I am A V Aashutosh, a Senior Undergraduate Student at the Birla Institute of Technology & Sciences, Hyderabad, India. I major in Computer Science, and am pursuing a Minor in Data Science, a field I've grown to love over the years of my bachelors study. I have delved into the research side of the field, and have been a part of various projects that have honed my skils in the fields of Computer Vision, Deep Learning and Machine Learning. My Reserach Interests motivated me to take up roles as a Research Assistant over the last few years, and contribute to ambitious projects that have the something unique to offer.  
`;

export const PROJECTS = [
    {
        title: "ActionGenome - ScenarioCLIP",
        image: clip,
        description: "A relation-based dataset and a clip-based model for holistic object-relation understanding.",
        ideas: ["Scene Understanding", "Transfer Learning", "VLMs", "Contrastive Learning"],
        deets: ["Undergraduate Thesis"],
        code: [""]
    },
    {
        title: "Multimodal Video Generation",
        image: iclr,
        description: "A multimodal deepfake generation model, that generates deepfakes using a combination of audio, text and source image inputs.",
        ideas: ["Multimodal Learning", "Generative AI", "Diffusion", "Cross-modal attention"],
        deets: ["Paper under review at ICLR, 2025"],
        code: ["https://github.com/Playing-for-you/Playing-for-you"]
    },
    {
        title: "Deepfake Video Generation",
        image: deepfake,
        description:
            "A Latent Flow Diffusion Model for Deepfake Video Generation, using a Latent-Flow Diffusion Based Generative Model.",
        ideas: ["Diffusion", "Generative Modelling", "Transformers", "Flow Models"],
        deets: ["Accepted Paper at the CVPR Workshops 2024"],
        code: ["https://github.com/aashutoshav/LFDM"]
    },
    {
        title: "Emotion Detection using EEG Signals",
        image: eeg,
        description:
            "A Deep Learning Architecture designed to detect emotions from EEG Signals, using a parallel combination of CNNs. Also involves synthesising EEG Data using GANs.",
        ideas: ["Deep ConvNets", "EEG Signals", "Emotion Detection", "Conditional GANs"],
        deets: ["Funded Project by the Nizam's Institute of Medical Sciences, India"],
        code: ["https://github.com/aashutoshav/EEG_Signal_Emotion_Classification"]
    },
    {
        title: "Alveoli Segmentation",
        image: alveoli,
        description:
            "A UNet Segmentation Model with attention to segment alveoli from Lung-XRays",
        ideas: ["Medical Imaging", "UNet", "Segmentation", "Attention Mechanisms"],
        deets: ["Work done as a part of a Research Assistantship at the Tang Lab, in the University of Oklahoma"],
        code: ["https://github.com/aashutoshav/Alveoli-Segmentation"]
    },
    {
        title: "Code Generator - Elucidator",
        image: nlp,
        description:
            "A project involving finetuning of LLMs for code generation, and an elucidator to explain the generated code. Finetuned on Leetcode Problems for coding interview preparation.",
        ideas: ["NLP", "Llama", "Code Generation", "Explainability"],
        code: ["https://github.com/aashutoshav/Code-Generator-Elucidator"]
    },
    {
        title: "Implementation of Image-Generation Models like DCGANs, CycleGANs",
        image: dcgan,
        description:
            "An implementation of inner and outer arithmetic over images from the CelebA Dataset using DCGANs, and a CycleGAN model for domain transfer of images.",
        ideas: ["GANs", "DCGANs", "CycleGANs", "Image Generation", "Generative AI"],
        code: ["https://github.com/aashutoshav/GenAI-2"]
    },
];

export const CONTACT = {
    phoneNo: " +919100161016",
    email: " avaashutosh04@gmail.com",
    location: " Hyderabad, India"
};

export const FOOTER = `I will be joining Microsoft Research India as a Winter Intern during the upcoming Spring Semester. I love collaborating on anything related to AI, and am open to discussions on the same. Please contact me at: `