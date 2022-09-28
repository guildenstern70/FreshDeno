/*
 * SmartFresh - Deno Web Template
 * Copyright (c) Alessio Saltarin 2022
 * MIT License - See LICENSE file
 *
 */

import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Footer } from './Footer.tsx';


interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}

export function Layout(props: LayoutProps) {
    return <>
        <Head>
            <title>SmartFresh</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
        </Head>
        <div class="container">{props.children}</div>;
        <Footer />
    </>
}



