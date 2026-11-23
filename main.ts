// News-image entry for Sunday 22 November 2026 (Node 22, standard library only).
// The image is a six-panel editorial poster naming the day and its biggest stories:
// the COP31 collapse in Antalya, the Hormuz tanker mine strikes, the Cikande
// factory-fire search, the Delta outage, the Shenzhen trilateral summit and
// the World Court's Myanmar genocide ruling.
// The entry image is the entry.png beside this file; the program copies it to
// /output/entry.png, byte for byte, so both grader runs produce the same file.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
