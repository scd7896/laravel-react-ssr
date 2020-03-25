# laravel + react + ssr 날로먹기 
리액트로 ssr을 구현하기 상당히 귀찮은 부분이 많다.   
하지만 생각보다 laravel laravel-mix라는 간편한 웹팩 번들을 도와주는 라이브러리도 있고, 그것을 적극 활용해서, react, vue를 프로젝트에 쉽게 쓸 수 있다.  
하지만 맹점이 있는데, 바로 기본적으로 blade파일에서 그려주지 않으면 검색엔진에 드러나지 않는다.  
그래서 리액트 코드도 검색엔진에서 인식 할 수 있게 하면 좀 더 나은 SEO를 만들 수 있다.

## SSR 과 CSR
두 가지의 차이는 서버에서 그려준 것을 받아서 쓰느냐, 클라이언트가 필요 파일을 가져가서 그려내느냐의 차이가 된다.  
사실 이 두가지는 대립을 하는 것이 절대 아니다. 단지 역할이 나누어져 있는 것 뿐이다.  
따라서 한 가지를 쓴다고, 다른 한 가지를 배제하면 절대 하면 안된다.  
SSR의 범위가 넓으면 많은 부분을 검색엔진에 드러내준다. 하지만 그 만큼 서버에 부담을 주게 된다.  
CSR의 범위가 넓으면 검색엔진에서 상당히 불리해지만, 그 만큼 서버의 부담을 줄여준다.  

## 개요  
현재 많은 프론트 개발자들은 SSR을 구현해야한다고 하면, 일단 서버를 분리해야만 구현이 가능하다 생각한다.    
그리고 Next.js를 도입해서 구현을한다.  
우선 이 방식은 상당히 이상적인 방식이다. 나도 둘을 분리만 할 수 있다고 한다면 반드시 이런식으로 구현 하고 싶다.  
하지만 현실은 스프링, 장고, 라라벨 등의 프레임워크로 만들어진 상태에서, SEO 최적화를 해야하는 어쩔 수 없는 상황이 되니까 하는 경우가 많다.  
이럴 때 레거시 코드들을 서버를 분리해서 다시 구현할 수 있으면 다행이지만, 여러 이유들이 있어서 대부분을 그럴 수가 없다.  
그럼 이제 방법은 리액트 코드를 드러내던가, 아니면 리액트코드가 SSR이 되게 하던가. 라는 숙제를 받는다.  
기본적으로 React 로 SSR 구현하기는 룰이 단순하다.  
1. 언어별로 js를 실행 시킬 수 있는 무언가를 설치한다. (백)
2. 그 무언가로 리액트의 가장 루트 파일을 실행 시키면서, 자신의 라우팅 정보를 넘겨준다. (백)
3. React 코드에서는 기존 render 함수 대신 renderToString 함수로 만들어진 결과를 리턴한다.(클)  
4. 3에서 받은 값을 보내준다.(백)

## 본격적으로 larvel + react + ssr 날로먹기
우선 위에서 말한 1을 설치한다.
`composer require spatie/laravel-server-side-rendering`
`php artisan vendor:publish --provider="Spatie\Ssr\SsrServiceProvider" --tag="config"`

그리고 `which node`로 node의 위치를 찾아서 .env에 다음 둘을 넣어주고 수정한다.
`NODE_PATH=/Users/ksk/.nodebrew/current/bin/node`
`APP_ENV="production"`
컨트롤러는 블레이드 파일을 render 해주게끔 짠다.

~~~php
blade.php 파일

<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel + React server side rendering example</title>
        // 클라이언트 렌더링을 해주는 js 파일을 불러온다.
        <script defer src="{{ mix('js/react/entry-client.js') }}"></script>
    </head>
    <body>
        <div id="app">
            
            {
                // SSR의 결과물은 html 문자열로 만들어서 실행한다.
                !! ssr('js/react/entry-server.js') 
                // 서버에서 받은 정보를 추가로 context에 넣어준다.
                // js 에서는 context.url 로 url 정보를 가져온다.
                ->context('packages', $packages)
                // 실패할경우 보여주는 뷰이다.
                ->fallback('<div id="fallback">암튼 실패함</div>')
                ->render() !!
            }
        </div>

        <script>
            // 이 블레이드 파일을 하단에 있는 js router들은 전부 적용시킨다.
            window.__PRELOADED_STATE__ = @json(['packages' => $packages])
        </script>
    </body>
</html>
~~~

js 파일은 resources/js의 entry-server.js와 entry-client.js 를 확인한다.