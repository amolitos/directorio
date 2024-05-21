@extends('layouts.app', ['show_footer' => true])

@section('content')
    @include('partials.home.map')
    @include('partials.home.aboutus')
    @include('partials.home.banner')
    @include('partials.home.testimonials')
    @include('partials.home.specialties')
@endsection
