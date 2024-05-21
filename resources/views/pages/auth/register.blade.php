@extends('layouts.auth')

@section('form')
    <form method="POST" action="{{ route('register') }}" class="m-0">
        @csrf
        <h2 class="font-bold text-2xl text-gray-800 dark:text-neutral-100 text-center">
            Forma parte de este selecto grupo de abogados, Registrate
        </h2>
        @if (session('fail'))
            <x-alert class="alert-danger mt-8">
                {{ session('fail') }}
            </x-alert>
        @endif
        <x-form.input id="name" label="Nombre" type="text" max="100" class="mt-8" />
        <x-form.input id="phone" label="Teléfono" type="tel" max="10" class="mt-3" />
        <x-form.input id="email" label="Correo electrónico" type="email" class="mt-3" />
        <x-form.password id="password" label="Contraseña" class="mt-3" />
        <div class="font-semibold text-sm text-gray-700 dark:text-neutral-200 mt-5">
            Al registrarte, estás aceptando nuestros
            <a href="{{ route('terms') }}" class="text-blue-500">
                términos y condiciones
            </a>
            , y nuestra
            <a href="{{ route('privacy') }}" class="text-blue-500">
                política de privacidad
            </a>.
        </div>
        <button type="submit" class="btn btn-primary w-full mt-5">
            Registrate
        </button>
        <div class="text-center mt-5">
            <a href="{{ route('login') }}">
                ¿Ya tienes cuenta?
                <span class="font-medium text-primary hover:underline">
                    Inicia sesión
                </span>
            </a>
        </div>
    </form>
@endsection
