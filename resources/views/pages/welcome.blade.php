@extends('layouts.app')

@section('content')
    <div class="container py-5 md:py-10 px-5">
        <div class="text-center">
            <h2 class="font-bold text-4xl text-primary">
                ¿Buscas o Eres abogado?
            </h2>
            <p class="text-gray-700 dark:text-neutral-300 mt-2">
                Estamos contentos de que estés aquí, coméntanos que perfil tienes
            </p>
        </div>
        <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-10 mx-auto">
            <div class="rounded-lg shadow-xl dark:bg-zinc-800 relative">
                <div
                    class="absolute -top-3 left-3 z-10 bg-cyan-800 dark:bg-sky-600 flex items-center font-medium text-xs text-white uppercase rounded-md py-2 px-3">
                    <i class="fa-solid fa-star mr-2"></i>
                    Si no sabes elige aquí
                </div>
                <a href={{ route('home') }}>
                    <img src="{{ asset('images/looking_lawyer.jpg') }}" class="w-full" />
                    <div class="p-5">
                        <h4 class="font-bold text-xl text-primary uppercase">
                            Busco abogado
                        </h4>
                        <p class="h-[72px] line-clamp-3 text-gray-700 dark:text-white mt-3">
                            ¿Necesitas services jurídicos confiables? Encuentra a los mejores abogados.
                        </p>
                        <button class="btn btn-primary block w-full text-base mt-3">
                            Buscar los mejores abogados
                        </button>
                    </div>
                </a>
            </div>
            <div class="rounded-lg shadow-xl dark:bg-zinc-800">
                <a href="{{ route('plans.index') }}">
                    <img src="{{ asset('images/i_am_lawyer.jpg') }}" class="w-full" />
                    <div class="p-5">
                        <h4 class="font-bold text-xl text-primary uppercase">
                            Soy abogado
                        </h4>
                        <p class="h-[72px] line-clamp-3 text-gray-700 dark:text-white mt-3">
                            Te ayudamos a ofrecer tus services jurídicos. Registrar mis services.
                        </p>
                        <button class="btn btn-primary block w-full text-base mt-3">
                            Ofrecer services jurídicos
                        </button>
                    </div>
                </a>
            </div>
        </div>
    </div>
@endsection
