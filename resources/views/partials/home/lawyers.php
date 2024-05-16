<div class="container bg-white py-5 md:py-10 px-5">
    <div class="w-fit bg-primary font-semibold text-xs text-white uppercase leading-none rounded-full mx-auto py-2 px-4">
        Encuentra
    </div>
    <div class="md:max-w-xl text-center md:mx-auto mt-5">
        <h3 class="font-bold text-xl sm:text-3xl text-gray-900">
            Solo los mejores abogados y profesionistas del derecho estan aquí
        </h3>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 md:mt-10">
        @foreach ($abogados as $abogado)
            <a href="{{ route('buscar.show', $abogado->id) }}" class="flex items-center">
                <img src="https://cdn.devdojo.com/images/july2021/03-Mike-Melcher.jpg"
                    class="object-cover w-20 h-20 mr-4 rounded-full shadow">
                <div class="relative">
                    <h6 class="font-bold text-lg text-gray-800">
                        {{ $abogado->name }}
                    </h6>
                    <p class="text-sm text-gray-600">
                        {{ $abogado->profile->entidad->name }}
                    </p>
                </div>
            </a>
        @endforeach
    </div>
</div>
