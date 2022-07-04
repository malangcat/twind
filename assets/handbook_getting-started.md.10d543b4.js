import{r as a,o as n,c as s,a as t,b as e,t as o,d as p}from"./app.c943096c.js";const r='{"title":"Getting Started","description":"How to get started using Twind","frontmatter":{"title":"Getting Started","editLink":true,"navbar":true,"sidebar":true,"head":[["meta",{"name":"description","content":"How to get started using Twind"}],["meta",{"name":"keywords","content":"twind tailwind css-in-js"}]]},"headers":[{"level":2,"title":"ES Module (CDN)","slug":"es-module-cdn"},{"level":2,"title":"Local Module (NPM)","slug":"local-module-npm"},{"level":2,"title":"Supporting legacy browsers","slug":"supporting-legacy-browsers"}],"relativePath":"handbook/getting-started.md","lastUpdated":1656936428287}',l={},i={id:"frontmatter-title"},c=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p('<h2 id="es-module-cdn"><a class="header-anchor" href="#es-module-cdn" aria-hidden="true">#</a> ES Module (CDN)</h2><p>Twind is available as an ES Module on <a href="https://skypack.dev/" target="_blank" rel="noopener noreferrer">skypack</a>. Be sure to check <a href="https://caniuse.com/es6-module" target="_blank" rel="noopener noreferrer">browsers support</a> if your users may not be using modern browsers.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> tw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://cdn.skypack.dev/twind&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>If you would like to get started with Twind right away, you can copy/paste this code into your favorite sandbox (CodeSandbox, CodePen, etc.):</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> tw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://cdn.skypack.dev/twind&#39;</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  &lt;main class=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tw<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">h-screen bg-purple-400 flex items-center justify-center</span><span class="token template-punctuation string">`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;\n    &lt;h1 class=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tw<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">font-bold text(center 5xl white sm:gray-800 md:pink-700)</span><span class="token template-punctuation string">`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;This is Twind!&lt;/h1&gt;\n  &lt;/main&gt;\n</span><span class="token template-punctuation string">`</span></span>\n</code></pre></div><p>Using the exported <code>tw</code> function results in the compilation of the rules like <code>bg-black text-white</code> and <code>text-xl</code> exactly as specified in the <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">Tailwind documentation</a>. For convenience, the default <a href="https://github.com/tailwindlabs/tailwindcss/blob/v1/stubs/defaultConfig.stub.js" target="_blank" rel="noopener noreferrer">Tailwind theme</a> is used along with the preflight <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer">base styles</a> unless you explicitly overwrite them.</p><p>For seamless integration with existing Tailwind HTML, you can use <a href="./the-shim.html">the Shim</a>:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.skypack.dev/twind/shim<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-screen bg-purple-400 flex items-center justify-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font-bold text(center 5xl white sm:gray-800 md:pink-700)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>This is Twind!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',8),d=p('<blockquote><p>📚 For more detailed instruction on usage please <a href="https://twind.dev/docs/handbook/getting-started.html" target="_blank" rel="noopener noreferrer">read the documentation</a> and check out <a href="https://esm.codes/#aW1wb3J0IHsgdHcsIHNldHVwIH0gZnJvbSAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvdHdpbmQnCgpzZXR1cCh7CiAgdGhlbWU6IHsKICAgIC8vIEV4YW1wbGUgb2YgZXh0ZW5kaW5nIHRoZSBkZWZhdWx0IHRoZW1lCiAgICBleHRlbmQ6IHsKICAgICAgY29sb3JzOiB7IGhvdHBpbms6ICcjRkYwMEZGJyB9LAogICAgICByb3RhdGU6IHsgNTogJzVkZWcnIH0KICAgIH0KICB9Cn0pCgpjb25zdCBhcHAgPSAoKSA9PiBgCiAgICA8ZGl2IGNsYXNzPScke3N0eWxlLmNvbnRhaW5lcn0nPgogICAgICA8aDEgY2xhc3M9JyR7CiAgICAgICAgLy8gRXhhbXBsZSBvZiBhbiBpbmxpbmUgc3R5bGUKICAgICAgICB0d2AKICAgICAgICAgIHRleHQod2hpdGUgNHhsKQogICAgICAgICAgZm9udChib2xkIHNhbnMpCiAgICAgICAgICB0cmFuc2l0aW9uLXRyYW5zZm9ybQogICAgICAgICAgaG92ZXI6KAogICAgICAgICAgICByb3RhdGUtNQogICAgICAgICAgICBzY2FsZS0xNTAKICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIKICAgICAgICAgICkKICAgICAgICBgCiAgICAgIH0nPkhlbGxvIFdvcmxkPC9oMT4KICAgIDwvZGl2PgogIGA7CiAgCiAgCmNvbnN0IHN0eWxlID0gewogIC8vIEV4YW1wbGUgb2YgYWJzdHJhY3RlZCBzdHlsZQogIGNvbnRhaW5lcjogdHdgCiAgICBoLWZ1bGwKICAgIGJnLWhvdHBpbmsKICAgIGZsZXgKICAgIGl0ZW1zLWNlbnRlcgogICAganVzdGlmeS1jZW50ZXIKICBgCn0KCmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYXBwKCk=" target="_blank" rel="noopener noreferrer">this extended demo</a></p></blockquote><p>Twind is designed to be used in almost any environment and exposes several different bundles from ESM to UMD. The ESM bundles should be preferred for it&#39;s smaller size and faster performance.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Although Twind is compatible with traditional bundlers, there is no build step required to use Twind.</p></div><h2 id="local-module-npm"><a class="header-anchor" href="#local-module-npm" aria-hidden="true">#</a> Local Module (NPM)</h2><p>Twind is available as an NPM module.</p><div class="language-shell"><pre><code><span class="token function">npm</span> i twind\n</code></pre></div><h2 id="supporting-legacy-browsers"><a class="header-anchor" href="#supporting-legacy-browsers" aria-hidden="true">#</a> Supporting legacy browsers</h2><p>A UMD build is available for legacy browsers.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You may need to provide certain polyfills depending on your target browser.</p></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/twind/twind.umd.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">var</span> tw <span class="token operator">=</span> twind<span class="token punctuation">.</span>tw\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>The library will currently run in <a href="https://browserslist.dev/?q=PjAlLCBub3QgQ2hyb21lIDwzNiwgbm90IEVkZ2UgPDEyLCBub3QgRmlyZWZveCA8MjAsIG5vdCBPcGVyYSA8MjUsIG5vdCBTYWZhcmkgPDgsIG5vdCBpT1MgPDgsIG5vdCBPcGVyYU1vYmlsZSA8PSAxMi4xLCBub3QgaWUgPD0gMTEsIG5vdCBJRV9Nb2IgPD0gMTE%3D" target="_blank" rel="noopener noreferrer">all browsers</a> that support <a href="https://caniuse.com/mdn-javascript_builtins_math_imul" target="_blank" rel="noopener noreferrer">Math.imul</a>, <a href="https://caniuse.com/mdn-javascript_builtins_map" target="_blank" rel="noopener noreferrer">Map</a>, <a href="https://caniuse.com/mdn-javascript_builtins_set" target="_blank" rel="noopener noreferrer">Set</a> and <a href="https://caniuse.com/mdn-javascript_builtins_weakmap" target="_blank" rel="noopener noreferrer">WeakMap</a> (eg Chrome &gt;=36, Edge &gt;=12, Firefox &gt;=20, Opera &gt;=25, Safari &gt;=8, iOS &gt;=8). Additionally all LTS versions of Node.js are supported.</p><p>Some new tailwind features use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS Variables (Custom Properties)</a> which are <a href="https://caniuse.com/css-variables" target="_blank" rel="noopener noreferrer"><strong>not</strong> available in legacy browsers</a> (Chrome &lt;49, IE, Edge &lt;16, Firefox &lt;31, Opera &lt;36, Safari &lt;9.1, iOS &lt;9.3). For IE 11 you can try the <a href="https://github.com/nuxodin/ie11CustomProperties" target="_blank" rel="noopener noreferrer">CSS Variables Polyfill</a>.</p><p>We included fallbacks for the following directives which mimic <a href="https://v1.tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind v1</a> behavior:</p><ul><li><p>Color Opacity</p><ul><li><a href="https://tailwindcss.com/docs/border-opacity" target="_blank" rel="noopener noreferrer">border-opacity-*</a></li><li><a href="https://tailwindcss.com/docs/background-opacity" target="_blank" rel="noopener noreferrer">bg-opacity-*</a></li><li><a href="https://tailwindcss.com/docs/text-opacity" target="_blank" rel="noopener noreferrer">text-opacity-*</a></li><li><a href="https://tailwindcss.com/docs/placeholder-opacity" target="_blank" rel="noopener noreferrer">placeholder-opacity-*</a></li></ul></li><li><p>Reversing Children Order</p><ul><li><a href="https://tailwindcss.com/docs/divide-width#reversing-children-order" target="_blank" rel="noopener noreferrer">divide-*-reverse</a></li><li><a href="https://tailwindcss.com/docs/space#reversing-children-order" target="_blank" rel="noopener noreferrer">space-*-reverse</a></li></ul></li><li><p><code>rotate</code>, <code>scale</code> , <code>skew</code> and <code>translate</code> can only be used alone</p><blockquote><p><code>rotate-45</code> works but when using <code>rotate-45 scale-150</code> only one of both is applied. In that case you must use <code>transform</code>: <code>transform rotate-45 scale-150</code></p></blockquote></li></ul><p>Some directive only work with CSS Variables and are not supported in legacy browsers:</p><ul><li><a href="https://tailwindcss.com/docs/ring-width" target="_blank" rel="noopener noreferrer">Ring</a></li></ul><h4 id="supporting-ie11-and-obsolete-platforms"><a class="header-anchor" href="#supporting-ie11-and-obsolete-platforms" aria-hidden="true">#</a> Supporting IE11 and obsolete platforms</h4><p>This library uses features like destructuring assignment and const/let declarations and doesn&#39;t ship with ES5 transpiled sources. If you aim to support browsers like IE11 and below → make sure you configure your transpiler/bundler to include your <code>node_modules</code>.</p><p>Additionally you need to provide a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul#Polyfill" target="_blank" rel="noopener noreferrer">polyfill</a> for <code>Math.imul</code>. IE 11 already supports <code>Map</code>, <code>Set</code> and <code>WeakMap</code> - no polyfills needed for these.</p>',19);l.render=function(p,r,l,g,k,h){const m=a("DemoLink");return n(),s("div",null,[t("h1",i,[c,e(" "+o(p.$frontmatter.title),1)]),u,t(m,{href:"https://www.flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgCsEAaEAYwHs0AXGWvCLAB0oCcaACYTmgd04BfTmDaUsnAOQALGjWZxEAeiXkAJmnxwA1gE9mGctvxqYANyX8IaNZIA6aB2srkArjlr4ARpTW781mgwbAASACoAsgAynAC8nAAGDpycADxYGNac5FAYcHCxdiAAJMD8CdIAtHDkbDD0nF4A5pXMrmzMsJUALAAMvSKwAB6cEHRYcJXk9HRsnISucDQQYLpTM8EJgkUAfMkpadIAjNm5+YUlZXwJYNQ0lT5QarwwQzQAFNO0wZwArENQTh8aRjGCcOBYRBNNgYNYADn6nCwakQzGs2kqAHZ+gBKLa7fYHThhEFwUZksJ8axqACEhLSSmOezQKVSSgy1mZCRAZDgMFg5GW1AQiBAcMQRxAggAumQoOiRagQJgcHgrDYeSB2lA8LJ5IoVK40MxtE18FQsJYqTYAAK9fBHX74bpW6n4dxqIikEA0fS4UU1NgQZg0KXSwRAA"}),d])};export default l;export{r as __pageData};
