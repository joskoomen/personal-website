<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-component="html">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Jos Koomen') }} | @yield('title', 'My Site')</title>

    <meta property=og:locale content="en">
    <meta name=title property=og:title content="Jos Koomen | Creative Lead Developer">
    <meta name=description property=og:description
          content="">
    <meta property=og:url content="{{url()->current()}}">
    <meta property=og:site_name content="Jos Koomen">

    @section('head')
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @show

</head>
<body>
    <div class="page">
        <header>
            <a href="{{route('home')}}"><h1>Jos Koomen's site!</h1></a>
            <h2>@yield('page-title', 'Jos Koomen')</h2>
        </header>
        <main>
            @include('partials.nav')
            <div class="content">
                @section('body')

                @show
            </div>
        </main>
        @include('partials.footer')
    </div>

    @section('foot')
        <script src="{{mix('js/manifest.js')}}"></script>
        <script src="{{mix('js/vendor.js')}}"></script>
        <script src="{{mix('js/app.js')}}"></script>
		<script async src="https://static.addtoany.com/menu/page.js"></script>
    @show

</body>
</html>
