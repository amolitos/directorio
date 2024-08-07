@extends('layouts.app')

@section('content')
    <div class="container py-5 md:py-10 px-5 xl:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-5">
            <div
                class="lg:col-span-2 bg-gradient-to-br from-zinc-800 to-zinc-700 flex flex-col gap-5 text-center drop-shadow-lg p-5">
                <h3 class="font-bold text-2xl md:text-3xl">
                    {{ $plan->name }}
                </h3>
                <p class="text-sm md:text-base">
                    {{ $plan->description }}
                </p>
                <div class="flex items-end justify-center gap-1">
                    <h2 class="font-bold text-3xl md:text-4xl lg:text-5xl">
                        ${{ $plan->price }}
                    </h2>
                    <p class="md:text-lg">
                        / mensual
                    </p>
                </div>
                <ul class="hidden lg:flex flex-col gap-5 mt-4">
                    @foreach ($plan->features as $feature)
                        <li class="flex items-start">
                            <i class="fa-regular fa-circle-check text-xl text-teal-500 mr-2"></i>
                            <span class="leading-relaxed text-left">
                                {{ $feature->description }}
                            </span>
                        </li>
                    @endforeach
                </ul>
            </div>
            <div class="lg:col-span-3 bg-zinc-800 flex flex-col gap-5 text-center p-5 xl:px-10">
                <h3 class="font-bold text-3xl">
                    Métodos de pago
                </h3>
                <div class="flex flex-col md:flex-row items-center justify-center gap-2">
                    <p class="md:text-lg text-gray-200">
                        Paga con tarjeta de crédito o débito
                    </p>
                    <img src="{{ asset('images/card-payments.png') }}" alt="Card payments" class="h-10">
                </div>
                <div class="grid mb-5">
                    <a href="{{ route('plans.checkout', ['plan' => $plan->id]) }}" class="btn btn-primary text-lg">
                        SUSCRIBIRSE POR $99
                    </a>
                </div>
                <div react-cash-payments data-plan-id=" {{ request()->segment(2) }}"></div>
            </div>
        </div>
    </div>
@endsection
