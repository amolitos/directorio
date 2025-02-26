@extends('layouts.app')

@section('title')
    {{ $lawyer->name }}
@endsection

@section('meta')
    {!! SEO::generate() !!}
@endsection

@section('content')
    <div class="container py-5 md:py-10 px-5 md:px-10 lg:px-14">
        <div class="grid grid-cols-1 lg:grid-cols-6 gap-5 md:gap-8 lg:gap-10">
            <div class="lg:col-span-2 flex flex-col gap-y-5 lg:gap-y-10">
                @include('partials.lawyer.personal')
                @include('partials.lawyer.contact')
            </div>
            <div class="lg:col-span-3 flex flex-col gap-y-5">
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
