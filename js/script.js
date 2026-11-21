const aiReferrerDomains = [
    "chatgpt.com",
    "openai.com",
    "claude.ai",
    "anthropic.com",
    "gemini.google.com",
    "perplexity.ai",
    "copilot.microsoft.com",
    "copilot.com",
    "meta.ai",
    "mistral.ai",
    "grok.com",
    "x.ai",
    "deepseek.com",
    "character.ai"
];
const referrerHostname = document.referrer ? new URL(document.referrer).hostname : "";
const aiUtmSource = new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase();
const isAiSource = source => aiReferrerDomains.some(domain =>
    source === domain || source.endsWith(`.${domain}`)
);
const cameFromAi = (referrerHostname && isAiSource(referrerHostname)) ||
    (aiUtmSource && isAiSource(aiUtmSource));
const isAiLandingPage = window.location.pathname.toLowerCase().endsWith("/looker.html");

if (cameFromAi && !isAiLandingPage) {
    window.location.replace("looker.html");
}

document.addEventListener("DOMContentLoaded", initializeSlider);

const projectBody = document.querySelector(".projectBody");
const projectMain = document.querySelector(".projectMain");
if (projectBody) {
    window.addEventListener("scroll", function() {
        const scrollPosition = window.pageYOffset;
        projectBody.style.backgroundPosition = `center ${scrollPosition * -2}px`;
    });
}
if (projectMain) {
    window.addEventListener("scroll", function () {
        const scrollPosition = window.pageYOffset;
        const elementHeight = projectMain.offsetHeight;

        let bgOffset = elementHeight - scrollPosition * 2;

        if (bgOffset < 0)
            bgOffset = 0;

        projectMain.style.backgroundPosition = `center ${bgOffset}px`;
    });
}

const communityBody = document.querySelector(".communityBody");
if (communityBody) {
    const img = new Image();
    img.src = "../Resources/BackgroundImage/Community.png";

    img.onload = () => {
        const imgRatio = img.height / img.width;

        window.addEventListener("scroll", () => {
            const rect = communityBody.getBoundingClientRect();
            const offsetFromTop = rect.top;
            const elementWidth = communityBody.offsetWidth;
            const containerHeight = communityBody.offsetHeight;
            const renderedHeight = elementWidth * imgRatio;

            const baseBottomOffset = containerHeight - renderedHeight;

            const topOffset = offsetFromTop * -0.4;

            communityBody.style.backgroundPosition = `center ${topOffset}px`;
        });
    };
}

const supportBody = document.querySelector(".supportBody");
if (supportBody) {
    const bottomImg = new Image();
    bottomImg.src = "../Resources/BackgroundImage/Support-Bottom.png";

    bottomImg.onload = () => {
        const imgRatio = bottomImg.height / bottomImg.width;

        window.addEventListener("scroll", () => {
            const rect = supportBody.getBoundingClientRect();
            const offsetFromTop = rect.top;
            const elementWidth = supportBody.offsetWidth;
            const containerHeight = supportBody.offsetHeight;
            const renderedHeight = elementWidth * imgRatio;

            const baseBottomOffset = containerHeight - renderedHeight;

            const topOffset = offsetFromTop * -0.3;

            let bottomOffset = baseBottomOffset + (offsetFromTop * -0.3);
            bottomOffset = Math.min(bottomOffset, baseBottomOffset);

            supportBody.style.backgroundPosition = `center ${topOffset}px, center ${bottomOffset}px`;
        });
    };
}

const creditsBody = document.querySelector(".creditsBody");
const creditsMain = document.querySelector(".creditsMain");
if (creditsBody) {
    const bottomImg = new Image();
    bottomImg.src = "../Resources/BackgroundImage/Credits-Bottom.png";

    bottomImg.onload = () => {
        const imgRatio = bottomImg.height / bottomImg.width;

        window.addEventListener("scroll", () => {
            const rect = creditsBody.getBoundingClientRect();
            const offsetFromTop = rect.top;
            const elementWidth = creditsBody.offsetWidth;
            const containerHeight = creditsBody.offsetHeight;
            const renderedHeight = elementWidth * imgRatio;

            const baseBottomOffset = containerHeight - renderedHeight;

            const topOffset = offsetFromTop * -0.4;

            let bottomOffset = baseBottomOffset + (offsetFromTop * -0.8);
            bottomOffset = Math.min(bottomOffset, baseBottomOffset);

            creditsBody.style.backgroundPosition = `center ${topOffset}px, center ${bottomOffset}px`;
        });
    };
}
if (creditsMain) {
    window.addEventListener("scroll", function () {
        const scrollPosition = window.pageYOffset;
        const elementHeight = creditsMain.offsetHeight;

        let bgOffset = elementHeight - scrollPosition * 0.5;

        if (bgOffset < 0)
            bgOffset = 0;

        creditsMain.style.backgroundPosition = `center ${bgOffset}px`;
    });
}


var projectPopupDisplay = document.querySelector(".projectPopupDisplay");

const closeButton = document.getElementById("closeButton")
const slides = document.querySelectorAll(".slides img");
const closeBtn = document.getElementById("closeButton");
const changelogTrigger = document.getElementById("changelogTrigger");
const changelogOverlay = document.getElementById("changelogOverlay");
const changelogClose = document.getElementById("changelogClose");

//project popup variables
const projectPopupImage = document.getElementById("projectPopupImage");

const projectAuthor = document.querySelector(".projectAuthor");
const projectPromo = document.getElementById("projectPromo");
const projectDesc = document.getElementById("projectDesc");
const whoEnvolved = document.getElementById("whoEnvolved");
const projectSiteLink = document.getElementById("projectSiteLink");
const projectSocialLink = document.getElementById("projectSocialLink");

let slideIndex = 0;
let intervalId = null;

function openChangelog() {
    if (!changelogOverlay) return;
    changelogOverlay.classList.add("open");
    document.body.classList.add("no-scroll");
}

function closeChangelog() {
    if (!changelogOverlay) return;
    changelogOverlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
}

if (changelogTrigger) {
    changelogTrigger.addEventListener("click", openChangelog);
}

if (changelogClose) {
    changelogClose.addEventListener("click", closeChangelog);
}

if (changelogOverlay) {
    changelogOverlay.addEventListener("click", (event) => {
        if (event.target === changelogOverlay) {
            closeChangelog();
        }
    });
}

//mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".navLink");

function initializeSlider(){
    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
        console.log(intervalId);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
    slideIndex++;
    showSlide(slideIndex);
}

async function loadPosts() {
  const res = await fetch(
    "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=teamforever.bsky.social&limit=10&filter=posts_no_replies"
  );
  const data = await res.json();

  const container = document.getElementById("posts");
  if (!container) return;
  container.innerHTML = "";

  data.feed.forEach(item => {
    const post = document.createElement("blockquote");

    post.className = "bluesky-embed";
    post.setAttribute("data-bluesky-uri", item.post.uri);
    post.setAttribute("data-bluesky-cid", item.post.cid);
    post.setAttribute("data-bluesky-embed-color-mode", "white");

    container.appendChild(post);
  });

  loadBlueskyEmbed();
}

function loadBlueskyEmbed() {
  // If script already exists, just re-process embeds
  if (window.bskyEmbedLoaded) {
    if (window.bskyEmbed?.load) {
      window.bskyEmbed.load();
    }
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://embed.bsky.app/static/embed.js";
  script.charset = "utf-8";

  script.onload = () => {
    window.bskyEmbedLoaded = true;
  };

  document.body.appendChild(script);
}
loadPosts();

// project popup code for text and images
function projectPopup(projectid , projectimage) {

    projectPopupImage.src = projectimage;

    if (projectid === "3Air_Eukaryot") {
        projectAuthor.innerText = "By Eukaryot";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/3AIR.png";
        projectDesc.innerText = "Sonic 3 A.I.R. is a fan project aimed at making an accurate, reverse-engineered PC port of Sonic 3 & Knuckles. It includes a number of graphical improvements such as 16:9 widescreen (can be changed back to 4:3 or other aspect ratios; see Ultra-widescreen), consistent frame rate, 60 FPS in special stages, smooth sprite rotation, and mod support.";
        whoEnvolved.innerText = "Sonic 3 A.I.R. is a big inspiration for our projects! One of our team leads, Elspeth The Pict, have also contributed to this project, sogo check it out!";
        projectSiteLink.href = "https://sonic3air.org/";
        projectSiteLink.innerText = "Project Site";
        projectSocialLink.href = "https://bsky.app/profile/eukaryot.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "DuelofFates_ChaosDriveStudio") {
        projectAuthor.innerText = "By Chaos Drive Studio";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/DoF.png";
        projectDesc.innerText = "Sonic and the Duel of Fates is a 2D platformer built using the Retro Engine V4 Decompilation, featuring original sprites, levels, badniks, and an original soundtrack. The game follows Sonic and Shadow as they team up to stop a new threat to the world.";
        whoEnvolved.innerText = "Led by ProdNW, Chaos Drive Studio brings together talented members and contributors from Team Forever, including AlyStyle and Jamesith!";
        projectSiteLink.href = "https://www.youtube.com/@ChaosDriveStudio";
        projectSiteLink.innerText = "Youtube";
        projectSocialLink.href = "https://bsky.app/profile/chaosdrivestudio.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "Essence_TeamReDream") {
        projectAuthor.innerText = "By Team ReDream";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/Essence.jpg";
        projectDesc.innerText = "Sonic Essence is an original 2D Modern Sonic adventure built with the Retro Engine V4 Decompilation. It features completely original sprites, levels, badniks, and an original soundtrack! This project aims to push the potential of Retro Engine (V4) modding to show the fresh and new experiences the decompilation can offer!";
        whoEnvolved.innerText = "Led by AlyStyle, Team ReDream brings together members and contributors from Team Forever, including Casteor573, Elspeth The Pict, KarlEmerald, Jamesith, and ProdNW!";
        projectSiteLink.href = "https://www.youtube.com/@TeamReDream";
        projectSiteLink.innerText = "Youtube";
        projectSocialLink.href = "https://bsky.app/profile/teamredream.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "OriginsUltrafix_TeamUltrafix") {
        projectAuthor.innerText = "By Team Ultrafix";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/Ultrafix.png";
        projectDesc.innerText = "Sonic Origins Ultrafix is a mod that changes, fixes and adds to various parts of the collection (including its games, the collection menus, and all the other side modes) to bring you the ultimate Origins experience!";
        whoEnvolved.innerText = "Both Cosmic Eterntiy and AlyStyle lead both teams, as well as both teams having contributed to each other's projects in the past!";
        projectSiteLink.href = "https://gamebanana.com/mods/452036";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://bsky.app/profile/teamultrafix.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "SonicStrangeDreamWorld"){
        projectAuthor.innerText = "by DarkVampireDude";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/SDW.webp";
        projectDesc.innerText = "Strange Dream World is a reimagining of Sonic 1 with new graphics, colors, and layouts. Sonic is reliving his first adventure but in a different way than he remember. A colorful like but in a strange way, like a dream?? Where colors are different and badniks are more scarier than ever?! That's not how Sonic remember South Island like that! Could that mean Dr. Eggman be up to no good again? Guide Sonic in this new dream world adventure where anything can happen!";
        whoEnvolved.innerText = "A mod by DarkVampireDude, one of Team Forever's artists!";
        projectSiteLink.href = "https://sagexpo.org/?q=strange#games/3202";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://discord.gg/ncvAR4WStr";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "AmyGalore"){
        projectAuthor.innerText = "by Team Galore";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/AmyGalore.png";
        projectDesc.innerText = "Sonic 3 AIR's most customizable version of Amy Rose, brought to the scene by Team Galore! Many sprite styles, many movesets, and so much more packed into a single mod!";
        whoEnvolved.innerText = "Some members of Team Forever have contributed to this mod, including AlyStyle, LittlePlanetCD, KiaraGale, and nabbup, and we are also personally big fans of the team's work!";
        projectSiteLink.href = "https://shc.zone/entries/contest2026/1427";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://discord.gg/4SCaUQx5cS";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "MetalMadness"){
        projectAuthor.innerText = "by Team Galore";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/MetalMadness.png";
        projectDesc.innerText = "Team Galore's Metal Sonic brings him to limelight! Customize his paintjob and abilities to make the most out of his Angel Island simulation.";
        whoEnvolved.innerText = "Some members of Team Forever have contributed to this mod, including AlyStyle, LittlePlanetCD, KiaraGale, and nabbup, and we are also personally big fans of the team's work!";
        projectSiteLink.href = "https://shc.zone/entries/contest2026/1541";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://discord.gg/4SCaUQx5cS";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "HorrorPack"){
        projectAuthor.innerText = "by Casteor573";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/HorrorPack.jpg";
        projectDesc.innerText = "The S1F Horror Pack is a horror mod combines two of Casteor573's previous mods Slenderman in S1F and FNAF in S1F into one pack! Also adds some new content too.";
        whoEnvolved.innerText = "Created by Casteor573, this project also features contributions from other Team Forever members from the likes of AlyStyle, KarlEmerald, and MattM4nia! This project was also the basis for the 2026 April Fools project: Five Nights at Team Forever's.";
        projectSiteLink.href = "https://gamebanana.com/mods/635073";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://youtu.be/bx4IWyDeXF0";
        projectSocialLink.innerText = "Trailer";      
    }
    if (projectid === "MegamixMania"){
        projectAuthor.innerText = "by Team Megamix Mania";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/MegamixMania.jpg";
        projectDesc.innerText = "Sonic Megamix Mania is a fan-made modification for Sonic Mania Plus that aims to carry the torch of the discontinued ROM hack known as “Sonic the Hedgehog Megamix”. Megamix Mode adapts concepts from the ROM hack combined with the team's own vision bringing a unique experience built upon the foundation of the original. Classic Mode is a faithful remake of the content from “V.4.0b” of the ROM hack that offers a familiar experience with a fresh coat of paint. Sonic Megamix Mania offers beginner friendly and challenging experiences for old and new fans alike.";
        whoEnvolved.innerText = "Current members of the team, including SnowballThePuppy and KiaraGale, contributed to this project! Legacy members of the team (Burrotis, RetroForever and Louplayer) contributed as well, plus we are also personally big fans of the team's work!";
        projectSiteLink.href = "https://sonicmegamixmania.github.io/#/";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://bsky.app/profile/megamixmania.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "SMBR"){
        projectAuthor.innerText = "by JHDev2006";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/SMBR.png";
        projectDesc.innerText = "A Remake / Celebration of the original 'Super Mario Bros.' games. Features new levels, custom modes, new characters, alongside a full level editor / custom level system!";
        whoEnvolved.innerText = "One of our programmers, nabbup, have contributed to the project in the past. We are also big fans of the project!";
        projectSiteLink.href = "https://github.com/JHDev2006/Super-Mario-Bros.-Remastered-Public";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://discord.com/invite/A68uRsnja3";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "SkyChase"){
        projectAuthor.innerText = "by Skyward";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/SkyChase.jpg";
        projectDesc.innerText = "Sky Chase Zone Plus is a mod for the 2013 decompilation of Sonic 1 which as the title implies, ports Sky Chase Zone and even Wing Fortress Zone from Sonic 2 and puts it into the Sonic 1 remake from 2013.";
        whoEnvolved.innerText = "Created by Skyward, this project also features contributions from other Team Forever members from the likes of SDG, ProdNW, KarlEmerald, Kotas, and Elspeth The Pict!";
        projectSiteLink.href = "https://gamebanana.com/mods/462564";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "BLANK";
        projectSocialLink.innerText = "";     
    }
    if (projectid === "SlapSmash") {
        projectAuthor.innerText = "Workshop Studio";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/Slappy.png";
        projectDesc.innerText = "A group of 3D artists & programmers making mods for Super Smash Bros. Brawl.";
        whoEnvolved.innerText = "Current team member Annelyn and previous team member Burrotis are both a part of this studio";
        projectSiteLink.href = "https://gamebanana.com/studios/36771";
        projectSiteLink.innerText = "Gamebanana";
        projectSocialLink.href = "https://twitter.com/SlapSmashStudio";
        projectSocialLink.innerText = "Twitter";       
    }
    if (projectid === "ToBeAStar") {
        projectAuthor.innerText = "By Katsushimi";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/ToBeAStar.png";
        projectDesc.innerText = "A rom hack based on the disassembly of the Sonic 1 Prototype, to create an original project utilizing and restoring forgotten functionalities from the original Sonic the Hedgehog to create a new experience";
        whoEnvolved.innerText = "Current members of the team, including Oct, Stick Nick and Annelyn, as well as previous team member katsushimi all contributed to this project!";
        projectSiteLink.href = "https://shc.zone/entries/contest2025/1391";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "BLANK";
        projectSocialLink.innerText = "";       
    }
    if (projectid === "majtastic") {
        projectAuthor.innerText = "By majunior";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/majtastic.webp";
        projectDesc.innerText = "'Majtastic Fixes' gives Sonic 3 A.I.R. a freshened look for the main trio and show off your new looks! Various other things around the game have been tweaked visually too, like player animations, new object graphics from 3AIR, and bits of UI sprites! 'The Works' fine tunes your experience with a bunch of visual, gameplay, and experimental game options to show Sonic 3 A.I.R. who's the one in control. Genesis parity, Origins parity, there's enough for anyone to find something to enjoy!";
        whoEnvolved.innerText = "Created by majunior & nabbup, this project also features contributions from Team Forever Lead AlyStyle!";
        projectSiteLink.href = "https://shc.zone/entries/contest2026/1427";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "BLANK";
        projectSocialLink.innerText = "";
    }
    if (projectid === "BreakoutMania") {
        projectAuthor.innerText = "By Jamesith";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/BreakoutMania.png";
        projectDesc.innerText = "Sonic Mania Breakout is a complete remake of the original Breakout arcade game which makes use of Sonic Mania's assets to give the game a complete refresh.";
        whoEnvolved.innerText = "Created by Jamesith, this project also features contributions from Team Forever Lead AlyStyle!";
        projectSiteLink.href = "https://shc.zone/entries/contest2026/1427";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "BLANK";
        projectSocialLink.innerText = "";
    }
    if (projectid === "HoneyInS1F") {
        projectAuthor.innerText = "by Oct";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/HoneyInS1F.jpg";
        projectDesc.innerText = "A mod that let's you play as Honey in Sonic 1 Forever! Featuring new sprites, a unique moveset, and lots more!";
        whoEnvolved.innerText = "Created by Team Forever Artist Oct, this project also features contributions from other Team Forever members from the likes of Casteor573 and Annelyn.";
        projectSiteLink.href = "https://gamebanana.com/mods/734299";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://youtu.be/bx4IWyDeXF0";
        projectSocialLink.innerText = "Trailer";      
    }
    if (projectid === "DDLCxSonic") {
        projectAuthor.innerText = "By KarlEmerald";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/DDLCxSONIC.jpg";
        projectDesc.innerText = "In this mod, play through Sonic 1 Forever as either one of the four girls from Doki Doki Literature Club. Each having their own separate character slot and brand new abilities";
        whoEnvolved.innerText = "Created by KarlEmerald, this project also features contributions from other Team Forever members from the likes of Casteor573 and AlyStyle.";
        projectSiteLink.href = "https://gamebanana.com/mods/634889";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://www.youtube.com/watch?v=9Jm0bdbI72s";
        projectSocialLink.innerText = "Trailer";
    }

    projectSocialLink.hidden = projectSocialLink.getAttribute("href") === "BLANK";
}

function closeProjectPopup() {
    projectPopupDisplay.classList.remove("active");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}

document.addEventListener("click", function (event) {
    if (!(event.target instanceof Element)) return;

    const button = event.target.closest(".projectInfo, .projectInfo-Alt");
    if (!button) return;

    const projectid = button.getAttribute("projectid");
    const projectimage = button.querySelector("img").src;

    console.log("Project ID: " + projectid);
    console.log("Project Image: " + projectimage);
    projectPopup(projectid, projectimage);

    projectPopupDisplay.classList.toggle("noProjectImageShadow", button.classList.contains("projectInfo-Alt"));
    projectPopupDisplay.classList.add("active");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
});

if (closeButton) closeButton.addEventListener("click", closeProjectPopup);
if (projectPopupDisplay) projectPopupDisplay.addEventListener("click", function(event) {
    if (event.target === projectPopupDisplay) {
        closeProjectPopup();
    }
});

//hamburger menu
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.querySelector(".menu-overlay").classList.toggle("active");
    });

    navLink.forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.querySelector(".menu-overlay").classList.remove("active");
    }))

    document.querySelector(".menu-overlay").addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector(".menu-overlay").classList.remove("active");
    });
}



const video = document.getElementById("bgVideo");

if (video) {
    video.addEventListener("playing", () => {
        video.playbackRate = 0.3;
    });
}

function changeRSDKImage() {
    const v3Img = document.getElementById('v3');
    if (v3Img) {
       if (window.innerWidth <= 1268) {
           v3Img.src = 'Resources/About/v3Logo_Mobile.svg';
       } else {
           v3Img.src = 'Resources/About/v3Logo.png';
       }
    }

    const v4Img = document.getElementById('v4');
    if (v4Img) {
       if (window.innerWidth <= 1268) {
           v4Img.src = 'Resources/About/v4Logo_Mobile.svg';
       } else {
           v4Img.src = 'Resources/About/v4Logo.png';
       }
    }
}

const group = document.getElementById("logoGroup");
if (group) {
    const items = Array.from(group.children);

    if (group.getAttribute("data-random") !== "noRandom") {
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
    }

    group.innerHTML = "";
    items.forEach(item => group.appendChild(item));

    items.forEach(item => {
    const clone = item.cloneNode(true);
    group.appendChild(clone);
    });

    let offset = 0;
    let speed = 0;
    let maxSpeed = 10;
    const acceleration = 0.5;
    let hovering = false;

    let lastTime = performance.now();

    function scrollLoop(time) {
        const delta = (time - lastTime) / (1000 / 60);
        lastTime = time;
        
        const isPopupVisible = projectPopupDisplay && projectPopupDisplay.classList.contains("active");

        const paused = hovering || isPopupVisible;

        if (!paused) {
            speed = Math.min(speed + acceleration * delta, maxSpeed);
        } else {
            speed = Math.max(speed - acceleration * delta, 0);
        }

        offset -= speed * delta;

        if (Math.abs(offset) >= group.scrollWidth / 2) {
            offset = 0;
        }
        group.style.transform = `translate3d(${offset}px, 0, 0)`;

        requestAnimationFrame(scrollLoop);
    }
    requestAnimationFrame(scrollLoop);

    group.parentElement.addEventListener("mouseenter", () => {
        hovering = true;
    });
    group.parentElement.addEventListener("mouseleave", () => {
        hovering = false;
    });
}





const cominSoon = document.getElementById("cominSoon");
if (cominSoon) {
    let offset = 700;
    let speed = 2;
    const maxSpeed = 10;
    let hovering = false;

    let lastTime = performance.now();

    function scrollSingleImage(time) {
        const delta = (time - lastTime) / (1000 / 60);
        lastTime = time;

        speed = Math.min(speed, maxSpeed);

        offset -= speed * delta;

        const resetPoint = cominSoon.scrollWidth;
        if (offset <= -resetPoint) {
            offset = 700;
        }

        cominSoon.style.transform = `translate3d(${offset}px, 0, 0)`;
        requestAnimationFrame(scrollSingleImage);
    }

    requestAnimationFrame(scrollSingleImage);
}

const filterButton1F = document.getElementById('filter-1F');
const filterButton2A = document.getElementById('filter-2A');

let filterImg1F;
let filterImg2A;

if (filterButton1F) {
    filterImg1F = filterButton1F.querySelector('img');

    filterButton1F.addEventListener('click', (e) => {
        if (filterImg1F.src.includes('1F_Unselected.png')) {
            filterImg1F.src = 'Resources/Community/1F_Selected.png';
            filterImg2A.src = 'Resources/Community/2A_Unselected.png';
        }
        loadMods();
    });
}

if (filterButton2A) {
    filterImg2A = filterButton2A.querySelector('img');

    filterButton2A.addEventListener('click', (e) => {
        if (filterImg2A.src.includes('2A_Unselected.png')) {
            filterImg1F.src = 'Resources/Community/1F_Unselected.png';
            filterImg2A.src = 'Resources/Community/2A_Selected.png';
        }
        loadMods();
    });
}



async function loadMods() {
    let projecttag = "";

    if (filterImg1F.src.includes("1F_Selected.png")) {
        projecttag = "10601";
    }
    if (filterImg2A.src.includes("2A_Selected.png")) {
        projecttag = "15019";
    }

    const res = await fetch("https://api.gamebanana.com/Rss/Featured?gameid=" + projecttag);
    const xmlText = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "application/xml");
    const items = xml.querySelectorAll("items > item");
    const container = document.getElementById("featuredMods");
    
    const res2 = await fetch("https://api.gamebanana.com/Rss/New?gameid=" + projecttag);
    const xmlText2 = await res2.text();
    const xml2 = parser.parseFromString(xmlText2, "application/xml");   
    const items2 = xml2.querySelectorAll("items > item");
    const container2 = document.getElementById("newestMods");

    container.innerHTML = "";
    container2.innerHTML = "";

    if (items.length === 0) {
        container2.innerHTML = "<p>The Gamebannana API is rate-limited. Please check back later...</p>";
    } 
    else {
        items.forEach(item => {
            const title = item.querySelector("title")?.textContent;
            const link = item.querySelector("link")?.textContent;
            let image = item.querySelector("image")?.textContent.trim();
                image = image.replace("/ss/Mod/", "/ss/mods/");
                image = image.replace("/ss/Wip/", "/ss/wips/");
                image = image.replace("/ss/Tutorial/", "/ss/tuts/");
                image = image.replace("/ss/Project/", "/ss/projects/");
                image = image.replace("/ss/Concept/", "/ss/concepts/");

            const card = document.createElement("div");
            card.className = "featured-mod";

            card.innerHTML = `
                <a href="${link}" target="_blank">
                    <img src="${image}" alt="${title}">
                </a>
                <h3>${title}</h3>
            `;

            container.appendChild(card);
        });
    }

    if (items2.length === 0) {
        container2.innerHTML = "<p>The Gamebannana API is rate-limited. Please check back later...</p>";
    } 
    else {
        items2.forEach(item => {
            const title = item.querySelector("title")?.textContent;
            const link = item.querySelector("link")?.textContent;
            let image = item.querySelector("image")?.textContent.trim();
                image = image.replace("/ss/Mod/", "/ss/mods/");
                image = image.replace("/ss/Wip/", "/ss/wips/");
                image = image.replace("/ss/Tutorial/", "/ss/tuts/");
                image = image.replace("/ss/Project/", "/ss/projects/");
                image = image.replace("/ss/Concept/", "/ss/concepts/");

            const card = document.createElement("div");
            card.className = "featured-mod";

            card.innerHTML = `
                <a href="${link}" target="_blank">
                    <img src="${image}" alt="${title}">
                </a>
                <h3>${title}</h3>
            `;
            container2.appendChild(card);
        });
    }
}
document.addEventListener("DOMContentLoaded", changeRSDKImage);
window.addEventListener('resize', changeRSDKImage);

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("fadeOverlay");
    const links = document.querySelectorAll(".navLink, .slides a, .projectImages a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = this.href;

            overlay.classList.remove("fade-out");

            setTimeout(() => {
                window.location.href = target;
            }, 400);
        });
    });
});

window.addEventListener("load", () => {
    const overlay = document.getElementById("fadeOverlay");

    setTimeout(() => {
        overlay.classList.add("fade-out");
    }, 50);
});

function versionNumber() {
    const ver = document.getElementById('versionNumber');
    if (ver){
        const year = '2026';
        const month = '11';
        const day = '21';
        const time = '0313p';

        const version = `0.1.${year}${month}${day}.${time}`;
        ver.innerText = version;
    }
}
document.addEventListener("DOMContentLoaded", versionNumber);

document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const button = event.target.closest(".downloadButton");
    if (!(button instanceof HTMLElement)) return;

    button.classList.remove("is-pressing");
    void button.offsetWidth;
    button.classList.add("is-pressing");
}, true);