@extends('layouts.app')

@section('content')
    <div class="container py-5 md:py-10 px-5">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div class="md:col-span-4 card">
                <div react-abogado-agenda></div>
            </div>
            <div class="bg-stone-700 grid place-items-center rounded">
                <span>
                    Publicidad
                </span>
            </div>
        </div>
    </div>
@endsection
