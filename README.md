# WiT: Waypoint Diffusion Transformers via Trajectory Conflict Navigation

Official repository for the project page and future code release of:

> **WiT: Waypoint Diffusion Transformers via Trajectory Conflict Navigation**

## Project page

GitHub Pages:

- https://hainuo-wang.github.io/WiT/
- arXiv: https://arxiv.org/abs/2603.15132

## Repository status

This repository is currently serving as the official public landing page for WiT.
The training and inference code will be released in this same repository after
the paper is formally published.

## Main Result

| Method | Params | Epochs | IS | FID-50K |
| --- | --- | --- | --- | --- |
| JiT-B/16 | 131M | 200 | - | 4.37 |
| WiT-B/16 | 131M + 21M | 200 | 270.7 | 3.34 |
| JiT-B/16 | 131M | 600 | 275.1 | 3.66 |
| WiT-B/16 | 131M + 21M | 600 | 280.2 | 3.03 |
| JiT-L/16 | 459M | 200 | - | 2.79 |
| LF-DiT-L/16 | 465M | 200 | - | 2.48 |
| WiT-L/16 | 459M + 21M | 200 | 289.1 | 2.38 |
| JiT-L/16 | 459M | 600 | 298.5 | 2.36 |
| WiT-L/16 | 459M + 21M | 265 | 293.7 | 2.36 |
| WiT-L/16 | 459M + 21M | 600 | 303.3 | 2.22 |
| WiT-XL/16 | 676M + 21M | 200 | 288.9 | 2.16 |
| WiT-XL/16 | 676M + 21M | 600 | 301.0 | 1.89 |

## Summary

WiT mitigates trajectory conflict in pixel-space flow matching by:

- projecting pretrained vision features into low-dimensional semantic waypoints,
- predicting those waypoints from the current noisy pixel state,
- injecting them into the pixel diffusion transformer with Just-Pixel AdaLN.

On ImageNet 256x256, WiT reports:

- `2.27x` faster convergence than JiT-L/16 at matched FID 2.36,
- `1.89` FID and `301.0` IS for WiT-XL/16 at 600 epochs,
- `1.62x` more stable peak pairwise trajectory conflict than JiT.

## Acknowledgments

We thank [Qiming Hu](https://github.com/mingcv) for insightful discussions and feedback. This work was
partially supported by computational resources from TPU Research Cloud (TRC).

## Citation

```bibtex
@article{wang2026wit,
  title={WiT: Waypoint Diffusion Transformers via Trajectory Conflict Navigation},
  author={Wang, Hainuo and Li, Mingjia and Guo, Xiaojie},
  journal={arXiv preprint arXiv:2603.15132},
  year={2026}
}
```
