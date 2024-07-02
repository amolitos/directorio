@extends('layouts.app')

@section('content')
    <div class="container py-10 md:py-16 px-5">
        <a href="{{ route('school.live') }}">
            <div class="w-full h-64 md:h-96 bg-cover bg-center md:bg-top bg-zinc-400 bg-blend-multiply rounded flex items-center py-10 px-5 transition-all duration-500 hover:bg-zinc-50 hover:scale-105"
                style="background-image: url({{ asset('images/lawyers.jpg') }})">
                <div class="w-full text-center">
                    <h2 class="font-bold text-3xl md:text-5xl super-title">
                        Aula
                        <span class="block">
                            “Mentes Maestras”
                        </span>
                    </h2>
                    <button class="block btn btn-danger w-fit md:text-lg mt-8 mx-auto">
                        <i class="fa-solid fa-play mr-2"></i>
                        En vivo
                    </button>
                </div>
            </div>
        </a>
        <h4 class="font-bold text-xl mt-5 md:mt-10">
            Videos
        </h4>
        <h6 class="text-lg mt-5">
            No se encontraron resultados.
        </h6>
        {{-- <div class="grid grid-cols-3 gap-5 mt-3">
            @for ($i = 0; $i < 3; $i++)
                <div class="card">
                    hola
                </div>
            @endfor
        </div> --}}
    </div>
@endsection
