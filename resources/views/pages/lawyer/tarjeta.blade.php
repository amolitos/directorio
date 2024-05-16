@extends('layouts.app', ['hide_navbar' => true])

@php
    $perfil = request()->user()->perfil;
@endphp

@section('content')
    <div class="h-screen bg-zinc-700 text-white">
        <div class="container h-full flex items-center justify-center p-5">
            <div class="flex flex-col justify-center gap-5">
                <div class="bg-stone-900 shadow-md text-center py-10 px-10">
                    <img src="{{ asset('images/logo-alt.svg') }}" alt="Logo"
                        class="block h-48 object-contain select-none mx-auto">
                </div>
                <div class="bg-stone-900 shadow-md relative pt-8">
                    <div class="absolute top-0 left-5 w-5 h-36 bg-gradient-to-b from-[#504315] to-primary">
                    </div>
                    <div class="px-10">
                        <div class="flex justify-between">
                            <div>
                                <h4 class="text-xl mt-2 ml-8">
                                    {{ $perfil->user->name }}
                                </h4>
                                <a href="" class="">

                                </a>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
                                alt="Abogado" class="h-28 w-28 select-none">
                        </div>
                        <div class="grid grid-cols-2 items-center gap-2 text-sm mt-10">
                            <div>
                                <i class="fa-solid fa-phone mr-2"></i>
                                {{ $perfil->user->phone }}
                            </div>
                            <div>
                                <i class="fa-solid fa-envelope mr-2"></i>
                                {{ $perfil->user->email }}
                            </div>
                            <div>
                                <i class="fa-solid fa-location-dot mr-2"></i>
                                {{ $perfil->state->name . ', ' . $perfil->city->name }}
                            </div>
                        </div>
                    </div>
                    <div class="h-5 bg-gradient-to-r from-primary to-[#504315] mt-5"></div>
                </div>
            </div>
        </div>
    </div>
@endsection
