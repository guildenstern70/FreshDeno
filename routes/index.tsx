/*
 * SmartFresh - Deno Web Template
 * Copyright (c) Alessio Saltarin 2022
 * MIT License - See LICENSE file
 *
 */


import { Layout } from '../components/Layout.tsx';

export default function Home() {
  return (
    <Layout>
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="/logo.svg" alt="" width="200" height="200" />
            <h1 className="display-5 fw-bold">Fresh Deno</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">An easy Deno web template baked with Fresh.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-warning btn-lg px-4 gap-3">More...</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Info</button>
                </div>
            </div>
        </div>
    </Layout>
  );
}
