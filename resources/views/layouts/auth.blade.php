@extends('layouts.app', ['hide_navbar' => true])

@section('content')
    <div class="xl:bg-white dark:bg-transparent xl:h-screen grid grid-cols-1 xl:grid-cols-2 items-center flex-row-reverse">
        <div class="py-5 md:py-10 px-5">
            <a href="{{ route('home') }}" class="block xl:hidden w-fit mx-auto mb-5">
                <img src="{{ asset('images/logo.png') }}" alt="Logo" class="w-20 h-20 mx-auto">
            </a>
            <div class="w-full md:w-2/3 my-0 mx-auto tablet:card">
                @yield('form')
            </div>
        </div>
        <div @class([
            'order-first' => $login ?? false,
            'hidden xl:flex h-full items-center justify-center bg-cover bg-center bg-gray-400 bg-blend-multiply',
        ]) style="background-image: url('{{ asset('images/auth.jpg') }}');">
            <div>
                <img src="{{ asset('images/logo.png') }}" alt="Logo" class="h-44 mx-auto">
                <div class="text-white text-center mt-5">
                    <h4 class="font-bold [text-shadow:_1px_1px_5px_rgb(255_223_0_)] text-4xl">
                        Directorio Nacional
                        <br>
                        de Abogados
                    </h4>
                    <p class="mt-1">
                        Se parte de la comunidad más grande de abogados en México
                    </p>
                </div>
                <a href="#!" class="btn btn-primary block w-fit mt-8 mx-auto">
                    BUSCAR ABOGADO
                </a>
            </div>
        </div>
    </div>
@endsection
