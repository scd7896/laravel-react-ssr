<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel + React server side rendering example</title>
        <script defer src="{{ mix('js/react/entry-client.js') }}"></script>
    </head>
    <body class="bg-paper font-sans leading-normal text-grey-darkest border-t-4 border-orange-light">
        {!! ssr('js/react/entry-server.js')
            ->context('packages', $packages)
            ->fallback('<div id="app">암튼 실패함</div>')
            ->render() !!}

        <script>
            // Share the packages with the client script through a JS variable
            window.__PRELOADED_STATE__ = @json(['packages' => $packages])
        </script>
        
        <footer class="max-w-md mx-auto px-8 mt-12 mb-4 text-xs text-grey-light">
            <h1>아무튼 아무튼 </h1>
        </footer>
    </body>
</html>