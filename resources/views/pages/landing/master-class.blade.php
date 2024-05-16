@extends('layouts.app', ['hide_navbar' => true, 'hide_footer' => true])

@section('content')
    <div class="container bg-cover bg-center bg-stone-700 bg-blend-multiply flex items-center justify-center p-5"
        style="background-image: url({{ asset('images/landing/hero.jpg') }})">
        <div class="text-center">
            <img src="{{ asset('images/logo-alt.svg') }}" alt="Logo" class="h-24 md:h-40 block mx-auto">
            <h2 class="font-semibold text-2xl super-title mt-4 md:mt-6">
                ¡Registro exitoso, bienvenid@ a nuestra clase maestra gratuita!
            </h2>
            <div class="flex justify-center mt-5">
                <iframe src="https://www.youtube.com/embed/GvNGdfMh934?si=bNUlshgCftkq-4q9" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen class="w-full md:w-[700px] lg:w-[800px] h-72 md:h-[500px]">
                </iframe>
            </div>
            <a href="{{ route('register') }}"
                class="btn bg-red-700 text-white block w-fit text-xl uppercase mt-8 mx-auto py-5 px-6">
                Registrarme en el directorio
            </a>
        </div>
    </div>
@endsection
