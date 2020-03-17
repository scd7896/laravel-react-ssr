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
        <div id="app">
            {!! ssr('js/react/entry-server.js')
                ->context('packages', $packages)
                ->fallback('<div id="fallback">암튼 실패함</div>')
                ->render() !!}
        </div>

        <script>
            // 이 블레이드 파일을 하단에 있는 js router들은 전부 적용시킨다.
            window.__PRELOADED_STATE__ = @json(['packages' => $packages])
        </script>
    </body>
</html>