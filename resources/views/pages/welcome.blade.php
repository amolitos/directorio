@extends('layouts.app', ['hide_navbar' => true])

@section('content')
    <div class="h-screen flex items-center justify-center p-5">
        <div class="md:w-2/3 xl:w-2/4 container">
            <h2 class="font-bold text-3xl text-center uppercase">
                Bienvenido
            </h2>
            <div class="xl:w-2/3 rounded-lg shadow-xl dark:bg-zinc-800 mt-5 mx-auto">
                <a href="{{ route('profile.edit') }}">
                    <img src="{{ asset('images/welcome.jpg') }}" class="w-full rounded-t-lg" />
                    <div class="p-5">
                        <p class="text-sm md:text-base text-neutral-300 text-justify">
                            Aquí, podrás registrar los servicios que ofreces y conectar con clientes que buscan tu
                            experiencia y conocimientos. Nuestro objetivo es ayudarte a expandir tu alcance y facilitar el
                            acceso a tus servicios.
                        </p>
                        <button class="btn btn-primary block w-full md:text-base uppercase mt-3">
                            Ofrecer servicios jurídicos
                        </button>
                    </div>
                </a>
            </div>
            <div class="text-center mt-5">
                <a href="{{ route('search') }}" class="text-sm text-blue-500 underline">
                    ¿Buscas abogado para asesoramiento?
                </a>
            </div>
        </div>
    </div>
@endsection
