const SITE_CONFIG = {
  pageUrl: "https://hainuo-wang.github.io/WiT/",
  codeUrl: "https://github.com/hainuo-wang/WiT",
  arxivUrl: "https://arxiv.org/abs/2603.15132",
  arxivId: "2603.15132",
};

const BIBTEX = `@article{wang2026wit,
  title={WiT: Waypoint Diffusion Transformers via Trajectory Conflict Navigation},
  author={Wang, Hainuo and Li, Mingjia and Guo, Xiaojie},
  journal={arXiv preprint arXiv:${SITE_CONFIG.arxivId || "XXXX.XXXXX"}},
  year={2026}
}`;

function hydrateLinks() {
  const codeLink = document.getElementById("code-link");
  const arxivLink = document.getElementById("arxiv-link");
  const bibtexBlock = document.getElementById("bibtex-block");

  codeLink.href = SITE_CONFIG.codeUrl;
  bibtexBlock.textContent = BIBTEX;

  if (SITE_CONFIG.arxivUrl) {
    arxivLink.href = SITE_CONFIG.arxivUrl;
    arxivLink.textContent = "arXiv";
    arxivLink.setAttribute("target", "_blank");
    arxivLink.setAttribute("rel", "noreferrer");
    arxivLink.removeAttribute("aria-disabled");
  }
}

function setupBibtexCopy() {
  const button = document.getElementById("copy-bibtex");
  const block = document.getElementById("bibtex-block");

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(block.textContent);
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = "Copy BibTeX";
      }, 1200);
    } catch (error) {
      button.textContent = "Copy failed";
      setTimeout(() => {
        button.textContent = "Copy BibTeX";
      }, 1200);
      console.error("Failed to copy BibTeX", error);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateLinks();
  setupBibtexCopy();
});
