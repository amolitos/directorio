@extends('layouts.app')

@section('content')
    <div class="container xl:pt-6">
        <div react-player data-vkey="{{ $video->video_id }}" />
    </div>
@endsection
