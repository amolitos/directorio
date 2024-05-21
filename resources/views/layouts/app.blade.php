<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @yield('meta')
    <title>
        @yield('title', config('app.name'))
    </title>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @stack('styles')
</head>

<body class="bg-stone-50 dark:bg-zinc-900 dark:text-gray-200">
    @if (!isset($hide_navbar))
        <x-navbar />
    @endif
    <div>
        @yield('content')
    </div>
    @if (isset($show_footer))
        <x-footer />
    @endif
    @stack('scripts')
</body>

</html>
