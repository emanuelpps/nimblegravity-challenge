# Nimble Gravity Challenge

This project implements the job application flow requested in the technical challenge.

It allows a candidate to:

* Retrieve their information by email
* View available job positions
* Submit an application with their GitHub repository

---

## Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**

---

## Installation

Clone the repository:

<pre class="overflow-visible! px-0!" data-start="563" data-end="669"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git </span><span>clone</span><span> https://github.com/emanuelpps/nimblegravity-challenge.git
</span><span>cd</span><span> nimblegravity-challenge
</span></span></code></div></div></pre>

Install dependencies:

<pre class="overflow-visible! px-0!" data-start="694" data-end="717"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
</span></span></code></div></div></pre>

Run the development server:

<pre class="overflow-visible! px-0!" data-start="748" data-end="771"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
</span></span></code></div></div></pre>

---

## API Integration

The application integrates with the provided backend:

### Get Candidate by Email

<pre class="overflow-visible! px-0!" data-start="888" data-end="941"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>GET</span><span> /api/candidate/</span><span>get</span><span>-</span><span>by</span><span>-email?email={email}
</span></span></code></div></div></pre>

This retrieves:

* `uuid`
* `candidateId`
* `applicationId`

---

### Get Available Jobs

<pre class="overflow-visible! px-0!" data-start="1037" data-end="1067"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>GET</span><span></span><span>/</span><span>api</span><span>/</span><span>jobs</span><span>/</span><span>get</span><span>-</span><span>list
</span></span></code></div></div></pre>

Displays the list of available job positions.

---

### Apply to Job

<pre class="overflow-visible! px-0!" data-start="1143" data-end="1183"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>POST /api/candidate/apply-to-job
</span></span></code></div></div></pre>

Body:

<pre class="overflow-visible! px-0!" data-start="1192" data-end="1326"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-json"><span><span>{</span><span>
  </span><span>"uuid"</span><span>:</span><span></span><span>"string"</span><span>,</span><span>
  </span><span>"candidateId"</span><span>:</span><span></span><span>"string"</span><span>,</span><span>
  </span><span>"applicationId"</span><span>:</span><span></span><span>"string"</span><span>,</span><span>
  </span><span>"jobId"</span><span>:</span><span></span><span>"string"</span><span>,</span><span>
  </span><span>"repoUrl"</span><span>:</span><span></span><span>"string"</span><span>
</span><span>}</span><span>
</span></span></code></div></div></pre>

Includes proper validation, loading states, error handling, and success feedback.
