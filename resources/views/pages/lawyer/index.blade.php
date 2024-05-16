@extends('layouts.app')

@section('title')
    {{ $lawyer->name }}
@endsection

@section('meta')
    <link rel="canonical" href="{{ URL::current() }}" />

    <!-- Primary Meta Tags -->
    <meta name="language" content="es_ES">
    <meta name="robots" content="index, follow" />
    <meta name="description" content="Perfil digital del directorio nacional de abogados y abogadas.">
    <meta name="keywords" content="{{ $lawyer->profile->services->pluck('name')->implode(',') }}">
    <meta name="author" content="{{ $lawyer->name }}">
    <meta name="publisher" content="directorio.softwzi.com" />
    <meta name="creator" content="softwzi.com" />

    <!-- Open Graph / Facebook -->
    <meta property="og:locale" content="es_ES">
    <meta property="og:url" content="{{ URL::current() }}">
    <meta property="og:site_name" content="{{ config('app.name') }}">
    <meta property="og:title" content="{{ $lawyer->name }}">
    <meta property="og:description" content="Perfil digital del directorio nacional de abogados y abogadas.">
    <meta property="og:image" content="{{ asset("storage/$lawyer->profile->photo") }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ URL::current() }}">
    <meta property="twitter:title" content="{{ $lawyer->name }}">
    <meta property="twitter:description" content="Perfil digital del directorio nacional de abogados y abogadas.">
    <meta property="twitter:image" content="{{ asset("storage/$lawyer->profile->photo") }}">
@endsection

@section('content')
    @include('partials.lawyer.verification')
    <div class="container py-5 md:py-10 px-5 md:px-10 lg:px-14">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-8 lg:gap-10">
            <div class="md:col-span-2 flex flex-col gap-y-5">
                @include('partials.lawyer.personal')
                @include('partials.lawyer.contact')
            </div>
            <div class="md:col-span-3 flex flex-col gap-y-5">
                @include('partials.lawyer.office')
                @include('partials.lawyer.specialties')
                @include('partials.lawyer.services')
                @include('partials.lawyer.biography')
                @include('partials.lawyer.education')
            </div>
            <div class="md:col-span-1 bg-stone-700 grid place-items-center rounded">
                publicidad
            </div>
        </div>
    </div>
@endsection
