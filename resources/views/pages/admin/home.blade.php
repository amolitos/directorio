@extends('layouts.app')

@section('content')
    <div class="container text-center p-5 md:p-10">
        <div class="grid grid-cols-3 gap-5 md:gap-10">
            <a href="{{ route('admin.users') }}">
                <div class="card">
                    <div>
                        <i class="fa-solid fa-users text-3xl"></i>
                    </div>
                    <p class="text-xl mt-2">
                        Usuarios
                    </p>
                </div>
            </a>
        </div>
    </div>
@endsection
