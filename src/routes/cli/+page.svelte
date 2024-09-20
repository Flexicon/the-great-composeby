<section class="container mx-auto px-8 py-12">
	<h1 class="text-3xl font-semibold">Get the CLI</h1>

	<div class="max-w-3xl">
		<p class="mt-3 mb-6">
			The Great Composeby is available as a CLI tool (<code>tgc</code>) that you can install on your
			local machine.
		</p>

		<h2 class="text-2xl font-semibold">Installation</h2>

		<div class="mt-3 mb-6">
			<ul class="list-disc list-inside">
				<li class="mb-2">
					Via <a href="https://brew.sh/">Homebrew</a>:
					<code class="cmd">brew tap flexicon/tap && brew install tgc</code>
				</li>
				<li>Via Go: <code class="cmd">go install github.com/flexicon/tgc@latest</code></li>
			</ul>
		</div>

		<h2 class="text-2xl font-semibold">Usage</h2>

		<p class="my-3">
			Once you've installed <code>tgc</code>, generating a new Docker Compose configuration for all
			your containerized applications is as simple as running a single command.
		</p>

		<!-- TODO: add actual CLI usage -->
		<code class="block cmd mb-6">tgc generate</code>

		<h2 class="text-lg font-semibold">Help</h2>

		<!-- TODO: add actual CLI help text -->
		<pre class="mt-3 bg-gray-800 text-white p-4 rounded-md overflow-auto">
$ tgc --help

Usage: tgc [options] [command]

Options:
  -V, --version  output the version number
  -h, --help     display help for command

Commands:
  generate  Generate a new Compose file (default)
    </pre>
	</div>
</section>
