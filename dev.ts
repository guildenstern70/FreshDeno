#!/usr/bin/env -S deno run -A --watch=static/,routes/
/*
 * SmartFresh - Deno Web Template
 * Copyright (c) Alessio Saltarin 2022
 * MIT License - See LICENSE file
 *
 */

import dev from "$fresh/dev.ts";

await dev(import.meta.url, "./main.ts");
