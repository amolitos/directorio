@extends('layouts.app')

@section('content')
    <div data-js-fireworks class="flex justify-center p-5 md:p-8">
        <div class="md:w-2/3 xl:w-2/4 container">
            <h2 class="font-bold text-3xl text-center">
                ¡Gracias por formar parte del directorio!
            </h2>
            <div class="xl:w-2/3 rounded-lg shadow-xl dark:bg-zinc-800 mt-8 mx-auto">
                <img src="{{ asset('images/successful.jpg') }}" class="w-full rounded-t-lg" />
                <div class="p-5">
                    <p class="text-base md:text-lg text-neutral-300 text-center">
                        Unete a nuestro grupo de WhatsApp donde compartimos contenido jurídico de alto valor.
                    </p>
                    @if (request()->user()->subscribed('default'))
                        <x-btn-whatsapp link="https://chat.whatsapp.com/C8hsFrS1cHD1AlN5LcAIlI">
                            UNIRME AL GRUPO
                        </x-btn-whatsapp>
                    @else
                        <x-btn-whatsapp link="https://chat.whatsapp.com/JIFxDO3Oixy9JdIpJJTFY6">
                            UNIRME AL GRUPO
                        </x-btn-whatsapp>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        const nextLink = "{{ route('profile.show') }}";
        const btnWhatsapp = document.querySelector('.btn-whatsapp');
        btnWhatsapp.addEventListener('click', (e) => {
            e.preventDefault();
            const href = btnWhatsapp.getAttribute('href');
            window.open(href, '_blank');
            window.open(nextLink, '_self');
        });
    </script>
@endpush
