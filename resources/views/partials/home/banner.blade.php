<div class="bg-cover bg-center bg-stone-400 bg-blend-multiply md:mt-28 py-5 md:pt-14 md:pb-10 relative"
    style="background-image: url({{ asset('images/i_am_lawyer.jpg') }})">
    <div class="container mobile:flex mobile:flex-col mobile:items-end mobile:bg-center">
        <div class="md:w-2/3">
            <h2 class="font-semibold text-xl md:text-2xl lg:text-3xl text-white text-center">
                Únete a la comunidad de abogados y profesionales del derecho más grande de México
            </h2>
            <a href="{{ route('register') }}" class="btn btn-primary block w-fit mt-8 mx-auto py-3 md:py-5 px-5 md:px-6">
                UNIRME AL DIRECTORIO
            </a>
        </div>
        <img src="{{ asset('images/banner.png') }}"
            class="md:absolute md:-right-10 lg:right-10 bottom-0 w-52 md:w-96 object-contain mx-auto" />
    </div>
</div>
