@extends('layouts.auth', ['login' => true])

@section('form')
    <form method="POST" action="{{ route('login') }}" class="m-0">
        @csrf
        <h2 class="font-bold text-2xl text-gray-800 dark:text-neutral-100 text-center">
            Inicia sesión para continuar
        </h2>
        @error('fail')
            <x-alert class="alert-danger mt-8">
                {{ $message }}
            </x-alert>
        @enderror
        <x-form.input id="email" label="Correo electrónico" type="email" class="mt-8" />
        <x-form.password id="password" label="Contraseña" class="mt-3" />
        <x-form.check id="remember" :checked="true" :required="false" class="mt-5">
            Mantener sesión abierta
        </x-form.check>
        <button type="submit" class="btn btn-primary w-full mt-5">
            Ingresar
        </button>
        <div class="text-center mt-8">
            <a href="{{ route('register') }}">
                ¿No tienes cuenta?
                <span class="font-medium text-primary hover:underline">
                    Registrate
                </span>
            </a>
        </div>
    </form>
@endsection
