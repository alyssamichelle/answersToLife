use Rack::Static,
  :urls => ["/js", "/css", "/templates", "/images", "/answer", "/unanswered", "/vendor", "/about"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
