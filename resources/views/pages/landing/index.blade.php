@extends('layouts.app', ['hide_navbar' => true, 'hide_footer' => true])

@section('content')
    <div class="container bg-cover bg-center bg-fixed bg-stone-700 bg-blend-multiply text-white text-center py-10 px-5 md:px-8 lg:px-12"
        style="background-image: url({{ asset('images/landing/hero.jpg') }})">
        <img src="{{ asset('images/logo-alt.svg') }}" alt="Logo" class="h-40 md:h-64 block mx-auto">
        <div class="mt-10">
            <h2 class="font-semibold super-title text-3xl lg:text-5xl text-center">
                CLASE MAESTRA GRATUITA:
            </h2>
            <h2 class="font-semibold super-title text-2xl lg:text-4xl text-center mt-4">
                “CÓMO SER UN ABOGAD@ DIGITAL Y NO MORIR EN EL INTENTO”
            </h2>
            <p class="text-lg md:leading-8 mt-8 md:mt-10 mobile:text-justify">
                Descubre cómo aprovechar los ecosistemas tecnológicos, mejorar tu imagen profesional, posicionarte en el
                mercado digital, aumentar tu cartera de clientes y seguir capacitándote mediante plataformas digitales ¡No
                te pierdas la oportunidad de ser un abogado digital sin complicaciones!
            </p>
            <a href="#register" class="btn btn-danger block w-fit text-xl uppercase mt-12 mx-auto py-5 px-6">
                ¡Si quiero registrarme!
            </a>
        </div>
    </div>
    <div class="container bg-cover bg-center bg-stone-600 bg-blend-multiply text-white py-8 md:py-28 px-5 md:px-20"
        style="background-image: url({{ asset('images/landing/acerca.jpg') }})">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
            <div>
                <h3 class="font-bold text-3xl md:text-4xl md:leading-10 mobile:text-center">
                    SOBRE EL <span class="super-title">PONENTE</span>
                </h3>
                <p class="text-lg md:leading-8 mt-8 mobile:text-justify">
                    Marco Antonio Tamayo Martínez posee el título de Doctor en Derecho y es Maestro en Derecho
                    Constitucional y Amparo.
                </p>
                <ul class="list-disc list-outside text-lg md:leading-8 mt-5 ml-5">
                    <li>
                        Ha desempeñado roles significativos en el ámbito del Poder Judicial de la Federación.
                    </li>
                    <li>
                        En la actualidad, ostenta el cargo de secretario dentro del Poder Judicial de la Federación.
                    </li>
                    <li>
                        Está certificado como diseñador de cursos de formación del capital humano de manera presencial
                        grupal por la SEP y CONOCER.
                    </li>
                    <li>
                        Es co-creador y co-director general de diversos emprendimientos digitales, como la plataforma
                        tecnológica NEURONAS, diseñada para impartir cursos virtuales, el Instituto Digital de Capacitación
                        Profesional NEURONAS, y la Agencia de Marketing Digital LEGALMARKET.
                    </li>
                    <li>
                        Tamayo Martínez cuenta con una amplia formación en Marketing Digital, Proyectos Digitales,
                        Emprendimiento y Ventas Digitales.
                    </li>
                    <li>
                        Con más de tres años de experiencia, ha creado y dirigido exitosamente los mencionados proyectos y
                        empresas digitales.
                    </li>
                </ul>
            </div>
            <div>
                <img src="{{ asset('images/landing/ponente.png') }}" alt="Ponente"
                    class="block h-auto w-full md:w-2/3 mx-auto">
                <img src="{{ asset('images/landing/certificado.jpg') }}" alt="Certificado"
                    class="block h-auto w-full md:w-2/3 mx-auto mt-10">
            </div>
        </div>
    </div>
    <div class="bg-black text-white text-center py-10 md:py-16 px-10">
        <h2 class="font-semibold super-title text-3xl lg:text-5xl text-center">
            CLASE MAESTRA GRATUITA:
        </h2>
        <h2 class="font-semibold super-title text-2xl lg:text-4xl text-center mt-4">
            “CÓMO SER UN ABOGAD@ DIGITAL Y NO MORIR EN EL INTENTO”
        </h2>
        <a href="#register" class="btn btn-danger block w-fit text-xl uppercase mt-12 mx-auto py-5 px-6">
            ¡Si quiero registrarme!
        </a>
    </div>
    <div class="container bg-cover bg-center bg-fixed bg-stone-500 bg-blend-multiply py-5 md:py-20 px-5"
        style="background-image: url({{ asset('images/landing/register.jpg') }})">
        <h2 class="font-bold text-3xl md:text-4xl super-title text-center">
            REGISTRATE AHORA
        </h2>
        <form id="register" method="GET" action="{{ route('landing.master-class') }}"
            class="card w-full md:w-1/2 mt-8 mx-auto">
            @csrf
            <x-form.input id="name" label="name" type="text" max="100" />
            <x-form.input id="phone" label="Teléfono" type="tel" max="10" class="mt-3" />
            <x-form.input id="email" label="Correo electrónico" type="email" class="mt-3" />
            <div class="mt-5">
                <button type="submit" class="btn btn-primary w-full uppercase">
                    Registrarme gratis
                </button>
            </div>
        </form>
    </div>
    <div class="container py-5 md:py-10 px-5 md:px-20">
        <div class="flex justify-between">
            <img src="{{ asset('images/legalmarket.png') }}" alt="Logo" class="h-48">
            <img src="{{ asset('images/logo.svg') }}" alt="Logo" class="h-56">
            <img src="{{ asset('images/neuronas.png') }}" alt="Neuronas" class="h-48">
        </div>
        {{-- <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 md:gap-10">
            <div class="flex justify-center">
                <img src="{{ asset('images/landing/garantia.png') }}" alt="Garantia" class="w-36 md:w-72">
            </div>
            <div>
                <h3 class="font-bold text-3xl md:text-4xl tracking-wide md:leading-10 mobile:text-center">
                    SEGURO Y <span class="text-primary">CONFIABLE</span>
                </h3>
                <p class="md:text-xl md:leading-8 mt-8 mobile:text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa omnis dolorum obcaecati quos facere
                    molestiae mollitia dolores iusto est autem odio ullam dicta natus nihil accusamus perspiciatis laborum
                    esse nisi. Aliquam recusandae harum ducimus cupiditate exercitationem molestias atque officiis
                    asperiores repellat quibusdam, modi, veritatis quisquam, distinctio aliquid vero ipsam repudiandae
                    cumque nostrum. Aliquam doloribus fugiat soluta, nesciunt cum optio.
                </p>
            </div>
        </div> --}}
    </div>
@endsection
