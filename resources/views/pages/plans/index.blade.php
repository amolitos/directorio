@extends('layouts.app')

@section('content')
    <div class="container text-center py-5 md:py-10 px-5 lg:px-10">
        <h1 class="font-extrabold text-2xl md:text-3xl text-gray-600 dark:text-zinc-200">
            Seleccionar el plan que se ajuste a tus necesidades
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mt-8 md:mt-20">
            @foreach ($plans as $plan)
                <div @class([
                    'card flex flex-col gap-y-5 transition-all',
                    'text-zinc-800 dark:text-neutral-400 !border-zinc-800' => $plan->id == 1,
                    'bg-gradient-to-br from-yellow-900 to-primary text-zinc-100 border-none relative md:scale-110 mobile:mt-5' =>
                        $plan->id == 2,
                    'bg-gradient-to-br from-zinc-700 to-zinc-400' => $plan->id == 3,
                ])>
                    @if ($plan->id == 2)
                        <div
                            class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 bg-rose-600 flex items-center font-medium text-xs text-white uppercase rounded-md py-2 px-3">
                            <i class="fa-solid fa-star mr-2"></i>
                            Más Popular
                        </div>
                    @endif
                    <h3 class="font-bold text-3xl">
                        {{ $plan->name }}
                    </h3>
                    <p class="h-10 text-sm line-clamp-2">
                        {{ $plan->description }}
                    </p>
                    <div class="flex items-end justify-center gap-1">
                        <h2 class="font-bold text-4xl lg:text-5xl">
                            ${{ $plan->price }}
                        </h2>
                        <p class="text-sm">
                            /mensual
                        </p>
                    </div>
                    <ul class="flex flex-col gap-5 mt-4">
                        @foreach ($plan->features as $feature)
                            <li class="flex items-start">
                                <i class="fa-regular fa-circle-check text-xl text-teal-500 mr-2"></i>
                                <span class="font-medium text-sm text-left mt-1">
                                    {{ $feature->description }}
                                </span>
                            </li>
                        @endforeach
                    </ul>
                    <div class="grid mt-auto">
                        <a href="{{ route('plans.show', ['plan' => $plan]) }}" @class([
                            'btn uppercase',
                            'btn-secondary' => $plan->id == 1,
                            'bg-gradient-to-br from-orange-600 to-red-600 border-none drop-shadow-lg' =>
                                $plan->id == 2,
                            'bg-gray-300 border-gray-300 text-zinc-700' => $plan->id == 3,
                        ])>
                            Continuar
                        </a>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    <div data-js-show="30000"
        class="hidden bg-cover bg-center bg-stone-700 bg-blend-multiply text-white mt-10 py-5 md:py-20 px-5 md:px-20"
        style="background-image: url({{ asset('images/landing/hero.jpg') }})">
        <h3 class="font-bold text-3xl md:text-5xl super-title text-center uppercase">
            Oferta por tiempo limitado
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-16">
            <div class="text-center">
                <p class="font-medium text-lg md:text-xl">
                    SI TE SUSCRIBES EN ESTE PRECISO MOMENTO AL PLAN LEGAL MARKET,
                    <span class="super-title">
                        TE DAMOS GRATIS TODOS LOS SERVICIOS Y FUNCIONES
                    </span>
                    ADICIONALES DEL PLAN LEGAL STRATEGY QUE TIENE UN VALOR DE ${{ $plans[2]->price }}.
                </p>
                <h4 class="font-bold text-3xl mt-5">
                    PAGA SOLO ${{ $plans[1]->price }} ¡AHORRA ${{ $plans[2]->price - $plans[1]->price }}¡
                </h4>
                <a href="{{ route('plans.checkout', ['plan' => 3]) }}"
                    class="block btn btn-danger text-lg mt-8 md:mt-12 py-4 px-6">
                    RECLAMA TU OFERTA YA
                </a>
            </div>
            <div class="text-center">
                <h3 class="font-bold text-4xl md:text-5xl super-title">
                    Oferta
                </h3>
                <h2 class="font-bold text-6xl md:text-9xl super-title">
                    87%
                </h2>
                <div class="flex flex-col gap-1 font-medium mt-8">
                    <span class="text-lg md:text-2xl">
                        La oferta termina en:
                    </span>
                    <div data-js-countdown class="text-xl md:text-3xl"></div>
                </div>
            </div>
        </div>
        <p class="font-medium text-center mt-16">
            RECUERDA QUE ESTA OPORTUNIDAD ES TEMPORAL Y POR LANZAMIENTO
        </p>
    </div>
@endsection
