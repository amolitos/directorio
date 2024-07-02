@extends('layouts.app', ['hide_navbar' => true])

@section('content')
    <div class="h-screen flex items-center justify-center">
        {!! $live->meta !!}
    </div>
@endsection
