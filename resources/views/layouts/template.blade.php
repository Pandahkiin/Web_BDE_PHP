<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('vendor/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/DOMInteraction.js') }}" defer></script>
    <script src="{{ asset('js/interaction.js') }}" defer></script>
    <script src="{{ asset('js/ajax.js') }}" defer></script>

    <script src="{{ asset('vendor/DataTables/datatables.min.js') }}" defer></script>
    @stack('head')
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito|Staatliches|Roboto" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/nav_foot.css') }}" rel="stylesheet">
    <link href="{{ asset('css/shop.css') }}" rel="stylesheet">
    <link href="{{ asset('css/events.css') }}" rel="stylesheet">

    <link href="{{ asset('vendor/DataTables/datatables.min.css') }}" rel="stylesheet">

    <script>
        var connected_user = ({!! json_encode(Auth::user()) !!});
    </script>
</head>
<body>
    <div id="alert" class="alert alert-hidden" onclick="$(this).addClass('alert-hidden')">Alert</div>
    <div id="app">
        
        @include('layouts.navigation')

        <main>
            @yield('content')
        </main>

        @include('layouts.footer')
    </div>
</body>
</html>
